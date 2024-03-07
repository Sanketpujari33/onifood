import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

interface TopLoadingProps {}

const TopLoading: React.FC<TopLoadingProps> = () => {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{
        scaleX,
        height: '8px',
        background: 'tomato',
        width: '100%',
      }}
    />
  );
};

export default TopLoading;
