
import React from 'react';
import { motion } from 'framer-motion';

// Prop Interfaces
interface IllustrationProps {
  type: string;
  isTitle?: boolean;
}

interface KittenProps {
  className?: string;
  style?: React.CSSProperties;
  mood?: 'neutral' | 'happy' | 'sad' | 'playful';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

interface MoonProps {
  className?: string;
  smiling?: boolean;
  hiding?: boolean;
}

interface GooseProps {
  className?: string;
  style?: React.CSSProperties;
}

interface OakTreeProps {
  className?: string;
  hasHollow?: boolean;
}

interface CloudProps {
  className?: string;
  style?: React.CSSProperties;
}

interface FlowerProps {
  className?: string;
  color?: string;
}

interface PrintHeartProps {
  className?: string;
}

// Helper Components (defined outside main component)

const Kitten: React.FC<KittenProps> = ({ className = '', style = {}, mood = 'neutral', size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32',
    xl: 'w-40 h-40'
  };

  const eyeExpression = {
    happy: { cy: 38, rx: 6, ry: 7 },
    sad: { cy: 40, rx: 5, ry: 4 },
    neutral: { cy: 38, rx: 6, ry: 6 },
    playful: { cy: 36, rx: 7, ry: 5 }
  };

  const eyes = eyeExpression[mood] || eyeExpression.neutral;

  return (
    <motion.svg
      viewBox="0 0 100 100"
      className={`${sizeClasses[size]} ${className}`}
      style={style}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ellipse cx="50" cy="70" rx="25" ry="20" fill="#1a1a1a" />
      <circle cx="50" cy="40" r="22" fill="#1a1a1a" />
      <polygon points="30,25 38,40 25,40" fill="#1a1a1a" />
      <polygon points="70,25 75,40 62,40" fill="#1a1a1a" />
      <polygon points="32,28 37,38 28,38" fill="#3a3a3a" />
      <polygon points="68,28 72,38 63,38" fill="#3a3a3a" />
      <ellipse cx="42" cy={eyes.cy} rx={eyes.rx} ry={eyes.ry} fill="#7b9eb8" />
      <ellipse cx="58" cy={eyes.cy} rx={eyes.rx} ry={eyes.ry} fill="#7b9eb8" />
      <circle cx="42" cy={eyes.cy - 1} r="3" fill="#1a1a1a" />
      <circle cx="58" cy={eyes.cy - 1} r="3" fill="#1a1a1a" />
      <circle cx="43" cy={eyes.cy - 2} r="1.5" fill="white" />
      <circle cx="59" cy={eyes.cy - 2} r="1.5" fill="white" />
      <ellipse cx="50" cy="48" rx="3" ry="2" fill="#ff9999" />
      {mood === 'happy' && (
        <path d="M 45 52 Q 50 56 55 52" stroke="#ff9999" strokeWidth="1.5" fill="none" />
      )}
      {mood === 'sad' && (
        <path d="M 45 54 Q 50 51 55 54" stroke="#ff9999" strokeWidth="1.5" fill="none" />
      )}
      {mood === 'playful' && (
        <>
          <path d="M 45 52 Q 50 57 55 52" stroke="#ff9999" strokeWidth="1.5" fill="none" />
          <ellipse cx="50" cy="55" rx="3" ry="2" fill="#ff6666" />
        </>
      )}
      <line x1="30" y1="45" x2="15" y2="42" stroke="#555" strokeWidth="0.5" />
      <line x1="30" y1="48" x2="15" y2="48" stroke="#555" strokeWidth="0.5" />
      <line x1="30" y1="51" x2="15" y2="54" stroke="#555" strokeWidth="0.5" />
      <line x1="70" y1="45" x2="85" y2="42" stroke="#555" strokeWidth="0.5" />
      <line x1="70" y1="48" x2="85" y2="48" stroke="#555" strokeWidth="0.5" />
      <line x1="70" y1="51" x2="85" y2="54" stroke="#555" strokeWidth="0.5" />
      <path d="M 75 70 Q 90 60 85 45" stroke="#1a1a1a" strokeWidth="6" fill="none" strokeLinecap="round" />
    </motion.svg>
  );
};

const Moon: React.FC<MoonProps> = ({ className = '', smiling = false, hiding = false }) => {
  return (
    <motion.svg
      viewBox="0 0 60 60"
      className={`w-20 h-20 ${className}`}
      animate={hiding ? { x: 20, opacity: 0.3 } : { x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <defs>
        <radialGradient id="moonGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fffacd" />
          <stop offset="100%" stopColor="#ffd700" />
        </radialGradient>
      </defs>
      <circle cx="30" cy="30" r="25" fill="url(#moonGlow)" />
      <circle cx="22" cy="25" r="4" fill="#f0e68c" opacity="0.5" />
      <circle cx="35" cy="35" r="3" fill="#f0e68c" opacity="0.5" />
      <circle cx="28" cy="40" r="2" fill="#f0e68c" opacity="0.5" />
      {smiling && (
        <>
          <circle cx="22" cy="28" r="2" fill="#c9a227" />
          <circle cx="38" cy="28" r="2" fill="#c9a227" />
          <path d="M 22 36 Q 30 42 38 36" stroke="#c9a227" strokeWidth="2" fill="none" />
        </>
      )}
    </motion.svg>
  );
};

const Goose: React.FC<GooseProps> = ({ className = '', style = {} }) => {
  return (
    <motion.svg
      viewBox="0 0 80 80"
      className={`w-20 h-20 ${className}`}
      style={style}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <ellipse cx="40" cy="55" rx="20" ry="15" fill="#f5f5f5" />
      <path d="M 35 45 Q 30 30 35 15" stroke="#f5f5f5" strokeWidth="10" fill="none" strokeLinecap="round" />
      <circle cx="35" cy="12" r="8" fill="#f5f5f5" />
      <path d="M 27 12 L 20 14 L 27 16" fill="#ff9933" />
      <circle cx="33" cy="10" r="2" fill="#1a1a1a" />
      <ellipse cx="45" cy="52" rx="12" ry="8" fill="#e8e8e8" />
      <path d="M 30 68 L 25 75 M 30 68 L 30 75 M 30 68 L 35 75" stroke="#ff9933" strokeWidth="2" />
      <path d="M 50 68 L 45 75 M 50 68 L 50 75 M 50 68 L 55 75" stroke="#ff9933" strokeWidth="2" />
    </motion.svg>
  );
};

const OakTree: React.FC<OakTreeProps> = ({ className = '', hasHollow = false }) => {
  return (
    <svg viewBox="0 0 120 140" className={`w-32 h-40 ${className}`}>
      <rect x="45" y="80" width="30" height="60" fill="#8b4513" rx="3" />
      <rect x="50" y="85" width="5" height="50" fill="#6b3510" opacity="0.5" />
      {hasHollow && (
        <>
          <ellipse cx="60" cy="100" rx="10" ry="12" fill="#3d2010" />
          <circle cx="55" cy="96" r="2" fill="#2a1810" />
          <circle cx="65" cy="96" r="2" fill="#2a1810" />
          <path d="M 54 104 Q 60 108 66 104" stroke="#2a1810" strokeWidth="2" fill="none" />
        </>
      )}
      <ellipse cx="60" cy="50" rx="45" ry="40" fill="#2d5016" />
      <ellipse cx="35" cy="55" rx="25" ry="20" fill="#3d6b1e" />
      <ellipse cx="85" cy="55" rx="25" ry="20" fill="#3d6b1e" />
      <ellipse cx="60" cy="35" rx="30" ry="25" fill="#4a8526" />
      <ellipse cx="45" cy="45" rx="15" ry="12" fill="#5a9530" />
      <ellipse cx="75" cy="45" rx="15" ry="12" fill="#5a9530" />
    </svg>
  );
};

const Cloud: React.FC<CloudProps> = ({ className = '', style = {} }) => {
  return (
    <svg viewBox="0 0 100 50" className={`w-24 h-12 ${className}`} style={style}>
      <ellipse cx="30" cy="30" rx="20" ry="15" fill="#e8e8f0" opacity="0.8" />
      <ellipse cx="50" cy="25" rx="25" ry="18" fill="#e8e8f0" opacity="0.9" />
      <ellipse cx="70" cy="30" rx="20" ry="15" fill="#e8e8f0" opacity="0.8" />
    </svg>
  );
};

const Flower: React.FC<FlowerProps> = ({ className = '', color = '#ff6b9d' }) => {
  return (
    <svg viewBox="0 0 40 50" className={`w-8 h-10 ${className}`}>
      <line x1="20" y1="25" x2="20" y2="48" stroke="#4ade80" strokeWidth="2" />
      <ellipse cx="12" cy="30" rx="4" ry="2" fill="#4ade80" transform="rotate(-30 12 30)" />
      {[0, 72, 144, 216, 288].map((angle, i) => (
        <ellipse
          key={i}
          cx="20"
          cy="15"
          rx="6"
          ry="10"
          fill={color}
          transform={`rotate(${angle} 20 20)`}
          opacity="0.9"
        />
      ))}
      <circle cx="20" cy="20" r="5" fill="#fbbf24" />
    </svg>
  );
};

const PrintHeart: React.FC<PrintHeartProps> = ({ className = '' }) => {
  return (
    <svg viewBox="0 0 100 100" className={`w-32 h-32 ${className}`}>
      {[
        { x: 50, y: 20, rot: 0 }, { x: 35, y: 25, rot: -20 }, { x: 65, y: 25, rot: 20 },
        { x: 25, y: 35, rot: -30 }, { x: 75, y: 35, rot: 30 }, { x: 20, y: 50, rot: -15 },
        { x: 80, y: 50, rot: 15 }, { x: 25, y: 65, rot: 0 }, { x: 75, y: 65, rot: 0 },
        { x: 35, y: 78, rot: 15 }, { x: 65, y: 78, rot: -15 }, { x: 50, y: 88, rot: 0 }
      ].map((pos, i) => (
        <g key={i} transform={`translate(${pos.x}, ${pos.y}) rotate(${pos.rot})`}>
          <ellipse cx="0" cy="0" rx="5" ry="6" fill="#1a1a1a" />
          <circle cx="-4" cy="-6" r="2" fill="#1a1a1a" />
          <circle cx="4" cy="-6" r="2" fill="#1a1a1a" />
          <circle cx="-2" cy="-8" r="1.5" fill="#1a1a1a" />
          <circle cx="2" cy="-8" r="1.5" fill="#1a1a1a" />
        </g>
      ))}
      {[ { x: 45, y: 45 }, { x: 55, y: 55 }, { x: 42, y: 68 } ].map((pos, i) => (
        <g key={`goose-${i}`} transform={`translate(${pos.x}, ${pos.y})`}>
          <line x1="0" y1="0" x2="-4" y2="-6" stroke="#ff9933" strokeWidth="2" />
          <line x1="0" y1="0" x2="0" y2="-7" stroke="#ff9933" strokeWidth="2" />
          <line x1="0" y1="0" x2="4" y2="-6" stroke="#ff9933" strokeWidth="2" />
        </g>
      ))}
      {[ { x: 50, y: 40, rot: 45 }, { x: 58, y: 70, rot: -30 } ].map((pos, i) => (
        <ellipse key={`leaf-${i}`} cx={pos.x} cy={pos.y} rx="3" ry="6" fill="#4ade80" transform={`rotate(${pos.rot} ${pos.x} ${pos.y})`} />
      ))}
    </svg>
  );
};

const TitleScene: React.FC = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <Moon className="absolute top-4 right-4" smiling />
    <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 3, repeat: Infinity }} >
      <Kitten size="xl" mood="neutral" />
    </motion.div>
    <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-1">
      {[...Array(9)].map((_, i) => <div key={i} className="w-6 h-16 bg-amber-800 rounded-t" />)}
    </div>
  </div>
);

