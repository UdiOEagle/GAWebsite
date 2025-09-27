'use client'

import React, { useState } from 'react';
import { ChevronDown, Mail, Phone, MapPin, Calendar, Users, BookOpen, Award, ExternalLink } from 'lucide-react';

const FGCUWebsite = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-emerald-800 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-15 h-15 bg-white rounded-full flex items-center justify-center">
                <span className="text-emerald-800 font-bold text-xl">FGCU</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold">Florida Gulf Coast University</h1>
                <p className="text-emerald-200">Excellence in Research & Education</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-emerald-700 text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-8">
            <a href="#" className="py-4 px-2 hover:bg-emerald-600 transition-colors">Home</a>
            <a href="#" className="py-4 px-2 hover:bg-emerald-600 transition-colors">People</a>
            <a href="#" className="py-4 px-2 hover:bg-emerald-600 transition-colors">Projects</a>
            <a href="#" className="py-4 px-2 hover:bg-emerald-600 transition-colors">Event</a>
            <a href="#" className="py-4 px-2 hover:bg-emerald-600 transition-colors">Publications</a>
            <a href="#" className="py-4 px-2 hover:bg-emerald-600 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      {/* <section className="bg-gradient-to-r from-cyan-500 to-emerald-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Advancing Knowledge Through Innovation
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join us in groundbreaking research that shapes the future of education, technology, and sustainable development in Southwest Florida and beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-emerald-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Explore Research
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-emerald-700 transition-colors">
              Apply Now
            </button>
          </div>
        </div>
      </section> */}

      {/* Main Content */}
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Latest News */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Home</h2>
              <div className="space-y-6">

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>


              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-bold mb-4">Contact Information</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>10501 FGCU Blvd S, Fort Myers, FL 33965</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>(xxx) xxx-xxxx</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>xxxxxxxxxx@fgcu.edu</span>
                </div>

              </div>
            </div>


            <div>
              <h4 className="text-lg font-bold mb-4">Connect</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-300 hover:text-white">Facebook</a>
                <a href="#" className="block text-gray-300 hover:text-white">Twitter</a>
                <a href="#" className="block text-gray-300 hover:text-white">Instagram</a>
                <a href="#" className="block text-gray-300 hover:text-white">Linkedin</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-300">© 2025 Florida Gulf Coast University. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FGCUWebsite;