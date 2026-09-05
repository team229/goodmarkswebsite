import { motion } from 'motion/react';
import { ChevronLeft, GraduationCap, Clock, Calendar, BookOpen, CheckCircle2, ChevronDown, Target } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { coursesData } from '../data/courses';
import { injectLinks, InternalLink } from '../lib/internalLinks';

export default function CourseDetail({ id }: { id?: string }) {
  
  // Find course data
  let currentCourse = null;
  for (const category of Object.values(coursesData)) {
    const found = category.find((c) => c.id === id);
    if (found) {
      currentCourse = found;
      break;
    }
  }

  if (!currentCourse) {
    return (
      <main className="pt-32 pb-20 text-center min-h-screen bg-offwhite">
        <h1 className="text-3xl font-bold text-secondary-900 mb-4">Course Not Found</h1>
        <a href="/courses" className="text-secondary-600 hover:underline">
          Return to Courses
        </a>
      </main>
    );
  }

  const { details } = currentCourse;

  const idealForRef = useRef<HTMLDivElement>(null);
  const [highlight, setHighlight] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setHighlight(false), 2600);
    return () => clearTimeout(timer);
  }, []);

  const seoHeadingByCourseId: Record<string, string> = {
    '1-year-regular-12': '1 Year JEE Coaching in Gurgaon',
    '1-year-regular-12-neet': '1 Year NEET Coaching in Gurgaon',
    '2-year-integrated-regular': '2 Year IIT JEE Coaching Program in Gurgaon',
    '2-year-integrated-regular-neet': '2 Year NEET Coaching in Gurgaon',
    'cbse-tuition-class-8': 'Class 8 CBSE Tuition in Gurgaon',
    'cbse-tuition-class-9': 'Class 9 CBSE Tuition in Gurgaon',
    'cbse-tuition-class-10': 'Class 10 CBSE Tuition in Gurgaon',
    'cbse-tuition-class-11': 'Class 11 CBSE Tuition in Gurgaon (PCMB)',
    'cbse-tuition-class-12': 'Class 12 CBSE Tuition in Gurgaon (PCMB)'
  };

  const courseHeading = seoHeadingByCourseId[currentCourse.id] || currentCourse.title;

  const subjectList: string[] = (details?.subjects || '')
    .split(',')
    .flatMap((s: string) => s.split(/ and | & |, /))
    .map((s: string) => s.replace(/\.$/, '').trim())
    .filter(Boolean);

  const [hoursLead, ...hoursRest] = (details?.hours || '').split('\n');

  const relatedLinks: InternalLink[] = [];
  if (currentCourse.stream === 'iit') {
    relatedLinks.push({ kw: 'IIT JEE coaching in Gurgaon', href: '/courses/iit' });
    relatedLinks.push({ kw: 'IIT JEE foundation course Gurgaon', href: '/courses/foundation' });
    if (currentCourse.id?.includes('extended')) {
      relatedLinks.push({ kw: 'JEE dropper course Gurgaon', href: '/courses/iit' });
    } else if (currentCourse.id?.includes('1-year')) {
      relatedLinks.push({ kw: '2 year IIT JEE program Gurgaon', href: '/course/2-year-integrated-regular' });
    } else if (currentCourse.id?.includes('2-year')) {
      relatedLinks.push({ kw: '1 year JEE coaching Gurgaon', href: '/course/1-year-regular-12' });
    }
  }
  if (currentCourse.stream === 'neet') {
    relatedLinks.push({ kw: 'NEET coaching in Gurgaon', href: '/courses/neet' });
    relatedLinks.push({ kw: 'NEET foundation course Gurgaon', href: '/courses/foundation' });
    if (currentCourse.id?.includes('extended')) {
      relatedLinks.push({ kw: 'NEET dropper course Gurgaon', href: '/courses/neet' });
    } else if (currentCourse.id?.includes('1-year')) {
      relatedLinks.push({ kw: '2 year NEET coaching Gurgaon', href: '/course/2-year-integrated-regular-neet' });
    } else if (currentCourse.id?.includes('2-year')) {
      relatedLinks.push({ kw: '1 year NEET coaching Gurgaon', href: '/course/1-year-regular-12-neet' });
    }
  }
  if (currentCourse.stream === 'cbse') {
    if (currentCourse.id?.includes('class-10')) {
      relatedLinks.push({ kw: 'maths coaching for class 10 in Gurgaon', href: '/subject/mathematics' });
      relatedLinks.push({ kw: 'class 10 physics tuition Gurugram board exam', href: '/subject/physics' });
      relatedLinks.push({ kw: 'biology tutor class 10 Gurgaon board exam', href: '/subject/biology' });
    } else if (currentCourse.id?.includes('class-9')) {
      relatedLinks.push({ kw: 'physics tuition for class 9 Gurgaon', href: '/subject/physics' });
      relatedLinks.push({ kw: 'IIT JEE foundation course Gurgaon', href: '/courses/foundation' });
      relatedLinks.push({ kw: 'maths coaching for class 10 in Gurgaon', href: '/subject/mathematics' });
    } else if (currentCourse.id?.includes('class-8')) {
      relatedLinks.push({ kw: 'IIT JEE foundation course Gurgaon', href: '/courses/foundation' });
      relatedLinks.push({ kw: 'NEET foundation course Gurgaon', href: '/courses/foundation' });
      relatedLinks.push({ kw: 'maths coaching for class 10 in Gurgaon', href: '/subject/mathematics' });
    } else if (currentCourse.id?.includes('class-11')) {
      relatedLinks.push({ kw: 'chemistry coaching for class 11 Gurgaon', href: '/subject/chemistry' });
      relatedLinks.push({ kw: 'maths coaching for class 11 in Gurgaon', href: '/subject/mathematics' });
      relatedLinks.push({ kw: 'physics tutor for class 11 CBSE Gurgaon', href: '/subject/physics' });
    } else {
      relatedLinks.push({ kw: 'CBSE chemistry tuition class 12 Gurgaon', href: '/subject/chemistry' });
      relatedLinks.push({ kw: 'maths coaching for class 12 Gurgaon', href: '/subject/mathematics' });
      relatedLinks.push({ kw: 'best physics teacher in Gurgaon for class 12', href: '/subject/physics' });
    }
  }

  return (
    <main className="pt-24 lg:pt-32 pb-20 bg-offwhite min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <a href="/courses" className="inline-flex items-center gap-2 text-slate-500 hover:text-secondary-600 font-medium mb-8 transition-colors">
          <ChevronLeft className="w-4 h-4" /> Back to Courses
        </a>

        {/* Header Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-offwhite rounded-3xl p-8 lg:p-10 shadow-sm border border-slate-100 mb-8 relative overflow-hidden"
        >
          {/* Header Gradient Accent */}
          <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${currentCourse.imageGrad}`}></div>
          
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start md:items-center">
            <div className={`w-20 h-20 rounded-2xl flex-shrink-0 bg-gradient-to-br ${currentCourse.imageGrad} flex items-center justify-center shadow-lg`}>
              <GraduationCap className="w-10 h-10 text-white" />
            </div>
            <div>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-3 py-1 bg-secondary-50 text-secondary-700 text-xs font-bold rounded-full border border-secondary-100">
                  {currentCourse.tag}
                </span>
                <span className="px-3 py-1 bg-slate-100 text-secondary-700 text-xs font-bold rounded-full">
                  Target: {currentCourse.target}
                </span>
                <span className="px-3 py-1 bg-slate-100 text-secondary-700 text-xs font-bold rounded-full">
                  Class {currentCourse.classLabel}
                </span>
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-2 leading-tight">
                {courseHeading}
              </h1>
              <p className="text-lg text-slate-500 font-medium">{currentCourse.subtitle}</p>
            </div>
          </div>
        </motion.div>

        {!details ? (
           <div className="bg-offwhite rounded-3xl p-8 text-center text-slate-500 shadow-sm border border-slate-100">
             <p>No detailed information available for this course yet.</p>
           </div>
        ) : (
          <div className="grid grid-cols-1 gap-8">
            {/* Description & Ideal For */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-offwhite rounded-3xl p-8 lg:p-10 shadow-sm border border-slate-100"
            >
              <h2 className="text-xl font-bold text-secondary-900 mb-4 border-b border-slate-100 pb-3">Programme Overview</h2>
              <div className="text-slate-600 leading-relaxed mb-8 text-lg space-y-4">
                {(() => {
                  const paras = (details.description || '').split(/\n\n/).filter(Boolean);
                  const injected = injectLinks(paras, relatedLinks);
                  return injected.map((para, i) => (
                    <p key={i} dangerouslySetInnerHTML={{ __html: para.trim() }} />
                  ));
                })()}
              </div>
              
              <motion.div
                ref={idealForRef}
                id="ideal-programme-for"
                initial={{ opacity: 0, y: 12, x: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                animate={highlight ? { boxShadow: ['0 12px 30px -8px rgba(253,196,17,0.35)', '0 10px 24px -10px rgba(253,196,17,0.15)'] } : {}}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="relative overflow-hidden rounded-2xl border-2 border-primary-300 bg-gradient-to-br from-primary-50 via-white to-cyan-50/50 shadow-lg"
              >
                <div className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-primary-500 to-cyan-400"></div>
                <div className="p-6 pl-7">
                  <div className="flex items-center gap-2 mb-2.5">
                    <span className="flex items-center gap-1.5 rounded-full bg-primary-100 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary-700">
                      <Target className="w-3.5 h-3.5" /> Ideal Programme For
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-secondary-900 mb-1.5">Who is this programme for?</h3>
                  <p className="text-secondary-800 leading-relaxed">{details.idealFor}</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Schedule & Subjects */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {/* Class Schedule card */}
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-secondary-600 to-primary-500 flex items-center justify-center shadow-md">
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-secondary-900 leading-tight">Class Schedule</h2>
                    <p className="text-xs text-slate-400 font-medium">Weekly plan & timings</p>
                  </div>
                </div>
                <div className="rounded-2xl bg-secondary-50/60 border border-secondary-100 p-5 text-secondary-700 whitespace-pre-wrap text-sm leading-relaxed">
                  {details.schedule}
                </div>

                <div className="mt-6 rounded-2xl bg-gradient-to-br from-primary-50 to-amber-50/60 border-2 border-primary-200 p-5">
                  <h3 className="font-bold text-secondary-900 mb-2.5 flex items-center gap-2">
                    <span className="flex items-center justify-center w-6 h-6 rounded-lg bg-primary-100 text-primary-700"><Clock className="w-3.5 h-3.5" /></span>
                    Programme Hours
                  </h3>
                  <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                    <span className="text-2xl font-black text-secondary-900">{hoursLead}</span>
                    {hoursRest.length > 0 && (
                      <div className="w-full text-xs text-secondary-700 font-medium whitespace-pre-wrap leading-relaxed">
                        {hoursRest.join('\n')}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Subjects Taught card */}
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-cyan-500 flex items-center justify-center shadow-md">
                    <BookOpen className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-secondary-900 leading-tight">Subjects Taught</h2>
                    <p className="text-xs text-slate-400 font-medium">Core curriculum</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2.5 mb-8">
                  {subjectList.map((subject, idx) => (
                    <span key={idx} className="px-4 py-2 rounded-xl bg-gradient-to-br from-secondary-50 to-secondary-100/60 border border-secondary-100 text-secondary-800 text-sm font-bold">
                      {subject}
                    </span>
                  ))}
                </div>

                <h2 className="text-lg font-bold text-secondary-900 mb-4 flex items-center gap-3 border-b border-slate-100 pb-4">
                  <span className="w-8 h-8 rounded-lg bg-primary-50 flex items-center justify-center text-primary-600">
                    <CheckCircle2 className="w-4 h-4" />
                  </span>
                  Key Features
                </h2>
                <ul className="space-y-3 mt-1">
                  {details.features.map((feature: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-600 text-sm leading-relaxed">
                      <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary-600" />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Test Schedule */}
            {details.testSchedule && details.testSchedule.length > 0 && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-offwhite rounded-3xl p-8 lg:p-10 shadow-sm border border-slate-100"
              >
                <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-3">
                  <div className="w-8 h-8 rounded-full bg-rose-50 flex items-center justify-center">
                    <BookOpen className="w-4 h-4 text-rose-600" />
                  </div>
                  <h2 className="text-xl font-bold text-secondary-900">Test Schedule</h2>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr>
                        <th className="py-4 px-4 font-bold text-secondary-900 border-b border-slate-200">S. No.</th>
                        <th className="py-4 px-4 font-bold text-secondary-900 border-b border-slate-200">Name of Test</th>
                        <th className="py-4 px-4 font-bold text-secondary-900 border-b border-slate-200">Frequency</th>
                        <th className="py-4 px-4 font-bold text-secondary-900 border-b border-slate-200">Duration</th>
                      </tr>
                    </thead>
                    <tbody>
                      {details.testSchedule.map((test: any, idx: number) => (
                        <tr key={idx} className="hover:bg-offwhite transition-colors">
                          <td className="py-4 px-4 border-b border-slate-100 text-slate-500">{idx + 1}.</td>
                          <td className="py-4 px-4 border-b border-slate-100 text-secondary-700 font-medium">{test.test}</td>
                          <td className="py-4 px-4 border-b border-slate-100 text-slate-600">{test.frequency}</td>
                          <td className="py-4 px-4 border-b border-slate-100 text-slate-600">{test.duration}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <p className="text-xs text-slate-400 mt-4 italic">
                    C-CAT - Comprehensive Chapter-wise Assessment Test, TAD - Test and Discussions, AITS - All India Test Series
                  </p>
                </div>
              </motion.div>
            )}

            {/* FAQ */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="bg-offwhite rounded-3xl p-8 lg:p-10 shadow-sm border border-slate-100"
            >
              <h2 className="text-xl font-bold text-secondary-900 mb-6 border-b border-slate-100 pb-3">Frequently Asked Questions</h2>
              <div className="space-y-3">
                {getFaqs(currentCourse).map((faq, idx) => (
                  <FaqItem key={idx} question={faq.q} answer={faq.a} />
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.4 }}
               className="bg-secondary-600 text-white rounded-3xl p-8 lg:p-10 flex flex-col md:flex-row items-center justify-between gap-6"
            >
              <div>
                <h3 className="text-2xl font-bold mb-2">Ready to start your preparation?</h3>
                <p className="text-secondary-100">{currentCourse.stream === 'cbse' ? 'Enroll now and build a strong foundation for board success.' : 'Enroll now and take the first step towards your engineering dream.'}</p>
              </div>
              <button onClick={() => window.dispatchEvent(new CustomEvent('open-contact-modal'))} className="bg-offwhite text-secondary-600 py-3.5 px-8 rounded-xl font-bold whitespace-nowrap hover:bg-offwhite transition-colors shadow-lg">
                Book a Free Demo
              </button>
            </motion.div>
          </div>
        )}
      </div>
    </main>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-slate-200 rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-secondary-900 hover:bg-slate-50 transition-colors text-sm"
      >
        <span>{question}</span>
        <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="px-5 pb-4 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">{answer}</div>
      )}
    </div>
  );
}

function getFaqs(course: any) {
  const isJee = course.tag === 'IIT-JEE';
  const isNeet = course.tag === 'NEET';
  const isCbse = course.stream === 'cbse';
  const isDropper = course.id?.includes('extended');

  const common = [
    { q: 'What is the class schedule and frequency?', a: 'Classes are held as per the schedule mentioned above. Each session is designed to maximise learning while allowing time for self-study and revision.' },
    { q: 'Are there any demo classes available?', a: 'Yes, we offer free demo classes. Click "Book a Free Demo" above or contact us to schedule one at your convenience.' },
    { q: 'How are doubts handled?', a: 'We have a dedicated doubt clearing cell. Students can get their doubts resolved the same day through scheduled doubt sessions after each topic.' },
    { q: 'What study material is provided?', a: 'Research-oriented, custom-curated study material based on the NCERT / CBSE curriculum, updated regularly to align with the latest board and exam patterns.' },
  ];

  if (isCbse) {
    return [
      ...common,
      { q: 'When do classes for Class 8 run?', a: 'Class 8 CBSE tuition runs on a weekend-only timetable — Saturday evening and Sunday morning-to-afternoon — so it never clashes with weekday school and activities.' },
      { q: 'Do the Class 9 & 10 batches run on weekdays too?', a: 'Yes. Class 9 and 10 CBSE tuition runs on weekdays as well as weekends, giving more classroom contact across the week while staying manageable alongside school.' },
      { q: 'What subjects are covered for Class 11 & 12?', a: 'For Class 11 and 12, the programme focuses on Physics, Chemistry, Mathematics and Biology (PCMB), taught by subject-specialist faculty with board-focused preparation.' },
      { q: 'How is the class size for CBSE tuitions?', a: 'We maintain small batches so every student gets individual attention, teacher tracking and regular feedback.' },
    ];
  }

  if (isJee) {
    return [
      ...common,
      { q: 'How does this programme prepare me for JEE Main & Advanced?', a: 'The curriculum covers extensive JEE-specific topics, with All India Test Series (AITS), Special Rank Improvement Program (SRIP), and NCERT Exemplar focusing on JEE (Main & Advanced), BITSAT & KVPY patterns.' },
      { q: `What is the duration of the ${course.title.toLowerCase()}?`, a: `The total programme hours are ${course.details?.hours || 'specified in the schedule above'}, spread across the academic session with regular tests and discussions.` },
    ];
  }

  if (isNeet) {
    return [
      ...common,
      { q: 'Does this programme cover both Class 11/12 Board and NEET syllabus?', a: 'Yes, the programme is designed to simultaneously prepare students for their CBSE Board exams and NEET/AIIMS. We prioritise CBSE syllabus first, then build competitive exam readiness.' },
      { q: 'How are Biology practicals handled?', a: 'Practical sessions are integrated into the curriculum. Our lab facilities and experienced faculty ensure hands-on learning alongside theory.' },
    ];
  }

  return common;
}
