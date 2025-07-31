import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const MagneticCursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const cursorXDelayed = useMotionValue(-100);
  const cursorYDelayed = useMotionValue(-100);
  
  const innerSpringConfig = { damping: 30, stiffness: 800 };
  const outerSpringConfig = { damping: 20, stiffness: 400 };
  
  const cursorXSpring = useSpring(cursorX, innerSpringConfig);
  const cursorYSpring = useSpring(cursorY, innerSpringConfig);
  const cursorXDelayedSpring = useSpring(cursorXDelayed, outerSpringConfig);
  const cursorYDelayedSpring = useSpring(cursorYDelayed, outerSpringConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      cursorXDelayed.set(e.clientX);
      cursorYDelayed.set(e.clientY);
      setIsVisible(true);
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);
    const hideCursor = () => setIsVisible(false);

    // Add hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseleave', hideCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseleave', hideCursor);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [cursorX, cursorY, cursorXDelayed, cursorYDelayed]);

  return (
    <div className="magnetic-cursor" style={{ opacity: isVisible ? 1 : 0 }}>
      {/* Outer Circle */}
      <motion.div
        className={`cursor-outer ${isHovering ? 'hover' : ''}`}
        style={{
          translateX: cursorXDelayedSpring,
          translateY: cursorYDelayedSpring,
        }}
      />
      {/* Inner Dot */}
      <motion.div
        className={`cursor-inner ${isHovering ? 'hover' : ''}`}
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
        }}
      />
    </div>
  );
};

export default MagneticCursor;