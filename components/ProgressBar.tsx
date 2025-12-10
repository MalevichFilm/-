
import React from 'react';
import { motion } from 'framer-motion';

interface ProgressBarProps {
  current: number;
  total: number;
  onSlideClick: (index: number) => void;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ current, total, onSlideClick }) => {
  const progress = ((current) / (total - 1)) * 100;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/30">
      <div className="max-w-lg mx-auto px-4 py-3">
        <div className="relative h-1.5 bg-border/50 rounded-full overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary via-accent-purple to-accent-blue rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          />
        </div>

        <div className="mt-2 flex items-center justify-center gap-1 overflow-x-auto py-1">
          {Array.from({ length: total }, (_, i) => (
            <motion.button
              key={i}
              onClick={() => onSlideClick(i)}
              className={`min-w-[8px] h-2 rounded-full transition-all duration-300 ${i === current
                  ? 'w-6 bg-primary'
                  : i < current
                    ? 'w-2 bg-primary/50 hover:bg-primary/70'
                    : 'w-2 bg-border hover:bg-muted'
                }`}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Слайд ${i + 1}`}
            />
          ))}
        </div>

        <div className="mt-1 text-center">
          <span className="text-xs text-muted">
            {current === 0 ? 'Начало' : current === total - 1 ? 'Конец' : `${current} из ${total - 1}`}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
