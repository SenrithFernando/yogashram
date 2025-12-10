import { motion } from 'framer-motion'
import { Button } from '../components/ui/Button'
import { YogaHero } from '../components/illustrations/YogaHero'
import { ClassCard } from '../components/ClassCard'
import { Star } from 'lucide-react'
export function Home() {
  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen pt-24 pb-12 flex items-center bg-gradient-to-b from-sage-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
                duration: 0.8,
              }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-gray-900 leading-tight mb-6">
                Find Your <br />
                <span className="text-sage-500">Inner Balance</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
                Mindful movement, calmness, and community for every body. Join
                us to discover the transformative power of yoga.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg">Explore Classes</Button>
                <Button size="lg" variant="outline">
                  Join Us
                </Button>
              </div>
            </motion.div>

            <div className="relative">
              <YogaHero className="w-full max-w-lg mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Beginner Yoga',
                desc: 'Start your journey with foundational poses and breathing.',
                color: 'bg-sage-100',
              },
              {
                title: 'Meditation',
                desc: 'Find stillness and clarity through guided mindfulness.',
                color: 'bg-lavender-100',
              },
              {
                title: 'Breathwork',
                desc: 'Master the art of pranayama to energize your life.',
                color: 'bg-pink-100',
              },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: idx * 0.2,
                }}
                viewport={{
                  once: true,
                }}
                className="p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all group"
              >
                <div
                  className={`w-16 h-16 rounded-2xl ${feature.color} mb-6 flex items-center justify-center group-hover:scale-110 transition-transform`}
                >
                  <div className="w-8 h-8 rounded-full bg-white/50" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Classes Preview */}
      <section className="py-24 bg-sand-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                Upcoming Classes
              </h2>
              <p className="text-gray-600">Join us on the mat today</p>
            </div>
            <Button variant="ghost">View Full Schedule</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ClassCard
              title="Morning Flow"
              time="07:00 AM"
              instructor="Sarah J."
              level="All Levels"
              type="flow"
              index={0}
            />
            <ClassCard
              title="Deep Stretch"
              time="09:30 AM"
              instructor="Mike R."
              level="Beginner"
              type="stretch"
              index={1}
            />
            <ClassCard
              title="Mindful Meditation"
              time="12:00 PM"
              instructor="Emma W."
              level="All Levels"
              type="meditation"
              index={2}
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
              Community Stories
            </h2>
            <div className="flex justify-center gap-1 text-yellow-400 mb-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} fill="currentColor" className="w-6 h-6" />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                text: 'This studio has completely transformed my relationship with my body. The instructors are so supportive.',
                author: 'Jessica M.',
              },
              {
                text: 'A sanctuary in the middle of the city. I leave every class feeling lighter and more grounded.',
                author: 'David K.',
              },
            ].map((t, idx) => (
              <motion.div
                key={idx}
                initial={{
                  opacity: 0,
                  scale: 0.95,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                className="bg-sage-50 p-10 rounded-3xl relative"
              >
                <div className="text-4xl text-sage-300 absolute top-6 left-6 font-serif">
                  "
                </div>
                <p className="text-xl text-gray-700 italic mb-6 relative z-10">
                  {t.text}
                </p>
                <p className="font-bold text-gray-900">{t.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