const ScaredPeopleScene: React.FC = () => (
    <div className="relative w-full h-full flex items-end justify-center pb-8">
        <Kitten size="md" mood="sad" className="absolute bottom-12 left-1/2 -translate-x-1/2" />
        <motion.div className="absolute left-8 bottom-8" animate={{ x: [-20, -40] }} transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }} >
            <svg viewBox="0 0 40 60" className="w-10 h-16 opacity-50">
                <circle cx="20" cy="10" r="8" fill="#555" /><rect x="15" y="18" width="10" height="20" fill="#555" rx="2" /><rect x="10" y="38" width="6" height="20" fill="#555" rx="2" /><rect x="24" y="38" width="6" height="20" fill="#555" rx="2" />
            </svg>
        </motion.div>
        <motion.div className="absolute right-8 bottom-8" animate={{ x: [20, 40] }} transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }} >
            <svg viewBox="0 0 40 60" className="w-10 h-16 opacity-50">
                <circle cx="20" cy="10" r="8" fill="#555" /><rect x="15" y="18" width="10" height="20" fill="#555" rx="2" /><rect x="10" y="38" width="6" height="20" fill="#555" rx="2" /><rect x="24" y="38" width="6" height="20" fill="#555" rx="2" />
            </svg>
        </motion.div>
    </div>
);

