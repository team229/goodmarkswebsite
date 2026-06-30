import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { blogPosts } from '../data/blog';
import { Calendar, ChevronLeft, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = blogPosts.find(p => p.slug === slug);

  useEffect(() => {
    if (!post) {
      navigate('/blogs');
      return;
    }

    // Add JSON-LD schema
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(post.schema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [post, navigate]);

  if (!post) return null;

  return (
    <div className="pt-32 pb-20 bg-offwhite min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <Link
          to="/blogs"
          className="inline-flex items-center gap-2 text-slate-500 hover:text-primary-600 transition-colors mb-8 font-bold text-sm"
        >
          <ChevronLeft className="w-4 h-4" /> Back to Blogs
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center gap-4 text-slate-500 text-sm mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {new Date(post.date).toLocaleDateString('en-IN', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
            <div className="w-1 h-1 rounded-full bg-slate-300" />
            <span className="font-medium text-primary-600">{post.category || "General"}</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-black text-secondary-900 mb-8 leading-tight">
            {post.title}
          </h1>

          <div className="aspect-video rounded-3xl overflow-hidden mb-12 shadow-2xl">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100">
            <div
              className="prose prose-lg prose-slate max-w-none
                prose-headings:text-secondary-900 prose-headings:font-black
                prose-p:text-slate-600 prose-p:leading-relaxed
                prose-a:text-primary-600 prose-a:font-bold prose-a:no-underline hover:prose-a:underline
                prose-li:text-slate-600
                prose-strong:text-secondary-900"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-4">
                <img src="/sunil-gola.png" alt="Sunil Gola" className="w-12 h-12 rounded-full border-2 border-primary-100" />
                <div>
                  <div className="font-bold text-secondary-900">Good Marks Classes</div>
                  <div className="text-sm text-slate-500">Educational Organization</div>
                </div>
              </div>

              <button
                onClick={() => {
                  navigator.share?.({
                    title: post.title,
                    text: post.excerpt,
                    url: window.location.href
                  }).catch(() => {
                    navigator.clipboard.writeText(window.location.href);
                    alert('Link copied to clipboard!');
                  });
                }}
                className="flex items-center gap-2 px-6 py-3 bg-slate-50 hover:bg-slate-100 text-slate-600 rounded-xl transition-colors font-bold text-sm"
              >
                <Share2 className="w-4 h-4" /> Share Post
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
