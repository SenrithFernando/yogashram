import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from 'lucide-react'
import { LotusFlower } from './illustrations/Decorations'
export function Footer() {
  return (
    <footer className="bg-sage-50 pt-20 pb-10 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-5">
        <LotusFlower className="absolute -top-20 -left-20 w-96 h-96 text-sage-300" />
        <LotusFlower className="absolute bottom-0 right-0 w-64 h-64 text-sage-300" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-sage-300 flex items-center justify-center">
                <span className="text-white font-bold">Y</span>
              </div>
              <span className="text-xl font-display font-bold text-sage-600">
                YogaInstitute
              </span>
            </Link>
            <p className="text-gray-600 leading-relaxed">
              Cultivating mindfulness, strength, and community through the
              ancient practice of yoga. Join us on the mat.
            </p>
          </div>

          <div>
            <h3 className="font-display font-bold text-sage-600 mb-6">
              Explore
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/classes"
                  className="text-gray-600 hover:text-sage-400 transition-colors"
                >
                  Classes
                </Link>
              </li>
              <li>
                <Link
                  to="/instructors"
                  className="text-gray-600 hover:text-sage-400 transition-colors"
                >
                  Instructors
                </Link>
              </li>
              <li>
                <Link
                  to="/articles"
                  className="text-gray-600 hover:text-sage-400 transition-colors"
                >
                  Articles
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-600 hover:text-sage-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-sage-600 mb-6">
              Contact
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-sage-400 shrink-0" />
                <span>
                  123 Serenity Lane,
                  <br />
                  Wellness Valley, CA 90210
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-sage-400 shrink-0" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-sage-400 shrink-0" />
                <span>hello@yogainstitute.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-sage-600 mb-6">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-sage-400 hover:bg-sage-300 hover:text-white transition-all shadow-sm"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-sage-400 hover:bg-sage-300 hover:text-white transition-all shadow-sm"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-sage-400 hover:bg-sage-300 hover:text-white transition-all shadow-sm"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-sage-200 pt-8 text-center text-gray-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Yoga Institute. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
