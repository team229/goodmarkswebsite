import React from 'react';
import { useFormSubmit } from '../hooks/useFormSubmit';
import SpamGuard from './SpamGuard';
import { Medal, CheckCircle, ArrowRight } from 'lucide-react';

const olympiadFaqs = [
  { q: 'Which classes can join the Olympiad batch?', a: 'Students of Class 6–10. Younger students build reasoning foundations; Class 9–10 students combine Olympiad training with NTSE-style mental ability and early JEE/NEET orientation.' },
  { q: 'My child is average at Maths — is Olympiad prep suitable?', a: 'Yes, that is exactly who benefits most. Olympiad training rebuilds how a student approaches an unfamiliar problem, which lifts school Maths marks too — not just contest scores.' },
  { q: 'How are Olympiad classes different from school tuition?', a: 'School tuition covers the syllabus; Olympiad batches train application — timed papers, previous-year Olympiad questions, and detailed reviews of why each wrong option was tempting.' },
  { q: 'Are classes online or offline?', a: 'Both. Offline batches run at our Sector 85 centre in Gurgaon; live online batches (max 10 students) serve students across India. Pick at enrolment.' },
  { q: 'Does Olympiad prep help with JEE/NEET later?', a: 'Directly. The logical reasoning, speed and exam temperament built here are the same skills JEE Advanced and NEET toppers rely on. Many of our Olympiad students graduate into our foundation batches.' },
  { q: 'Is there a free demo?', a: 'Yes — attend a demo class before enrolling. Call 8800 8800 28 or fill the form above and we will schedule it.' },
];

