import { motion } from 'motion/react';
import { ArrowRight, Volume2, VolumeX, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { useState, useRef, useEffect } from 'react';

interface VideoHeroSectionProps {
  onShopNow: () => void;
  onDiscoverMore: () => void;

}

export function VideoHeroSection({ onShopNow, onDiscoverMore }: VideoHeroSectionProps) {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Auto-play video
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log('Auto-play prevented:', error);
      });
    }
  }, []);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Full Screen Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          muted={isMuted}
          loop
          playsInline
          autoPlay
          poster="https://images.unsplash.com/photo-1741519735476-cfc8bf0b2ae4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmVyZ3klMjBkcmluayUyMGNhbnxlbnwxfHx8fHwxNzYwMjcwNzQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        >
          {/* Using a sample video - replace with your actual Fire Up brand video */}
          <source
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
            type="video/mp4"
          />
        </video>
        
        {/* Dark overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Centered Content Overlay */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Logo/Brand */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="flex justify-center mb-8"
            >
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-br from-red-500 via-orange-500 to-yellow-500 rounded-3xl flex items-center justify-center shadow-2xl">
                  <span className="text-white text-5xl">F</span>
                </div>
                <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-pulse"></div>
              </div>
            </motion.div>

            <h1
              className="text-6xl md:text-8xl lg:text-9xl uppercase tracking-tight text-white drop-shadow-2xl"
              style={{ fontWeight: 700 }} 
            >
              <span className="block mb-2">Fire Up</span>
            </h1>
            
            <p className="text-xl md:text-3xl text-white/90 max-w-3xl mx-auto drop-shadow-lg uppercase tracking-widest">
              The world is yours
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4 justify-center pt-8"
            >
              <Button 
                onClick={onShopNow}
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 group text-lg px-8 py-6"
              >
                Shop Now
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button
                size="lg"
                variant="default"
                className="bg-orange-500 text-white hover:bg-orange-600 shadow-lg text-lg px-8 py-6"
                onClick={onDiscoverMore}
              >
                Discover More
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Volume Control Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-8 z-20"
      >
        <Button
          onClick={toggleMute}
          variant="ghost"
          size="icon"
          className="text-white hover:bg-white/20 bg-black/30 backdrop-blur-sm border border-white/20"
        >
          {isMuted ? (
            <VolumeX className="w-5 h-5" />
          ) : (
            <Volume2 className="w-5 h-5" />
          )}
        </Button>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => document.getElementById('product')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="text-white/80 text-sm uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 text-white/80" />
        </motion.div>
      </motion.div>
    </section>
  );
}
