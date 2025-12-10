
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import StorySlide from './components/StorySlide';
import ProgressBar from './components/ProgressBar';
import ShareModal from './components/ShareModal';
import DrawingCanvas from './components/DrawingCanvas';
import { slides } from './data/slides';
import type { Star } from './types';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showShareModal, setShowShareModal] = useState(false);
  const [showDrawingCanvas, setShowDrawingCanvas] = useState(false);
  const [direction, setDirection] = useState(1);
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generatedStars: Star[] = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 3,
      duration: Math.random() * 2 + 2
    }));
    setStars(generatedStars);
  }, []);

  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < slides.length) {
      setDirection(index > currentSlide ? 1 : -1);
      setCurrentSlide(index);
    }
  }, [currentSlide]);

  const nextSlide = useCallback(() => {
    if (currentSlide < slides.length - 1) {
      setDirection(1);
      setCurrentSlide(prev => prev + 1);
    }
  }, [currentSlide]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide(prev => prev - 1);
    }
  }, [currentSlide]);

  const restartStory = useCallback(() => {
    setDirection(-1);
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (showShareModal || showDrawingCanvas) return;
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, showShareModal, showDrawingCanvas]);

  useEffect(() => {
    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (showShareModal || showDrawingCanvas) return;
      touchEndX = e.changedTouches[0].screenX;
      const diff = touchStartX - touchEndX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          nextSlide();
        } else {
          prevSlide();
        }
      }
    };

    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [nextSlide, prevSlide, showShareModal, showDrawingCanvas]);

  const currentSlideData = slides[currentSlide];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Stars background */}
      <div className="fixed inset-0 pointer-events-none">
        {stars.map(star => (
          <div
            key={star.id}
            className="absolute rounded-full bg-white"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animation: `twinkle ${star.duration}s ease-in-out ${star.delay}s infinite`
            }}
          />
        ))}
      </div>

      {/* Moon glow effect */}
      <div
        className="fixed top-10 right-10 w-32 h-32 rounded-full pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(255,250,205,0.8) 0%, rgba(255,250,205,0) 70%)',
          animation: 'pulse-glow 4s ease-in-out infinite'
        }}
      />

      {/* Progress bar */}
      <ProgressBar
        current={currentSlide}
        total={slides.length}
        onSlideClick={goToSlide}
      />

      {/* Main content */}
      <main className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-16">
        <AnimatePresence mode="wait" custom={direction}>
          <StorySlide
            key={currentSlide}
            slide={currentSlideData}
            slideNumber={currentSlide}
            totalSlides={slides.length}
            direction={direction}
            onNext={nextSlide}
            onPrev={prevSlide}
            onRestart={restartStory}
            onShare={() => setShowShareModal(true)}
            onDraw={() => setShowDrawingCanvas(true)}
            isFirst={currentSlide === 0}
            isLast={currentSlide === slides.length - 1}
          />
        </AnimatePresence>
      </main>

      {/* Modals */}
      <AnimatePresence>
        {showShareModal && (
          <ShareModal onClose={() => setShowShareModal(false)} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showDrawingCanvas && (
          <DrawingCanvas onClose={() => setShowDrawingCanvas(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
