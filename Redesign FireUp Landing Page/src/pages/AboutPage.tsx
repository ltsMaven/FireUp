import { motion } from 'motion/react';
import { Flame, Target, Users, Zap, Award, Rocket, Heart, Play, Instagram } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import aboutUsImage from '../assets/about-us.png';
import { FaTiktok } from 'react-icons/fa';

import productVideo2 from '../assets/product-video-2.mov';
import productVideo3 from '../assets/product-video-3.mov';
import productVideo4 from '../assets/product-video-4.mov';


export function AboutPage() {

    const contentShowcase = [
    { video: productVideo2 },
    { video: productVideo3 },
    { video: productVideo4 },
  ];

  const timeline = [
    { year: '2024', title: 'The Foundation', description: 'Fire Up established its presence in the energy drink market with our signature zero-sugar formula and bold brand identity.' },
    { year: '2025', title: 'Explosive Growth', description: 'Currently expanding nationwide with 1,000+ retail locations. Launched our new Tropical Thunder flavor and hit 10 million cans sold milestone.' },
    { year: '2026', title: 'Global Domination', description: 'Planning international expansion to 15+ countries. New product lines and revolutionary packaging innovations on the horizon.' },
  ];

  const values = [
    {
      icon: Flame,
      title: 'Passion First',
      description: 'We\'re obsessed with creating the best energy drink. Every detail matters.',
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: Heart,
      title: 'Health Conscious',
      description: 'Zero sugar, natural ingredients. Fuel your body right without the crash.',
      color: 'from-red-500 to-pink-600'
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Built by athletes, for athletes. Your feedback shapes our future.',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: Zap,
      title: 'Performance Focused',
      description: 'Engineered for peak performance. Every ingredient has a purpose.',
      color: 'from-yellow-500 to-orange-600'
    },
  ];

  const stats = [
    { icon: Users, value: '50K+', label: 'Happy Customers' },
    { icon: Award, value: '15+', label: 'Industry Awards' },
    { icon: Rocket, value: '10M+', label: 'Cans Sold' },
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
              About Fire Up
            </Badge>
            <h1 className="text-5xl md:text-7xl uppercase mb-6 text-white">
              Fueling <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Champions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              We're not just an energy drink company. We're a movement of dreamers, doers, and game-changers who refuse to settle for anything less than extraordinary.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16 justify-items-center"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card
                  key={index}
                  className="bg-gradient-to-br from-white/5 to-white/[0.02] border-white/10 p-6 text-center"
                >
                  <Icon className="w-8 h-8 text-orange-400 mx-auto mb-3" />
                  <div className="text-3xl bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </Card>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30 mb-4">
                Our Story
              </Badge>
              <h2 className="text-4xl md:text-5xl text-white uppercase mb-6">
                Born from <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Passion</span>
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                Founded in 2024, Fire Up was built off the backend of a dream two 19 year old boys. To build muscle and look good. Struggling to maintain energy throughout the day and hit protein intake targets. Fire Up was born to tackle this, through natural energy, reliable protein sources﻿ and countless nutritious ingredients. Everyone can now build their dream body and look how they desire. Everything you want in life can be achieved in a can of Fire Up.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden max-w-md w-full">
                <img
                  src={aboutUsImage}
                  alt="Team"
                  className="w-full h-auto rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Our Values
            </Badge>
            <h2 className="text-4xl md:text-5xl text-white uppercase mb-4">
              What We Stand For
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              These aren't just words on a wall. They're the principles that guide every decision we make.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="bg-gradient-to-br from-white/5 to-white/[0.02] border-white/10 p-6 hover:border-orange-500/30 transition-all duration-300 h-full">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${value.color} flex items-center justify-center mb-4`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-white mb-2">{value.title}</h3>
                    <p className="text-gray-400 text-sm">{value.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30 mb-4">
              Our Journey
            </Badge>
            <h2 className="text-4xl md:text-5xl text-white uppercase mb-4">
              The Fire Up Timeline
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              From a garage startup to a global movement. Here's how we got here.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative mb-12 last:mb-0"
              >
                <div className="flex items-start gap-6">
                  {/* Year Badge */}
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                      <span className="text-white">{item.year}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <Card className="flex-1 bg-gradient-to-br from-white/5 to-white/[0.02] border-white/10 p-6 hover:border-orange-500/30 transition-all">
                    <h3 className="text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </Card>
                </div>

                {/* Connecting Line */}
                {index < timeline.length - 1 && (
                  <div className="absolute left-10 top-20 w-0.5 h-12 bg-gradient-to-b from-orange-500 to-transparent"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30 mb-4">
              Our Content
            </Badge>

            <h2 className="text-4xl md:text-5xl text-white uppercase mb-4">
              Fire Up in Action
            </h2>

            <p className="text-gray-400 max-w-2xl mx-auto">
              See Fire Up in motion – real cans, real energy, real people.
            </p>

            <div className="mt-6 flex justify-center mt-4">
              <a
                href="https://www.instagram.com/drinkfireup"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-white/5 hover:bg-orange-500/20 rounded-full flex items-center justify-center text-white hover:text-orange-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.tiktok.com/@drinkfireup"
                target="_blank"
                rel="noreferrer"
                aria-label="Fire Up on TikTok"
                className="w-10 h-10 bg-white/5 hover:bg-orange-500/20 rounded-full flex items-center justify-center text-white hover:text-orange-400 transition-colors"
              >
                <FaTiktok className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contentShowcase.map((content, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl"
              >
                <Card
                  className="bg-gradient-to-br from-white/5 to-white/[0.02] border-white/10 overflow-hidden hover:border-orange-500/30 transition-all duration-300 cursor-pointer"
                  style={{ aspectRatio: '9/16' }}
                >
                  <div className="relative h-full overflow-hidden">
                    {/* PRODUCT VIDEO */}
                    <video
                      src={content.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* subtle dark overlay for contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />

                    {/* hover play icon only (no caption text) */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-14 h-14 rounded-full bg-orange-500/85 flex items-center justify-center backdrop-blur-sm">
                        <Play className="w-7 h-7 text-white ml-1" fill="white" />
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section with Image */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGFkdmVudHVyZXxlbnwxfHx8fDE3NjAzMzUyNzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Mission"
                  className="w-full h-auto rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-8 h-8 text-orange-400" />
                <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30">
                  Our Mission
                </Badge>
              </div>
              <h2 className="text-4xl md:text-5xl text-white uppercase mb-6">
                Empowering <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Dreams</span>
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Our mission is simple: empower people to achieve their biggest dreams by providing clean, sustained energy that actually works.
                </p>
                <p>
                  We believe that what you put in your body matters. That's why every can of Fire Up is crafted with premium ingredients, zero sugar, and a relentless commitment to quality.
                </p>
                <p>
                  Whether you're an athlete chasing gold, an entrepreneur building the next big thing, or a student pulling an all-nighter – Fire Up is here to fuel your journey.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 via-red-600/20 to-yellow-600/20 blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-6xl text-white uppercase mb-6">
              Join the <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Movement</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Be part of a community that's redefining what's possible. Your journey starts now.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
