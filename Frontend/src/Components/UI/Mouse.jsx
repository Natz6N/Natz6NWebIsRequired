import React, { useEffect, useRef, useState, useCallback } from "react";

// Custom Mouse Component yang dioptimalkan untuk performa
const CustomMouse = ({
  size = 20,
  hoverSize = 40,
  color = "#3B82F6",
  mixBlendMode = "difference",
  zIndex = 9999,
  disabled = false,
  bounceIntensity = 0.3,
  bounceDecay = 0.8,
}) => {
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  // State untuk bounce effect
  const mousePosition = useRef({ x: 0, y: 0 });
  const targetPosition = useRef({ x: 0, y: 0 });
  const velocity = useRef({ x: 0, y: 0 });
  const animationFrameId = useRef(null);
  const lastMoveTime = useRef(Date.now());
  const isMoving = useRef(false);

  // // Smooth interpolation function
  // const lerp = (start, end, factor) => start + (end - start) * factor;

  // Bounce animation dengan spring physics
  const updateCursorPosition = useCallback(() => {
    if (!cursorRef.current || !cursorDotRef.current) return;

    const now = Date.now();
    const deltaTime = (now - lastMoveTime.current) / 1000; // Convert to seconds
    lastMoveTime.current = now;

    // Calculate distance to target
    const dx = targetPosition.current.x - mousePosition.current.x;
    const dy = targetPosition.current.y - mousePosition.current.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    // Apply spring physics for bounce effect using bounceIntensity
    const springStrength = 0.15 * bounceIntensity;
    const damping = bounceDecay;

    // Update velocity with spring force
    velocity.current.x += dx * springStrength * deltaTime * 60;
    velocity.current.y += dy * springStrength * deltaTime * 60;

    // Apply damping
    velocity.current.x *= damping;
    velocity.current.y *= damping;

    // Update position
    mousePosition.current.x += velocity.current.x * deltaTime * 60;
    mousePosition.current.y += velocity.current.y * deltaTime * 60;

    // Check if mouse is moving
    const velocityMagnitude = Math.sqrt(
      velocity.current.x ** 2 + velocity.current.y ** 2
    );
    isMoving.current = velocityMagnitude > 0.1 || distance > 1;

    // Apply transform
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;

    if (cursor && cursorDot) {
      cursor.style.transform = `translate3d(${mousePosition.current.x}px, ${mousePosition.current.y}px, 0)`;
      cursorDot.style.transform = `translate3d(${mousePosition.current.x}px, ${mousePosition.current.y}px, 0)`;
    }

    animationFrameId.current = requestAnimationFrame(updateCursorPosition);
  }, []);

  useEffect(() => {
    // Jika disabled, jangan jalankan custom mouse
    if (disabled) return;

    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;

    if (!cursor || !cursorDot) return;

    // Event handler untuk mouse move (throttled untuk performa)
    let throttleTimer = null;
    const handleMouseMove = (e) => {
      if (throttleTimer) return;

      throttleTimer = setTimeout(() => {
        targetPosition.current = {
          x: e.clientX,
          y: e.clientY,
        };
        throttleTimer = null;
      }, 8); // ~120fps untuk responsivitas yang lebih baik
    };

    // Event handler untuk mouse enter/leave
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    // Event handler untuk click
    const handleMouseDown = (e) => {
      // Prevent default cursor from showing
      e.preventDefault();
      setIsClicking(true);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    // Event handler untuk hover pada elemen interaktif
    const handleHoverStart = () => setIsHovering(true);
    const handleHoverEnd = () => setIsHovering(false);

    // Sembunyikan cursor default dengan lebih aggressive
    const hideDefaultCursor = () => {
      document.body.style.cursor = "none";
      document.documentElement.style.cursor = "none";
      // Tambahkan style CSS untuk memastikan cursor tersembunyi
      const style = document.createElement("style");
      style.textContent = `
        *, *::before, *::after {
          cursor: none !important;
        }
      `;
      document.head.appendChild(style);
      return style;
    };

    const styleElement = hideDefaultCursor();

    // Tambahkan event listeners
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mousedown", handleMouseDown, { passive: false });
    document.addEventListener("mouseup", handleMouseUp);

    // Tambahkan hover effects untuk elemen interaktif
    const interactiveElements = document.querySelectorAll(
      'a, button, input, textarea, select, [role="button"], [tabindex], .cursor-pointer'
    );

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleHoverStart);
      el.addEventListener("mouseleave", handleHoverEnd);
      // Prevent default cursor pada elemen interaktif
      el.style.cursor = "none";
    });

    // Mulai animation loop
    updateCursorPosition();

    // Cleanup function
    return () => {
      // Restore cursor
      document.body.style.cursor = "auto";
      document.documentElement.style.cursor = "auto";

      // Remove injected styles
      if (styleElement && styleElement.parentNode) {
        styleElement.parentNode.removeChild(styleElement);
      }

      // Remove event listeners
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);

      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleHoverStart);
        el.removeEventListener("mouseleave", handleHoverEnd);
        el.style.cursor = "auto";
      });

      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }

      if (throttleTimer) {
        clearTimeout(throttleTimer);
      }
    };
  }, [disabled, updateCursorPosition]);

  // Jika disabled, tidak render apapun
  if (disabled) return null;

  // Calculate current size based on state
  const getCurrentSize = () => {
    let currentSize = size;
    if (isHovering) currentSize = hoverSize;
    if (isClicking) currentSize = size * 0.8; // Shrink when clicking
    return currentSize;
  };

  const currentSize = getCurrentSize();

  return (
    <>
      {/* Cursor Utama - Lingkaran besar dengan border */}
      <div
        ref={cursorRef}
        className="fixed pointer-events-none"
        style={{
          width: currentSize,
          height: currentSize,
          left: -(currentSize / 2),
          top: -(currentSize / 2),
          borderRadius: "50%",
          border: `2px solid ${color}`,
          backgroundColor: isHovering
            ? `${color}20`
            : isClicking
            ? `${color}40`
            : "transparent",
          zIndex: zIndex,
          mixBlendMode: mixBlendMode,
          transition:
            "width 0.2s cubic-bezier(0.4, 0, 0.2, 1), height 0.2s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.2s ease",
          opacity: isVisible ? 1 : 0,
          transform: "translate3d(0, 0, 0)", // Hardware acceleration
          willChange: "transform, width, height, background-color",
        }}
      />

      {/* Cursor Dot - Titik kecil di tengah */}
      <div
        ref={cursorDotRef}
        className="fixed z-[999]"
        style={{
          width: isClicking ? 6 : 4,
          height: isClicking ? 6 : 4,
          left: isClicking ? -3 : -2,
          top: isClicking ? -3 : -2,
          borderRadius: "50%",
          backgroundColor: color,
          zIndex: zIndex + 1,
          mixBlendMode: mixBlendMode,
          opacity: isVisible && !isHovering ? (isClicking ? 0.8 : 1) : 0,
          transition: "opacity 0.2s ease, width 0.1s ease, height 0.1s ease",
          transform: "translate3d(0, 0, 0)", // Hardware acceleration
          willChange: "transform, opacity, width, height",
        }}
      />

      {/* Ripple effect saat click */}
      {isClicking && (
        <div
          className="fixed z-[999]"
          style={{
            width: size * 1.5,
            height: size * 1.5,
            left: -(size * 1.5) / 2,
            top: -(size * 1.5) / 2,
            borderRadius: "50%",
            border: `1px solid ${color}`,
            backgroundColor: "transparent",
            zIndex: zIndex - 1,
            mixBlendMode: mixBlendMode,
            opacity: 0.5,
            transform: `translate3d(${mousePosition.current.x}px, ${mousePosition.current.y}px, 0) scale(0)`,
            animation: "ripple 0.3s ease-out forwards",
            willChange: "transform, opacity",
          }}
        />
      )}

      {/* CSS untuk ripple animation */}
      <style>{`
        @keyframes ripple {
          0% {
            transform: translate3d(${mousePosition.current.x}px, ${mousePosition.current.y}px, 0) scale(0);
            opacity: 0.5;
          }
          100% {
            transform: translate3d(${mousePosition.current.x}px, ${mousePosition.current.y}px, 0) scale(1);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
};

export default CustomMouse;
