import React from 'react';
import { Home, CheckCircle, ArrowRight } from 'lucide-react';
import { useFormSubmit } from '../hooks/useFormSubmit';

export default function HomeTuition() {
  const { submitForm, isSubmitting } = useFormSubmit('Home Tuition Page');

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
            We provide dedicated subject classes for IIT JEE & NEET, along with comprehensive CBSE coverage for classes 8th to 12th.
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
                <button type="submit" disabled={isSubmitting} className="w-full bg-secondary-600 hover:bg-secondary-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-secondary-500/20 flex items-center justify-center gap-2 mt-6 disabled:opacity-70">
                  {isSubmitting ? 'Submitting...' : <>Submit Request <ArrowRight className="w-5 h-5" /></>}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
