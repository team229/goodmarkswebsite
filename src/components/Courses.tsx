import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  GraduationCap, 
  Calendar, 
  CheckCircle2,
  Trophy,
  BookOpen,
  Atom,
  Stethoscope,
  Calculator,
  Dna,
  Sparkles,
  Target,
  UserCheck,
  School,
  Lightbulb,
  FlaskConical
} from 'lucide-react';

import { courseTabs, coursesData, streams } from '../data/courses';

export default function Courses({ stream }: { stream?: string }) {
  
  const initialStream = streams.find(s => s.id === stream) ? (stream as string) : 'iit';
  const [activeStream, setActiveStream] = useState(initialStream);
  
  const availableTabs = courseTabs[activeStream] || [];
  const [activeTab, setActiveTab] = useState(availableTabs[0]?.id || 'class11');

  useEffect(() => {
    if (stream && streams.find(s => s.id === stream)) {
      setActiveStream(stream);
      const newAvailableTabs = courseTabs[stream] || [];
      if (!newAvailableTabs.find(t => t.id === activeTab)) {
        setActiveTab(newAvailableTabs[0]?.id || '');
      }
    } else if (!stream) {
      setActiveStream('iit');
    }
  }, [stream, activeTab]);


  const streamHeadings: Record<string, string> = {
    iit: 'IIT JEE Coaching in Gurgaon',
    neet: 'NEET Coaching in Gurgaon',
    foundation: 'IIT JEE & NEET Foundation Course in Gurgaon'
  };

  const handleStreamChange = (streamId: string) => {
    setActiveStream(streamId);
    window.location.href = `/courses/${streamId}`;
  };

  return (
    <main className="pt-24 lg:pt-32 pb-20 bg-offwhite min-h-screen">
      {/* Header text */}
      <section className="px-6 relative z-10 text-center mb-10">
         <h1 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-3">{streamHeadings[activeStream] || 'All Courses | JEE & NEET Coaching Programs in Gurgaon'}</h1>
         <p className="text-slate-500 font-semibold mb-2">Choose your preparation path and unlock your engineering dreams</p>
      </section>

      {/* Tabs UI */}
      <section className="px-6 max-w-container-max mx-auto relative z-20">
        
        {/* Stream Buttons */}
        <div className="flex justify-center mb-6">
           <div className="inline-flex bg-slate-200 p-1.5 rounded-2xl shadow-inner overflow-x-auto max-w-full no-scrollbar">
             {streams.map(stream => (
                <button
                  key={stream.id}
                  onClick={() => handleStreamChange(stream.id)}
                  className={`px-6 py-3 rounded-xl font-bold text-sm transition-all whitespace-nowrap ${
                    activeStream === stream.id 
                      ? stream.id === 'neet' 
                        ? 'bg-offwhite text-primary-700 shadow border border-primary-100'
                        : stream.id === 'prefoundation' || stream.id === 'foundation'
                          ? 'bg-offwhite text-amber-600 shadow border border-amber-100'
                          : 'bg-offwhite text-secondary-700 shadow border border-secondary-100'
                      : 'text-slate-600 hover:text-secondary-900'
                  }`}
                >
                  {stream.label}
                </button>
             ))}
           </div>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <div className="bg-offwhite p-2 rounded-2xl shadow-sm border border-slate-100 flex gap-2 overflow-x-auto max-w-full no-scrollbar">
            {availableTabs.map((tab) => {
              let Icon = GraduationCap;
              if (tab.id === 'dropper') Icon = Trophy;
              if (tab.id.startsWith('class7') || tab.id.startsWith('class8') || tab.id.startsWith('class9') || tab.id.startsWith('class10')) Icon = BookOpen;
              
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all whitespace-nowrap ${
                    isActive 
                      ? 'bg-secondary-600 text-white shadow-md' 
                      : 'bg-transparent text-slate-600 hover:bg-offwhite'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-secondary-600'}`} />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Courses Container */}
        <div className="bg-offwhite rounded-[32px] shadow-xl shadow-slate-200/50 p-6 md:p-10 border border-slate-100 relative overflow-hidden">
          {/* Top border gradient */}
          <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${
            activeStream === 'iit' ? 'from-secondary-500 via-primary-500 to-pink-500' : 
            activeStream === 'neet' ? 'from-primary-400 via-secondary-500 to-cyan-500' :
            'from-amber-400 via-orange-500 to-red-500'
          }`}></div>

          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  activeStream === 'iit' ? 'bg-secondary-100' : 
                  activeStream === 'neet' ? 'bg-primary-100' :
                  'bg-orange-100'
                }`}>
                  <GraduationCap className={`w-5 h-5 ${
                    activeStream === 'iit' ? 'text-secondary-700' :
                    activeStream === 'neet' ? 'text-primary-700' : 
                    'text-orange-700'
                  }`} />
                </div>
                <h2 className="text-2xl font-bold text-secondary-900">
                  {availableTabs.find(t => t.id === activeTab)?.label} Courses {
                    activeStream === 'foundation' || activeStream === 'prefoundation' 
                      ? '' 
                      : `for ${streams.find(s => s.id === activeStream)?.label}`
                  }
                </h2>
              </div>
              {activeStream === 'prefoundation' && (
                <p className="text-sm font-medium text-slate-500 italic ml-14">
                  "A good education is a foundation for a better future" - Elizabeth Warren
                </p>
              )}
              {activeStream === 'foundation' && (
                <p className="text-sm font-medium text-slate-500 italic ml-14 max-w-lg">
                  "No other investment yields as great a return as the investment in education. An educated workforce is the foundation of every community and the future of every economy." - Brad Henry
                </p>
              )}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coursesData[activeTab]?.filter(c => c.stream === activeStream || c.stream === 'all').map((course, idx) => (
              <motion.div 
                key={course.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className="bg-offwhite rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all overflow-hidden flex flex-col group"
              >
                {/* Placeholder Image Graphic */}
                <div className={`h-48 w-full m-2 rounded-xl bg-gradient-to-br ${course.imageGrad} flex items-center justify-center relative overflow-hidden`}>
                   {/* Abstract shapes inside gradient */}
                   <div className="absolute top-0 right-0 w-32 h-32 bg-offwhite/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/4"></div>
                   <div className="absolute bottom-0 left-0 w-24 h-24 bg-black/10 rounded-full blur-xl translate-y-1/4 -translate-x-1/4"></div>
                   
                   <h3 className="text-4xl font-black text-white italic tracking-tighter drop-shadow-md z-10 font-heading text-center px-4">
                     {course.imageText}
                   </h3>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  
                  {/* Title Area */}
                  <div className="flex items-start gap-3 mb-6">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1 ${activeStream === 'iit' ? 'bg-secondary-50' : 'bg-primary-50'}`}>
                      <GraduationCap className={`w-4 h-4 ${activeStream === 'iit' ? 'text-secondary-600' : 'text-primary-600'}`} />
                    </div>
                    <div>
                      <h4 className="font-bold text-secondary-900 text-lg leading-tight mb-1">{course.title}</h4>
                      <p className="text-xs text-slate-500 font-semibold">{course.subtitle}</p>
                    </div>
                  </div>

                  {/* Info Badges */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="bg-offwhite rounded-xl p-3 border border-slate-100 flex flex-col gap-1">
                       <span className="text-[10px] uppercase font-bold text-slate-400 flex items-center gap-1"><BookOpen className="w-3 h-3"/> Class</span>
                       <span className="font-bold text-secondary-900 text-sm">{course.classLabel}</span>
                    </div>
                    <div className={`${activeStream === 'iit' ? 'bg-secondary-50/50 border-secondary-50' : 'bg-primary-50/50 border-primary-50'} rounded-xl p-3 border flex flex-col gap-1`}>
                       <span className={`text-[10px] uppercase font-bold flex items-center gap-1 ${activeStream === 'iit' ? 'text-secondary-400' : 'text-primary-500'}`}><Calendar className="w-3 h-3"/> Target</span>
                       <span className={`font-bold text-sm ${activeStream === 'iit' ? 'text-secondary-900' : 'text-primary-900'}`}>{course.target}</span>
                    </div>
                  </div>

                  {/* Admission Status */}
                  <div className="bg-primary-50 border border-primary-100 rounded-xl p-3 flex items-center gap-2 mb-6 mt-auto">
                    <CheckCircle2 className="w-4 h-4 text-primary-600" />
                    <span className="text-xs font-bold text-primary-700">Admission Open</span>
                  </div>

                  {/* Button */}
                  <a 
                    href={`/course/${course.id}`}
                    className={`w-full py-3.5 rounded-xl border font-bold text-sm flex items-center justify-center gap-2 transition-colors ${
                      activeStream === 'iit' 
                        ? 'border-secondary-200 text-secondary-600 hover:bg-secondary-50 group-hover:border-secondary-600 group-hover:bg-secondary-600 group-hover:text-white' 
                        : 'border-primary-200 text-primary-600 hover:bg-primary-50 group-hover:border-primary-600 group-hover:bg-primary-600 group-hover:text-secondary-900'
                    }`}>
                    View Details <ArrowRight className="w-4 h-4" />
                  </a>

                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* SEO Content */}
      <section className="max-w-4xl mx-auto px-6 mt-20 space-y-16">
        <div className="text-center max-w-3xl mx-auto">
          <div className="w-12 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-black text-secondary-900 mb-4 leading-tight">Courses at Good Marks Classes – Building Strong Foundations for IIT JEE, NEET & School Success</h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            At Good Marks Classes, we believe every student needs a place where concepts actually make sense, doubts get answered without hesitation, and progress can be seen and measured. Our courses suit students who are serious about their goals — be it cracking IIT JEE, qualifying NEET UG, building a base in early secondary school, or improving school exam scores. Each program centers on consistent practice, individual attention, and teachers who care about how students actually perform.
          </p>
        </div>

        <div className="space-y-8">
          {/* IIT JEE */}
          <div className="bg-gradient-to-br from-secondary-50/50 to-secondary-100/30 border border-secondary-100 rounded-3xl p-8 lg:p-10">
            <div className="w-10 h-1 bg-gradient-to-r from-secondary-500 to-primary-500 rounded-full mb-4" />
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-secondary-500 to-primary-500 flex items-center justify-center shrink-0">
                <Atom className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-black text-secondary-900">IIT JEE Preparation Programme</h3>
            </div>
            <p className="text-slate-600 leading-relaxed mb-3">Cracking IIT JEE takes more than effort alone — it needs the right strategy, steady practice, and real command over Physics, Chemistry, and Mathematics. This programme is built for students aiming at top engineering colleges.</p>
            <p className="text-slate-600 leading-relaxed mb-3">We spend real time on basics before jumping into tough problems. A lot of students rush into JEE-level questions without nailing the fundamentals first, and that catches up with them later. Here, we do it the other way around — every student gets comfortable with core concepts in a chapter before tackling competitive-level problems.</p>
            <p className="text-slate-600 leading-relaxed mb-3">Our JEE batches run on regular class tests, chapter-wise assignments, and full-length mocks built to mirror the actual exam. After each test, students get feedback that goes beyond "you got this wrong" — it explains why, and what to do differently. Doubt sessions happen regularly so nobody falls behind over something that could've been cleared up in five minutes.</p>
            <p className="text-slate-600 leading-relaxed">Speed, accuracy, and time management are the three things we keep circling back to. With steady practice and regular performance reviews, students build the confidence to handle exam pressure when it counts.</p>
          </div>

          {/* NEET UG */}
          <div className="bg-gradient-to-br from-primary-50/50 to-primary-100/30 border border-primary-100 rounded-3xl p-8 lg:p-10">
            <div className="w-10 h-1 bg-gradient-to-r from-primary-500 to-cyan-500 rounded-full mb-4" />
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-cyan-500 flex items-center justify-center shrink-0">
                <Stethoscope className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-black text-secondary-900">NEET UG Preparation Programme</h3>
            </div>
            <p className="text-slate-600 leading-relaxed mb-3">For students who want to become doctors, NEET UG is the door — and getting through it takes commitment, proper guidance, and a plan that holds up over time. This programme gives equal weight to Physics, Chemistry, and Biology, since all three matter for the final score.</p>
            <p className="text-slate-600 leading-relaxed mb-3">Biology, which carries a heavy weight in NEET, is taught with close attention to NCERT textbooks, since most NEET questions trace back to NCERT content. Our teachers push students past rote memorization toward actual understanding — which pays off when assertion-reasoning and application-based questions show up.</p>
            <p className="text-slate-600 leading-relaxed mb-3">Physics and Chemistry sessions build both problem-solving skills and theory side by side. Numerical topics get heavy practice, with guidance on how to approach each question type step by step.</p>
            <p className="text-slate-600 leading-relaxed">NEET batches include regular tests based on the current exam pattern, performance tracking, and study plans tailored to each student's strengths and gaps. Closer to the exam, we run revision sessions to help students pull everything together and walk in confident.</p>
          </div>

          {/* Pre-Foundation */}
          <div className="bg-gradient-to-br from-amber-50/50 to-orange-100/30 border border-amber-100 rounded-3xl p-8 lg:p-10">
            <div className="w-10 h-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full mb-4" />
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shrink-0">
                <Lightbulb className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-black text-secondary-900">Pre-Foundation Courses</h3>
            </div>
            <p className="text-slate-600 leading-relaxed mb-3">Pre-Foundation courses are for younger students just starting to build their academic base. The focus is on strengthening core Math and Science concepts while developing analytical thinking and problem-solving habits early on.</p>
            <p className="text-slate-600 leading-relaxed mb-3">The logic is simple: students who build a solid base early find it much easier to handle tougher material later — in school exams now, and in JEE or NEET down the road.</p>
            <p className="text-slate-600 leading-relaxed">These classes aim to make learning enjoyable rather than overwhelming. Concepts come through real-life examples, discussions, and regular practice — building curiosity and logical thinking alongside better school performance. Regular assessments track each student's progress, and parents get periodic updates on how their child is doing.</p>
          </div>

          {/* Foundation */}
          <div className="bg-gradient-to-br from-orange-50/50 to-red-100/30 border border-orange-100 rounded-3xl p-8 lg:p-10">
            <div className="w-10 h-1 bg-gradient-to-r from-orange-400 to-red-500 rounded-full mb-4" />
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center shrink-0">
                <School className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-black text-secondary-900">Foundation Courses</h3>
            </div>
            <p className="text-slate-600 leading-relaxed mb-3">Foundation courses prepare students for the move into higher secondary school while keeping future competitive exams in view. They bridge the gap between school-level learning and the more demanding, application-based learning that JEE and NEET require.</p>
            <p className="text-slate-600 leading-relaxed mb-3">These courses cover Math and Science in depth, focusing on both conceptual clarity and problem-solving speed. Students work through a range of question types — basic to slightly advanced — so they get comfortable across difficulty levels.</p>
            <p className="text-slate-600 leading-relaxed">We also work on study habits here — regular revision, self-assessment, time management — habits that carry students through school exams and beyond. Foundation batches stay relatively small so every student gets individual attention. Regular tests and doubt sessions keep students on track through the year.</p>
          </div>

          {/* Class 9th */}
          <div className="bg-gradient-to-br from-rose-50/50 to-pink-100/30 border border-rose-100 rounded-3xl p-8 lg:p-10">
            <div className="w-10 h-1 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full mb-4" />
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center shrink-0">
                <Calendar className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-black text-secondary-900">Class 9th Courses – 2 Year Regular Classroom Programme</h3>
            </div>
            <p className="text-slate-600 leading-relaxed mb-3">Class 9th is a pivotal year — it's when habits, concepts, and confidence start shaping how students perform in board exams and beyond. Our Class 9th courses are part of a 2-year regular classroom programme covering Class 9th and 10th together.</p>
            <p className="text-slate-600 leading-relaxed mb-3">The programme covers all major subjects with a strong focus on Math and Science, building a foundation that supports students through boards and beyond. Spreading the syllabus over two years means no last-minute scramble — students get real time for revision, practice, and clearing doubts.</p>
            <p className="text-slate-600 leading-relaxed mb-3">Regular classroom sessions keep learning disciplined and consistent. Students follow a set timetable, take regular tests, and get continuous feedback. This reduces exam-time stress because preparation happens steadily over two years instead of cramming in the final months.</p>
            <p className="text-slate-600 leading-relaxed">By the end of these two years, students are ready for boards and have a conceptual base that supports whatever competitive exam path they choose next.</p>
          </div>

          {/* Physics by Sunil Gola */}
          <div className="bg-gradient-to-br from-cyan-50/50 to-blue-100/30 border border-cyan-100 rounded-3xl p-8 lg:p-10">
            <div className="w-10 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mb-4" />
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center shrink-0">
                <FlaskConical className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-black text-secondary-900">Physics Classes by Sunil Gola Sir</h3>
            </div>
            <p className="text-slate-600 leading-relaxed mb-3">One of the standout parts of Good Marks Classes is our Physics programme led by Sunil Gola Sir, known for making even the trickiest Physics topics easy to follow.</p>
            <p className="text-slate-600 leading-relaxed mb-3">Physics trips up a lot of students because it mixes theory with math. Sunil Gola Sir breaks each concept down into simple, relatable terms before moving to numericals and applications. His classes build a strong conceptual base first. Instead of rushing through formulas, students learn the logic behind each concept — which makes it much easier to apply later, whether in school exams or in JEE and NEET.</p>
            <p className="text-slate-600 leading-relaxed">Doubt-clearing is central to how he teaches — students are encouraged to ask anything, no matter how small, in an environment where that feels normal. Whether a student is in Foundation, prepping for boards, or aiming for JEE and NEET, Sunil Gola Sir's Physics classes offer concept-first teaching built for the long run, not just the next test.</p>
          </div>

          {/* Why Choose */}
          <div className="bg-gradient-to-br from-secondary-900 to-secondary-950 text-white rounded-3xl p-8 lg:p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-500/5 rounded-full blur-3xl" />
            <div className="w-10 h-1 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full mb-4 relative z-10" />
            <div className="flex items-center gap-3 mb-4 relative z-10">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5 text-secondary-900" />
              </div>
              <h3 className="text-2xl font-black text-white">Why Choose Good Marks Classes</h3>
            </div>
            <p className="text-slate-300 leading-relaxed mb-3 relative z-10">What makes us different is that we treat each student as an individual, not a number. There's no one-size-fits-all here — every course, from IIT JEE and NEET UG to Pre-Foundation, Foundation, and the 2-year Class 9th programme, is built on the idea that students learn best when they truly understand concepts and practice regularly.</p>
            <p className="text-slate-300 leading-relaxed mb-3 relative z-10">Our experienced faculty — including subject experts like Sunil Gola Sir for Physics — bring years of teaching experience and a genuine investment in student outcomes. Regular tests, personal feedback, doubt sessions, and a structured academic calendar keep students on track.</p>
            <p className="text-slate-300 leading-relaxed relative z-10">If you're looking for a place that combines strong academics with genuine personal attention, Good Marks Classes is here to support your child — from the early foundation years through the most competitive exams in the country.</p>
          </div>
        </div>

        <div className="text-center pb-8">
          <button onClick={() => window.dispatchEvent(new CustomEvent('open-contact-modal'))} className="btn-gradient px-10 py-4 rounded-xl font-bold text-secondary-900 shadow-lg shadow-primary-500/20 hover:shadow-primary-500/40 transition-all">
            Enquire Now — Start Your Journey
          </button>
        </div>
      </section>
    </main>
  );
}
