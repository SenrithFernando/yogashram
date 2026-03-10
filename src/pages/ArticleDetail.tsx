import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Clock, User, Calendar } from 'lucide-react'
import { articles } from '../data/articles'
import { useEffect } from 'react'

export function ArticleDetail() {
    const { slug } = useParams<{ slug: string }>()
    const navigate = useNavigate()
    const article = articles.find((a) => a.slug === slug)

    useEffect(() => {
        if (!article) {
            // If article not found, redirect to articles list
            navigate('/articles')
        }
    }, [article, navigate])

    if (!article) return null

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen bg-white pt-24 pb-12"
        >
            <div className="container mx-auto px-4 md:px-6">
                {/* Back Button */}
                <Link
                    to="/articles"
                    className="inline-flex items-center text-sage-600 font-medium hover:text-sage-800 transition-colors mb-12 group"
                >
                    <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Articles
                </Link>

                <article className="max-w-4xl mx-auto">
                    {/* Header */}
                    <header className="mb-12">
                        <div className="flex items-center gap-4 mb-6">
                            <span className={`px-4 py-1 rounded-full text-sm font-bold tracking-wider uppercase ${article.color}`}>
                                {article.category}
                            </span>
                            <span className="flex items-center text-gray-400 text-sm">
                                <Clock className="w-4 h-4 mr-1" />
                                {article.readTime}
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-display font-bold text-gray-900 mb-8 leading-tight">
                            {article.title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 pb-8 border-b border-gray-100">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-sage-100 flex items-center justify-center text-sage-600">
                                    <User className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-gray-900">{article.author}</p>
                                    <p className="text-xs text-gray-500">Author</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 text-gray-500">
                                <Calendar className="w-5 h-5" />
                                <span className="text-sm">{article.date}</span>
                            </div>
                        </div>
                    </header>

                    {/* Hero Image / Placeholder */}
                    <div className={`w-full h-[400px] ${article.color} rounded-3xl mb-12 relative overflow-hidden shadow-sm`}>
                        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.8),transparent)]" />
                        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-white/30 blur-3xl animate-pulse" />
                        <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-white/20 blur-3xl" />
                    </div>

                    {/* Content */}
                    <div
                        className="prose prose-lg prose-sage max-w-none text-gray-700 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: article.content }}
                    />

                    {/* Footer / CTA */}
                    <footer className="mt-16 pt-12 border-t border-gray-100 italic text-gray-500">
                        Enjoyed this article? Join our community for more weekly insights on wellness and mindfulness.
                    </footer>
                </article>
            </div>
        </motion.div>
    )
}
