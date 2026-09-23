import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useFormSubmit } from '../hooks/useFormSubmit';
import TestimonialCarousel from './TestimonialCarousel';
import {
  Phone, CheckCircle2, GraduationCap, Users, Star, Award, HeartPulse,
  Atom, FlaskConical, Calculator, Brain, Home as HomeIcon,
  ArrowRight, MessageCircleQuestion, Clock, Target, BadgeCheck,
  BookOpen, FileCheck2, MonitorPlay, UserCheck, LayoutGrid, MapPin,
} from 'lucide-react';

const PHONE = '8800 8800 28';
const TEL = 'tel:8800880028';

const subjectClasses = [
  {
    icon: Atom, title: 'Physics Classes in Gurgaon', image: '/images/landing/physics.webp',
    desc: 'NCERT-first conceptual teaching with numerical practice — taught by Sunil Gola Sir (DTU), teaching since 2014.',
    href: '/tuition/physics-tuition-classes-gurgaon',
  },
  {
    icon: FlaskConical, title: 'Chemistry Classes in Gurgaon', image: '/images/landing/chemistry.webp',
    desc: 'Physical, organic and inorganic chemistry with regular worksheets and board-style answer practice.',
    href: '/tuition/chemistry-tuition-classes-gurgaon',
  },
  {
    icon: Calculator, title: 'Maths Classes in Gurgaon', image: '/images/landing/maths.webp',
    desc: 'Step-wise writing practice for board marks and problem-solving speed for JEE questions.',
    href: '/tuition/maths-tuition-classes-gurgaon',
  },
  {
    icon: Brain, title: 'Biology Classes in Gurgaon', image: '/images/landing/biology.webp',
    desc: 'Concept clarity with diagrams, NCERT line-by-line coverage and NEET-style MCQ practice.',
    href: '/tuition/biology-tuition-classes-gurgaon',
  },
];

const jeePrograms = [
  { name: '1-Year Regular Programme', cls: 'Class 12 + JEE Main & Advanced', href: '/course/1-year-regular-12' },
  { name: '2-Year Integrated Programme', cls: 'Class 11 → 12 with JEE', href: '/course/2-year-integrated-regular' },
  { name: 'Spark Batch', cls: 'JEE while keeping pace with school', href: '/course/2-year-integrated-spark' },
  { name: 'Extended Classroom Program', cls: 'Repeat year / droppers', href: '/course/1-year-extended-classroom-jee' },
];

const neetPrograms = [
  { name: '1-Year Regular Programme', cls: 'Class 12 + NEET-UG', href: '/course/1-year-regular-12-neet' },
  { name: '2-Year Integrated Programme', cls: 'Class 11 → 12 with NEET', href: '/course/2-year-integrated-regular-neet' },
  { name: 'Spark Batch', cls: 'NEET while balancing school', href: '/course/2-year-integrated-spark-neet' },
  { name: 'Dropper / Extended Classroom', cls: 'Repeat year for NEET', href: '/course/1-year-extended-classroom-neet' },
];

const whyItems = [
  { icon: Users, title: 'Maximum 30 offline, 10 online', desc: 'Every student is known by name and teachers track each weak area.' },
  { icon: LayoutGrid, title: 'Separate board and JEE/NEET batches', desc: 'Board and competitive pacing never get mixed in one class.' },
  { icon: FileCheck2, title: 'Weekly worksheets + monthly full-syllabus tests', desc: 'Gaps surface early, before the board exam or entrance test.' },
  { icon: UserCheck, title: 'Parent-teacher meetings & progress reports', desc: 'Families see how their child is actually performing between PTMs.' },
  { icon: MonitorPlay, title: 'Offline, online, hybrid & home tuition', desc: 'Choose the format that fits school timings and travel.' },
  { icon: BadgeCheck, title: 'Free 1-week demo before you pay', desc: 'Attend real classes and judge the teaching first.' },
];

