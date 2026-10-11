import React from 'react';
import { Home, CheckCircle, ArrowRight } from 'lucide-react';
import { useFormSubmit } from '../hooks/useFormSubmit';
import SpamGuard from './SpamGuard';

const homeTuitionFaqs = [
  { q: 'Which areas in Gurgaon do home tutors cover?', a: 'Sectors 78–99, Manesar Sectors 1–5 and nearby areas. Students outside travel range join identical live online batches (max 10 students) with the same faculty.' },
  { q: 'Are home tutors subject specialists?', a: 'Yes. Physics is taught by a physicist, Chemistry by a chemist — never a generalist covering all subjects. Tutors are matched to the student\u2019s class, board and target exam.' },
  { q: 'Can home tuition cover JEE/NEET alongside boards?', a: 'That is its main strength. Sessions are planned so school syllabus and entrance preparation reinforce each other instead of competing for the student\u2019s evenings.' },
  { q: 'How do parents track progress?', a: 'Through regular assessments with reports sent directly to parents, plus counsellor check-ins. If the tutor fit is not right, we rematch promptly.' },
  { q: 'What are the timings?', a: 'Sessions are scheduled around school hours — weekday evenings and weekends — decided mutually at the time of matching. Call 8800 8800 28 to discuss slots.' },
  { q: 'Is a trial session available?', a: 'Yes. An introductory session is arranged first so the family can judge the tutor fit before committing to a schedule.' },
];

