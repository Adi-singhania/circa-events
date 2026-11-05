/**
 * Lightweight canvas-based confetti burst in CIRCA brand colors
 * (No heavy external dependencies)
 */

export const triggerBrandConfetti = () => {
  // Respect prefers-reduced-motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  const canvas = document.createElement('canvas');
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100vw';
  canvas.style.height = '100vh';
  canvas.style.pointerEvents = 'none';
  canvas.style.zIndex = '99999';
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;
  const width = window.innerWidth;
  const height = window.innerHeight;

  canvas.width = width * dpr;
  canvas.height = height * dpr;
  ctx.scale(dpr, dpr);

  // CIRCA Editorial Palette confetti
  const colors = [
    '#E4492B', // Vermilion
    '#1B1A17', // Printer Ink
    '#5A623F', // Heritage Olive
    '#B87B28', // Warm Ochre
    '#EDE6D8', // Raw Paper Tint
    '#FF5738'  // Bright Vermilion
  ];

  const particleCount = 75;
  const particles = [];

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: width / 2 + (Math.random() - 0.5) * 120,
      y: height * 0.45,
      vx: (Math.random() - 0.5) * 14,
      vy: -(Math.random() * 12 + 6),
      size: Math.random() * 8 + 5,
      aspect: Math.random() * 0.6 + 0.4, // rectangular ticket stub shape
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      vRotation: (Math.random() - 0.5) * 10,
      opacity: 1,
      gravity: 0.35,
      drag: 0.96
    });
  }

  let animationFrameId;
  const startTime = Date.now();
  const maxDuration = 2800; // ms

  const render = () => {
    const elapsed = Date.now() - startTime;
    if (elapsed > maxDuration) {
      if (canvas.parentNode) {
        canvas.parentNode.removeChild(canvas);
      }
      return;
    }

    ctx.clearRect(0, 0, width, height);

    particles.forEach((p) => {
      p.vx *= p.drag;
      p.vy = p.vy * p.drag + p.gravity;
      p.x += p.vx;
      p.y += p.vy;
      p.rotation += p.vRotation;

      if (elapsed > 1800) {
        p.opacity = Math.max(0, 1 - (elapsed - 1800) / 1000);
      }

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.globalAlpha = p.opacity;
      ctx.fillStyle = p.color;

      // Draw ticket-cut rectangle
      const w = p.size;
      const h = p.size * p.aspect;
      ctx.fillRect(-w / 2, -h / 2, w, h);
      ctx.restore();
    });

    animationFrameId = requestAnimationFrame(render);
  };

  animationFrameId = requestAnimationFrame(render);
};