const SadRoofScene: React.FC = () => (
    <div className="relative w-full h-full">
        <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 200 80" className="w-full">
                <polygon points="0,80 100,20 200,80" fill="#8b4513" /><polygon points="20,80 100,30 180,80" fill="#a0522d" />
            </svg>
        </div>
        <motion.div className="absolute bottom-16 left-1/2 -translate-x-1/2" animate={{ y: [0, 3, 0] }} transition={{ duration: 2, repeat: Infinity }} >
            <Kitten size="lg" mood="sad" />
        </motion.div>
        <Moon className="absolute top-4 right-4" />
    </div>
);

const CrossingRoadScene: React.FC = () => (
    <div className="relative w-full h-full flex items-center justify-center">
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gray-700">
            <div className="absolute top-1/2 left-0 right-0 flex justify-center gap-8">{[...Array(5)].map((_, i) => <div key={i} className="w-12 h-2 bg-yellow-400" />)}</div>
        </div>
        <motion.div animate={{ x: [-30, 30] }} transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }} className="absolute bottom-20" >
            <Kitten size="md" mood="neutral" />
        </motion.div>
        <div className="absolute top-8 left-8">
            <div className="w-6 h-16 bg-gray-800 rounded flex flex-col items-center justify-around py-1">
                <div className="w-4 h-4 rounded-full bg-red-500" />
                <div className="w-4 h-4 rounded-full bg-yellow-500 opacity-30" />
                <div className="w-4 h-4 rounded-full bg-green-500 opacity-30" />
            </div>
        </div>
    </div>
);

