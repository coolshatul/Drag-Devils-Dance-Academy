import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Heart, Target, Star, Calendar } from 'lucide-react';

const About = () => {
  const achievements = [
    { icon: Award, title: 'Best Dance Academy 2023', description: 'Maharashtra State Award' },
    { icon: Users, title: '500+ Students Trained', description: 'Across all dance styles' },
    { icon: Star, title: '15+ Competition Wins', description: 'State and national level' },
    { icon: Calendar, title: '5+ Years Experience', description: 'Professional dance education' }
  ];

  const instructors = [
    {
      name: 'Arjun Mehta',
      specialization: 'Hip Hop & Street Dance',
      experience: '8 years',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Former Mumbai dance crew member with international competition experience.'
    },
    {
      name: 'Kavya Sharma',
      specialization: 'Bollywood & Classical',
      experience: '6 years',
      image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Trained classical dancer with expertise in modern Bollywood choreography.'
    },
    {
      name: 'Rohan Patel',
      specialization: 'Contemporary & Jazz',
      experience: '7 years',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Contemporary dance specialist with performance background in theater.'
    },
    {
      name: 'Maria Rodriguez',
      specialization: 'Salsa & Latin Dance',
      experience: '5 years',
      image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'International Salsa champion bringing authentic Latin dance culture.'
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Passion',
      description: 'We believe dance is a form of expression that comes from the heart. Every class is infused with passion and energy.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building a supportive community where dancers of all levels can grow together and inspire each other.'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'Committed to providing the highest quality dance education with professional instruction and techniques.'
    },
    {
      icon: Star,
      title: 'Growth',
      description: 'Fostering personal and artistic growth in every student through challenging and rewarding dance experiences.'
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
              About <span className="text-red-500">Drag Devils</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Where passion meets precision, and every step tells a story. 
              Discover the journey that made us Maharashtra's premier dance academy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Our <span className="text-red-500">Story</span>
              </h2>
              <p className="text-gray-300 mb-6 text-lg">
                Founded in 2019 with a vision to revolutionize dance education in Maharashtra, 
                Drag Devils was born from the belief that every person has a dancer within them waiting to be unleashed.
              </p>
              <p className="text-gray-300 mb-6">
                What started as a small studio in Virar East has grown into a thriving academy that has trained over 500 students 
                and won numerous state and national level competitions. Our unique approach combines traditional techniques with 
                contemporary training methods.
              </p>
              <p className="text-gray-300">
                Today, we're not just a dance academy - we're a community of passionate dancers who believe in the transformative 
                power of movement. Every class, every performance, every competition is an opportunity to discover your inner devil 
                and express it through dance.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/1701195/pexels-photo-1701195.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Dance studio"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-900/50 to-transparent rounded-lg"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-red-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Achievements
            </h2>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">
              Recognition and milestones that showcase our commitment to excellence in dance education.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <achievement.icon className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Our <span className="text-red-500">Values</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The core principles that guide everything we do at Drag Devils.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-900 rounded-lg p-6 text-center hover:bg-gray-800 transition-all duration-300"
              >
                <value.icon className="h-12 w-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructors */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Meet Our <span className="text-red-500">Instructors</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional dancers and choreographers who bring years of experience and passion to every class.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {instructors.map((instructor, index) => (
              <motion.div
                key={instructor.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-black rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={instructor.image}
                  alt={instructor.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{instructor.name}</h3>
                  <p className="text-red-500 font-medium mb-2">{instructor.specialization}</p>
                  <p className="text-gray-400 text-sm mb-3">{instructor.experience} experience</p>
                  <p className="text-gray-300 text-sm">{instructor.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-gradient-to-r from-red-900 to-red-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Our Mission
            </h2>
            <p className="text-2xl text-red-100 max-w-4xl mx-auto leading-relaxed">
              "To create a space where every individual can discover their unique dance voice, 
              build confidence, and express their inner artist through the transformative power of movement."
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;