const faqs = [
  {
    q: 'Which classes does Good Marks Classes teach?',
    a: 'We coach Classes 8 to 12 and passout students. CBSE board tuitions run for Classes 8 to 12, with subject-wise Physics, Chemistry, Maths and Biology classes, and separate IIT JEE and NEET batches.',
  },
  {
    q: 'What is the batch size in Gurgaon coaching?',
    a: 'Online maths and science batches are capped at 10 students and offline batches at 30. Small batches let teachers spot and fix errors early.',
  },
  {
    q: 'Do you teach CBSE board and JEE in the same class?',
    a: 'No. Board preparation and JEE preparation need different pacing, so at Good Marks Classes they are taught in separate batches. Students pick a board-focused track or a JEE/NEET-focused track.',
  },
  {
    q: 'Is there a free demo class before joining?',
    a: 'Yes. Every student can attend a free one-week demo in the matching batch before deciding. You can also book a free counselling call by phone.',
  },
  {
    q: 'Which formats are available — offline, online or home tuition?',
    a: 'All of them. Classes run offline in Sector 85, Gurugram, online in batches capped at 10, in hybrid mode, and through home tuition for families who prefer one-to-one support.',
  },
  {
    q: 'Where is the coaching centre located?',
    a: 'The centre is in Sector 85, Gurugram, and serves students from Sectors 78 to 99 and Manesar.',
  },
  {
    q: 'Who teaches Physics at Good Marks Classes?',
    a: 'Physics is led by Sunil Gola Sir, a DTU alumnus who has been teaching students since 2014. The institute reports a Class XII highest score of 96.8% and a best JEE Advanced rank of AIR 129 among past results.',
  },
  {
    q: 'How does the institute test and track progress?',
    a: 'Maths and science batches use weekly worksheets, monthly full-syllabus tests and mock board papers, followed by parent-teacher meetings and periodic progress reports. Doubt sessions are available for stuck problems.',
  },
  {
    q: 'My child is weak at Maths. Will small batches help?',
    a: 'Usually, yes. Trouble with later chapters often traces back to older gaps, so we diagnose those first and close them with one-to-one doubt sessions before moving ahead.',
  },
  {
    q: 'How much do the coaching fees cost?',
    a: 'Fees depend on the class, track (board, JEE or NEET) and format. Call 8800 8800 28 for current fees and upcoming batch timings.',
  },
];