const WavingCarsScene: React.FC = () => (
    <div className="relative w-full h-full flex items-center justify-center">
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gray-700" />
        <svg viewBox="0 0 80 40" className="w-20 h-10 absolute bottom-8 left-8">
            <rect x="5" y="15" width="70" height="20" fill="#3b82f6" rx="5" /><rect x="15" y="8" width="30" height="15" fill="#93c5fd" rx="3" /><circle cx="20" cy="35" r="6" fill="#333" /><circle cx="60" cy="35" r="6" fill="#333" />
        </svg>
        <motion.div className="absolute bottom-16 right-16" animate={{ rotate: [0, 15, 0, -15, 0] }} transition={{ duration: 1, repeat: Infinity }} >
            <Kitten size="sm" mood="happy" />
        </motion.div>
    </div>
);

const GooseFriendScene: React.FC = () => (
    <div className="relative w-full h-full flex items-end justify-center pb-8 gap-4">
        <motion.div animate={{ y: [0, -3, 0] }} transition={{ duration: 2, repeat: Infinity }} ><Kitten size="md" mood="happy" /></motion.div>
        <motion.div animate={{ y: [0, -3, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }} ><Goose /></motion.div>
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-green-800 to-green-600 rounded-t-full" />
    </div>
);

const WhisperingScene: React.FC = () => (
    <div className="relative w-full h-full flex items-center justify-center">
        <div className="flex items-end gap-2">
            <Kitten size="md" mood="playful" style={{ transform: 'scaleX(-1)' }} />
            <Goose style={{ transform: 'scaleX(-1)' }} />
        </div>
        <motion.div className="absolute top-8 left-1/2 -translate-x-1/2" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }} >
            <div className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-sm">🤫 psst...</div>
        </motion.div>
    </div>
);

