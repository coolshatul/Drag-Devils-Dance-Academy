import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Users, Trophy, Heart } from 'lucide-react';

const Services = () => {
  const danceStyles = [
    {
      name: 'Hip Hop',
      description: 'Master the urban beats with our comprehensive Hip Hop program. Learn breaking, popping, locking, and the latest street dance moves.',
      image: 'https://images.pexels.com/photos/1701195/pexels-photo-1701195.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Breaking & Popping', 'Street Dance', 'Choreography', 'Battles & Competitions'],
      duration: '3 months',
      level: 'Beginner to Advanced'
    },
    {
      name: 'Bollywood',
      description: 'Experience the vibrancy of Indian cinema through our Bollywood dance classes. Classical meets contemporary in explosive routines.',
      image: 'https://images.pexels.com/photos/3762673/pexels-photo-3762673.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Classical Fusion', 'Movie Choreography', 'Cultural Dance', 'Performance Training'],
      duration: '2 months',
      level: 'All Levels'
    },
    {
      name: 'Contemporary',
      description: 'Express your emotions through fluid movements and storytelling. Our contemporary classes focus on technique and artistic expression.',
      image: 'https://images.pexels.com/photos/209948/pexels-photo-209948.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Modern Technique', 'Floor Work', 'Improvisation', 'Emotional Expression'],
      duration: '4 months',
      level: 'Intermediate'
    },
    {
      name: 'Salsa',
      description: 'Feel the Latin rhythm with our passionate Salsa classes. Partner work, solo moves, and the joy of Latin dance culture.',
      image: 'https://images.pexels.com/photos/2043934/pexels-photo-2043934.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Partner Dancing', 'Solo Techniques', 'Latin Rhythms', 'Social Dancing'],
      duration: '6 weeks',
      level: 'Beginner Friendly'
    }
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Bollywood Student',
      content: 'The energy at Drag Devils is incredible! The instructors push you to be your best while making learning fun.',
      image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Rahul Patel',
      role: 'Hip Hop Student',
      content: 'I never thought I could dance, but the supportive environment here helped me discover my passion.',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Sneha Gupta',
      role: 'Contemporary Student',
      content: 'The contemporary classes have helped me express myself in ways I never knew possible.',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-black via-red-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
              Our Dance <span className="text-red-500">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover your rhythm with our comprehensive dance programs designed for all skill levels. 
              From street dance to classical fusion, we have something for every dancer.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Dance Styles Grid */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {danceStyles.map((style, index) => (
              <motion.div
                key={style.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group bg-gray-900 rounded-lg overflow-hidden hover:bg-gray-800 transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={style.image}
                    alt={style.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-2xl font-bold text-white">{style.name}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-300 mb-4">{style.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-5 w-5 text-red-500" />
                      <span className="text-sm text-gray-400">{style.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-5 w-5 text-red-500" />
                      <span className="text-sm text-gray-400">{style.level}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">What You'll Learn:</h4>
                    <ul className="space-y-2">
                      {style.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <Trophy className="h-4 w-4 text-red-500" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2">
                    <span>Explore More</span>
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-red-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              What Our Students Say
            </h2>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">
              Hear from our amazing students about their transformative journey with us.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 text-center"
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
                />
                <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                <p className="text-sm text-red-600">{testimonial.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <Heart className="h-16 w-16 text-red-500 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-4">
              Find Your Perfect Dance Style
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Still not sure which style is right for you? Contact us for a free consultation 
              and let us help you discover your passion.
            </p>
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2">
              <span>Schedule Free Consultation</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;