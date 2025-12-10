
import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, Eraser, Download, RotateCcw, Palette } from 'lucide-react';

const COLORS = [
  '#1a1a1a', // Black
  '#7b9eb8', // Kitten eyes blue
  '#ff9999', // Pink
  '#ff9933', // Orange
  '#4ade80', // Green
  '#fbbf24', // Yellow
  '#3b82f6', // Blue
  '#a855f7', // Purple
  '#ffffff', // White
];

const BRUSH_SIZES = [4, 8, 16, 24];

interface DrawingCanvasProps {
  onClose: () => void;
}

const DrawingCanvas: React.FC<DrawingCanvasProps> = ({ onClose }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState('#1a1a1a');
  const [brushSize, setBrushSize] = useState(8);
  const [lastPos, setLastPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * 2;
    canvas.height = rect.height * 2;
    ctx.scale(2, 2);

    ctx.fillStyle = '#fefefe';
    ctx.fillRect(0, 0, rect.width, rect.height);

    ctx.fillStyle = '#d1d5db';
    ctx.font = '16px Georgia, serif';
    ctx.textAlign = 'center';
    ctx.fillText('Нарисуй своего котёнка! 🐱', rect.width / 2, rect.height / 2);
  }, []);

  const getPos = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();

    if ('touches' in e) {
      return {
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top
      };
    }
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  };

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    setIsDrawing(true);
    const pos = getPos(e);
    setLastPos(pos);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    e.preventDefault();

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const pos = getPos(e);

    ctx.beginPath();
    ctx.moveTo(lastPos.x, lastPos.y);
    ctx.lineTo(pos.x, pos.y);
    ctx.strokeStyle = color;
    ctx.lineWidth = brushSize;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.stroke();

    setLastPos(pos);
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const rect = canvas.getBoundingClientRect();

    ctx.fillStyle = '#fefefe';
    ctx.fillRect(0, 0, rect.width, rect.height);
  };

  const downloadCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement('a');
    link.download = 'my-kitten.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-surface rounded-3xl p-4 w-full max-w-lg shadow-2xl border border-border/50"
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Palette className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-bold text-foreground">Твой котёнок</h3>
          </div>
          <motion.button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-background/50 text-muted hover:text-foreground transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <X className="w-5 h-5" />
          </motion.button>
        </div>

        <div className="relative rounded-2xl overflow-hidden bg-white border border-border">
          <canvas
            ref={canvasRef}
            className="w-full aspect-square cursor-crosshair touch-none"
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={stopDrawing}
            onMouseLeave={stopDrawing}
            onTouchStart={startDrawing}
            onTouchMove={draw}
            onTouchEnd={stopDrawing}
          />
        </div>

        <div className="mt-4 flex items-center justify-center gap-2 flex-wrap">
          {COLORS.map((c) => (
            <motion.button
              key={c}
              onClick={() => setColor(c)}
              className={`w-8 h-8 rounded-full border-2 transition-all ${color === c ? 'border-primary scale-110' : 'border-border'
                }`}
              style={{ backgroundColor: c }}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
            />
          ))}
        </div>

        <div className="mt-3 flex items-center justify-center gap-3">
          {BRUSH_SIZES.map((size) => (
            <motion.button
              key={size}
              onClick={() => setBrushSize(size)}
              className={`flex items-center justify-center w-10 h-10 rounded-xl transition-all ${brushSize === size
                  ? 'bg-primary text-white'
                  : 'bg-background text-muted hover:text-foreground'
                }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <div
                className="rounded-full bg-current"
                style={{ width: size, height: size }}
              />
            </motion.button>
          ))}
        </div>

        <div className="mt-4 flex gap-3">
          <motion.button
            onClick={clearCanvas}
            className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-background border border-border text-muted hover:text-foreground hover:border-danger transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <RotateCcw className="w-4 h-4" />
            <span>Очистить</span>
          </motion.button>

          <motion.button
            onClick={() => setColor('#fefefe')}
            className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl transition-colors ${color === '#fefefe'
                ? 'bg-primary text-white'
                : 'bg-background border border-border text-muted hover:text-foreground'
              }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Eraser className="w-4 h-4" />
          </motion.button>

          <motion.button
            onClick={downloadCanvas}
            className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-primary text-white font-medium shadow-lg shadow-primary/20"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Download className="w-4 h-4" />
            <span>Сохранить</span>
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default DrawingCanvas;
