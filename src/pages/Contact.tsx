import { motion } from 'framer-motion'
import { Button } from '../components/ui/Button'
import { MeditationFigure } from '../components/illustrations/MeditationFigure'
export function Contact() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.6,
            }}
          >
            <h1 className="text-5xl font-display font-bold text-gray-900 mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600 mb-10">
              Have questions about our classes or want to book a private
              session? We'd love to hear from you.
            </p>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-sage-300 focus:ring-2 focus:ring-sage-100 outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-sage-300 focus:ring-2 focus:ring-sage-100 outline-none transition-all"
                    placeholder="hello@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="text-sm font-medium text-gray-700"
                >
                  Subject
                </label>
                <select
                  id="subject"
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-sage-300 focus:ring-2 focus:ring-sage-100 outline-none transition-all"
                >
                  <option>General Inquiry</option>
                  <option>Class Schedule</option>
                  <option>Private Session</option>
                  <option>Membership</option>
                </select>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-sage-300 focus:ring-2 focus:ring-sage-100 outline-none transition-all resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <Button size="lg" className="w-full md:w-auto">
                Send Message
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            className="flex justify-center"
          >
            <MeditationFigure className="w-full max-w-md" />
          </motion.div>
        </div>
      </div>
    </div>
  )
}
