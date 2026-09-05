import React from 'react';
import { useFormSubmit } from '../hooks/useFormSubmit';
import { HelpCircle, CheckCircle, ArrowRight } from 'lucide-react';

export default function DoubtSessions() {
  const { submitForm, isSubmitting } = useFormSubmit('DoubtSessions');

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
                <button disabled={isSubmitting} type="submit" className="disabled:opacity-70 w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 mt-6">
                  Book Session Today <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
