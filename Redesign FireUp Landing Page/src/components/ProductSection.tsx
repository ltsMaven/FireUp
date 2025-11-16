import { motion } from 'motion/react';
import { ShoppingCart, Star, Package, Shield, Zap } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card } from './ui/card';
import { useState } from 'react';

interface ProductSectionProps {
  onAddToCart: (quantity: number) => void;
}

export function ProductSection({ onAddToCart }: ProductSectionProps) {
  const [quantity, setQuantity] = useState(1);
  const [selectedPack, setSelectedPack] = useState<'single' | 'pack6' | 'pack12'>('single');

  const packs = {
    single: { price: 3.99, cans: 1, savings: 0 },
    pack6: { price: 21.99, cans: 6, savings: 10 },
    pack12: { price: 39.99, cans: 12, savings: 20 },
  };

  const currentPack = packs[selectedPack];
  const pricePerCan = currentPack.price / currentPack.cans;

  const handleAddToCart = () => {
    onAddToCart(quantity * currentPack.cans);
  };

  return (
    <section id="product" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30 mb-4">
            Premium Energy
          </Badge>
          <h2 className="text-4xl md:text-5xl text-white uppercase mb-4">Fire Up Energy Drink</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            355ml of pure energy. Zero sugar, maximum performance.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-3xl p-12 border border-orange-500/20">
              <img 
                src="https://images.unsplash.com/photo-1741519735476-cfc8bf0b2ae4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmVyZ3klMjBkcmluayUyMGNhbnxlbnwxfHx8fHwxNzYwMjcwNzQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Fire Up Can 355ml"
                className="w-full max-w-sm mx-auto drop-shadow-2xl"
              />
              
              {/* Floating badge */}
              <div className="absolute top-8 right-8 bg-yellow-400 text-black px-4 py-2 rounded-full rotate-12">
                <span className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-current" />
                  <span>Best Seller</span>
                </span>
              </div>
            </div>
          </motion.div>

          {/* Product Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="text-gray-400">(2,847 reviews)</span>
              </div>
              
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-4xl text-white">${currentPack.price.toFixed(2)}</span>
                {currentPack.savings > 0 && (
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                    Save {currentPack.savings}%
                  </Badge>
                )}
              </div>
              
              <p className="text-gray-400">
                ${pricePerCan.toFixed(2)} per can · 355ml
              </p>
            </div>

            {/* Pack Selection */}
            <div>
              <label className="text-white mb-3 block">Choose Your Pack</label>
              <div className="grid grid-cols-3 gap-3">
                <button
                  onClick={() => setSelectedPack('single')}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    selectedPack === 'single'
                      ? 'border-orange-500 bg-orange-500/10'
                      : 'border-white/10 hover:border-white/20 bg-white/5'
                  }`}
                >
                  <div className="text-white">Single</div>
                  <div className="text-sm text-gray-400">1 Can</div>
                </button>
                <button
                  onClick={() => setSelectedPack('pack6')}
                  className={`p-4 rounded-lg border-2 transition-all relative ${
                    selectedPack === 'pack6'
                      ? 'border-orange-500 bg-orange-500/10'
                      : 'border-white/10 hover:border-white/20 bg-white/5'
                  }`}
                >
                  {packs.pack6.savings > 0 && (
                    <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">
                      -10%
                    </div>
                  )}
                  <div className="text-white">6-Pack</div>
                  <div className="text-sm text-gray-400">6 Cans</div>
                </button>
                <button
                  onClick={() => setSelectedPack('pack12')}
                  className={`p-4 rounded-lg border-2 transition-all relative ${
                    selectedPack === 'pack12'
                      ? 'border-orange-500 bg-orange-500/10'
                      : 'border-white/10 hover:border-white/20 bg-white/5'
                  }`}
                >
                  {packs.pack12.savings > 0 && (
                    <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">
                      -20%
                    </div>
                  )}
                  <div className="text-white">12-Pack</div>
                  <div className="text-sm text-gray-400">12 Cans</div>
                </button>
              </div>
            </div>

            {/* Quantity */}
            <div>
              <label className="text-white mb-3 block">Quantity</label>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-white/20 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 bg-white/5 hover:bg-white/10 text-white transition-colors"
                  >
                    -
                  </button>
                  <span className="px-6 text-white">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 bg-white/5 hover:bg-white/10 text-white transition-colors"
                  >
                    +
                  </button>
                </div>
                <span className="text-gray-400">
                  {quantity * currentPack.cans} can{quantity * currentPack.cans > 1 ? 's' : ''} total
                </span>
              </div>
            </div>

            {/* Add to Cart Button */}
            <Button
              onClick={handleAddToCart}
              size="lg"
              className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 group"
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              Add to Cart - ${(currentPack.price * quantity).toFixed(2)}
            </Button>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <Card className="bg-white/5 border-white/10 p-4 text-center">
                <Package className="w-6 h-6 text-orange-400 mx-auto mb-2" />
                <div className="text-xs text-gray-400">Free Shipping</div>
              </Card>
              <Card className="bg-white/5 border-white/10 p-4 text-center">
                <Shield className="w-6 h-6 text-orange-400 mx-auto mb-2" />
                <div className="text-xs text-gray-400">Secure Payment</div>
              </Card>
              <Card className="bg-white/5 border-white/10 p-4 text-center">
                <Zap className="w-6 h-6 text-orange-400 mx-auto mb-2" />
                <div className="text-xs text-gray-400">Fast Delivery</div>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
