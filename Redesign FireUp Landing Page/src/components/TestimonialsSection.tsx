import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { Card } from './ui/card';
import { Avatar, AvatarFallback } from './ui/avatar';

export function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Alex Rodriguez',
      role: 'Professional Athlete',
      avatar: 'AR',
      rating: 5,
      text: 'Fire Up is my go-to before every game. The energy boost is incredible and it doesn\'t give me the jitters like other brands.',
      image: 'https://images.unsplash.com/photo-1511264568880-afe3b1951e46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleHRyZW1lJTIwc3BvcnRzJTIwYWN0aW9ufGVufDF8fHx8MTc2MDMzMDUxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      name: 'Sarah Chen',
      role: 'Fitness Instructor',
      avatar: 'SC',
      rating: 5,
      text: 'I recommend Fire Up to all my clients. Zero sugar, great taste, and the perfect energy kick for intense workouts.',
      image: 'https://images.unsplash.com/photo-1753990872573-5a6cb5716973?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdGhsZXRpYyUyMHdvcmtvdXQlMjBlbmVyZ3l8ZW58MXx8fHwxNzYwMzMwNTE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      name: 'Marcus Johnson',
      role: 'Entrepreneur',
      avatar: 'MJ',
      rating: 5,
      text: 'Long work days need serious fuel. Fire Up keeps me sharp and focused without the sugar crash. Game changer!',
      image: ''
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white uppercase mb-4">
            What People Are Saying
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Join thousands of satisfied customers who've made Fire Up their energy drink of choice.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-gradient-to-br from-white/5 to-white/[0.02] border-white/10 p-6 hover:border-orange-500/30 transition-all duration-300 h-full flex flex-col">
                <Quote className="w-8 h-8 text-orange-400 mb-4" />
                
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-300 mb-6 flex-grow">"{testimonial.text}"</p>

                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback className="bg-gradient-to-br from-orange-500 to-red-600 text-white">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
