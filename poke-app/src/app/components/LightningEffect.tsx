import React, { useRef, useEffect } from 'react';

const LightningEffect: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');

    if (!canvas || !ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const createLightning = (startX: number, startY: number, endX: number, endY: number, segments: number) => {
      const points = [];
      let currentX = startX;
      let currentY = startY;

      for (let i = 0; i < segments; i++) {
        const dx = (endX - currentX) / (segments - i);
        const dy = (endY - currentY) / (segments - i);

        const offsetX = (Math.random() - 0.5) * 20; // Variación horizontal
        const offsetY = (Math.random() - 0.5) * 20; // Variación vertical

        currentX += dx + offsetX;
        currentY += dy + offsetY;

        points.push({ x: currentX, y: currentY });
      }

      return points;
    };

    const drawLightning = (x: number, y: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpiar el canvas

      const lightningPoints = createLightning(
        x,
        y,
        x + (Math.random() - 0.5) * 100, // Terminación aleatoria horizontal
        y + Math.random() * 200, // Terminación aleatoria vertical
        10 // Segmentos del rayo
      );

      ctx.strokeStyle = 'rgba(0, 150, 255, 0.8)';
      ctx.lineWidth = 3;
      ctx.shadowBlur = 10;
      ctx.shadowColor = 'rgba(0, 150, 255, 0.5)';

      ctx.beginPath();
      ctx.moveTo(x, y);

      lightningPoints.forEach((point) => {
        ctx.lineTo(point.x, point.y);
      });

      ctx.stroke();

      // Crear ramificaciones del rayo
      if (Math.random() > 0.5) {
        const branchStart = lightningPoints[Math.floor(Math.random() * lightningPoints.length)];
        const branchPoints = createLightning(
          branchStart.x,
          branchStart.y,
          branchStart.x + (Math.random() - 0.5) * 100,
          branchStart.y + Math.random() * 100,
          5 // Segmentos de la rama
        );

        ctx.beginPath();
        ctx.moveTo(branchStart.x, branchStart.y);
        branchPoints.forEach((point) => ctx.lineTo(point.x, point.y));
        ctx.stroke();
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      drawLightning(e.clientX, e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 9999,
        pointerEvents: 'none', // No bloquea la interacción con otros elementos
      }}
    ></canvas>
  );
};

export default LightningEffect;