const OldOakScene: React.FC = () => (
    <div className="relative w-full h-full flex items-end justify-center pb-4">
        <OakTree hasHollow className="scale-125" />
        <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-green-800 to-green-600" />
    </div>
);

const TreeHollowScene: React.FC = () => (
    <div className="relative w-full h-full flex items-center justify-center">
        <OakTree hasHollow />
        <motion.div className="absolute" style={{ top: '45%', left: '48%' }} animate={{ rotate: [-5, 5, -5] }} transition={{ duration: 2, repeat: Infinity }} >
            <Kitten size="sm" mood="happy" />
        </motion.div>
    </div>
);

const TeasingMoonScene: React.FC = () => (
    <div className="relative w-full h-full">
        <Moon className="absolute top-4 right-8" />
        <div className="absolute bottom-0 left-0 right-0"><svg viewBox="0 0 200 60" className="w-full"><polygon points="0,60 100,10 200,60" fill="#5c3d2e" /></svg></div>
        <motion.div className="absolute bottom-12 left-1/2 -translate-x-1/2" animate={{ y: [0, -5, 0] }} transition={{ duration: 1.5, repeat: Infinity }} >
            <Kitten size="md" mood="playful" />
        </motion.div>
        <motion.div className="absolute bottom-24 left-1/2 translate-x-2" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 0.5, repeat: Infinity }} >
            <span className="text-2xl">😛</span>
        </motion.div>
    </div>
);

const MoonHidingScene: React.FC = () => (
    <div className="relative w-full h-full">
        <Cloud className="absolute top-4 right-4" />
        <Moon className="absolute top-8 right-8" hiding />
        <motion.div className="absolute bottom-16 left-1/2 -translate-x-1/2" animate={{ rotate: [-3, 3, -3] }} transition={{ duration: 0.5, repeat: Infinity }} >
            <Kitten size="md" mood="happy" />
        </motion.div>
    </div>
);

const MoonSmilingScene: React.FC = () => (
    <div className="relative w-full h-full flex items-center justify-center">
        <Moon className="scale-150" smiling />
        <Cloud className="absolute top-16 left-8 opacity-50" />
    </div>
);

const FlowerGiftScene: React.FC = () => (
    <div className="relative w-full h-full flex items-end justify-center pb-4">
        <OakTree hasHollow className="absolute right-4 scale-75" />
        <motion.div className="absolute bottom-8 left-1/3" animate={{ x: [0, 5, 0] }} transition={{ duration: 2, repeat: Infinity }} >
            <Kitten size="sm" mood="happy" />
        </motion.div>
        <Flower className="absolute bottom-6 left-1/3 translate-x-8" color="#ff6b9d" />
        <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-green-800 to-green-600" />
    </div>
);

const RiverRideScene: React.FC = () => (
    <div className="relative w-full h-full flex items-center justify-center">
        <motion.div className="relative" animate={{ y: [0, -5, 0], rotate: [-2, 2, -2] }} transition={{ duration: 2, repeat: Infinity }} >
            <Goose className="scale-125" />
            <Kitten size="sm" mood="happy" className="absolute -top-8 left-1/2 -translate-x-1/2" />
        </motion.div>
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-amber-700 to-amber-600 rounded-t" />
    </div>
);

const SwimmingScene: React.FC = () => (
    <div className="relative w-full h-full">
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-600 to-blue-400 opacity-80">
            <svg viewBox="0 0 200 20" className="absolute top-0 left-0 right-0 w-full"><path d="M 0 10 Q 25 0 50 10 T 100 10 T 150 10 T 200 10 V 20 H 0 Z" fill="#60a5fa" opacity="0.5" /></svg>
        </div>
        <motion.div className="absolute bottom-20 left-1/2 -translate-x-1/2" animate={{ y: [0, -3, 0], x: [-5, 5, -5] }} transition={{ duration: 2, repeat: Infinity }} >
            <div className="relative"><Goose className="scale-110" /><Kitten size="sm" mood="happy" className="absolute -top-6 left-1/2 -translate-x-1/2" /></div>
        </motion.div>
    </div>
);

