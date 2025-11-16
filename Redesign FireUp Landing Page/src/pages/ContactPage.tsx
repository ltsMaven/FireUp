import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Headphones } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { useState } from 'react';
import { toast } from 'sonner@2.0.3';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    toast.success('Message sent! We\'ll get back to you within 24 hours.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      detail: 'support@fireup.com',
      description: 'Send us an email anytime',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Phone,
      title: 'Call Us',
      detail: '+1 (555) 123-4567',
      description: 'Mon-Fri from 8am to 6pm',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      detail: '123 Energy Street, LA, CA 90028',
      description: 'Come say hi at our HQ',
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: Clock,
      title: 'Response Time',
      detail: '24 Hours',
      description: 'Average response time',
      color: 'from-purple-500 to-pink-600'
    },
  ];

  const faqs = [
    {
      question: 'What is the shipping time?',
      answer: 'We offer free shipping on orders over $50. Standard shipping takes 3-5 business days, while express shipping takes 1-2 business days.'
    },
    {
      question: 'Is Fire Up suitable for daily consumption?',
      answer: 'Yes! Fire Up is formulated with natural ingredients and zero sugar. However, we recommend limiting caffeine intake to 400mg per day (2 cans).'
    },
    {
      question: 'Do you offer bulk orders?',
      answer: 'Absolutely! We offer special pricing for bulk orders. Contact us at wholesale@fireup.com for more information.'
    },
    {
      question: 'What is your return policy?',
      answer: 'We offer a 30-day money-back guarantee. If you\'re not satisfied with your purchase, contact us for a full refund.'
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative pt-44 pb-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-red-900/20 via-black to-black"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30 mb-6">
              Get In Touch
            </Badge>
            <h1 className="text-5xl md:text-7xl uppercase mb-6 text-white">
              Let's <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Connect</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Have questions? Want to partner with us? We're here to help. Reach out and let's ignite something amazing together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-20">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="bg-gradient-to-br from-white/5 to-white/[0.02] border-white/10 p-6 hover:border-orange-500/30 transition-all duration-300 h-full text-center">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center mx-auto mb-4`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-white mb-2">{method.title}</h3>
                    <p className="text-orange-400 mb-2">{method.detail}</p>
                    <p className="text-gray-400 text-sm">{method.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Contact Form & Info Grid */}
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="bg-gradient-to-br from-white/5 to-white/[0.02] border-white/10 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <MessageSquare className="w-6 h-6 text-orange-400" />
                  <h2 className="text-white text-2xl uppercase">Send us a Message</h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-white mb-2 block">Name</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-white/5 border-white/20 text-white placeholder:text-gray-500 focus:border-orange-500"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-white mb-2 block">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-white/5 border-white/20 text-white placeholder:text-gray-500 focus:border-orange-500"
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-white mb-2 block">Subject</Label>
                    <Input
                      id="subject"
                      type="text"
                      placeholder="How can we help?"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                      className="bg-white/5 border-white/20 text-white placeholder:text-gray-500 focus:border-orange-500"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-white mb-2 block">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us more..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      className="bg-white/5 border-white/20 text-white placeholder:text-gray-500 focus:border-orange-500 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 group"
                  >
                    <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </Button>
                </form>
              </Card>
            </motion.div>

            {/* Support Info & Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Support Card */}
              <Card className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border-orange-500/20 p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Headphones className="w-6 h-6 text-orange-400" />
                  <h3 className="text-white text-xl">Customer Support</h3>
                </div>
                <div className="space-y-4 text-gray-300">
                  <p>
                    Our dedicated support team is here to help you with any questions or concerns.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2"></div>
                      <p className="text-sm">Live chat available 24/7</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2"></div>
                      <p className="text-sm">Email response within 24 hours</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2"></div>
                      <p className="text-sm">Phone support Mon-Fri 8am-6pm PST</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2"></div>
                      <p className="text-sm">Social media support on all platforms</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMHNlcnZpY2UlMjBzdXBwb3J0fGVufDF8fHx8MTc2MDMzNTY1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Customer Support"
                  className="w-full h-64 object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30 mb-4">
              FAQ
            </Badge>
            <h2 className="text-4xl md:text-5xl text-white uppercase mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Quick answers to questions you may have. Can't find what you're looking for? Contact us directly.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-gradient-to-br from-white/5 to-white/[0.02] border-white/10 p-6 hover:border-orange-500/30 transition-all duration-300 h-full">
                  <h3 className="text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-400 text-sm">{faq.answer}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="bg-gradient-to-br from-white/5 to-white/[0.02] border-white/10 p-8 text-center">
              <MapPin className="w-12 h-12 text-orange-400 mx-auto mb-4" />
              <h2 className="text-white text-2xl uppercase mb-4">Visit Our Headquarters</h2>
              <p className="text-gray-300 mb-2">123 Energy Street, Los Angeles, CA 90028</p>
              <p className="text-gray-400 text-sm mb-6">Open Monday - Friday, 9am - 5pm PST</p>
              
              {/* Map Placeholder */}
              <div className="w-full h-64 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-xl border border-orange-500/20 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-orange-400 mx-auto mb-2" />
                  <p className="text-gray-400">Map Integration</p>
                  <p className="text-gray-500 text-sm">Interactive map would go here</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