export default function HomeTuition() {
  const { submitForm, isSubmitting, formError } = useFormSubmit('Home Tuition Page');

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
            <div className="w-16 h-16 bg-secondary-100 rounded-2xl flex items-center justify-center">
              <Home className="w-8 h-8 text-secondary-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-secondary-900 tracking-tight">Home Tuition In Gurgaon</h1>
          </div>
          <h2 className="text-2xl font-bold text-secondary-700 mb-6">CBSE (8th to 12th), NEET & IIT JEE Preparation</h2>
          <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
            Get personalized, one-to-one tutoring from subject matter experts right at your home. 
            We provide dedicated subject classes for <a href="/courses/iit" className="text-primary-600 font-semibold hover:underline">IIT JEE coaching in Gurgaon</a> and <a href="/courses/neet" className="text-primary-600 font-semibold hover:underline">NEET coaching in Gurgaon</a>, along with comprehensive CBSE coverage for classes 8th to 12th. Prefer the structure of a classroom? Our focused <a href="/course/1-year-regular-12" className="text-primary-600 font-semibold hover:underline">1 year JEE coaching Gurgaon</a> programme delivers the same expert faculty as our home tuition.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-container-max mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold mb-8 text-secondary-900">What We Offer</h3>
            <ul className="space-y-6">
              {[
                "One-to-one sessions with our highly qualified subject experts.",
                "Customized study plan aimed at addressing your specific weaknesses and supercharging your preparation.",
                "Dedicated subject classes for CBSE (8th to 12th), IIT JEE, and NEET.",
                "Simultaneous preparation for School Boards and Competitive Exams without splitting focus.",
                "Regular assessments and progress tracking directly reported to parents."
              ].map((feature, idx) => (
                <li key={idx} className="flex flex-start gap-4">
                  <div className="mt-1">
                    <CheckCircle className="w-6 h-6 text-secondary-500" />
                  </div>
                  <p className="text-secondary-700 text-lg">{feature}</p>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <div className="bg-offwhite p-8 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50">
              <h3 className="text-2xl font-bold mb-6 text-secondary-900">Book a Home Tutor</h3>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-bold text-secondary-700 mb-1">Full Name</label>
                  <input type="text" name="name" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-secondary-500/20 focus:border-secondary-500 transition-all" placeholder="Enter your name" required />
                </div>
                <div>
                  <label className="block text-sm font-bold text-secondary-700 mb-1">Mobile Number</label>
                  <input type="tel" name="phone" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-secondary-500/20 focus:border-secondary-500 transition-all" placeholder="Enter mobile number" required />
                </div>
                <div>
                  <label className="block text-sm font-bold text-secondary-700 mb-1">Select Target Exam</label>
                  <select name="targetExam" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-offwhite focus:outline-none focus:ring-2 focus:ring-secondary-500/20 focus:border-secondary-500 transition-all appearance-none" required defaultValue="">
                    <option value="" disabled hidden>Choose an option</option>
                    <option value="neet">NEET-UG</option>
                    <option value="jee">IIT-JEE</option>
                    <option value="boards">Boards (11th & 12th)</option>
                  </select>
                </div>
                {formError && (
                  <div className="bg-red-50 text-red-700 border border-red-200 p-3 rounded-xl text-sm font-bold">
                    {formError}
                  </div>
                )}
                <SpamGuard />
                <button type="submit" disabled={isSubmitting} className="w-full bg-secondary-600 hover:bg-secondary-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-secondary-500/20 flex items-center justify-center gap-2 mt-6 disabled:opacity-70">
                  {isSubmitting ? 'Submitting...' : <>Submit Request <ArrowRight className="w-5 h-5" /></>}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage & process */}
      <section className="py-16 bg-white border-y border-slate-100">
        <div className="max-w-container-max mx-auto px-6">
          <h2 className="text-3xl font-black text-secondary-900 mb-4">Where Home Tuition Is Available</h2>
          <p className="text-slate-600 text-lg max-w-3xl mb-10">Our home tutors travel across Gurgaon — from the new sectors along the Dwarka Expressway to Manesar — so your child learns at their own desk, on a schedule built around school hours.</p>
          <div className="blog-table-wrap mb-12">
            <table className="blog-table">
              <thead>
                <tr><th scope="col">Zone</th><th scope="col">Areas served</th><th scope="col">Popular for</th></tr>
              </thead>
              <tbody>
                <tr><td>New Gurgaon</td><td>Sectors 78–99</td><td>CBSE tuition, JEE/NEET home batches near Sector 85 centre</td></tr>
                <tr><td>Manesar</td><td>Sectors 1–5, NSG Manesar</td><td>One-to-one CBSE and entrance prep without the commute</td></tr>
                <tr><td>Online (all India)</td><td>Live batches, max 10 students</td><td>Same faculty, same material, from home anywhere</td></tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-2xl font-bold text-secondary-900 mb-4">How Tutor Matching Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-offwhite p-7 rounded-3xl border border-slate-200">
              <div className="text-sm font-black text-secondary-600 mb-2">STEP 1</div>
              <h4 className="font-bold text-secondary-900 text-lg mb-2">Tell us the need</h4>
              <p className="text-slate-600">Subject, class, board and goal — the form above takes a minute. A counsellor calls back to understand the student's exact weak areas.</p>
            </div>
            <div className="bg-offwhite p-7 rounded-3xl border border-slate-200">
              <div className="text-sm font-black text-secondary-600 mb-2">STEP 2</div>
              <h4 className="font-bold text-secondary-900 text-lg mb-2">Meet the tutor</h4>
              <p className="text-slate-600">We assign a subject-specialist tutor — Physics taught by a physicist, not a generalist — and arrange an introductory session first.</p>
            </div>
            <div className="bg-offwhite p-7 rounded-3xl border border-slate-200">
              <div className="text-sm font-black text-secondary-600 mb-2">STEP 3</div>
              <h4 className="font-bold text-secondary-900 text-lg mb-2">Track progress</h4>
              <p className="text-slate-600">Regular assessments with reports directly to parents. If the fit isn't right, we rematch — the student's progress matters more than the roster.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-offwhite">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-black text-secondary-900 mb-3 text-center">Home Tuition FAQs</h2>
          <p className="text-slate-600 text-lg text-center mb-10">Straight answers for parents comparing home tuition options in Gurgaon.</p>
          <div className="flex flex-col gap-4">
            {homeTuitionFaqs.map((faq, idx) => (
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
