import React from 'react';
import { ArrowLeft, GraduationCap, ChevronDown, Award, CheckCircle2, Phone, BookText, Users as Users2, Target, Clock, MessageCircleQuestion, Activity, Flame, Atom, FlaskConical, Calculator, Dna } from 'lucide-react';
import { tuitionPages, TuitionPage } from '../data/tuition';
import { useFormSubmit } from '../hooks/useFormSubmit';
import { injectLinks, renderContent } from '../lib/internalLinks';
import type { InternalLink } from '../lib/internalLinks';
import TestimonialCarousel from './TestimonialCarousel';

interface TuitionPageProps {
  slug: string;
}

const subjectConfigs: Record<string, any> = {
  physics: {
    name: 'Physics',
    gradient: 'from-blue-500 via-indigo-500 to-purple-500',
    icon: Atom,
    textColor: 'text-indigo-600',
    bgLight: 'bg-indigo-50',
    exams: 'CBSE • IIT JEE • NEET',
  },
  chemistry: {
    name: 'Chemistry',
    gradient: 'from-orange-500 via-red-500 to-rose-500',
    icon: FlaskConical,
    textColor: 'text-red-600',
    bgLight: 'bg-red-50',
    exams: 'CBSE • IIT JEE • NEET',
  },
  maths: {
    name: 'Maths',
    gradient: 'from-teal-500 via-emerald-500 to-cyan-500',
    icon: Calculator,
    textColor: 'text-teal-600',
    bgLight: 'bg-teal-50',
    exams: 'CBSE • IIT JEE',
  },
  biology: {
    name: 'Biology',
    gradient: 'from-green-500 via-emerald-500 to-teal-500',
    icon: Dna,
    textColor: 'text-green-600',
    bgLight: 'bg-green-50',
    exams: 'CBSE • NEET',
  },
};