function FaqItem({ q, a, open, onToggle, id }: {
  q: string; a: string; open: boolean; onToggle: () => void; id: number;
}) {
  return (
    <div className={`glass-card rounded-2xl border transition-colors ${open ? 'border-primary-300 bg-white' : 'border-slate-100 bg-white hover:border-secondary-200'}`}>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={`faq-panel-${id}`}
        id={`faq-btn-${id}`}
        className="w-full flex items-center justify-between gap-4 p-6 text-left cursor-pointer rounded-2xl"
      >
        <span className="font-bold text-secondary-800 text-base md:text-lg">{q}</span>
        <span className={`min-w-8 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 transition-transform duration-300 shrink-0 ${open ? 'rotate-180' : ''}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
        </span>
      </button>
      <div className={`grid transition-all duration-300 ease-in-out ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden">
          <p className="px-6 pb-6 pt-1 text-slate-600 leading-relaxed">{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function CbseLanding() {
  const { submitForm, isSubmitting, isSuccess, setIsSuccess } = useFormSubmit('CBSE Landing Demo Request');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    await submitForm(data);
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const courses = [
    { name: 'CBSE Tuition for Class 12', url: 'https://www.goodmarksclasses.com/courses/cbse' },
    { name: '1-Year Regular Programme (IIT JEE)', url: 'https://www.goodmarksclasses.com/course/1-year-regular-12' },
    { name: '2-Year Integrated Programme (IIT JEE)', url: 'https://www.goodmarksclasses.com/course/2-year-integrated-regular' },
    { name: 'Spark Batch (IIT JEE)', url: 'https://www.goodmarksclasses.com/course/2-year-integrated-spark' },
    { name: '1-Year Regular Programme (NEET)', url: 'https://www.goodmarksclasses.com/course/1-year-regular-12-neet' },
    { name: '2-Year Integrated Programme (NEET)', url: 'https://www.goodmarksclasses.com/course/2-year-integrated-regular-neet' },
  ];
  const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Coaching Programmes at Good Marks Classes',
    itemListElement: courses.map((c, i) => ({
      '@type': 'ListItem', position: i + 1,
      item: {
        '@type': 'Course',
        name: c.name,
        provider: { '@type': 'EducationalOrganization', name: 'Good Marks Classes', url: 'https://www.goodmarksclasses.com' },
        url: c.url,
      },
    })),
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />

      {/* ================= HERO ================= */}
      <section className="relative pt-32 lg:pt-40 pb-20 px-6 overflow-hidden bg-secondary-950 text-white">
        <div className="absolute inset-0 opacity-25 pointer-events-none">
          <img src="/images/landing/classroom-ambient.webp" alt="" className="w-full h-full object-cover" loading="eager" />
        </div>
        <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full opacity-40 pointer-events-none">
          <div className="absolute blur-[100px] bg-primary-500/20 w-96 h-96 rounded-full top-24 right-24"></div>
        </div>
        <div className="max-w-container-max mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="space-y-5">
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-secondary font-label-bold text-xs uppercase tracking-widest shadow-sm">
                  <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span></span>
                  Free 1-Week Demo Class
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white font-label-bold text-xs uppercase tracking-widest">
                  Sector 85, Gurugram
                </span>
              </div>
              <h1 className="font-h1 text-4xl md:text-5xl lg:text-[3.4rem] leading-[1.1] tracking-tight">
                CBSE Tuition in Gurgaon for Classes 8–12,{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-500">
                  with Subject Classes, IIT JEE &amp; NEET Batches
                </span>
              </h1>
              <p className="text-slate-300 text-lg leading-relaxed">
                Small-batch coaching led by <a href="/physics-classes-sunil-gola" className="text-primary-300 underline hover:text-primary-200">Sunil Gola Sir (DTU)</a>, teaching since 2014. CBSE board batches first, then subject-wise Physics, Chemistry, Maths and Biology classes — and separate IIT JEE and NEET tracks. Maximum 30 students offline, 10 online.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a href={TEL} className="btn-gradient inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 font-bold text-secondary-900 shadow-lg shadow-primary-500/25 hover:scale-[1.02] transition">
                  <Phone className="w-5 h-5" /> Call {PHONE}
                </a>
                <a href="#demo-form" className="inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 font-bold text-white border border-white/25 hover:bg-white/10 transition">
                  Book Free Demo <ArrowRight className="w-5 h-5" />
                </a>
              </div>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-4 text-sm text-slate-300">
                <span className="inline-flex items-center gap-2"><Award className="w-4 h-4 text-primary-400" /> Class XII high score 96.8%</span>
                <span className="inline-flex items-center gap-2"><Star className="w-4 h-4 text-primary-400" /> Best JEE Adv rank AIR 129</span>
                <span className="inline-flex items-center gap-2"><Clock className="w-4 h-4 text-primary-400" /> Since 2014</span>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className="relative">
              <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src="/images/landing/hero-classroom.webp"
                  alt="Teacher conducting a small-batch CBSE coaching class with attentive students in Gurgaon"
                  className="w-full h-auto object-cover"
                  loading="eager"
                />
              </div>
              <div className="absolute -bottom-6 left-6 right-6 glass-card bg-white text-secondary-900 rounded-2xl p-5 flex items-center gap-4 shadow-xl">
                <img src="/sunil-gola.png" alt="" className="w-14 h-14 rounded-full object-cover ring-2 ring-primary-400" />
                <div>
                  <p className="font-bold">Sunil Gola Sir · DTU Alumnus</p>
                  <p className="text-sm text-slate-500">Teaching physics &amp; maths since 2014</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= TRUST BAR ================= */}
      <section className="py-10 bg-secondary-900 border-y border-secondary-800 text-white">
        <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { n: '96.8%', l: 'Class XII highest score' },
            { n: 'AIR 129', l: 'Best JEE Advanced rank' },
            { n: '10 / 30', l: 'Online / offline batch cap' },
            { n: '1 Week', l: 'Free demo classes' },
          ].map(s => (
            <div key={s.l}>
              <p className="font-h1 text-3xl md:text-4xl text-primary-400">{s.n}</p>
              <p className="text-sm text-slate-300 mt-1">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CBSE TUITIONS (PRIMARY) ================= */}
      <section className="py-section-padding-lg bg-surface-container-low" id="cbse-tuitions">
        <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-3xl mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 text-secondary font-label-bold text-xs uppercase tracking-widest"><GraduationCap className="w-4 h-4" /> CBSE Board Focus</span>
            <h2 className="font-h1 text-3xl md:text-4xl text-secondary-900 mt-4 mb-4">CBSE Tuition in Gurgaon, Taught the Way the Board Marks</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Board exams reward clean, step-wise working. Our CBSE tuition for Classes 8–12 covers NCERT first, trains students to write answers the way examiners award marks, and tests them every week. In the CBSE 2026-27 curriculum, <strong className="text-secondary-800">Calculus alone carries 35 of the 80 theory marks</strong> in Class 12 Maths — so we start board-level practice early, not in December.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="rounded-3xl overflow-hidden shadow-xl order-2 lg:order-1">
              <img
                src="/images/landing/cbse-classroom.webp"
                alt="Indian school students in uniforms attending a CBSE board preparation class"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-5">
              {[
                { t: 'Classes 8–12 + passout students', d: 'Board-track batches run for CBSE Classes 8, 9, 10, 11 and 12.' },
                { t: 'NCERT-first teaching', d: 'Answers match the NCERT method the board examiner expects.' },
                { t: 'Weekly tests + mock board papers', d: 'Internal assessment (20 marks) is tracked, not ignored.' },
                { t: 'Separate board & JEE/NEET tracks', d: 'Board batches and competitive batches never mix pacing.' },
              ].map(it => (
                <div key={it.t} className="flex gap-4 items-start">
                  <CheckCircle2 className="w-6 h-6 text-secondary-500 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-bold text-secondary-800">{it.t}</p>
                    <p className="text-slate-600">{it.d}</p>
                  </div>
                </div>
              ))}
              <div className="flex flex-wrap gap-3 pt-2">
                <a href="/courses/cbse" className="btn-gradient inline-flex items-center gap-2 rounded-xl px-6 py-3 font-bold text-secondary-900 hover:scale-[1.02] transition">
                  Explore CBSE Tuitions <ArrowRight className="w-5 h-5" />
                </a>
                <a href="/locations/cbse-tuition-gurgaon-sector-85" className="inline-flex items-center gap-2 rounded-xl px-6 py-3 font-bold text-secondary-800 border border-secondary-200 hover:bg-white transition">
                  <MapPin className="w-5 h-5" /> Sector 85 Location
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SUBJECT-WISE CLASSES ================= */}
      <section className="py-section-padding-lg bg-offwhite" id="subject-classes">
        <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 text-secondary font-label-bold text-xs uppercase tracking-widest"><BookOpen className="w-4 h-4" /> Subject-Wise Classes</span>
            <h2 className="font-h1 text-3xl md:text-4xl text-secondary-900 mt-4 mb-4">Physics, Chemistry, Maths &amp; Biology Classes in Gurgaon</h2>
            <p className="text-slate-600 text-lg">Need help in one subject, not all? Join a dedicated subject batch with the same small-group, test-and-track system.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {subjectClasses.map(c => (
              <a key={c.title} href={c.href} className="group glass-card bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-primary-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="relative overflow-hidden aspect-[3/2]">
                  <img src={c.image} alt={`${c.title} — small-batch tuition in Gurgaon`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-9 h-9 rounded-xl bg-primary-100 text-secondary flex items-center justify-center"><c.icon className="w-5 h-5" /></span>
                    <h3 className="font-h1 text-lg text-secondary-900">{c.title}</h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">{c.desc}</p>
                  <span className="inline-flex items-center gap-1 text-primary-700 font-bold text-sm mt-4 group-hover:gap-2 transition-all">View batches <ArrowRight className="w-4 h-4" /></span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ================= IIT JEE ================= */}
      <section className="py-section-padding-lg bg-secondary-950 text-white" id="iit-jee">
        <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 text-secondary font-label-bold text-xs uppercase tracking-widest"><Target className="w-4 h-4" /> IIT JEE Coaching</span>
              <h2 className="font-h1 text-3xl md:text-4xl mt-4 mb-4">IIT JEE Coaching in Gurgaon in Separate Batches</h2>
              <p className="text-slate-300 text-lg leading-relaxed">
                JEE needs depth beyond board teaching — special topics, timing and speed. Our <a href="/courses/iit" className="text-primary-300 underline hover:text-primary-200">IIT JEE coaching in Gurgaon</a> runs in separate batches so board revision never slows JEE progress.
              </p>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <img src="/images/landing/jee-students.webp" alt="IIT JEE aspirants studying together in a Gurgaon coaching batch" className="w-full h-auto object-cover" loading="lazy" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {jeePrograms.map(p => (
              <a key={p.name} href={p.href} className="group glass-card bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-primary-400/40 transition-all duration-300">
                <p className="font-bold text-secondary-900 text-white">{p.name}</p>
                <p className="text-sm text-slate-300 mt-2">{p.cls}</p>
                <span className="inline-flex items-center gap-1 text-primary-400 font-bold text-sm mt-4 group-hover:gap-2 transition-all">View course <ArrowRight className="w-4 h-4" /></span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ================= NEET ================= */}
      <section className="py-section-padding-lg bg-offwhite/50" id="neet">
        <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="rounded-3xl overflow-hidden shadow-xl order-2 lg:order-1">
              <img src="/images/landing/neet-students.webp" alt="NEET aspirant students studying biology and physics together in Gurgaon" className="w-full h-auto object-cover" loading="lazy" />
            </div>
            <div className="order-1 lg:order-2">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 text-secondary font-label-bold text-xs uppercase tracking-widest"><HeartPulse className="w-4 h-4" /> NEET Coaching</span>
              <h2 className="font-h1 text-3xl md:text-4xl text-secondary-900 mt-4 mb-4">NEET Coaching in Gurgaon with NCERT-First Biology &amp; Physics</h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                NEET is one paper of 180 questions for 720 marks. Our <a href="/courses/neet" className="text-primary-700 underline hover:text-primary-800">NEET coaching in Gurgaon</a> builds NCERT depth first, then trains speed, accuracy and MCQ negative-marking discipline in separate batches.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {neetPrograms.map(p => (
              <a key={p.name} href={p.href} className="group glass-card bg-white border border-slate-100 rounded-2xl p-6 hover:border-primary-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <p className="font-bold text-secondary-800">{p.name}</p>
                <p className="text-sm text-slate-600 mt-2">{p.cls}</p>
                <span className="inline-flex items-center gap-1 text-primary-700 font-bold text-sm mt-4 group-hover:gap-2 transition-all">View course <ArrowRight className="w-4 h-4" /></span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY GOOD MARKS ================= */}
      <section className="py-section-padding-lg dark-section text-white" id="why-goodmarks">
        <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 text-secondary font-label-bold text-xs uppercase tracking-widest"><HomeIcon className="w-4 h-4" /> Why Good Marks</span>
            <h2 className="font-h1 text-3xl md:text-4xl mt-4 mb-4">Why Parents in Gurgaon Choose Good Marks Classes</h2>
            <p className="text-slate-300 text-lg">The same system across CBSE tuitions, subject classes and competitive batches since 2014.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyItems.map(it => (
              <div key={it.title} className="glass-card bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/10 transition-all duration-300">
                <span className="w-11 h-11 rounded-xl bg-primary-100 text-secondary flex items-center justify-center mb-4"><it.icon className="w-6 h-6" /></span>
                <p className="font-bold text-lg mb-1.5">{it.title}</p>
                <p className="text-sm text-slate-300 leading-relaxed">{it.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="py-section-padding-lg bg-offwhite/50" id="testimonials">
        <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-10">
            <h2 className="font-h1 text-3xl md:text-4xl text-secondary-900 mb-3">What Students &amp; Parents Say</h2>
            <p className="text-slate-600 text-lg">Real feedback from CBSE, IIT JEE and NEET students.</p>
          </div>
          <TestimonialCarousel />
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="py-section-padding-lg bg-offwhite" id="faq">
        <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 text-secondary font-label-bold text-xs uppercase tracking-widest"><MessageCircleQuestion className="w-4 h-4" /> FAQs</span>
            <h2 className="font-h1 text-3xl md:text-4xl text-secondary-900 mt-4 mb-4">CBSE Tuition &amp; Coaching in Gurgaon — Frequently Asked Questions</h2>
            <p className="text-slate-600 text-lg">Short, direct answers to the questions parents ask us every week.</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((f, i) => (
              <FaqItem key={f.q} id={i} q={f.q} a={f.a} open={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? null : i)} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= DEMO FORM ================= */}
      <section className="py-section-padding-lg bg-secondary-950 text-white" id="demo-form">
        <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 text-secondary font-label-bold text-xs uppercase tracking-widest"><Clock className="w-4 h-4" /> Free 1-Week Demo</span>
              <h2 className="font-h1 text-3xl md:text-4xl mt-4 mb-4">Book Your Free One-Week Demo in Sector 85</h2>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                Tell us your class and goal — CBSE board, a subject, IIT JEE or NEET. We will match you with the right batch and you can attend real classes for a week before paying anything.
              </p>
              <ul className="space-y-3">
                {[
                  'Free counselling call to pick the right track',
                  'Attend real classes in the matching batch',
                  'Gap-check test to identify weak chapters',
                  'No fee till you decide — call ',
                ].map(t => (
                  <li key={t} className="flex gap-3 items-start text-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-primary-400 mt-0.5 shrink-0" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a href={TEL} className="btn-gradient inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 font-bold text-secondary-900 shadow-lg shadow-primary-500/25 hover:scale-[1.02] transition">
                  <Phone className="w-5 h-5" /> Call {PHONE}
                </a>
                <a href="/contact" className="inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 font-bold text-white border border-white/25 hover:bg-white/10 transition">
                  Contact Page
                </a>
              </div>
            </div>
            <div className="glass-card bg-white text-secondary-900 rounded-3xl p-8 shadow-xl">
              {isSuccess ? (
                <div className="text-center py-10">
                  <CheckCircle2 className="w-16 h-16 text-secondary-500 mx-auto mb-4" />
                  <h3 className="font-h1 text-2xl mb-2">Thank you!</h3>
                  <p className="text-slate-600">Your demo request is in. Our team will call you shortly to schedule your free week.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="font-h1 text-2xl text-secondary-900 mb-3">Request a Free Demo</h3>
                  <div>
                    <label htmlFor="ld-name" className="block text-sm font-semibold text-secondary-800 mb-1.5">Full name</label>
                    <input type="text" id="ld-name" name="name" placeholder="Your full name" required className="w-full pl-4 pr-4 py-3 rounded-xl border border-secondary-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500 transition-all text-sm" />
                  </div>
                  <div>
                    <label htmlFor="ld-phone" className="block text-sm font-semibold text-secondary-800 mb-1.5">Phone number</label>
                    <input type="tel" id="ld-phone" name="phone" placeholder="Your phone number" required className="w-full pl-4 pr-4 py-3 rounded-xl border border-secondary-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500 transition-all text-sm" />
                  </div>
                  <div>
                    <label htmlFor="ld-email" className="block text-sm font-semibold text-secondary-800 mb-1.5">Email (optional)</label>
                    <input type="email" id="ld-email" name="email" placeholder="Your email address" className="w-full pl-4 pr-4 py-3 rounded-xl border border-secondary-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500 transition-all text-sm" />
                  </div>
                  <div>
                    <label htmlFor="ld-course" className="block text-sm font-semibold text-secondary-800 mb-1.5">Program of interest</label>
                    <select name="course" id="ld-course" required defaultValue="" className="w-full pl-4 pr-8 py-3 rounded-xl border border-secondary-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500 transition-all text-sm appearance-none">
                      <option value="" disabled>Select a program</option>
                      <option>CBSE Tuition (Class 8–12)</option>
                      <option>Physics Classes</option>
                      <option>Chemistry Classes</option>
                      <option>Maths Classes</option>
                      <option>Biology Classes</option>
                      <option>IIT JEE Coaching</option>
                      <option>NEET Coaching</option>
                      <option>Home Tuition</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="ld-message" className="block text-sm font-semibold text-secondary-800 mb-1.5">Message (optional)</label>
                    <textarea id="ld-message" name="message" rows={3} placeholder="Tell us about your goal / current class (optional)" className="w-full pl-4 pr-4 py-3 rounded-xl border border-secondary-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500 transition-all text-sm resize-none" />
                  </div>
                  <button type="submit" disabled={isSubmitting} className="btn-gradient w-full rounded-xl px-7 py-3.5 font-bold text-secondary-900 hover:scale-[1.02] transition disabled:opacity-60">
                    {isSubmitting ? 'Sending…' : 'Request Free Demo'}
                  </button>
                  <p className="text-xs text-slate-500 text-center">Prefer to talk? Call{' '}
                    <a href={TEL} className="text-primary-700 font-bold">8800 8800 28</a>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}