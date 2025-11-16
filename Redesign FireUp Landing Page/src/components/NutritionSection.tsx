import { motion } from 'motion/react';
import { Card } from './ui/card';

export function NutritionSection() {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border-orange-500/20 p-8">
            <h3 className="text-2xl text-white mb-6 text-center">Nutrition Facts</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <div className="flex justify-between text-white border-b border-white/10 pb-2">
                  <span>Serving Size</span>
                  <span>1 Can (355ml)</span>
                </div>
                <div className="flex justify-between text-white border-b border-white/10 pb-2">
                  <span>Calories</span>
                  <span>5</span>
                </div>
                <div className="flex justify-between text-white border-b border-white/10 pb-2">
                  <span>Total Sugar</span>
                  <span>0g</span>
                </div>
                <div className="flex justify-between text-white border-b border-white/10 pb-2">
                  <span>Caffeine</span>
                  <span>200mg</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-white border-b border-white/10 pb-2">
                  <span>Vitamin B6</span>
                  <span>100% DV</span>
                </div>
                <div className="flex justify-between text-white border-b border-white/10 pb-2">
                  <span>Vitamin B12</span>
                  <span>100% DV</span>
                </div>
                <div className="flex justify-between text-white border-b border-white/10 pb-2">
                  <span>Taurine</span>
                  <span>1000mg</span>
                </div>
                <div className="flex justify-between text-white border-b border-white/10 pb-2">
                  <span>L-Carnitine</span>
                  <span>50mg</span>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