const ScaredKidsScene: React.FC = () => (
    <div className="relative w-full h-full flex items-end justify-center pb-8">
        <Kitten size="md" mood="neutral" className="absolute bottom-8 left-1/2 -translate-x-1/2" />
        {[-60, -30, 40, 70].map((offset, i) => (
            <motion.div key={i} className="absolute bottom-8" style={{ left: `calc(50% + ${offset}px)` }} animate={{ x: [0, offset > 0 ? 5 : -5, 0] }} transition={{ duration: 1, repeat: Infinity }} >
                <svg viewBox="0 0 30 50" className="w-8 h-12 opacity-40"><circle cx="15" cy="8" r="7" fill="#666" /><rect x="10" y="15" width="10" height="18" fill="#666" rx="2" /><rect x="8" y="33" width="5" height="15" fill="#666" rx="2" /><rect x="17" y="33" width="5" height="15" fill="#666" rx="2" /></svg>
            </motion.div>
        ))}
    </div>
);

const BraveMashaScene: React.FC = () => (
    <div className="relative w-full h-full flex items-end justify-center pb-8">
        <motion.svg viewBox="0 0 50 80" className="w-16 h-24" animate={{ x: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} >
            <ellipse cx="25" cy="18" rx="14" ry="12" fill="#8b4513" /><ellipse cx="12" cy="22" rx="4" ry="6" fill="#8b4513" /><ellipse cx="38" cy="22" rx="4" ry="6" fill="#8b4513" /><circle cx="25" cy="20" r="10" fill="#fdbf6f" /><circle cx="22" cy="18" r="2" fill="#333" /><circle cx="28" cy="18" r="2" fill="#333" /><path d="M 21 24 Q 25 27 29 24" stroke="#c0392b" strokeWidth="1.5" fill="none" /><path d="M 15 30 L 12 65 L 38 65 L 35 30 Z" fill="#e74c3c" /><ellipse cx="25" cy="30" rx="10" ry="4" fill="#e74c3c" /><rect x="18" y="65" width="5" height="12" fill="#fdbf6f" rx="2" /><rect x="27" y="65" width="5" height="12" fill="#fdbf6f" rx="2" />
        </motion.svg>
        <Kitten size="md" mood="neutral" className="ml-4" />
        <div className="absolute bottom-8 right-8 opacity-40">
            <svg viewBox="0 0 60 40" className="w-16 h-12"><circle cx="15" cy="8" r="6" fill="#666" /><rect x="10" y="14" width="10" height="15" fill="#666" rx="2" /><circle cx="45" cy="8" r="6" fill="#666" /><rect x="40" y="14" width="10" height="15" fill="#666" rx="2" /></svg>
        </div>
    </div>
);

const PettingScene: React.FC = () => (
    <div className="relative w-full h-full flex items-center justify-center">
        <svg viewBox="0 0 50 70" className="w-14 h-20">
            <ellipse cx="25" cy="15" rx="12" ry="10" fill="#8b4513" /><circle cx="25" cy="17" r="9" fill="#fdbf6f" /><circle cx="22" cy="15" r="1.5" fill="#333" /><circle cx="28" cy="15" r="1.5" fill="#333" /><path d="M 22 21 Q 25 24 28 21" stroke="#c0392b" strokeWidth="1.5" fill="none" /><path d="M 15 26 L 13 55 L 37 55 L 35 26 Z" fill="#e74c3c" />
            <motion.path d="M 35 35 Q 50 30 55 40" stroke="#fdbf6f" strokeWidth="5" fill="none" strokeLinecap="round" animate={{ d: ['M 35 35 Q 50 30 55 40', 'M 35 35 Q 50 32 55 38', 'M 35 35 Q 50 30 55 40'] }} transition={{ duration: 1, repeat: Infinity }} />
        </svg>
        <motion.div className="ml-2" animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 0.5, repeat: Infinity }} >
            <Kitten size="md" mood="happy" />
        </motion.div>
        <motion.div className="absolute top-1/3 right-1/4" animate={{ opacity: [0, 1, 0], y: [0, -10] }} transition={{ duration: 1.5, repeat: Infinity }} >
            <span className="text-lg">♪ мур ♪</span>
        </motion.div>
    </div>
);

