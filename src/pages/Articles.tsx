import { ArticleCard } from '../components/ArticleCard'
import { articles } from '../data/articles'

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
              key={article.id}
              title={article.title}
              summary={article.summary}
              category={article.category}
              color={article.color}
              slug={article.slug}
              index={idx}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