export default function TuitionPage({ slug }: TuitionPageProps) {
  const page: TuitionPage | undefined = tuitionPages.find(p => p.slug === slug);
  const { submitForm, isSubmitting } = useFormSubmit(`Tuition Enquiry - ${page?.title || ''}`);

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
          <h1 className="text-3xl font-black text-secondary-900 mb-4">Page Not Found</h1>
          <p className="text-slate-500 mb-8">The page you're looking for doesn't exist.</p>
          <a href="/courses" className="inline-flex items-center gap-2 text-primary-600 font-bold hover:underline">
            <ArrowLeft className="w-4 h-4" /> Browse All Courses
          </a>
        </div>
      </main>
    );
  }

  const config = subjectConfigs[page.subject];
  const Icon = config.icon;
  const paragraphs = page.content.split(/\n\n/).filter(Boolean);
  const subjectName = config.name;
  const location = page.location;

  const tuitionLinks: InternalLink[] = (() => {
    const sets: Record<string, InternalLink[]> = {
      physics: [
        { kw: 'physics tutor Sector 85 Gurgaon', href: '/subject/physics' },
        { kw: 'physics tuition for class 9 Gurgaon', href: '/subject/physics' },
        { kw: '2 year IIT JEE program Gurgaon', href: '/course/2-year-integrated-regular' },
      ],
      chemistry: [
        { kw: 'chemistry tutor near gurgaon sector 85', href: '/subject/chemistry' },
        { kw: 'chemistry tuition classes in Gurgaon', href: '/subject/chemistry' },
        { kw: '1 year NEET coaching Gurgaon', href: '/course/1-year-regular-12-neet' },
      ],
      maths: [
        { kw: 'ICSE maths tuition Gurgaon class 10', href: '/subject/mathematics' },
        { kw: 'maths coaching for class 12 Gurgaon', href: '/subject/mathematics' },
        { kw: '1 year JEE coaching Gurgaon', href: '/course/1-year-regular-12' },
      ],
      biology: [
        { kw: 'biology tuition for class 12 Gurgaon', href: '/subject/biology' },
        { kw: 'CBSE biology tuition class 12 Gurugram', href: '/subject/biology' },
        { kw: 'biology coaching near Sohna Road Gurugram', href: '/subject/biology' },
      ],
    };
    return sets[page.subject] || [];
  })();

  const subjectLinks = tuitionLinks;

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

  const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'Good Marks Classes',
    url: 'https://www.goodmarksclasses.com',
    description: `Best ${subjectName} tuition classes in ${location} for Class 11 & 12. CBSE boards, JEE, and NEET preparation with small batches.`
  };

  return (
    <main className="bg-offwhite min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />

      {/* Hero Section */}
      <section className={`bg-gradient-to-r ${config.gradient} pt-32 lg:pt-40 pb-20 relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>
        <div className="max-w-container-max mx-auto px-6 relative z-10">
          <a href="/courses" className="inline-flex items-center gap-2 text-white/80 hover:text-white font-semibold text-sm mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to all courses
          </a>

          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
                <Icon className="w-7 h-7 text-white" />
              </div>
              <div>
                <p className="uppercase tracking-[0.2em] text-xs font-bold text-white/70">Small Batch Tuition in {location}</p>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4 leading-tight">{page.title}</h1>
            <p className="text-xl text-white/90 max-w-3xl leading-relaxed mb-8">
              Class 11 & 12 {subjectName} tuition at Good Marks Classes — {config.exams} preparation with expert faculty and genuinely small batches.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <span className="px-5 py-2 rounded-full bg-white/20 backdrop-blur text-white text-sm font-bold uppercase tracking-wider">Class 11 & 12</span>
              <span className="px-5 py-2 rounded-full bg-white/20 backdrop-blur text-white text-sm font-bold uppercase tracking-wider">Small Batches</span>
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
                {subjectName} Tuition Classes in {location}
              </h2>
              <div className="prose prose-slate max-w-none">
                {injectLinks(paragraphs, tuitionLinks).map((para, i) => {
                  if (para.length < 55 && !para.includes('<a ')) {
                    return <h3 key={i} className="text-xl font-black text-secondary-900 mt-8 mb-3">{renderContent(para).trim()}</h3>;
                  }
                  return <p key={i} className="text-slate-600 leading-relaxed text-lg mb-3" dangerouslySetInnerHTML={{ __html: para }} />;
                })}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="/courses" className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-xl font-bold text-sm transition-all shadow-lg shadow-primary-500/20">
                  <GraduationCap className="w-4 h-4" />
                  View Programs
                </a>
                <button onClick={() => window.dispatchEvent(new CustomEvent('open-contact-modal'))} className="inline-flex items-center gap-2 bg-offwhite border-2 border-secondary-200 hover:border-secondary-300 text-secondary-800 px-6 py-3 rounded-xl font-bold text-sm transition-all">
                  Book Free Demo
                </button>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-offwhite rounded-[24px] p-8 shadow-xl border border-slate-100">
                <h3 className="text-lg font-bold text-secondary-900 mb-6">Request a Call Back</h3>
                <form className="space-y-4" onSubmit={handleSubmit}>
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
            <h2 className="text-3xl md:text-4xl font-black text-secondary-900 mb-4">Why Choose Good Marks Classes for {subjectName} Tuition in {location}</h2>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto">The key differentiators that make us the preferred choice for Class 11 & 12 students.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { icon: Award, title: "Proven Track Record Faculty", color: "text-primary-600", bg: "bg-primary-100" },
              { icon: Users2, title: "Small Batch Size (Tutorials)", color: "text-secondary-600", bg: "bg-secondary-100" },
              { icon: BookText, title: "Updated Study Materials", color: "text-cyan-600", bg: "bg-cyan-100" },
              { icon: Target, title: "Boards + JEE/NEET Focus", color: "text-primary-600", bg: "bg-primary-100" },
              { icon: Clock, title: "Flexible Batch Timings", color: "text-primary-600", bg: "bg-primary-100" },
              { icon: Activity, title: "Weekly Tests & Analysis", color: "text-secondary-600", bg: "bg-secondary-100" },
              { icon: MessageCircleQuestion, title: "Doubt Sessions Built In", color: "text-rose-600", bg: "bg-rose-100" },
              { icon: Flame, title: "Concept-First Teaching", color: "text-orange-600", bg: "bg-orange-100" },
            ].map((item, idx) => {
              const IconItem = item.icon;
              return (
                <div key={idx} className="glass-card p-6 rounded-2xl border border-slate-100 flex flex-col items-center text-center hover:-translate-y-1 hover:shadow-lg transition-all duration-300 bg-offwhite">
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 ${item.bg}`}>
                    <IconItem className={`w-6 h-6 ${item.color}`} />
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
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">Hear from our students who achieved their goals with Good Marks Classes.</p>
        </div>
        <TestimonialCarousel />
      </section>

      {/* Callback Form Section */}
      <section className="py-16 md:py-20 bg-primary-50/30 border-y border-slate-100">
        <div className="max-w-container-max mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-secondary-900 mb-4">Start {subjectName} Tuition in {location} Today</h2>
            <p className="text-slate-600 text-lg">Fill in your details and our academic counselors will guide you through the best program for your goals.</p>
          </div>
          <div className="max-w-lg mx-auto">
            <div className="bg-offwhite p-8 rounded-[32px] shadow-xl border border-slate-100">
              <form className="space-y-4" onSubmit={handleSubmit}>
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
            <h2 className="text-3xl md:text-4xl font-black text-secondary-900 mb-4">FAQs — {subjectName} Tuition in {location}</h2>
            <p className="text-slate-600 text-lg">Everything you need to know about our {subjectName} tuition program in {location}.</p>
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
          <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to Master {subjectName}?</h2>
          <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">Join Good Marks Classes in {location} and get expert guidance every step of the way. Limited seats available.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button onClick={() => window.dispatchEvent(new CustomEvent('open-contact-modal'))} className="btn-gradient px-10 py-4 rounded-xl text-secondary-900 font-bold text-lg shadow-lg shadow-primary-500/20 hover:shadow-primary-500/40 transition-all">
              Book Free Demo Class
            </button>
            <a href="tel:8800880028" className="px-10 py-4 rounded-xl border border-secondary-700 text-slate-300 font-bold text-lg hover:bg-secondary-800 transition-colors flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" /> 8800 8800 28
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
