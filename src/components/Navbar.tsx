import React, { useState, useCallback, useEffect } from 'react';
import { X, Phone, Menu, ChevronDown, Loader2 } from 'lucide-react';

const courses = [
  { label: 'IIT-JEE', href: '/courses/iit', color: 'bg-secondary-500', hover: 'hover:bg-secondary-50', textHover: 'hover:text-secondary-600' },
  { label: 'NEET-UG', href: '/courses/neet', color: 'bg-primary-500', hover: 'hover:bg-primary-50', textHover: 'hover:text-primary-600' },
  { label: 'Pre-Foundation', href: '/courses/prefoundation', color: 'bg-amber-500', hover: 'hover:bg-amber-50', textHover: 'hover:text-amber-600' },
  { label: 'Foundation', href: '/courses/foundation', color: 'bg-amber-500', hover: 'hover:bg-amber-50', textHover: 'hover:text-amber-600' },
  { label: 'Online Courses', href: '/courses', color: 'bg-primary-500', hover: 'hover:bg-primary-50', textHover: 'hover:text-primary-600' },
  { label: 'Physics by Sunil Gola', href: '/physics-classes-sunil-gola', color: 'bg-orange-500', hover: 'hover:bg-orange-50', textHover: 'hover:text-orange-600' },
];

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'loading'>('idle');

  const closeMobile = useCallback(() => setIsMobileMenuOpen(false), []);

  useEffect(() => {
    const handler = () => setIsModalOpen(true);
    window.addEventListener('open-contact-modal', handler);
    return () => window.removeEventListener('open-contact-modal', handler);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('loading');
    try {
      await fetch('https://api-inform.bythub.in/?formId=LCKaS6XiKh1hrfOgsasy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
    } catch {}
    setForm({ name: '', email: '', phone: '', message: '' });
    setIsModalOpen(false);
    window.location.href = '/thank-you';
  };

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-offwhite/90 backdrop-blur-lg border-b border-slate-100 transition-all duration-300">
        <div className="flex justify-between items-center px-4 sm:px-6 lg:px-12 py-3.5 sm:py-4 max-w-container-max mx-auto gap-3 flex-nowrap">
          <a href="/" className="text-2xl font-black text-secondary-900 tracking-tight flex items-center gap-2.5 shrink-0">
            <img src="/good-marks-logo.png" alt="Good Marks Classes" className="h-9 sm:h-10 w-auto object-contain rounded-lg shrink-0" />
            <span className="inline text-sm sm:text-lg font-bold leading-none whitespace-nowrap">Good Marks Classes</span>
          </a>
          <div className="flex items-center gap-2 sm:gap-4">
            <nav className="hidden lg:flex items-center gap-4 xl:gap-6 text-xs xl:text-sm font-bold text-slate-600 flex-nowrap">
              <a className="hover:text-primary-600 transition-colors whitespace-nowrap" href="/">Home</a>
              <div className="relative group py-6 -my-6 flex items-center">
                <a className="hover:text-primary-600 transition-colors flex items-center gap-1 whitespace-nowrap" href="/courses">
                  Courses
                  <svg className="w-4 h-4 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </a>
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 origin-top translate-y-2 group-hover:translate-y-0 z-50">
                  <div className="bg-offwhite shadow-xl shadow-slate-200/50 rounded-2xl border border-slate-100 p-2 flex flex-col gap-1">
                    {courses.map((c) => (
                      <a key={c.href} href={c.href} className={`px-4 py-2.5 ${c.hover} rounded-xl transition-colors font-bold text-secondary-700 ${c.textHover} flex items-center gap-2`}>
                        <div className={`w-2 h-2 rounded-full ${c.color}`} /> {c.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <a className="hover:text-primary-600 transition-colors whitespace-nowrap" href="/blogs">Blog</a>
              <a className="hover:text-primary-600 transition-colors whitespace-nowrap" href="/locations">Locations</a>
              <a className="hover:text-primary-600 transition-colors whitespace-nowrap" href="/about">About Us</a>
              <a className="hover:text-primary-600 transition-colors whitespace-nowrap" href="/join-faculty">Join as Faculty</a>
              <button onClick={() => setIsModalOpen(true)} className="hover:text-primary-600 transition-colors cursor-pointer whitespace-nowrap">Contact Us</button>
              <a href="tel:8800880028" className="flex items-center gap-1.5 px-2 lg:px-3 py-1.5 rounded-lg bg-primary-50 text-primary-700 hover:bg-primary-100 transition-colors shrink-0 whitespace-nowrap"><Phone className="w-3.5 h-3.5 lg:w-4 lg:h-4" /><span className="hidden xl:inline">8800 8800 28</span><span className="xl:hidden">8800880028</span></a>
            </nav>

            <a
              href="https://goodmarksclasses.classpro.in/people/sign_in"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex bg-gradient-to-r from-primary-600 to-primary-600 hover:from-primary-700 hover:to-primary-700 text-secondary-900 px-4 lg:px-6 py-2 rounded-xl font-bold text-xs lg:text-sm shadow-md shadow-primary-500/20 transition-all items-center gap-2 shrink-0 whitespace-nowrap"
            >
              Student Login
            </a>

            <button
              onClick={() => setIsMobileMenuOpen((p) => !p)}
              className="lg:hidden p-2.5 hover:bg-slate-100 rounded-xl transition-colors shrink-0 active:scale-95"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="border-t border-slate-100 bg-offwhite/95 backdrop-blur-lg">
            <nav className="flex flex-col gap-1 px-4 py-4 text-sm font-bold text-slate-600">
              {[
                { label: 'Home', href: '/' },
                { label: 'Courses', href: '/courses', sub: courses },
                { label: 'Blog', href: '/blogs' },
                { label: 'Locations', href: '/locations' },
                { label: 'About Us', href: '/about' },
                { label: 'Join as Faculty', href: '/join-faculty' },
              ].map((item) => (
                <div key={item.href}>
                  <a onClick={closeMobile} href={item.href} className="hover:text-primary-600 transition-colors px-4 py-3.5 rounded-xl hover:bg-slate-50 block active:bg-slate-100">
                    {item.label}
                  </a>
                  {item.sub && (
                    <div className="ml-4 space-y-0.5 border-l-2 border-slate-200 pl-4 mb-1">
                      {item.sub.map((s) => (
                        <a key={s.href} onClick={closeMobile} href={s.href} className="block hover:text-primary-600 transition-colors px-4 py-2.5 text-xs font-semibold rounded-xl hover:bg-slate-50 active:bg-slate-100">
                          {s.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <button onClick={() => { setIsModalOpen(true); closeMobile(); }} className="hover:text-primary-600 transition-colors px-4 py-3.5 rounded-xl hover:bg-slate-50 text-left active:bg-slate-100">
                Contact Us
              </button>
              <div className="border-t border-slate-100 my-3"></div>
              <a href="tel:8800880028" className="flex items-center gap-2 px-4 py-3.5 rounded-xl hover:bg-slate-50 text-primary-700 font-semibold active:bg-slate-100">
                <Phone className="w-4 h-4" /> 8800 8800 28
              </a>
              <a onClick={closeMobile} href="https://goodmarksclasses.classpro.in/people/sign_in" target="_blank" rel="noopener noreferrer"
                className="bg-gradient-to-r from-primary-600 to-primary-600 hover:from-primary-700 hover:to-primary-700 text-secondary-900 px-6 py-3 rounded-xl font-bold text-sm shadow-md shadow-primary-500/20 transition-all text-center mt-1 active:scale-[0.98]"
              >
                Student Login
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Contact Us Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-secondary-900/40 backdrop-blur-sm" 
            onClick={() => { setIsModalOpen(false); setFormStatus('idle'); }}
          ></div>
          <div className="relative bg-offwhite rounded-3xl shadow-2xl p-8 max-w-md w-full" style={{ animation: 'fadeIn 0.2s ease-out' }}>
            <button 
              onClick={() => { setIsModalOpen(false); setFormStatus('idle'); }}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-secondary-900 mb-2">Book Your Free Session</h2>
              <p className="text-slate-500 text-sm">Fill the form below to get a callback from our mentors.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={form.name}
                  onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  value={form.email}
                  onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  required
                  value={form.phone}
                  onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <textarea
                  placeholder="Your Message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                />
                <button
                  type="submit"
                  disabled={formStatus === 'loading'}
                  className="w-full bg-gradient-to-r from-primary-600 to-primary-600 hover:from-primary-700 hover:to-primary-700 text-secondary-900 px-6 py-3 rounded-xl font-bold text-sm shadow-md shadow-primary-500/20 transition-all flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {formStatus === 'loading' ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
                  {formStatus === 'loading' ? 'Submitting...' : 'Submit'}
                </button>
              </form>
          </div>
        </div>
      )}
    </>
  );
}
