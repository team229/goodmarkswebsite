import { motion } from 'motion/react';
import { ChevronLeft, GraduationCap, Clock, Calendar, BookOpen, CheckCircle2, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { coursesData } from '../data/courses';

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

  const seoHeadingByCourseId: Record<string, string> = {
    '1-year-regular-12': '1 Year JEE Coaching in Gurgaon',
    '1-year-regular-12-neet': '1 Year NEET Coaching in Gurgaon',
    '2-year-integrated-regular': '2 Year IIT JEE Coaching Program in Gurgaon',
    '2-year-integrated-regular-neet': '2 Year NEET Coaching in Gurgaon'
  };

  const courseHeading = seoHeadingByCourseId[currentCourse.id] || currentCourse.title;

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
              <p className="text-slate-600 leading-relaxed mb-8 text-lg">
                {details.description}
              </p>
              
              <div className="bg-secondary-50/50 rounded-2xl p-6 border border-secondary-100">
                 <h3 className="font-bold text-secondary-900 mb-2">Ideal Programme For</h3>
                 <p className="text-secondary-800 text-sm">{details.idealFor}</p>
              </div>
            </motion.div>

            {/* Schedule & Subjects */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <div className="bg-offwhite rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col">
                <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-3">
                  <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center">
                    <Calendar className="w-4 h-4 text-orange-600" />
                  </div>
                  <h2 className="text-xl font-bold text-secondary-900">Class Schedule</h2>
                </div>
                <div className="text-slate-600 whitespace-pre-wrap text-sm leading-relaxed mb-6">
                  {details.schedule}
                </div>

                <div className="mt-auto">
                  <h3 className="text-sm font-bold text-secondary-900 mb-2 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-slate-400" /> Programme Hours
                  </h3>
                  <div className="text-slate-500 text-sm whitespace-pre-wrap pl-6 border-l-2 border-slate-200">
                    {details.hours}
                  </div>
                </div>
              </div>

              <div className="bg-offwhite rounded-3xl p-8 shadow-sm border border-slate-100">
                <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-3">
                  <div className="w-8 h-8 rounded-full bg-primary-50 flex items-center justify-center">
                    <BookOpen className="w-4 h-4 text-primary-600" />
                  </div>
                  <h2 className="text-xl font-bold text-secondary-900">Subjects Taught</h2>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-8">
                  {details.subjects}
                </p>

                <h2 className="text-xl font-bold text-secondary-900 mb-4 border-b border-slate-100 pb-3">Key Features</h2>
                <ul className="space-y-3">
                  {details.features.map((feature: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-600 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" />
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
                <p className="text-secondary-100">Enroll now and take the first step towards your engineering dream.</p>
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
  const isFoundation = course.stream === 'foundation';
  const isPreFoundation = course.stream === 'prefoundation';
  const isDropper = course.id?.includes('extended');

  const common = [
    { q: 'What is the class schedule and frequency?', a: 'Classes are held throughout the week as per the schedule mentioned above. Each session is designed to maximise learning while allowing time for self-study and revision.' },
    { q: 'Are there any demo classes available?', a: 'Yes, we offer free demo classes. Click "Book a Free Demo" above or contact us to schedule one at your convenience.' },
    { q: 'How are doubts handled?', a: 'We have a dedicated doubt clearing cell. Students can get their doubts resolved the same day through Special Doubt Clearing Classes (SDCC) after each topic.' },
    { q: 'What study material is provided?', a: 'Research-oriented, custom-curated study material based on NCERT curriculum, updated regularly to align with the latest exam patterns.' },
  ];

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

  if (isFoundation) {
    return [
      ...common,
      { q: 'How does this help my child prepare for competitive exams early?', a: 'The foundation programme builds strong fundamentals in Science and Mathematics from Class 9-10, creating a solid base for JEE/NEET preparation in higher classes. We focus on conceptual clarity and problem-solving skills.' },
      { q: 'What is the class size for foundation courses?', a: 'We maintain small batch sizes (10-25 students) to ensure individual attention, especially important at the foundational level.' },
    ];
  }

  if (isPreFoundation) {
    return [
      ...common,
      { q: 'Is this programme suitable for building interest in science?', a: 'Absolutely. The pre-foundation programme is designed to make learning enjoyable while building strong fundamentals. We use interactive teaching methods to spark curiosity in Science and Mathematics.' },
      { q: 'How early should my child start preparing?', a: 'Starting in Class 7-8 gives students a significant advantage. It allows ample time to build concepts without pressure and develop a genuine interest in the subjects.' },
    ];
  }

  return common;
}