export default function Olympiad() {
  const { submitForm, isSubmitting, formError } = useFormSubmit('Olympiad');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    await submitForm(data);
  };

  return (
    <div className="pt-24 pb-16 min-h-screen">
      {/* Hero Section */}
      <section className="bg-offwhite py-16 lg:py-24 border-b border-slate-100">
        <div className="max-w-container-max mx-auto px-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center">
              <Medal className="w-8 h-8 text-primary-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-secondary-900 tracking-tight">Olympiad Preparation</h1>
          </div>
          <h2 className="text-2xl font-bold text-secondary-700 mb-6">Science & Maths Olympiad Coaching</h2>
          <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
            Foster a deeper understanding of academic subjects early on. Our Olympiad preparation hones logical reasoning and advanced problem-solving capabilities in young learners, giving them a head start for future competitive exams — the same foundation our <a href="/courses/foundation" className="text-primary-600 font-semibold hover:underline">IIT JEE foundation course Gurgaon</a> and <a href="/courses/foundation" className="text-primary-600 font-semibold hover:underline">NEET foundation course Gurgaon</a> tracks are built on, with strong <a href="/subject/mathematics" className="text-primary-600 font-semibold hover:underline">maths coaching for class 10 in Gurgaon</a> for early comfort with numbers.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-container-max mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold mb-8 text-secondary-900">Why Join Our Olympiad Batch?</h3>
            <ul className="space-y-6">
              {[
                "Targeted preparation for Science & Maths Olympiads (NSO, IMO, and more).",
                "Curriculum designed to enhance logical reasoning and out-of-the-box thinking.",
                "Development of advanced problem-solving skills which are crucial for success in IIT-JEE and NEET-UG.",
                "Builds the exact analytical skills and temperament required for national-level competitive assessments.",
                "Guided by experienced faculty who specialize in competitive mentoring for junior classes."
              ].map((feature, idx) => (
                <li key={idx} className="flex flex-start gap-4">
                  <div className="mt-1">
                    <CheckCircle className="w-6 h-6 text-primary-500" />
                  </div>
                  <p className="text-secondary-700 text-lg">{feature}</p>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <div className="bg-offwhite p-8 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50">
              <h3 className="text-2xl font-bold mb-6 text-secondary-900">Join Olympiad Batch</h3>
              <form className="space-y-4" onSubmit={handleSubmit}>
                
                <div>
                  <label className="block text-sm font-bold text-secondary-700 mb-1">Student Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all" name="name" placeholder="Enter your name" required />
                </div>
                <div>
                  <label className="block text-sm font-bold text-secondary-700 mb-1">Mobile Number</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all" name="phone" placeholder="Enter mobile number" required />
                </div>
                <div>
                  <label className="block text-sm font-bold text-secondary-700 mb-1">Class/Grade</label>
                  <select name="grade" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-offwhite focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all appearance-none" required defaultValue="">
                    <option value="" disabled hidden>Select your class</option>
                    <option value="class-6">Class 6</option>
                    <option value="class-7">Class 7</option>
                    <option value="class-8">Class 8</option>
                    <option value="class-9">Class 9</option>
                    <option value="class-10">Class 10</option>
                  </select>
                </div>
                {formError && (
                  <div className="bg-red-50 text-red-700 border border-red-200 p-3 rounded-xl text-sm font-bold">
                    {formError}
                  </div>
                )}
                <SpamGuard />
                <button disabled={isSubmitting} type="submit" className="disabled:opacity-70 w-full bg-primary-600 hover:bg-primary-700 text-secondary-900 font-bold py-4 rounded-xl transition-all shadow-lg shadow-primary-500/20 flex items-center justify-center gap-2 mt-6">
                  Enroll Now <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Exams covered */}
      <section className="py-16 bg-white border-y border-slate-100">
        <div className="max-w-container-max mx-auto px-6">
          <h2 className="text-3xl font-black text-secondary-900 mb-4">Which Olympiads We Prepare For</h2>
          <p className="text-slate-600 text-lg max-w-3xl mb-10">Olympiad papers don't reward memorised formulas — they reward thinking a step sideways from the textbook. Our batches train exactly that, starting Class 6 upward, so students arrive at JEE and NEET already comfortable with hard problems.</p>
          <div className="blog-table-wrap mb-12">
            <table className="blog-table">
              <thead>
                <tr><th scope="col">Olympiad</th><th scope="col">Classes</th><th scope="col">What we train</th></tr>
              </thead>
              <tbody>
                <tr><td>NSO (Science Olympiad)</td><td>6–10</td><td>Concept application in Physics, Chemistry and Biology beyond the school syllabus</td></tr>
                <tr><td>IMO (Maths Olympiad)</td><td>6–10</td><td>Logical reasoning, number sense and multi-step problem solving</td></tr>
                <tr><td>School & private olympiads</td><td>6–10</td><td>Exam temperament: timed papers, elimination strategy, error review</td></tr>
                <tr><td>NTSE-style MAT preparation</td><td>9–10</td><td>Mental ability and scholastic aptitude as part of foundation batches</td></tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-2xl font-bold text-secondary-900 mb-4">Why Start Early</h3>
          <p className="text-slate-600 text-lg max-w-3xl mb-4">A Class 8 student who has wrestled with Olympiad-style questions for two years walks into Class 11 Physics without fear. That head start compounds: the same analytical habits power JEE Advanced multi-concept problems and NEET assertion-reason questions later.</p>
          <p className="text-slate-600 text-lg max-w-3xl">Batches stay small, tests mirror real Olympiad patterns, and every paper is reviewed question-by-question — students learn why the wrong options were tempting, not just which option was right. For structured year-long preparation, see our <a href="/courses/foundation" className="text-primary-600 font-semibold hover:underline">foundation courses in Gurgaon</a>, or talk to us at <a href="tel:8800880028" className="text-primary-600 font-semibold hover:underline">8800 8800 28</a>.</p>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-offwhite">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-black text-secondary-900 mb-3 text-center">Olympiad FAQs</h2>
          <p className="text-slate-600 text-lg text-center mb-10">What parents ask before enrolling their child in an Olympiad batch.</p>
          <div className="flex flex-col gap-4">
            {olympiadFaqs.map((faq, idx) => (
              <details key={idx} name="faq" className="faq-item group bg-white border border-slate-200 rounded-2xl shadow-sm">
                <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none font-bold text-secondary-800 text-lg select-none group-open:bg-offwhite/50 transition-colors">
                  {faq.q}
                </summary>
                <div className="faq-answer">
                  <div className="faq-a px-6 pb-6 pt-2 text-slate-600 bg-offwhite/50 leading-relaxed border-t border-slate-100">
                    <p>{faq.a}</p>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