const KidsApproachingScene: React.FC = () => (
    <div className="relative w-full h-full flex items-end justify-center pb-8">
        <Kitten size="md" mood="happy" className="absolute bottom-8 left-1/2 -translate-x-1/2" />
        {[-50, -25, 25, 50].map((offset, i) => (
            <motion.div key={i} className="absolute bottom-8" style={{ left: `calc(50% + ${offset}px)` }} animate={{ x: [offset > 0 ? 20 : -20, 0] }} transition={{ duration: 2, delay: i * 0.2 }} >
                <svg viewBox="0 0 30 50" className="w-8 h-12" style={{ opacity: 0.7 + i * 0.1 }}><circle cx="15" cy="8" r="7" fill={['#f0b27a', '#aed6f1', '#d5a6bd', '#a9dfbf'][i]} /><rect x="10" y="15" width="10" height="18" fill={['#e74c3c', '#3498db', '#9b59b6', '#27ae60'][i]} rx="2" /><rect x="8" y="33" width="5" height="15" fill={['#fdbf6f', '#fdbf6f', '#fdbf6f', '#fdbf6f'][i]} rx="2" /><rect x="17" y="33" width="5" height="15" fill={['#fdbf6f', '#fdbf6f', '#fdbf6f', '#fdbf6f'][i]} rx="2" /></svg>
            </motion.div>
        ))}
    </div>
);

const PlayingTogetherScene: React.FC = () => (
    <div className="relative w-full h-full">
        <OakTree hasHollow className="absolute right-2 bottom-4 scale-50 opacity-70" />
        <Goose className="absolute left-8 bottom-12 scale-75" />
        <motion.div className="absolute bottom-12 left-1/2 -translate-x-1/2" animate={{ rotate: [-3, 3, -3] }} transition={{ duration: 1, repeat: Infinity }} >
            <Kitten size="md" mood="happy" />
        </motion.div>
        {[-40, 40].map((offset, i) => (
            <motion.svg key={i} viewBox="0 0 30 45" className="w-8 h-12 absolute bottom-10" style={{ left: `calc(50% + ${offset}px)` }} animate={{ y: [0, -5, 0] }} transition={{ duration: 1, repeat: Infinity, delay: i * 0.3 }} >
                <circle cx="15" cy="8" r="6" fill="#fdbf6f" /><rect x="10" y="14" width="10" height="16" fill={i === 0 ? '#3498db' : '#e74c3c'} rx="2" /><rect x="8" y="30" width="5" height="12" fill="#fdbf6f" rx="2" /><rect x="17" y="30" width="5" height="12" fill="#fdbf6f" rx="2" />
            </motion.svg>
        ))}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-green-700 to-green-500" />
    </div>
);

const NightRoofScene: React.FC = () => (
    <div className="relative w-full h-full">
        <Moon className="absolute top-4 right-8" smiling />
        {[...Array(8)].map((_, i) => (
            <motion.div key={i} className="absolute w-1 h-1 bg-white rounded-full" style={{ left: `${10 + i * 12}%`, top: `${15 + (i % 3) * 10}%` }} animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }} />
        ))}
        <div className="absolute bottom-0 left-0 right-0"><svg viewBox="0 0 200 50" className="w-full"><polygon points="0,50 100,5 200,50" fill="#5c3d2e" /></svg></div>
        <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2" animate={{ y: [0, -2, 0] }} transition={{ duration: 3, repeat: Infinity }} >
            <Kitten size="md" mood="happy" />
        </motion.div>
    </div>
);

