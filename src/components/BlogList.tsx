import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export interface BlogPostSummary {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category?: string;
}

export default function BlogList({ posts }: { posts: BlogPostSummary[] }) {
  return (
    <div className="pt-32 pb-20 bg-offwhite min-h-screen">
      <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-black text-secondary-900 mb-6">Our Blog</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Insights, guides, and tips from our expert educators to help you excel in your academic journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
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
