import React, { useState } from 'react';
import { useFormSubmit } from '../hooks/useFormSubmit';
import { motion } from 'motion/react';
import TestimonialCarousel from './TestimonialCarousel';
import { coursesData } from '../data/courses';
import { 
  Users, 
  GraduationCap, 
  BadgeCheck, 
  Home as HomeIcon, 
  CheckCircle2, 
  Medal, 
  HelpCircle, 
  Stethoscope, 
  DraftingCompass, 
  ArrowRight, 
  BookOpen, 
  ListOrdered, 
  UserSearch, 
  Award, 
  Star, 
  Eye, 
  Rocket, 
  Zap, 
  FlaskConical, 
  Calculator, 
  Brain, 
  Pill, 
  Microscope, 
  Languages, 
  Terminal, 
  Quote, 
  BarChart2, 
  Share2, 
  Link as LinkIcon,
  MonitorPlay,
  Activity, 
  BookText, 
  Clock, 
  Target, 
  Phone,
  FileText, 
  Flame, 
  UsersRound,
  LineChart,
  MessageCircleQuestion,
  Users as Users2,
  ChevronDown,
  Atom,
  Dna,
  Calendar,
  X
} from 'lucide-react';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { submitForm, isSubmitting } = useFormSubmit('Home Demo Request');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    await submitForm(data);
  };


  const faqItems = [
    {
      q: 'What courses does Good Marks Classes offer?',
      a: 'We offer comprehensive coaching for IIT JEE (Mains & Advanced), NEET-UG, CBSE board exams, as well as Foundation and Pre-Foundation courses for school students starting from Class 7.'
    },
    {
      q: 'Why should I choose Good Marks Classes for JEE/NEET?',
      a: 'Led by Sunil Gola Sir, we provide experienced faculty, small batch sizes for personalized attention, regular Parent-Teacher Meetings (PTM), doubt clearing cells, and a supportive environment that builds the right temperament.'
    },
    {
      q: 'Do you provide study material and test series?',
      a: 'Yes, we provide highly research-oriented study materials tailored for CBSE and competitive exams. We also conduct various test papers regularly to evaluate individual performance and improve time management skills.'
    },
    {
      q: 'Do you offer Foundation courses for school students?',
      a: 'Absolutely. We have specialized Pre-Foundation and Foundation courses starting from Class 7th all the way to Class 10th to build a strong base early for future competitive success.'
    },
    {
      q: 'Where is Good Marks Classes located in Gurgaon?',
      a: 'Our offline center is conveniently located in Gurgaon, offering a focused learning environment. We also provide seamless hybrid, online, and home tutor services based on your preference.'
    },
    {
      q: 'How can I enroll in Good Marks Classes?',
      a: 'You can enroll by visiting our center, calling our student support desk, or booking a free session/demo class through our website to experience our teaching methodology firsthand.'
    }
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a
      }
    }))
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {/* Hero Section */}
        <section className="relative pt-32 lg:pt-40 pb-20 px-6 overflow-hidden min-h-[90vh] flex items-center bg-gradient-to-br from-primary-50/50 via-white to-primary-50/30">
          <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full opacity-30 pointer-events-none">
            {/* Background decoration */}
            <div className="absolute blur-[100px] bg-primary-400/20 w-96 h-96 rounded-full top-20 right-20"></div>
            <div className="absolute blur-[100px] bg-primary-400/20 w-96 h-96 rounded-full bottom-20 right-40"></div>
          </div>
          <div className="max-w-container-max mx-auto w-full relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-stack-md lg:pr-12"
              >
                <div className="flex flex-wrap gap-3">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-secondary font-label-bold text-xs uppercase tracking-widest shadow-sm">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
                    </span>
                    Academic Excellence Reimagined
                  </div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-100 text-yellow-800 font-label-bold text-xs uppercase tracking-widest shadow-sm">
                    Now in Sector 85 Gurugram
                  </div>
                </div>
                <h1 className="font-h1 text-secondary-900 leading-[1.1] text-5xl lg:text-6xl tracking-tight text-center lg:text-left">
                  Best Coaching Institute in Gurgaon for{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-600">
                    <span className="whitespace-nowrap">IIT-JEE</span>, NEET & CBSE Tuitions
                  </span>
                </h1>
                <p className="font-body-lg text-slate-600 max-w-xl text-lg leading-relaxed">
                  Led by Sunil Gola Sir (DTU), we offer CBSE coaching (Classes 6–12) integrated with IIT JEE & NEET preparation across offline, online, hybrid, and home tutoring formats - all in one place.
                </p>
                <p className="max-w-xl" id="hero-physics-link">
                  <a href="/physics-classes-sunil-gola" aria-label="Explore Physics Classes by Sunil Gola" className="text-primary-700 font-label-bold underline hover:text-primary-800 transition-colors">
                    Explore Physics Classes by Sunil Gola
                  </a>
                </p>
                <p className="text-sm text-slate-500 max-w-xl">
                  Note: CBSE and competitive exam preparation are delivered through separate and specialized programs to ensure focused learning.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button onClick={() => setIsModalOpen(true)} className="btn-gradient px-8 py-4 rounded-xl text-secondary-900 font-label-bold shadow-lg shadow-primary-500/30 hover:shadow-primary-500/50 flex items-center justify-center gap-2">
                    Book your Free Demo Class Today
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <a
                    href="https://goodmarksclasses.classpro.in/people/sign_in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 rounded-xl border border-secondary-200 text-secondary-900 font-label-bold hover:bg-secondary-50 transition-colors flex items-center justify-center"
                  >
                    Student Login
                  </a>
                </div>

                <div className="flex flex-wrap gap-4 pt-8">
                  <div className="glass-card px-5 py-3.5 rounded-xl flex items-center gap-3 border border-white bg-offwhite/60">
                    <Users className="w-5 h-5 text-secondary" />
                    <span className="text-sm font-label-bold text-secondary-800">Max 10 Students (Online)</span>
                  </div>
                  <div className="glass-card px-5 py-3.5 rounded-xl flex items-center gap-3 border border-white bg-offwhite/60">
                    <GraduationCap className="w-5 h-5 text-secondary" />
                    <span className="text-sm font-label-bold text-secondary-800">Max 30 Students (Offline)</span>
                  </div>
                  <div className="glass-card px-5 py-3.5 rounded-xl flex items-center gap-3 border border-white bg-offwhite/60">
                    <BadgeCheck className="w-5 h-5 text-secondary" />
                    <span className="text-sm font-label-bold text-secondary-800">1 Week Free Demo</span>
                  </div>
                </div>
              </motion.div>

              <div className="lg:hidden w-full">
                <div className="bg-offwhite/95 p-6 rounded-3xl shadow-xl shadow-primary-900/10 border border-slate-100">
                  <div className="mb-5 text-center">
                    <h3 className="text-xl font-bold text-secondary-900 mb-1">Request a Call Back</h3>
                    <p className="text-sm text-slate-500">Get expert guidance for your exam preparation</p>
                  </div>
                  <form className="space-y-3" onSubmit={handleSubmit}>
                    <div>
                      <label htmlFor="mobile-name" className="block text-sm font-label-bold text-secondary-700 mb-1.5">Full Name</label>
                      <input type="text" id="mobile-name" name="name" placeholder="Enter your full name" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-offwhite focus:bg-offwhite focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all text-sm" required />
                    </div>
                    <div>
                      <label htmlFor="mobile-phone" className="block text-sm font-label-bold text-secondary-700 mb-1.5">Phone Number</label>
                      <input type="tel" id="mobile-phone" name="phone" placeholder="Enter your phone number" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-offwhite focus:bg-offwhite focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all text-sm" required />
                    </div>
                    <div>
                      <label htmlFor="mobile-course" className="block text-sm font-label-bold text-secondary-700 mb-1.5">Interested Course</label>
                      <select name="course" id="mobile-course" defaultValue="" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-offwhite focus:bg-offwhite focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all text-sm" required>
                        <option value="" disabled>Select a course</option>
                        <option value="jee">IIT JEE Coaching</option>
                        <option value="neet">NEET Coaching</option>
                        <option value="foundation">Class 8-10 Foundation</option>
                        <option value="tuition">Subject-wise Tuition</option>
                      </select>
                    </div>
                    <button disabled={isSubmitting} type="submit" className="disabled:opacity-70 w-full btn-gradient py-3.5 rounded-xl text-secondary-900 font-label-bold shadow-lg shadow-primary-500/30 hover:shadow-primary-500/50 mt-2 transition-all">
                      Submit Enquiry
                    </button>
                  </form>
                </div>
              </div>

              <div className="hidden lg:block w-full max-w-md mx-auto">
                <div className="bg-offwhite p-8 rounded-[32px] shadow-2xl shadow-primary-900/10 border border-slate-100 flex flex-col relative z-20">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-secondary-900 mb-2">Request a Call Back</h3>
                    <p className="text-sm text-slate-500">Get expert guidance for your exam preparation</p>
                  </div>
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                      <label htmlFor="name" className="block text-sm font-label-bold text-secondary-700 mb-1.5">Full Name</label>
                      <input type="text" id="name" name="name" placeholder="Enter your full name" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-offwhite focus:bg-offwhite focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all text-sm" required />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-label-bold text-secondary-700 mb-1.5">Phone Number</label>
                      <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-offwhite focus:bg-offwhite focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all text-sm" required />
                    </div>
                    <div>
                      <label htmlFor="course" className="block text-sm font-label-bold text-secondary-700 mb-1.5">Interested Course</label>
                      <select name="course" id="course" defaultValue="" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-offwhite focus:bg-offwhite focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all text-sm" required>
                        <option value="" disabled>Select a course</option>
                        <option value="jee">IIT JEE Coaching</option>
                        <option value="neet">NEET Coaching</option>
                        <option value="foundation">Class 8-10 Foundation</option>
                        <option value="tuition">Subject-wise Tuition</option>
                      </select>
                    </div>
                    <button disabled={isSubmitting} type="submit" className="disabled:opacity-70 w-full btn-gradient py-3.5 rounded-xl text-secondary-900 font-label-bold shadow-lg shadow-primary-500/30 hover:shadow-primary-500/50 mt-2 transition-all">
                      Submit Enquiry
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Past Performance Section */}
        <section className="py-12 bg-secondary-900 border-y border-secondary-800 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-500/10 rounded-full blur-[100px] pointer-events-none"></div>
          
          <div className="max-w-container-max mx-auto px-6 relative z-10">
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-offwhite/10 rounded-full text-primary-300 font-label-bold text-sm tracking-wide mb-4">
                <Award className="w-4 h-4" /> OUR PAST PERFORMANCE SINCE 2014
              </span>
              <h2 className="font-h2 text-3xl md:text-4xl">Consistent Results Year After Year</h2>
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
                <div key={idx} className="flex items-center gap-3 p-4 rounded-2xl bg-offwhite/5 border border-white/10 hover:bg-offwhite/10 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-primary-400" />
                  </div>
                  <span className="font-label-bold text-sm text-slate-200">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Courses Detailed Grid */}
        <section className="py-section-padding-lg bg-surface-container-low" id="courses">
          <div className="max-w-container-max mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div className="max-w-2xl">
                <h2 className="font-h2 mb-4">Explore Our NEET & IIT JEE Coaching Programs</h2>
                <p className="text-on-surface-variant text-body-md">Subject-wise batches for Class 11 & 12 — offline in Gurgaon, online across India. <a href="/courses" className="text-secondary font-bold inline-flex items-center gap-1">See All Courses <ArrowRight className="w-4 h-4" /></a></p>
              </div>
              <div className="flex gap-4 overflow-x-auto pb-4 md:pb-0 w-full md:w-auto snap-x">
                <a href="/courses" className="px-6 py-2 rounded-full bg-secondary-900 text-white font-label-bold whitespace-nowrap snap-start hover:bg-secondary-800 transition-colors">All Programs</a>
                <a href="/courses/iit" className="px-6 py-2 rounded-full bg-offwhite border border-slate-200 text-secondary-700 font-label-bold hover:bg-offwhite transition-colors whitespace-nowrap snap-start">IIT JEE</a>
                <a href="/courses/neet" className="px-6 py-2 rounded-full bg-offwhite border border-slate-200 text-secondary-700 font-label-bold hover:bg-offwhite transition-colors whitespace-nowrap snap-start">NEET</a>
                <a href="/courses/prefoundation" className="px-6 py-2 rounded-full bg-offwhite border border-slate-200 text-secondary-700 font-label-bold hover:bg-offwhite transition-colors whitespace-nowrap snap-start">Pre-Foundation</a>
                <a href="/courses/foundation" className="px-6 py-2 rounded-full bg-offwhite border border-slate-200 text-secondary-700 font-label-bold hover:bg-offwhite transition-colors whitespace-nowrap snap-start">Foundation</a>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                coursesData.class11.find(c => c.id === '2-year-integrated-regular'),     // IIT 2-year
                coursesData.class11.find(c => c.id === '2-year-integrated-regular-neet'),     // NEET 2-year
                coursesData.class12.find(c => c.id === '1-year-regular-12'),     // IIT 1-year
                coursesData.class12.find(c => c.id === '1-year-regular-12-neet'),     // NEET 1-year
                coursesData.class9.find(c => c.id === '2-year-regular-class-9'),      // Foundation 2-year Class 9
                coursesData.class10.find(c => c.id === '1-year-regular-class-10')      // Foundation 1-year Class 10
              ].map((course, idx) => course && (
                <div key={idx} className="bg-offwhite rounded-[24px] p-8 shadow-sm border border-slate-100 flex flex-col group hover:shadow-xl transition-all">
                  <div className="mb-6 flex justify-between items-start">
                    <span className={`px-3 py-1 ${course.stream === 'iit' ? 'bg-primary-100/50 text-secondary' : course.stream === 'neet' ? 'bg-primary-100/50 text-primary-700' : 'bg-amber-100/50 text-amber-700'} text-caption rounded-full font-label-bold uppercase tracking-wider`}>
                      {course.tag}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold border border-orange-200">{course.classLabel}</span>
                  </div>
                  <h3 className={`font-h3 mt-2 group-hover:${course.stream === 'iit' ? 'text-secondary' : course.stream === 'neet' ? 'text-primary-700' : 'text-amber-600'} transition-colors mb-3`}>{course.title}</h3>
                  <p className="text-sm text-slate-600 mb-6 flex-grow line-clamp-3">{course.details.description}</p>
                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-100">
                    <div>
                      <span className="block text-xs text-slate-500 mb-1">{course.subtitle}</span>
                    </div>
                    <a href={`/course/${course.id}`} className="w-10 h-10 rounded-full bg-offwhite flex items-center justify-center text-secondary-900 group-hover:bg-secondary-900 group-hover:text-white transition-all">
                      <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dedicated Subject Classes */}
        <section className="py-16 md:py-20 bg-offwhite border-b border-slate-100" id="live-classes">
          <div className="max-w-container-max mx-auto px-6">
            <div className="text-center mb-10">
              <h2 className="font-h2 mb-4 text-secondary-900">Dedicated Subject Classes</h2>
              <p className="text-primary-700 text-xl font-bold max-w-2xl mx-auto mb-2">Are you facing difficulties with a specific subject?</p>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto mb-4">Master it with our highly-focused, expert-led sessions designed exclusively for CBSE, IIT JEE, and NEET preparation.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Physics */}
              <a href="/subject/physics" className="bg-offwhite rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col group block">
                <div className="bg-gradient-to-br from-amber-400 to-orange-500 p-8 flex flex-col items-center text-center gap-4">
                  <div className="w-20 h-20 bg-offwhite rounded-full flex items-center justify-center shrink-0 shadow-inner mb-2 group-hover:scale-110 transition-transform">
                    <Atom className="w-10 h-10 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-white mb-2">Physics</h3>
                    <p className="text-white/90 font-bold text-sm tracking-wide">CBSE • IIT JEE • NEET</p>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow bg-offwhite/50 justify-between">
                  <p className="text-slate-600 text-center mb-8">Conquer complex concepts and numericals with expert-led physics sessions.</p>
                  <div className="mt-auto flex justify-center text-primary-600 font-bold items-center gap-2 group-hover:gap-3 transition-all">
                    View Course Details <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </a>

              {/* Chemistry */}
              <a href="/subject/chemistry" className="bg-offwhite rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col group block">
                <div className="bg-gradient-to-br from-orange-400 to-red-500 p-8 flex flex-col items-center text-center gap-4">
                  <div className="w-20 h-20 bg-offwhite rounded-full flex items-center justify-center shrink-0 shadow-inner mb-2 group-hover:scale-110 transition-transform">
                    <FlaskConical className="w-10 h-10 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-white mb-2">Chemistry</h3>
                    <p className="text-white/90 font-bold text-sm tracking-wide">CBSE • IIT JEE • NEET</p>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow bg-offwhite/50 justify-between">
                  <p className="text-slate-600 text-center mb-8">Master organic, inorganic, and physical chemistry with targeted learning.</p>
                  <div className="mt-auto flex justify-center text-primary-600 font-bold items-center gap-2 group-hover:gap-3 transition-all">
                    View Course Details <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </a>

              {/* Mathematics */}
              <a href="/subject/mathematics" className="bg-offwhite rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col group block">
                <div className="bg-gradient-to-br from-primary-500 to-secondary-600 p-8 flex flex-col items-center text-center gap-4">
                  <div className="w-20 h-20 bg-offwhite rounded-full flex items-center justify-center shrink-0 shadow-inner mb-2 group-hover:scale-110 transition-transform">
                    <Calculator className="w-10 h-10 text-secondary-500" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-white mb-2">Mathematics</h3>
                    <p className="text-white/90 font-bold text-sm tracking-wide">CBSE • IIT JEE</p>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow bg-offwhite/50 justify-between">
                  <p className="text-slate-600 text-center mb-8">Build rigorous problem-solving skills and mathematical thinking for top exams.</p>
                  <div className="mt-auto flex justify-center text-secondary-600 font-bold items-center gap-2 group-hover:gap-3 transition-all">
                    View Course Details <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </a>

              {/* Biology */}
              <a href="/subject/biology" className="bg-offwhite rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col group block">
                <div className="bg-gradient-to-br from-primary-400 to-primary-600 p-8 flex flex-col items-center text-center gap-4">
                  <div className="w-20 h-20 bg-offwhite rounded-full flex items-center justify-center shrink-0 shadow-inner mb-2 group-hover:scale-110 transition-transform">
                    <Dna className="w-10 h-10 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-white mb-2">Biology</h3>
                    <p className="text-white/90 font-bold text-sm tracking-wide">CBSE • NEET</p>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow bg-offwhite/50 justify-between">
                  <p className="text-slate-600 text-center mb-8">Deep dive into botany and zoology with comprehensive and interactive prep.</p>
                  <div className="mt-auto flex justify-center text-primary-600 font-bold items-center gap-2 group-hover:gap-3 transition-all">
                    View Course Details <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Offerings Section */}
        <section className="py-16 md:py-20 bg-offwhite/50" id="offerings">
          <div className="max-w-container-max mx-auto px-6">
            <div className="text-center mb-10">
              <h2 className="font-h2 mb-4 text-secondary-900">Everything You Need to Succeed</h2>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto">Flexible learning options tailored to your specific needs.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Home Tuition */}
              <div id="home-tuition" className="glass-card p-8 rounded-3xl border border-slate-100 hover:border-secondary-200 transition-all duration-300 hover:shadow-xl hover:shadow-secondary-900/5 hover:-translate-y-1 bg-offwhite">
                <div className="w-14 h-14 rounded-2xl bg-secondary-50 flex items-center justify-center mb-6">
                  <HomeIcon className="w-7 h-7 text-secondary-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-secondary-900">Home Tuition In Gurgaon</h3>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed font-semibold">CBSE 6th to 12th, NEET & IIT JEE — One-to-one sessions with subject experts</p>
                <ul className="text-slate-600 text-sm mb-6 leading-relaxed list-disc pl-5 space-y-1">
                  <li>Dedicated subject classes for CBSE (6th to 12th), IIT JEE & NEET</li>
                  <li>Study plan built around your schedule & gaps</li>
                  <li>Seamlessly covers School Boards and Competitive prep together</li>
                </ul>
                <a href="/home-tuition" className="text-secondary-600 font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">Book a Home Tutor <ArrowRight className="w-4 h-4"/></a>
              </div>

              {/* Olympiad */}
              <div id="olympiad" className="glass-card p-8 rounded-3xl border border-slate-100 hover:border-primary-200 transition-all duration-300 hover:shadow-xl hover:shadow-primary-900/5 hover:-translate-y-1 bg-offwhite">
                <div className="w-14 h-14 rounded-2xl bg-primary-50 flex items-center justify-center mb-6">
                  <Medal className="w-7 h-7 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-secondary-900">Entrance and Competitive Exam Coaching</h3>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed font-semibold">CUET, NDA, Science & Maths Olympiad prep (NSO, IMO & more)</p>
                <ul className="text-slate-600 text-sm mb-6 leading-relaxed list-disc pl-5 space-y-1">
                  <li>Targeted preparation for CUET & NDA for top universities and defense</li>
                  <li>Logical reasoning & advanced problem-solving for Olympiads</li>
                  <li>Builds the exact analytical skills JEE & NEET demand</li>
                </ul>
                <a href="/olympiad" className="text-primary-600 font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">Learn More <ArrowRight className="w-4 h-4"/></a>
              </div>

              {/* Doubt Clearing */}
              <div className="glass-card p-8 rounded-3xl border border-slate-100 hover:border-amber-200 transition-all duration-300 hover:shadow-xl hover:shadow-amber-900/5 hover:-translate-y-1 bg-offwhite bg-gradient-to-br from-white to-amber-50/50">
                <div className="w-14 h-14 rounded-2xl bg-amber-50 flex items-center justify-center mb-6">
                  <HelpCircle className="w-7 h-7 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-secondary-900">Doubt Sessions</h3>
                <ul className="text-slate-600 text-sm mb-6 leading-relaxed list-disc pl-5 space-y-1 mt-2">
                  <li>Quick one-to-one doubt clearing — online & offline</li>
                  <li>Physics, Chemistry, Maths, Biology — all subjects</li>
                  <li>Available for both Board & competitive exam students</li>
                </ul>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed font-semibold mt-4">Stuck at a Problem?</p>
                <a href="/doubt-sessions" className="text-amber-600 font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">Book a Doubt Session Today <ArrowRight className="w-4 h-4"/></a>
              </div>
            </div>
          </div>
        </section>

        {/* Differentiator */}
        <section className="py-section-padding-lg dark-section text-white relative overflow-hidden" id="differentiators">
          <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
            <div className="absolute top-20 left-10 w-96 h-96 bg-primary-600/20 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-600/20 rounded-full blur-[120px]"></div>
          </div>
          <div className="max-w-container-max mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="font-h2 mb-8 leading-tight">Small Batches. Real Attention.<br/><span className="text-glow text-primary-400">NEET & IIT JEE Results That Speak.</span></h2>
                <p className="font-body-lg text-slate-400 mb-12">Most coaching institutes in Gurgaon pack 60-80 students in a room and call it a batch. We don't. At Good Marks Classes, online batches are capped at 10 students and offline at 30 — so Sunil Gola Sir actually knows where each student is struggling, whether it's Organic Chemistry for NEET or Calculus for IIT JEE.</p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary-500/20 flex items-center justify-center flex-shrink-0">
                      <ListOrdered className="w-5 h-5 text-primary-400" />
                    </div>
                    <div>
                      <h4 className="font-label-bold mb-1 text-white">Batch Limits</h4>
                      <p className="text-caption text-slate-400">Max 10 students per online batch — your doubts don't get skipped. Max 30 students per offline batch — personal attention, not just lectures.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary-500/20 flex items-center justify-center flex-shrink-0">
                      <UserSearch className="w-5 h-5 text-primary-400" />
                    </div>
                    <div>
                      <h4 className="font-label-bold mb-1 text-white">Targeted Support</h4>
                      <p className="text-caption text-slate-400">Home tuition available — best NEET & IIT JEE tuition at your doorstep in Gurgaon. Separate batches for Boards & competitive exams — no mixed-up preparation.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary-500/20 flex items-center justify-center flex-shrink-0">
                      <Award className="w-5 h-5 text-primary-400" />
                    </div>
                    <div>
                      <h4 className="font-label-bold mb-1 text-white">Direct Founder Access</h4>
                      <p className="text-caption text-slate-400">Physics taught directly by Sunil Gola Sir — DTU alumnus, not a substitute.</p>
                    </div>
                  </div>
                </div>
                
                <button className="mt-12 btn-gradient px-10 py-4 rounded-xl text-secondary-900 font-label-bold">
                  Book Your Free Demo
                </button>
              </div>

              <div className="grid grid-flow-row gap-4 h-max self-center">
                <div className="space-y-4">
                  <div className="bg-offwhite/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl flex flex-col items-center justify-center text-center">
                    <h5 className="text-4xl font-bold text-primary-400 font-heading">
                      4.8 Avg Rating
                    </h5>
                    <p className="text-caption text-slate-400 mt-2">by NEET & JEE Students & Parents</p>
                  </div>
                  <div className="bg-offwhite/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl flex flex-col items-center justify-center text-center">
                    <h5 className="text-4xl font-bold text-primary-400 font-heading flex items-center justify-center gap-2">500+ Students <Star className="w-6 h-6 text-yellow-500 fill-current mt-0.5" /></h5>
                    <p className="text-caption text-slate-400 mt-2">Coached across NEET, IIT JEE & Class 11 & 12</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-4" id="about">
          <div className="max-w-container-max mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="relative">
                <div className="aspect-[4/5] rounded-[40px] overflow-hidden bg-slate-200 shadow-2xl shadow-secondary-900/10 border-8 border-white relative z-10 flex items-center justify-center text-center">
                  <img className="w-full h-full object-cover transition-all duration-700 hover:scale-105" 
                       alt="Sunil Gola" 
                       src="/sunil-gola.png" 
                       onError={(e) => {
                         const target = e.target as HTMLImageElement;
                         target.onerror = null;
                         target.src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop";
                       }}
                       />
                </div>
                <div className="absolute top-10 -left-10 w-full h-full bg-primary-50 rounded-[40px] z-0"></div>
                <div className="absolute -bottom-10 -right-6 md:-right-10 glass-card p-6 rounded-2xl border border-white shadow-xl shadow-primary-900/5 max-w-[280px] z-20 bg-offwhite/80 backdrop-blur-xl">
                  <p className="font-label-bold text-secondary-800 italic leading-relaxed">"Teaching is not about filling a bucket, but lighting a fire."</p>
                  <p className="text-xs font-bold uppercase tracking-wider text-secondary mt-4">— Sunil Gola Sir (DTU)</p>
                </div>
              </div>
              
              <div className="space-y-stack-md">
                <h2 className="font-h2 leading-tight">The Coaching That Gets NEET & JEE Students Real Results</h2>
                <p className="font-body-lg text-on-surface-variant">Good Marks Classes was founded by Sunil Gola Sir — DTU alumnus and Physics expert who has coached students for NEET, IIT JEE, CBSE, IB and CUET. Small batches, real attention, zero fluff — offline in Gurgaon or online from anywhere.</p>
                
                <div className="space-y-4">
                  <div className="flex gap-4 p-4 rounded-xl hover:bg-offwhite transition-colors border border-slate-100">
                    <Rocket className="w-6 h-6 text-secondary shrink-0" />
                    <div>
                      <h4 className="font-label-bold">Our Mission</h4>
                      <p className="text-caption text-on-surface-variant leading-relaxed">Keep it small, keep it focused. Max 10 students online and 30 offline — because NEET and IIT JEE coaching only works when every student's doubts actually get addressed in class.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 p-4 rounded-xl hover:bg-offwhite transition-colors border border-slate-100">
                    <Eye className="w-6 h-6 text-secondary shrink-0" />
                    <div>
                      <h4 className="font-label-bold">Our Vision</h4>
                      <p className="text-caption text-on-surface-variant leading-relaxed">Every Class 11 & 12 student — whether preparing for NEET, IIT JEE, or Boards — should have access to coaching that's genuinely built around their needs, not just their fees.</p>
                    </div>
                  </div>
                </div>
                <button className="btn-gradient px-8 py-3 rounded-xl text-secondary-900 font-label-bold mt-4 shadow-lg shadow-primary-500/20">Book a Demo</button>
              </div>
            </div>
          </div>
        </section>





        {/* Why Good Marks Classes Section */}
        <section className="pt-section-padding-lg pb-12" id="why-us">
          <div className="max-w-container-max mx-auto px-6">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="font-h2 mb-4">Why Good Marks Classes</h2>
              <p className="text-slate-600 text-lg">The key differentiators that make us the preferred choice for students.</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {/* Feature Cards */}
              {[
                { icon: Award, title: "Proven Track Record Faculty", color: "text-primary-600", bg: "bg-primary-100" },
                { icon: Users2, title: "Parent Teacher Meeting (PTM)", color: "text-secondary-600", bg: "bg-secondary-100" },
                { icon: Users, title: "Small Batch Size (Tutorials)", color: "text-primary-600", bg: "bg-primary-100" },
                { icon: BookOpen, title: "CBSE Syllabus First", color: "text-primary-600", bg: "bg-primary-100" },
                { icon: LineChart, title: "Score Enhancement Classes", color: "text-amber-600", bg: "bg-amber-100" },
                { icon: Clock, title: "Scientific Time Management", color: "text-secondary-600", bg: "bg-secondary-100" },
                { icon: Activity, title: "Individual Performance Evaluation", color: "text-rose-600", bg: "bg-rose-100" },
                { icon: BookText, title: "Research Oriented Study Materials", color: "text-cyan-600", bg: "bg-cyan-100" },
                { icon: Flame, title: "Motivational Environment", color: "text-orange-600", bg: "bg-orange-100" },
                { icon: Target, title: "Excellent Results", color: "text-primary-600", bg: "bg-primary-100" },
                { icon: MessageCircleQuestion, title: "Doubt Clearing Cell", color: "text-pink-600", bg: "bg-pink-100" },
                { icon: FileText, title: "Various Test Papers", color: "text-fuchsia-600", bg: "bg-fuchsia-100" },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="glass-card p-6 rounded-2xl border border-slate-100 flex flex-col items-center text-center hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
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

        {/* Expectations Section */}
        <section className="pt-12 pb-section-padding-lg bg-offwhite/50" id="expectations">
          <div className="max-w-container-max mx-auto px-6">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="font-h2 mb-4">Good Marks Classes Expectations</h2>
              <p className="text-slate-600 text-lg">Success is a collaborative effort between the institute, parents, and students.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* From Parents */}
              <div className="bg-offwhite p-8 md:p-10 rounded-[32px] shadow-xl shadow-primary-900/5 border border-slate-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-50 rounded-bl-[100px] z-0"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                      <UsersRound className="w-6 h-6 text-primary-600" />
                    </div>
                    <h3 className="text-2xl font-bold border-b-2 border-primary-200 pb-1">From Parents</h3>
                  </div>
                  <ul className="space-y-4">
                    {[
                      "Parents mustn't scold their wards for under performance rather contact with concerned teachers.",
                      "Parents must ensure that their wards must reach the institute on time.",
                      "Parents must ensure 5-6 hours of their wards' dedicated study at home.",
                      "Parents must review their wards' performance and give us regular feedback.",
                      "Parents must keep vigilant eye upon their wards' extra-curricular activities.",
                      "Parents must restrict their wards from the over use of smart phones and internet.",
                      "Parents must address their wards' problems regularly and boost their morale.",
                      "Parents must ensure on time payment of tuition fees themselves."
                    ].map((text, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-600 text-sm leading-relaxed">
                        <div className="min-w-6 w-6 h-6 rounded-full bg-primary-50 flex items-center justify-center shrink-0 mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-primary-400"></div>
                        </div>
                        {text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* From Students */}
              <div className="bg-offwhite p-8 md:p-10 rounded-[32px] shadow-xl shadow-secondary-900/5 border border-slate-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary-50 rounded-bl-[100px] z-0"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-secondary-100 rounded-xl flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-secondary-600" />
                    </div>
                    <h3 className="text-2xl font-bold border-b-2 border-secondary-200 pb-1">From Students</h3>
                  </div>
                  <ul className="space-y-4">
                    {[
                      "Students must be regular in attending their classes.",
                      "Students shouldn't hesitate in asking their doubts with the concerned teachers.",
                      "Students shouldn't hesitate in complaining the short comings of teachers.",
                      "Students must be regular in revising the class work and doing the home work.",
                      "Students must pay attention toward incorrect/wrong attempted questions.",
                      "Students must do justice with all subjects whether it is PCB or PCM.",
                      "Students must write the tests regularly whether MCQ or subjective.",
                      "Students must review their own tests honestly and eliminate the mistakes."
                    ].map((text, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-600 text-sm leading-relaxed">
                        <div className="min-w-6 w-6 h-6 rounded-full bg-secondary-50 flex items-center justify-center shrink-0 mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-secondary-400"></div>
                        </div>
                        {text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-4">
          <div className="text-center mb-16">
            <h2 className="font-h2 text-h2 text-secondary-900">Student Success Stories</h2>
          </div>
          
          <TestimonialCarousel />
        </section>

        {/* FAQs */}
        <section className="py-12 bg-offwhite/50 border-t border-slate-100">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="font-h2 text-secondary-900 mb-4">FAQS (Frequently Asked Questions)</h2>
              <p className="text-slate-600 font-body">Everything you need to know about our courses, methodology, and admissions.</p>
            </div>
            
            <div className="flex flex-col gap-4">
              {faqItems.map((faq, idx) => (
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
        <section className="py-24 bg-secondary-900 text-white rounded-t-[40px] md:rounded-t-[80px] mt-[-40px] relative z-20">
          <div className="max-w-container-max mx-auto px-6 text-center">
            <h2 className="font-h1 text-5xl md:text-6xl mb-6">Still Deciding?</h2>
            <p className="font-body-lg text-slate-400 mb-10 max-w-2xl mx-auto text-lg">Don't commit yet. Just attend a full week of classes — strictly free. See the difference that real, focused attention makes to your academic career.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="btn-gradient px-12 py-5 rounded-xl text-secondary-900 font-bold text-lg shadow-lg shadow-primary-500/20 hover:shadow-primary-500/40">Start Free Demo</button>
              <a href="tel:8800880028" className="px-10 py-5 rounded-xl border border-secondary-700 text-slate-300 font-bold text-lg hover:bg-secondary-800 transition-colors flex items-center justify-center gap-2"><Phone className="w-5 h-5"/> 8800 8800 28</a>
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
              }}>
                <div>
                  <input 
                    type="text" 
                    name="name"
                    placeholder="Student Name" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all placeholder:text-slate-400 text-sm"
                    required
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    name="phone"
                    placeholder="Mobile Number" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all placeholder:text-slate-400 text-sm"
                    required
                  />
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
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-6 btn-gradient py-3 rounded-xl text-secondary-900 font-bold shadow-md shadow-primary-500/20 hover:shadow-primary-500/40 transition-all disabled:opacity-50"
                >
                  {isSubmitting ? 'Booking...' : 'Book Free Demo'}
                </button>
              </form>
            </div>
          </div>
        )}

      </main>
  );
}
