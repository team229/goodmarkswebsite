import React, { useState } from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export interface BlogPostSummary {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category?: string;
  primaryCategory?: 'CBSE' | 'IIT JEE' | 'NEET';
}

const CATEGORIES = ['All', 'CBSE', 'IIT JEE', 'NEET'] as const;
type Category = (typeof CATEGORIES)[number];

export default function BlogList({ posts }: { posts: BlogPostSummary[] }) {
  const [active, setActive] = useState<Category>('All');
  const filtered = active === 'All' ? posts : posts.filter(p => p.primaryCategory === active);

  return (
    <div className="pt-32 pb-20 bg-offwhite min-h-screen">
      <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-black text-secondary-900 mb-6">Our Blog</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Insights, guides, and tips from our expert educators to help you excel in your academic journey.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-200 border ${
                active === cat
                  ? 'bg-primary-600 text-white border-primary-600 shadow-lg'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-primary-300 hover:text-primary-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group"
            >
              <a href={`/blogs/${post.slug}`}>
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 text-slate-500 text-sm mb-4">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString('en-IN', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                  <h2 className="text-xl font-bold text-secondary-900 mb-4 group-hover:text-primary-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-slate-600 mb-6 line-clamp-3 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-primary-600 font-bold text-sm">
                    Read More <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
