
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, RotateCcw, Share2, Palette } from 'lucide-react';

interface NavigationButtonsProps {
  isFirst: boolean;
  isLast: boolean;
  isTitle?: boolean;
  isEnd?: boolean;
  onNext: () => void;
  onPrev: () => void;
  onRestart: () => void;
  onShare: () => void;
  onDraw: () => void;
}

const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  isFirst,
  isLast,
  isTitle,
  isEnd,
  onNext,
  onPrev,
  onRestart,
  onShare,
  onDraw
}) => {
  if (isTitle) {
    return (
      <motion.div
        className="mt-8 flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        <motion.button
          onClick={onNext}
          className="group flex items-center gap-3 bg-gradient-to-r from-primary to-accent-purple text-white py-4 px-8 rounded-2xl font-semibold text-lg shadow-lg shadow-primary/30"
          whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(139, 92, 246, 0.3)' }}
          whileTap={{ scale: 0.98 }}
        >
          <span>Начать сказку</span>
          <motion.span
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            →→→
          </motion.span>
        </motion.button>
      </motion.div>
    );
  }

  if (isEnd) {
    return (
      <motion.div
        className="mt-8 space-y-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="flex flex-col sm:flex-row gap-3">
          <motion.button
            onClick={onShare}
            className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-accent-blue to-primary text-white py-3 px-6 rounded-xl font-medium shadow-lg"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Share2 className="w-5 h-5" />
            <span>Поделиться с другом</span>
          </motion.button>

          <motion.button
            onClick={onRestart}
            className="flex-1 flex items-center justify-center gap-2 bg-surface border-2 border-border text-foreground py-3 px-6 rounded-xl font-medium hover:border-primary hover:text-primary transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <RotateCcw className="w-5 h-5" />
            <span>Начать сначала</span>
          </motion.button>
        </div>

        <motion.button
          onClick={onDraw}
          className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-accent-gold to-warning text-background py-3 px-6 rounded-xl font-medium shadow-lg"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Palette className="w-5 h-5" />
          <span>Нарисовать своего котёнка</span>
        </motion.button>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="mt-6 flex items-center justify-between"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <motion.button
        onClick={onPrev}
        disabled={isFirst}
        className={`flex items-center gap-1 py-3 px-4 rounded-xl font-medium transition-all min-h-[44px] ${isFirst
            ? 'text-muted/50 cursor-not-allowed'
            : 'text-muted hover:text-foreground hover:bg-background/50'
          }`}
        whileHover={!isFirst ? { x: -3 } : {}}
        whileTap={!isFirst ? { scale: 0.95 } : {}}
      >
        <ChevronLeft className="w-5 h-5" />
        <span className="hidden sm:inline">Назад</span>
      </motion.button>

      <motion.button
        onClick={onNext}
        disabled={isLast}
        className={`flex items-center gap-1 py-3 px-6 rounded-xl font-medium transition-all min-h-[44px] ${isLast
            ? 'text-muted/50 cursor-not-allowed'
            : 'bg-primary text-white hover:bg-primary-hover shadow-lg shadow-primary/20'
          }`}
        whileHover={!isLast ? { x: 3, boxShadow: '0 10px 30px rgba(139, 92, 246, 0.3)' } : {}}
        whileTap={!isLast ? { scale: 0.95 } : {}}
      >
        <span>Дальше</span>
        <ChevronRight className="w-5 h-5" />
      </motion.button>
    </motion.div>
  );
};

export default NavigationButtons;
