import React, { useEffect, useRef } from 'react';

export default function HeroCircuitCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates
    const mouse = {
      x: width / 2,
      y: height / 2,
      radius: 140,
      active: false,
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initNodes();
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);

    // Node & Particle System
    let nodes = [];
    const nodeCount = Math.min(Math.floor((width * height) / 16000), 75);

    class CircuitNode {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.45;
        this.vy = (Math.random() - 0.5) * 0.45;
        this.size = Math.random() * 2 + 1.5;
        this.isAmber = Math.random() > 0.65;
        this.baseColor = this.isAmber ? '#F5A623' : '#3E46A3';
        this.pulse = Math.random() * Math.PI * 2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off walls
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        // Interactive mouse repulsion/reaction
        if (mouse.active) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            const angle = Math.atan2(dy, dx);
            this.x -= Math.cos(angle) * force * 2.2;
            this.y -= Math.sin(angle) * force * 2.2;
          }
        }

        this.pulse += 0.03;
      }

      draw() {
        const glow = Math.sin(this.pulse) * 0.3 + 0.7;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.isAmber 
          ? `rgba(245, 166, 35, ${0.45 * glow})` 
          : `rgba(62, 70, 163, ${0.4 * glow})`;
        ctx.fill();

        // Extra ring for amber core nodes
        if (this.isAmber) {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size * 2, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(245, 166, 35, ${0.15 * glow})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }

    function initNodes() {
      nodes = [];
      for (let i = 0; i < nodeCount; i++) {
        nodes.push(new CircuitNode());
      }
    }

    initNodes();

    // Render loop
    const render = () => {
      // Pause drawing if user scrolled far down past hero
      if (window.scrollY < height + 50) {
        ctx.clearRect(0, 0, width, height);

        // Draw connections / circuit traces between nodes
        for (let i = 0; i < nodes.length; i++) {
          for (let j = i + 1; j < nodes.length; j++) {
            const dx = nodes[i].x - nodes[j].x;
            const dy = nodes[i].y - nodes[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 130) {
              const opacity = (1 - dist / 130) * 0.22;
              ctx.beginPath();
              ctx.moveTo(nodes[i].x, nodes[i].y);
              // Circuit line with subtle right angle
              ctx.lineTo(nodes[j].x, nodes[j].y);
              ctx.strokeStyle = nodes[i].isAmber || nodes[j].isAmber 
                ? `rgba(245, 166, 35, ${opacity})` 
                : `rgba(45, 52, 128, ${opacity * 1.5})`;
              ctx.lineWidth = 0.8;
              ctx.stroke();
            }
          }

          // Connect to mouse position if active
          if (mouse.active) {
            const dx = mouse.x - nodes[i].x;
            const dy = mouse.y - nodes[i].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < mouse.radius) {
              const opacity = (1 - dist / mouse.radius) * 0.35;
              ctx.beginPath();
              ctx.moveTo(nodes[i].x, nodes[i].y);
              ctx.lineTo(mouse.x, mouse.y);
              ctx.strokeStyle = `rgba(245, 166, 35, ${opacity})`;
              ctx.lineWidth = 1;
              ctx.stroke();
            }
          }

          nodes[i].update();
          nodes[i].draw();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 pointer-events-none z-0 w-full h-full opacity-80"
    />
  );
}
