// src/components/CometCursor.jsx
import React, { useEffect, useRef } from "react";
import "./CustomCursor.css"

const CometCursor = () => {
  const dots = useRef([]);

  const coords = Array(10).fill({ x: 0, y: 0 });
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      let x = mouse.current.x;
      let y = mouse.current.y;

      coords.forEach((coord, i) => {
        const next = coords[i + 1] || coords[i];
        coord.x += (x - coord.x) * 0.3;
        coord.y += (y - coord.y) * 0.3;
        x = coord.x;
        y = coord.y;

        if (dots.current[i]) {
          dots.current[i].style.left = coord.x + "px";
          dots.current[i].style.top = coord.y + "px";
        }
      });

      requestAnimationFrame(animate);
    };

    animate();
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {coords.map((_, i) => (
        <div
          key={i}
          className="comet-dot"
          ref={(el) => (dots.current[i] = el)}
          style={{ animationDelay: `${i * 50}ms` }}
        />
      ))}
    </>
  );
};

export default CometCursor;