const SleepingHollowScene: React.FC = () => (
    <div className="relative w-full h-full flex items-center justify-center">
        <OakTree hasHollow />
        <motion.div className="absolute" style={{ top: '44%', left: '47%' }} animate={{ scale: [1, 1.02, 1] }} transition={{ duration: 2, repeat: Infinity }} >
            <svg viewBox="0 0 60 40" className="w-12 h-8">
                <ellipse cx="30" cy="25" rx="20" ry="12" fill="#1a1a1a" /><circle cx="38" cy="18" r="10" fill="#1a1a1a" /><path d="M 34 16 Q 38 14 42 16" stroke="#555" strokeWidth="1" fill="none" /><polygon points="30,10 35,18 28,18" fill="#1a1a1a" /><polygon points="46,10 48,18 41,18" fill="#1a1a1a" /><path d="M 12 25 Q 5 20 8 15" stroke="#1a1a1a" strokeWidth="4" fill="none" strokeLinecap="round" />
            </svg>
        </motion.div>
        <motion.div className="absolute top-1/3 right-1/3" animate={{ opacity: [0, 1, 0], y: [0, -15] }} transition={{ duration: 2, repeat: Infinity }} >
            <span className="text-muted text-lg">💤</span>
        </motion.div>
    </div>
);

const PawHeartScene: React.FC = () => (
    <div className="relative w-full h-full flex items-center justify-center">
        <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity }} ><PrintHeart /></motion.div>
    </div>
);

const WavingByeScene: React.FC = () => (
    <div className="relative w-full h-full flex items-center justify-center">
        <motion.div animate={{ rotate: [-10, 10, -10] }} transition={{ duration: 0.5, repeat: Infinity }} ><Kitten size="xl" mood="happy" /></motion.div>
        <motion.div className="absolute top-1/3 right-1/3" animate={{ rotate: [-20, 20, -20], y: [0, -5, 0] }} transition={{ duration: 0.3, repeat: Infinity }} >
            <span className="text-2xl">👋</span>
        </motion.div>
    </div>
);

const TogetherEndScene: React.FC = () => (
    <div className="relative w-full h-full flex items-end justify-center pb-8 gap-4">
        <OakTree hasHollow className="absolute right-4 bottom-4 scale-50" />
        <motion.div animate={{ y: [0, -3, 0] }} transition={{ duration: 2, repeat: Infinity }} ><Kitten size="md" mood="happy" /></motion.div>
        <motion.div animate={{ y: [0, -3, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.3 }} ><Goose /></motion.div>
        <Flower className="absolute bottom-2 left-8" color="#ff6b9d" />
        <Flower className="absolute bottom-2 left-16" color="#fbbf24" />
        <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-green-700 to-green-500" />
    </div>
);

const DefaultScene: React.FC = () => (
    <div className="relative w-full h-full flex items-center justify-center">
        <Kitten size="lg" mood="neutral" />
    </div>
);

const Illustration: React.FC<IllustrationProps> = ({ type }) => {
  const renderIllustration = () => {
    switch (type) {
      case 'title': return <TitleScene />;
      case 'scared-people': return <ScaredPeopleScene />;
      case 'sad-roof': return <SadRoofScene />;
      case 'crossing-road': return <CrossingRoadScene />;
      case 'waving-cars': return <WavingCarsScene />;
      case 'goose-friend': return <GooseFriendScene />;
      case 'whispering': return <WhisperingScene />;
      case 'old-oak': return <OldOakScene />;
      case 'tree-hollow': return <TreeHollowScene />;
      case 'teasing-moon': return <TeasingMoonScene />;
      case 'moon-hiding': return <MoonHidingScene />;
      case 'moon-smiling': return <MoonSmilingScene />;
      case 'flower-gift': return <FlowerGiftScene />;
      case 'river-ride': return <RiverRideScene />;
      case 'swimming': return <SwimmingScene />;
      case 'scared-kids': return <ScaredKidsScene />;
      case 'brave-masha': return <BraveMashaScene />;
      case 'petting': return <PettingScene />;
      case 'kids-approaching': return <KidsApproachingScene />;
      case 'playing-together': return <PlayingTogetherScene />;
      case 'night-roof': return <NightRoofScene />;
      case 'sleeping-hollow': return <SleepingHollowScene />;
      case 'paw-heart': return <PawHeartScene />;
      case 'waving-bye': return <WavingByeScene />;
      case 'together-end': return <TogetherEndScene />;
      default: return <DefaultScene />;
    }
  };

  return (
    <div className="w-full h-full flex items-center justify-center p-6">
      {renderIllustration()}
    </div>
  );
};

export default Illustration;
