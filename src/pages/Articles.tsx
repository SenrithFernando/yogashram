import React from 'react'
import { ArticleCard } from '../components/ArticleCard'
const articles = [
  {
    title: 'The Benefits of Morning Yoga',
    summary:
      'Start your day with intention and energy through these simple morning sequences.',
    category: 'Wellness',
    color: 'bg-sage-200',
  },
  {
    title: 'Meditation for Beginners',
    summary:
      'A practical guide to quieting the mind and finding stillness in a busy world.',
    category: 'Mindfulness',
    color: 'bg-lavender-200',
  },
  {
    title: 'Understanding the Chakras',
    summary:
      'Explore the seven energy centers of the body and how they affect your wellbeing.',
    category: 'Philosophy',
    color: 'bg-pink-200',
  },
  {
    title: 'Plant-Based Nutrition Tips',
    summary: 'Fuel your practice with these nourishing, wholesome recipes.',
    category: 'Nutrition',
    color: 'bg-sand-300',
  },
  {
    title: 'Yoga for Better Sleep',
    summary:
      'Restorative poses to help you unwind and prepare for a restful night.',
    category: 'Wellness',
    color: 'bg-sage-300',
  },
  {
    title: 'The Art of Breathwork',
    summary: 'How pranayama can reduce stress and improve mental clarity.',
    category: 'Practice',
    color: 'bg-lavender-300',
  },
]
export function Articles() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16">
          <h1 className="text-5xl font-display font-bold text-gray-900 mb-6">
            Wellness Articles
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Insights, tips, and wisdom to support your journey on and off the
            mat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <ArticleCard
              key={idx}
              title={article.title}
              summary={article.summary}
              category={article.category}
              color={article.color}
              index={idx}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
