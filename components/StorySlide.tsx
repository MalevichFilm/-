
import React from 'react';
import { motion } from 'framer-motion';
import Illustration from './Illustration';
import NavigationButtons from './NavigationButtons';
import type { Slide } from '../types';

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.9
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
    scale: 0.9
  })
};

interface StorySlideProps {
  slide: Slide;
  slideNumber: number;
  totalSlides: number;
  direction: number;
  onNext: () => void;
  onPrev: () => void;
  onRestart: () => void;
  onShare: () => void;
  onDraw: () => void;
  isFirst: boolean;
  isLast: boolean;
}

const StorySlide: React.FC<StorySlideProps> = ({
  slide,
  slideNumber,
  totalSlides,
  direction,
  onNext,
  onPrev,
  onRestart,
  onShare,
  onDraw,
  isFirst,
  isLast
}) => {
  const { textRu, textEn, illustrationType, isTitle, isEnd } = slide;

  return (
    <motion.div
      custom={direction}
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 30,
        duration: 0.5
      }}
      className="w-full max-w-lg mx-auto"
    >
      <div className="bg-surface/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-border/50 overflow-hidden">
        <div className="relative aspect-square bg-gradient-to-b from-surface to-background/50 overflow-hidden">
          <Illustration type={illustrationType} isTitle={isTitle} />
          {!isTitle && (
            <div className="absolute top-4 left-4 bg-background/60 backdrop-blur-sm px-3 py-1 rounded-full">
              <span className="text-sm font-medium text-muted">
                {slideNumber} / {totalSlides - 1}
              </span>
            </div>
          )}
        </div>

        <div className="p-6 md:p-8">
          {isTitle ? (
            <div className="text-center space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-2xl md:text-3xl font-bold text-foreground font-story leading-tight"
              >
                {textRu}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-lg text-muted italic font-story"
              >
                {textEn}
              </motion.p>
            </div>
          ) : (
            <div className="space-y-3">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-foreground font-story leading-relaxed"
              >
                {textRu}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-base text-muted/80 italic font-story"
              >
                {textEn}
              </motion.p>
            </div>
          )}

          <NavigationButtons
            isFirst={isFirst}
            isLast={isLast}
            isTitle={isTitle}
            isEnd={isEnd}
            onNext={onNext}
            onPrev={onPrev}
            onRestart={onRestart}
            onShare={onShare}
            onDraw={onDraw}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default StorySlide;
