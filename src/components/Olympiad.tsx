import React from 'react';
import { useFormSubmit } from '../hooks/useFormSubmit';
import { Medal, CheckCircle, ArrowRight } from 'lucide-react';

export default function Olympiad() {
  const { submitForm, isSubmitting } = useFormSubmit('Olympiad');

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
            Foster a deeper understanding of academic subjects early on. Our Olympiad preparation hones logical reasoning and advanced problem-solving capabilities in young learners, giving them a head start for future competitive exams.
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
            <div className="mt-8 rounded-2xl border border-slate-200 bg-offwhite p-5">
              <p className="text-sm font-bold text-secondary-800 mb-3">Explore related programmes:</p>
              <div className="flex flex-wrap gap-3">
                <a href="/courses/foundation" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-slate-200 text-secondary-800 text-sm font-bold hover:bg-primary-50 hover:border-primary-200 transition-colors">IIT JEE foundation course Gurgaon</a>
                <a href="/courses/foundation" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-slate-200 text-secondary-800 text-sm font-bold hover:bg-primary-50 hover:border-primary-200 transition-colors">NEET foundation course Gurgaon</a>
                <a href="/subject/mathematics" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-slate-200 text-secondary-800 text-sm font-bold hover:bg-primary-50 hover:border-primary-200 transition-colors">maths coaching for class 10 in Gurgaon</a>
              </div>
            </div>
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
                <button disabled={isSubmitting} type="submit" className="disabled:opacity-70 w-full bg-primary-600 hover:bg-primary-700 text-secondary-900 font-bold py-4 rounded-xl transition-all shadow-lg shadow-primary-500/20 flex items-center justify-center gap-2 mt-6">
                  Enroll Now <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
