import { useParams, Link } from 'react-router-dom';
import React, { useState } from 'react';
import { MapPin, ArrowLeft, GraduationCap, BookOpen, Star, ChevronDown, Award, CheckCircle2, Phone, ArrowRight, X, BookText, Users, Target, Clock, MessageCircleQuestion, FileText, Users as Users2, Activity, LineChart, BookOpen as BookOpen2, Flame } from 'lucide-react';
import { locationPages } from '../data/locations';
import { useFormSubmit } from '../hooks/useFormSubmit';
import TestimonialCarousel from '../components/TestimonialCarousel';

export default function LocationPage() {
  const { slug } = useParams<{ slug: string }>();
  const page = locationPages.find(p => p.slug === slug);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { submitForm, isSubmitting, isSuccess } = useFormSubmit(`Location Enquiry - ${page?.title || ''}`);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    await submitForm(data);
  };

  if (!page) {
    return (
      <main className="pt-24 lg:pt-32 pb-20 min-h-screen bg-offwhite">
        <div className="max-w-container-max mx-auto px-6 text-center py-20">
          <h1 className="text-3xl font-black text-secondary-900 mb-4">Location Not Found</h1>
          <p className="text-slate-500 mb-8">The page you're looking for doesn't exist.</p>
          <Link to="/locations" className="inline-flex items-center gap-2 text-primary-600 font-bold hover:underline">
            <ArrowLeft className="w-4 h-4" /> Browse All Locations
          </Link>
        </div>
      </main>
    );
  }

  const paragraphs = page.content.split(/\n\n/).filter(Boolean);
  const areaName = page.title.replace('IIT Coaching in ', '').replace('JEE Coaching in ', '');

  const typeColor = page.type === 'IIT' ? 'from-blue-500 via-indigo-500 to-purple-500' : 'from-emerald-500 via-teal-500 to-cyan-500';
  const typeLabel = page.type === 'IIT' ? 'IIT-JEE' : 'JEE Main & Advanced';

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: page.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a
      }
    }))
  };

  return (
    <main className="bg-offwhite min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero Section */}
      <section className={`bg-gradient-to-r ${typeColor} pt-32 lg:pt-40 pb-20 relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>
        <div className="max-w-container-max mx-auto px-6 relative z-10">
          <Link to="/locations" className="inline-flex items-center gap-2 text-white/80 hover:text-white font-semibold text-sm mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to all locations
          </Link>

          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
                <MapPin className="w-7 h-7 text-white" />
              </div>
              <div>
                <p className="uppercase tracking-[0.2em] text-xs font-bold text-white/70">Premium Coaching Center</p>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4 leading-tight">{page.title}</h1>
            <p className="text-xl text-white/90 max-w-3xl leading-relaxed mb-8">
              {page.type} coaching at Good Marks Classes — expert faculty, small batches, and proven results for students in {areaName}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <span className="px-5 py-2 rounded-full bg-white/20 backdrop-blur text-white text-sm font-bold uppercase tracking-wider">{typeLabel}</span>
              <span className="px-5 py-2 rounded-full bg-white/20 backdrop-blur text-white text-sm font-bold uppercase tracking-wider">Classroom Program</span>
              <span className="px-5 py-2 rounded-full bg-white/20 backdrop-blur text-white text-sm font-bold uppercase tracking-wider">Online & Offline</span>
            </div>
          </div>
        </div>
      </section>

      {/* Intro & Stats */}
      <section className="py-16 md:py-20">
        <div className="max-w-container-max mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <h2 className="text-3xl md:text-4xl font-black text-secondary-900 mb-6">
                {page.type} Coaching in {areaName}
              </h2>
              <div className="prose prose-slate max-w-none">
                {paragraphs.map((para, i) => {
                  if (para.length < 55) {
                    return <h3 key={i} className="text-xl font-black text-secondary-900 mt-8 mb-3">{para.trim()}</h3>;
                  }
                  return <p key={i} className="text-slate-600 leading-relaxed text-lg mb-3">{para.trim()}</p>;
                })}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/courses" className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-xl font-bold text-sm transition-all shadow-lg shadow-primary-500/20">
                  <GraduationCap className="w-4 h-4" />
                  View Programs
                </Link>
                <button onClick={() => setIsModalOpen(true)} className="inline-flex items-center gap-2 bg-offwhite border-2 border-secondary-200 hover:border-secondary-300 text-secondary-800 px-6 py-3 rounded-xl font-bold text-sm transition-all">
                  Book Free Demo
                </button>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-offwhite rounded-[24px] p-8 shadow-xl border border-slate-100">
                <h3 className="text-lg font-bold text-secondary-900 mb-6">Request a Call Back</h3>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  {isSuccess && (
                    <div className="bg-green-100 text-green-700 p-3 rounded-xl text-sm font-bold">
                      Thanks! We will contact you soon.
                    </div>
                  )}
                  <div>
                    <label className="block text-sm font-bold text-secondary-700 mb-1.5">Full Name</label>
                    <input type="text" name="name" placeholder="Enter your full name" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-offwhite focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all text-sm" required />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-secondary-700 mb-1.5">Phone Number</label>
                    <input type="tel" name="phone" placeholder="Enter your phone number" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-offwhite focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all text-sm" required />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-secondary-700 mb-1.5">Interested Course</label>
                    <select name="course" defaultValue="" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-offwhite focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all text-sm" required>
                      <option value="" disabled>Select a course</option>
                      <option value="jee">IIT JEE Coaching</option>
                      <option value="neet">NEET Coaching</option>
                      <option value="foundation">Class 8-10 Foundation</option>
                      <option value="tuition">Subject-wise Tuition</option>
                    </select>
                  </div>
                  <button disabled={isSubmitting} type="submit" className="disabled:opacity-70 w-full btn-gradient py-3 rounded-xl text-secondary-900 font-bold shadow-lg shadow-primary-500/30 hover:shadow-primary-500/50 transition-all">
                    Submit Enquiry
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-offwhite/50 border-y border-slate-100">
        <div className="max-w-container-max mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-secondary-900 mb-4">Why Choose Good Marks Classes for {typeLabel} in {areaName}</h2>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto">The key differentiators that make us the preferred choice for IIT JEE aspirants.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { icon: Award, title: "Proven Track Record Faculty", color: "text-primary-600", bg: "bg-primary-100" },
              { icon: Users2, title: "Parent Teacher Meeting (PTM)", color: "text-secondary-600", bg: "bg-secondary-100" },
              { icon: BookText, title: "Research Oriented Study Materials", color: "text-cyan-600", bg: "bg-cyan-100" },
              { icon: Users, title: "Small Batch Size (Tutorials)", color: "text-primary-600", bg: "bg-primary-100" },
              { icon: Target, title: "Excellent Results", color: "text-primary-600", bg: "bg-primary-100" },
              { icon: Clock, title: "Scientific Time Management", color: "text-secondary-600", bg: "bg-secondary-100" },
              { icon: Activity, title: "Individual Performance Evaluation", color: "text-rose-600", bg: "bg-rose-100" },
              { icon: Flame, title: "Motivational Environment", color: "text-orange-600", bg: "bg-orange-100" },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="glass-card p-6 rounded-2xl border border-slate-100 flex flex-col items-center text-center hover:-translate-y-1 hover:shadow-lg transition-all duration-300 bg-offwhite">
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 ${item.bg}`}>
                    <Icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <h3 className="font-bold text-secondary-800 text-sm">{item.title}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-secondary-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-500/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-container-max mx-auto px-6 relative z-10">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-primary-300 font-bold text-sm tracking-wide mb-4">
              <Award className="w-4 h-4" /> OUR PAST PERFORMANCE SINCE 2014
            </span>
            <h2 className="text-3xl md:text-4xl font-black">Consistent Results Year After Year</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "NTSE 2020 City Topper",
              "KVPY 2021 City Topper",
              "Class X Highest 99.6%",
              "Class XII Highest 96.8%",
              "3 Times Medical City Topper",
              "2 International Ranks In Olympiads",
              "Highest AIR 129 In JEE Advanced",
              "100 Percentile in JEE-Mains Physics"
            ].map((achievement, idx) => (
              <div key={idx} className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-primary-400" />
                </div>
                <span className="font-bold text-sm text-slate-200">{achievement}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-secondary-900 mb-4">Student Success Stories</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">Hear from our students who achieved their IIT dreams with Good Marks Classes.</p>
        </div>
        <TestimonialCarousel />
      </section>

      {/* Callback Form Section */}
      <section className="py-16 md:py-20 bg-primary-50/30 border-y border-slate-100">
        <div className="max-w-container-max mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-secondary-900 mb-4">Start Your IIT Journey Today</h2>
            <p className="text-slate-600 text-lg">Fill in your details and our academic counselors will guide you through the best program for your goals.</p>
          </div>
          <div className="max-w-lg mx-auto">
            <div className="bg-offwhite p-8 rounded-[32px] shadow-xl border border-slate-100">
              <form className="space-y-4" onSubmit={handleSubmit}>
                {isSuccess && (
                  <div className="bg-green-100 text-green-700 p-4 rounded-xl text-sm font-bold">
                    Thanks! We will contact you soon.
                  </div>
                )}
                <div>
                  <label className="block text-sm font-bold text-secondary-700 mb-1.5">Full Name</label>
                  <input type="text" name="name" placeholder="Enter your full name" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-offwhite focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all text-sm" required />
                </div>
                <div>
                  <label className="block text-sm font-bold text-secondary-700 mb-1.5">Phone Number</label>
                  <input type="tel" name="phone" placeholder="Enter your phone number" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-offwhite focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all text-sm" required />
                </div>
                <div>
                  <label className="block text-sm font-bold text-secondary-700 mb-1.5">Interested Course</label>
                  <select name="course" defaultValue="" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-offwhite focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all text-sm" required>
                    <option value="" disabled>Select a course</option>
                    <option value="jee">IIT JEE Coaching</option>
                    <option value="neet">NEET Coaching</option>
                    <option value="foundation">Class 8-10 Foundation</option>
                    <option value="tuition">Subject-wise Tuition</option>
                  </select>
                </div>
                <button disabled={isSubmitting} type="submit" className="disabled:opacity-70 w-full btn-gradient py-3.5 rounded-xl text-secondary-900 font-bold shadow-lg shadow-primary-500/30 hover:shadow-primary-500/50 transition-all mt-2">
                  Submit Enquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-secondary-900 mb-4">FAQs — {typeLabel} Coaching in {areaName}</h2>
            <p className="text-slate-600 text-lg">Everything you need to know about our IIT JEE coaching program in {areaName}.</p>
          </div>
          <div className="flex flex-col gap-4">
            {page.faqs.map((faq, idx) => (
              <details key={idx} className="group bg-offwhite border border-slate-200 rounded-2xl open:shadow-md transition-all duration-300 overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-bold text-secondary-800 text-lg select-none group-open:bg-offwhite/50">
                  {idx + 1}. {faq.q}
                  <div className="min-w-8 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 group-open:rotate-180 transition-transform duration-300">
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </summary>
                <div className="px-6 pb-6 pt-2 text-slate-600 bg-offwhite/50 font-body leading-relaxed border-t border-slate-100">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-secondary-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-900/20 to-transparent pointer-events-none"></div>
        <div className="max-w-container-max mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to Crack IIT?</h2>
          <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">Join Good Marks Classes in {areaName} and get expert guidance every step of the way. Limited seats available.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button onClick={() => setIsModalOpen(true)} className="btn-gradient px-10 py-4 rounded-xl text-secondary-900 font-bold text-lg shadow-lg shadow-primary-500/20 hover:shadow-primary-500/40 transition-all">
              Book Free Demo Class
            </button>
            <a href="tel:8800880028" className="px-10 py-4 rounded-xl border border-secondary-700 text-slate-300 font-bold text-lg hover:bg-secondary-800 transition-colors flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" /> 8800 8800 28
            </a>
          </div>
        </div>
      </section>

      {/* Demo Booking Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-secondary-900/40 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          ></div>
          <div className="relative bg-offwhite rounded-3xl shadow-2xl p-8 max-w-md w-full" style={{ animation: 'fadeIn 0.2s ease-out' }}>
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-secondary-900 mb-2">Book Your Free Demo Class</h2>
              <p className="text-slate-500 text-sm">Fill the form below to schedule your free demo session with our mentors.</p>
            </div>
            <form className="space-y-4" onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const data = Object.fromEntries(formData.entries());
              submitForm(data);
              setTimeout(() => {
                setIsModalOpen(false);
              }, 2000);
            }}>
              {isSuccess && (
                <div className="bg-green-100 text-green-700 p-3 rounded-xl text-sm font-bold">
                  Thanks! We will contact you soon.
                </div>
              )}
              <div>
                <input type="text" name="name" placeholder="Student Name" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all placeholder:text-slate-400 text-sm" required />
              </div>
              <div>
                <input type="tel" name="phone" placeholder="Mobile Number" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all placeholder:text-slate-400 text-sm" required />
              </div>
              <div>
                <select name="course" className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-600 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all appearance-none bg-offwhite text-sm" required defaultValue="">
                  <option value="" disabled hidden>Select Course</option>
                  <option value="iit-jee">IIT-JEE</option>
                  <option value="neet">NEET-UG</option>
                  <option value="foundation">Foundation</option>
                  <option value="cbse">CBSE</option>
                </select>
              </div>
              <button type="submit" disabled={isSubmitting} className="w-full mt-6 btn-gradient py-3 rounded-xl text-secondary-900 font-bold shadow-md shadow-primary-500/20 hover:shadow-primary-500/40 transition-all disabled:opacity-50">
                {isSubmitting ? 'Booking...' : 'Book Free Demo'}
              </button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
