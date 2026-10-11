import React from 'react';
import { useFormSubmit } from '../hooks/useFormSubmit';
import SpamGuard from './SpamGuard';
import { HelpCircle, CheckCircle, ArrowRight } from 'lucide-react';

const doubtFaqs = [
  { q: 'Who can book a doubt session?', a: 'Any student in Class 8–12 studying Physics, Chemistry, Maths or Biology — whether enrolled with us or not. Sessions help with school topics as well as JEE and NEET problems.' },
  { q: 'Are doubt sessions online or offline?', a: 'Both. Choose a live online session from home, or visit our Sector 85 centre in Gurgaon for an in-person sitting. Thursday is additionally reserved every week for doubts and backup classes.' },
  { q: 'How is this different from asking doubts in class?', a: 'Regular classes move at batch pace. A doubt session is one-to-one time with a subject expert, focused entirely on your questions — including the ones you hesitated to ask in front of classmates.' },
  { q: 'What should I prepare before the session?', a: 'Just a list of the exact questions or topics troubling you — a photo of your attempt helps the faculty spot where your method diverged. No prior registration beyond the booking form.' },
  { q: 'How fast can I get a slot?', a: 'Fill the form above or call 8800 8800 28. Slots are usually confirmed the same day, and Thursday doubt hours run every week through the session.' },
  { q: 'Is there a free demo?', a: 'Yes — new students can start with our free demo experience before committing to any programme. Mention it while booking and we will arrange it.' },
];

export default function DoubtSessions() {
  const { submitForm, isSubmitting, formError } = useFormSubmit('DoubtSessions');
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
            <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center">
              <HelpCircle className="w-8 h-8 text-amber-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-secondary-900 tracking-tight">Expert Doubt Sessions</h1>
          </div>
          <h2 className="text-2xl font-bold text-secondary-700 mb-6">Stuck at a Problem? Let Us Help.</h2>
          <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
            Get your questions answered rapidly with our one-to-one doubt clearing sessions. Available both online and offline to ensure your learning never hits a roadblock. Whether you need <a href="/subject/physics" className="text-primary-600 font-semibold hover:underline">physics tuition for class 9 Gurgaon</a>, <a href="/subject/chemistry" className="text-primary-600 font-semibold hover:underline">chemistry tuition classes in Gurgaon</a>, or focused <a href="/subject/mathematics" className="text-primary-600 font-semibold hover:underline">maths tuition for weak students Gurgaon</a>, our experts plug the gaps fast.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-container-max mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold mb-8 text-secondary-900">Session Highlights</h3>
            <ul className="space-y-6">
              {[
                "Quick one-to-one doubt clearing sessions directly with subject experts.",
                "Choose your preferred mode: highly flexible online or face-to-interface offline.",
                "Comprehensive coverage across all major subjects: Physics, Chemistry, Maths, and Biology.",
                "Equally constructive for School Boards and advanced competitive exams (JEE/NEET).",
                "Deep-dive explanations ensuring you understand the fundamental concepts, not just the final answer."
              ].map((feature, idx) => (
                <li key={idx} className="flex flex-start gap-4">
                  <div className="mt-1">
                    <CheckCircle className="w-6 h-6 text-amber-500" />
                  </div>
                  <p className="text-secondary-700 text-lg">{feature}</p>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <div className="bg-offwhite p-8 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50">
              <h3 className="text-2xl font-bold mb-6 text-secondary-900">Book A Doubt Session</h3>
              <form className="space-y-4" onSubmit={handleSubmit}>
                
                <div>
                  <label className="block text-sm font-bold text-secondary-700 mb-1">Student Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all" name="name" placeholder="Enter your name" required />
                </div>
                <div>
                  <label className="block text-sm font-bold text-secondary-700 mb-1">Mobile Number</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all" name="phone" placeholder="Enter mobile number" required />
                </div>
                <div>
                  <label className="block text-sm font-bold text-secondary-700 mb-1">Subject</label>
                  <select name="subject" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-offwhite focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all appearance-none" required defaultValue="">
                    <option value="" disabled hidden>Select subject</option>
                    <option value="physics">Physics</option>
                    <option value="chemistry">Chemistry</option>
                    <option value="maths">Mathematics</option>
                    <option value="biology">Biology</option>
                  </select>
                </div>
                {formError && (
                  <div className="bg-red-50 text-red-700 border border-red-200 p-3 rounded-xl text-sm font-bold">
                    {formError}
                  </div>
                )}
                <SpamGuard />
                <button disabled={isSubmitting} type="submit" className="disabled:opacity-70 w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 mt-6">
                  Book Session Today <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-white border-y border-slate-100">
        <div className="max-w-container-max mx-auto px-6">
          <h2 className="text-3xl font-black text-secondary-900 mb-4">How a Doubt Session Works</h2>
          <p className="text-slate-600 text-lg max-w-3xl mb-10">A doubt left overnight becomes a gap by exam day. Our process is built to close it the same week — book in a minute, meet an expert one-to-one, and leave with the concept clear, not just the answer.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-offwhite p-7 rounded-3xl border border-slate-200">
              <div className="text-sm font-black text-amber-600 mb-2">STEP 1</div>
              <h3 className="font-bold text-secondary-900 text-lg mb-2">Book in a minute</h3>
              <p className="text-slate-600">Fill the form above with your name, mobile number and subject — or call <a href="tel:8800880028" className="text-primary-600 font-semibold hover:underline">8800 8800 28</a>. Our team confirms your slot, usually the same day.</p>
            </div>
            <div className="bg-offwhite p-7 rounded-3xl border border-slate-200">
              <div className="text-sm font-black text-amber-600 mb-2">STEP 2</div>
              <h3 className="font-bold text-secondary-900 text-lg mb-2">Meet your expert 1-to-1</h3>
              <p className="text-slate-600">Sit with a subject-specialist faculty member — online live or offline at our Sector 85 centre — and work through your exact questions, however basic or advanced.</p>
            </div>
            <div className="bg-offwhite p-7 rounded-3xl border border-slate-200">
              <div className="text-sm font-black text-amber-600 mb-2">STEP 3</div>
              <h3 className="font-bold text-secondary-900 text-lg mb-2">Leave with clarity</h3>
              <p className="text-slate-600">You don't just get the final answer — you get the underlying concept re-explained, plus pointers on what to practise so the same doubt never returns.</p>
            </div>
          </div>
          <h3 className="text-2xl font-bold text-secondary-900 mb-6">Session Formats at a Glance</h3>
          <div className="blog-table-wrap">
            <table className="blog-table">
              <thead>
                <tr><th scope="col">Aspect</th><th scope="col">What you get</th></tr>
              </thead>
              <tbody>
                <tr><td>Mode</td><td>Online live session or offline at Sector 85, Gurgaon — your choice at booking</td></tr>
                <tr><td>Format</td><td>One-to-one with a subject expert (Physics, Chemistry, Maths or Biology)</td></tr>
                <tr><td>Levels covered</td><td>CBSE Classes 8–12, plus JEE and NEET problem-solving</td></tr>
                <tr><td>Doubt day</td><td>Thursday is reserved every week for doubts, discussions and backup classes</td></tr>
                <tr><td>Follow-up</td><td>Concept recap plus practice pointers after every session</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-offwhite">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-black text-secondary-900 mb-3 text-center">Doubt Session FAQs</h2>
          <p className="text-slate-600 text-lg text-center mb-10">Everything parents and students ask before booking their first session.</p>
          <div className="flex flex-col gap-4">
            {doubtFaqs.map((faq, idx) => (
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
