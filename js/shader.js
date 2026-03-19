// ═══════════════════════════════════════════════════════════════
//  Human Upgrade — js/shader.js
//  GLSL Shader Layer: flowing fluid noise + interactive touch ripples
//  Runs entirely on GPU — zero layout impact
// ═══════════════════════════════════════════════════════════════

(function() {
  'use strict';

  const canvas = document.getElementById('shaderCanvas');
  if (!canvas) return;

  const gl = canvas.getContext('webgl', {
    alpha: true,
    premultipliedAlpha: true,
    antialias: false,
    preserveDrawingBuffer: false
  });

  if (!gl) {
    console.warn('WebGL not supported — shader effects disabled');
    canvas.style.display = 'none';
    return;
  }

  // ── Shader sources ──

  const VERT_SRC = `
    attribute vec2 a_position;
    void main() {
      gl_Position = vec4(a_position, 0.0, 1.0);
    }
  `;

  const FRAG_SRC = `
    precision mediump float;

    uniform float u_time;
    uniform vec2  u_resolution;
    uniform vec3  u_ripples[5];    // xy = position (0-1), z = birth time
    uniform int   u_rippleCount;
    uniform float u_opacity;       // global opacity (fades with screen)
    uniform vec3  u_tint;          // category color tint

    // Simplex-like noise (GPU hash-based)
    vec3 mod289(vec3 x) { return x - floor(x * (1.0/289.0)) * 289.0; }
    vec2 mod289(vec2 x) { return x - floor(x * (1.0/289.0)) * 289.0; }
    vec3 permute(vec3 x) { return mod289(((x * 34.0) + 1.0) * x); }

    float snoise(vec2 v) {
      const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                         -0.577350269189626, 0.024390243902439);
      vec2 i = floor(v + dot(v, C.yy));
      vec2 x0 = v - i + dot(i, C.xx);
      vec2 i1;
      i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
      vec4 x12 = x0.xyxy + C.xxzz;
      x12.xy -= i1;
      i = mod289(i);
      vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0))
                                    + i.x + vec3(0.0, i1.x, 1.0));
      vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
                               dot(x12.zw,x12.zw)), 0.0);
      m = m * m;
      m = m * m;
      vec3 x = 2.0 * fract(p * C.www) - 1.0;
      vec3 h = abs(x) - 0.5;
      vec3 ox = floor(x + 0.5);
      vec3 a0 = x - ox;
      m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
      vec3 g;
      g.x = a0.x * x0.x + h.x * x0.y;
      g.yz = a0.yz * x12.xz + h.yz * x12.yw;
      return 130.0 * dot(m, g);
    }

    // Fractal Brownian Motion — layered noise for organic flow
    float fbm(vec2 p) {
      float v = 0.0;
      float a = 0.5;
      vec2 shift = vec2(100.0);
      mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
      for (int i = 0; i < 4; i++) {
        v += a * snoise(p);
        p = rot * p * 2.0 + shift;
        a *= 0.5;
      }
      return v;
    }

    void main() {
      vec2 uv = gl_FragCoord.xy / u_resolution;
      float aspect = u_resolution.x / u_resolution.y;
      vec2 uvAspect = vec2(uv.x * aspect, uv.y);

      float t = u_time * 0.15; // slow, meditative pace

      // ── Layer 1: flowing fluid noise ──
      vec2 p = uvAspect * 3.0;
      float n1 = fbm(p + vec2(t * 0.3, t * 0.2));
      float n2 = fbm(p + vec2(n1 * 0.4, t * 0.15)); // warped by first layer
      float flow = n2 * 0.5 + 0.5; // normalize to 0-1

      // ── Layer 2: touch ripples ──
      float rippleEffect = 0.0;
      for (int i = 0; i < 5; i++) {
        if (i >= u_rippleCount) break;
        vec2 ripplePos = u_ripples[i].xy;
        float birthTime = u_ripples[i].z;
        float age = u_time - birthTime;

        if (age < 0.0 || age > 3.0) continue;

        vec2 rp = vec2(ripplePos.x * aspect, ripplePos.y);
        float dist = distance(uvAspect, rp);

        // Expanding ring
        float radius = age * 0.5;
        float ring = 1.0 - smoothstep(0.0, 0.08, abs(dist - radius));

        // Secondary inner ring
        float radius2 = age * 0.35;
        float ring2 = 1.0 - smoothstep(0.0, 0.05, abs(dist - radius2));

        // Fade out over lifetime
        float fade = 1.0 - smoothstep(0.0, 3.0, age);
        fade *= fade; // exponential decay

        rippleEffect += (ring * 0.7 + ring2 * 0.3) * fade;
      }
      rippleEffect = clamp(rippleEffect, 0.0, 1.0);

      // ── Compose ──
      // Base: very subtle flowing light (almost invisible — adds depth)
      float base = flow * 0.04;

      // Ripples: bright expanding rings with category tint
      vec3 rippleColor = mix(vec3(1.0, 1.0, 1.0), u_tint, 0.5);
      vec3 color = vec3(base) + rippleColor * rippleEffect * 0.2;

      // Vignette: darken edges
      float vig = 1.0 - smoothstep(0.3, 0.9, distance(uv, vec2(0.5)));
      color *= vig;

      float alpha = (base + rippleEffect * 0.18) * u_opacity;
      gl_FragColor = vec4(color, alpha);
    }
  `;

  // ── Compile shaders ──
  function compileShader(type, source) {
    const s = gl.createShader(type);
    gl.shaderSource(s, source);
    gl.compileShader(s);
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
      console.error('Shader compile error:', gl.getShaderInfoLog(s));
      gl.deleteShader(s);
      return null;
    }
    return s;
  }

  const vert = compileShader(gl.VERTEX_SHADER, VERT_SRC);
  const frag = compileShader(gl.FRAGMENT_SHADER, FRAG_SRC);
  if (!vert || !frag) { canvas.style.display = 'none'; return; }

  const program = gl.createProgram();
  gl.attachShader(program, vert);
  gl.attachShader(program, frag);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error('Shader link error:', gl.getProgramInfoLog(program));
    canvas.style.display = 'none';
    return;
  }
  gl.useProgram(program);

  // ── Fullscreen quad ──
  const verts = new Float32Array([-1,-1, 1,-1, -1,1, 1,1]);
  const buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, verts, gl.STATIC_DRAW);

  const posLoc = gl.getAttribLocation(program, 'a_position');
  gl.enableVertexAttribArray(posLoc);
  gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

  // ── Uniforms ──
  const uTime = gl.getUniformLocation(program, 'u_time');
  const uRes = gl.getUniformLocation(program, 'u_resolution');
  const uRippleCount = gl.getUniformLocation(program, 'u_rippleCount');
  const uOpacity = gl.getUniformLocation(program, 'u_opacity');
  const uTint = gl.getUniformLocation(program, 'u_tint');

  const uRipples = [];
  for (let i = 0; i < 5; i++) {
    uRipples.push(gl.getUniformLocation(program, 'u_ripples[' + i + ']'));
  }

  // ── State ──
  let ripples = []; // { x, y, time }
  let globalOpacity = 1.0;
  let tint = [1.0, 1.0, 1.0]; // white default, changes per category
  let startTime = performance.now() / 1000;
  let running = true;
  let dpr = Math.min(window.devicePixelRatio || 1, 2); // cap at 2x for performance

  // ── Resize ──
  function resize() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    // Render at reduced resolution for performance on mobile
    const scale = dpr * 0.5; // half resolution — shader effects don't need full res
    canvas.width = w * scale;
    canvas.height = h * scale;
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';
    gl.viewport(0, 0, canvas.width, canvas.height);
  }
  resize();
  window.addEventListener('resize', resize);

  // ── Blending ──
  gl.enable(gl.BLEND);
  gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
  gl.clearColor(0, 0, 0, 0);

  // ── Render loop ──
  function render() {
    if (!running) return;

    const now = performance.now() / 1000 - startTime;

    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.uniform1f(uTime, now);
    gl.uniform2f(uRes, canvas.width, canvas.height);
    gl.uniform1f(uOpacity, globalOpacity);
    gl.uniform3f(uTint, tint[0], tint[1], tint[2]);

    // Clean old ripples
    ripples = ripples.filter(r => (now - r.time) < 3.5);

    gl.uniform1i(uRippleCount, Math.min(ripples.length, 5));
    for (let i = 0; i < 5; i++) {
      if (i < ripples.length) {
        gl.uniform3f(uRipples[i], ripples[i].x, ripples[i].y, ripples[i].time);
      } else {
        gl.uniform3f(uRipples[i], 0, 0, -10); // inactive
      }
    }

    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    requestAnimationFrame(render);
  }

  // ── Touch / Click ripple ──
  function addRipple(clientX, clientY) {
    const now = performance.now() / 1000 - startTime;
    const x = clientX / window.innerWidth;
    const y = 1.0 - (clientY / window.innerHeight); // flip Y for GL
    ripples.push({ x, y, time: now });
    if (ripples.length > 5) ripples.shift();
  }

  // Mouse
  canvas.style.pointerEvents = 'none'; // don't block clicks
  document.addEventListener('click', function(e) {
    addRipple(e.clientX, e.clientY);
  });

  // Touch
  document.addEventListener('touchstart', function(e) {
    for (let i = 0; i < e.touches.length; i++) {
      addRipple(e.touches[i].clientX, e.touches[i].clientY);
    }
  }, { passive: true });

  // Touch move — continuous ripples while dragging
  document.addEventListener('touchmove', function(e) {
    // Throttle: only add ripple every ~100ms
    const now = performance.now();
    if (now - (addRipple._lastMove || 0) < 100) return;
    addRipple._lastMove = now;
    if (e.touches.length > 0) {
      addRipple(e.touches[0].clientX, e.touches[0].clientY);
    }
  }, { passive: true });

  // ── Public API for app.js ──
  window.shaderLayer = {
    setOpacity: function(val) { globalOpacity = val; },
    setTint: function(r, g, b) { tint = [r, g, b]; },
    addRipple: addRipple,
    pause: function() { running = false; },
    resume: function() { if (!running) { running = true; render(); } }
  };

  // Category tint colors (called from app.js when opening a category)
  window.shaderTints = {
    spiritual:    [0.24, 0.47, 0.86],  // blue
    emotional:    [0.63, 0.31, 0.86],   // purple
    intellectual: [0.20, 0.70, 0.39],   // green
    physical:     [0.78, 0.24, 0.24]    // red
  };

  // Start
  render();

})();
