
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Copy, Check, MessageCircle, Send } from 'lucide-react';

interface ShareModalProps {
  onClose: () => void;
}

const ShareModal: React.FC<ShareModalProps> = ({ onClose }) => {
  const [copied, setCopied] = useState(false);

  const shareUrl = window.location.href;
  const shareText = 'Прочитай добрую сказку про чёрного котёнка! 🐱✨';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleTelegramShare = () => {
    const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`;
    window.open(telegramUrl, '_blank');
  };

  const handleWhatsAppShare = () => {
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`;
    window.open(whatsappUrl, '_blank');
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
        className="bg-surface rounded-3xl p-6 w-full max-w-sm shadow-2xl border border-border/50"
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-foreground">Поделиться сказкой</h3>
          <motion.button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-background/50 text-muted hover:text-foreground transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <X className="w-5 h-5" />
          </motion.button>
        </div>

        <div className="space-y-3">
          <motion.button
            onClick={handleTelegramShare}
            className="w-full flex items-center gap-3 p-4 rounded-xl bg-[#0088cc] text-white font-medium hover:bg-[#0077b5] transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Send className="w-5 h-5" />
            <span>Отправить в Telegram</span>
          </motion.button>

          <motion.button
            onClick={handleWhatsAppShare}
            className="w-full flex items-center gap-3 p-4 rounded-xl bg-[#25D366] text-white font-medium hover:bg-[#20bd5a] transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <MessageCircle className="w-5 h-5" />
            <span>Отправить в WhatsApp</span>
          </motion.button>

          <motion.button
            onClick={handleCopy}
            className="w-full flex items-center gap-3 p-4 rounded-xl bg-background border border-border text-foreground font-medium hover:border-primary transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {copied ? (
              <>
                <Check className="w-5 h-5 text-success" />
                <span className="text-success">Скопировано!</span>
              </>
            ) : (
              <>
                <Copy className="w-5 h-5" />
                <span>Скопировать ссылку</span>
              </>
            )}
          </motion.button>
        </div>

        <div className="mt-6 p-4 bg-background/50 rounded-xl">
          <p className="text-sm text-muted mb-2">Превью:</p>
          <p className="text-foreground font-medium">{shareText}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ShareModal;
