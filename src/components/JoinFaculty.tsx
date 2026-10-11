import React from 'react';
import { useFormSubmit } from '../hooks/useFormSubmit';
import SpamGuard from './SpamGuard';
import { UserPlus, ArrowRight, CheckCircle, BookOpen, Clock, Presentation } from "lucide-react";

const facultyFaqs = [
  { q: 'What qualifications do you look for?', a: 'Deep subject mastery first — typically B.Tech/M.Tech from premier institutes or equivalent expertise — plus the ability to explain complex ideas simply. Prior competitive-exam coaching experience is strongly preferred.' },
  { q: 'Is there a demo lecture in selection?', a: 'Yes. Shortlisted candidates teach a real topic to our academic panel, followed by trial sessions with actual students. Teaching ability is evaluated live, not on paper.' },
  { q: 'Full-time or part-time?', a: 'Both. Choose offline batches at Sector 85, live online batches, hybrid, or home tuition assignments — full-time and part-time arrangements are available.' },
  { q: 'Will I have to teach multiple subjects?', a: 'No. One subject per faculty, always. Physics teachers teach Physics; Chemistry teachers teach Chemistry. Specialisation is a core principle here.' },
  { q: 'What support do faculty get?', a: 'Ready study material, testing systems (weekly tests, AITS), doubt-session structure and mentorship from academic heads — so you can focus purely on teaching.' },
  { q: 'How do I apply?', a: 'Fill the application form on this page with your background, subject expertise and a resume link. Our team responds to shortlisted candidates shortly.' },
];

export default function JoinFaculty() {
  const { submitForm, isSubmitting, formError } = useFormSubmit('JoinFaculty');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    await submitForm(data);
  };

  return (
    <div className="min-h-screen pt-24 pb-16 bg-offwhite">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary-900 via-primary-900 to-secondary-900 pt-20 pb-24 px-6 md:pt-28 md:pb-32 text-center relative overflow-hidden text-white">
        <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary-600/20 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-primary-600/20 rounded-full blur-[150px]"></div>
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-offwhite/10 backdrop-blur-md rounded-full font-bold text-sm tracking-wide mb-8 border border-white/20 text-primary-200">
            <UserPlus className="w-4 h-4" /> Hiring Now
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">Inspire the Next Generation of Achievers</h1>
          <p className="text-xl md:text-2xl text-primary-100/90 mb-10 max-w-2xl mx-auto">
            Join Good Marks Classes as a Faculty. We are looking for passionate educators for CBSE, IIT JEE, and NEET preparation.
          </p>
          <a href="#apply" className="bg-primary-600 hover:bg-primary-500 text-secondary-900 px-8 py-4 rounded-full font-bold text-lg shadow-lg shadow-primary-600/20 transition-all transform hover:-translate-y-1 inline-flex items-center gap-2">
            Apply Now <ArrowRight className="w-5 h-5"/>
          </a>
        </div>
      </section>

      <div className="max-w-container-max mx-auto px-6 mt-[-40px] relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-offwhite rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col items-center text-center">
             <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center mb-6 text-primary-600">
               <BookOpen className="w-8 h-8" />
             </div>
             <h3 className="text-xl font-bold text-secondary-900 mb-3">Academic Excellence</h3>
             <p className="text-slate-600">Teach motivated students targeting top competitive exams and boards with focused small batches.</p>
          </div>
          <div className="bg-offwhite rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col items-center text-center">
             <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center mb-6 text-primary-600">
               <Clock className="w-8 h-8" />
             </div>
             <h3 className="text-xl font-bold text-secondary-900 mb-3">Flexible Options</h3>
             <p className="text-slate-600">Choose between online, offline, or hybrid modes. Full-time and part-time opportunities available.</p>
          </div>
          <div className="bg-offwhite rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col items-center text-center">
             <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center mb-6 text-primary-600">
               <Presentation className="w-8 h-8" />
             </div>
             <h3 className="text-xl font-bold text-secondary-900 mb-3">Direct Mentorship</h3>
             <p className="text-slate-600">Work closely with experienced founders and academic heads to elevate your teaching methodologies.</p>
          </div>
        </div>
      </div>

      <div className="max-w-container-max mx-auto px-6 py-20" id="apply">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-black text-secondary-900 mb-4">Requirements & Expectations</h2>
              <p className="text-slate-600 text-lg mb-8">We expect our faculty to be deeply committed to student success, delivering clear concepts, and providing regular doubt support. If you enjoy teaching, our <a href="/courses/iit" className="text-primary-600 font-semibold hover:underline">IIT JEE coaching in Gurgaon</a> and <a href="/courses/neet" className="text-primary-600 font-semibold hover:underline">NEET coaching in Gurgaon</a> batches are a great place to start.</p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-secondary-900 text-lg">Strong Background</h4>
                    <p className="text-slate-600">B.Tech/M.Tech from premier institutes (IIT/NIT/DTU) or equivalent high-level academic qualification in your subject.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-secondary-900 text-lg">Subject Mastery</h4>
                    <p className="text-slate-600">In-depth expertise in Physics, Chemistry, Maths, or Biology for Class 11, 12, NEET, and IIT JEE.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-secondary-900 text-lg">Communication Skills</h4>
                    <p className="text-slate-600">Ability to explain complex concepts in simple terms, keeping students engaged both online and offline.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-secondary-900 text-lg">Experience</h4>
                    <p className="text-slate-600">Prior experience in coaching for competitive exams is highly preferred.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-offwhite rounded-3xl p-8 border border-slate-200 shadow-xl shadow-secondary-900/5">
            <h3 className="text-2xl font-black text-secondary-900 mb-6">Faculty Application Form</h3>
            <p className="text-slate-600 mb-8">Fill out the details below and our team will get back to you shortly.</p>
            
            <form onSubmit={handleSubmit} className="space-y-5">
                
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-bold text-secondary-700 mb-1.5">First Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-primary-500 outline-none transition-all" name="firstName" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-secondary-700 mb-1.5">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-primary-500 outline-none transition-all" name="lastName" placeholder="Doe" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-secondary-700 mb-1.5">Email Address</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-primary-500 outline-none transition-all" name="email" placeholder="john@example.com" />
              </div>

              <div>
                <label className="block text-sm font-bold text-secondary-700 mb-1.5">Mobile Number</label>
                <input type="tel" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-primary-500 outline-none transition-all" name="phone" placeholder="+91" />
              </div>

              <div>
                <label className="block text-sm font-bold text-secondary-700 mb-1.5">Subject Expertise</label>
                <select name="selection" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-primary-500 outline-none transition-all bg-offwhite">
                  <option value="">Select Subject</option>
                  <option value="physics">Physics</option>
                  <option value="chemistry">Chemistry</option>
                  <option value="maths">Mathematics</option>
                  <option value="biology">Biology</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-secondary-700 mb-1.5">Experience (in years)</label>
                <input type="number" min="0" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-primary-500 outline-none transition-all" name="experience" placeholder="e.g. 5" />
              </div>

              <div>
                <label className="block text-sm font-bold text-secondary-700 mb-1.5">Resume Link (Google Drive / LinkedIn / Portfolio)</label>
                <input type="url" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-primary-500 outline-none transition-all" name="resumeLink" placeholder="https://" />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-secondary-700 mb-1.5">Brief Cover Letter</label>
                <textarea name="message" rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-primary-500 outline-none transition-all resize-y" placeholder="Tell us about your teaching methodology and achievements..."></textarea>
              </div>

              {formError && (
                <div className="bg-red-50 text-red-700 border border-red-200 p-3 rounded-xl text-sm font-bold">
                  {formError}
                </div>
              )}
              <SpamGuard />
              <button type="submit" disabled={isSubmitting} className="disabled:opacity-70 w-full bg-primary-600 hover:bg-primary-700 text-secondary-900 py-4 rounded-xl font-bold text-lg shadow-lg shadow-primary-600/20 transition-all focus:ring-4 focus:ring-primary-500/50 mt-4">
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="max-w-container-max mx-auto px-6 py-20">
        <h2 className="text-3xl font-black text-secondary-900 mb-4 text-center">How Selection Works</h2>
        <p className="text-slate-600 text-lg max-w-3xl mx-auto text-center mb-10">We hire slowly because our students feel every hiring decision. Expect a real teaching evaluation — not just a resume screen.</p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white p-7 rounded-3xl border border-slate-200 shadow-sm text-center">
            <div className="text-sm font-black text-primary-600 mb-2">STEP 1</div>
            <h3 className="font-bold text-secondary-900 text-lg mb-2">Application review</h3>
            <p className="text-slate-600 text-sm">We read every cover letter. Subject depth and past results matter more than degrees alone.</p>
          </div>
          <div className="bg-white p-7 rounded-3xl border border-slate-200 shadow-sm text-center">
            <div className="text-sm font-black text-primary-600 mb-2">STEP 2</div>
            <h3 className="font-bold text-secondary-900 text-lg mb-2">Demo lecture</h3>
            <p className="text-slate-600 text-sm">Teach a real topic to our academic panel — clarity, pacing and doubt-handling are evaluated live.</p>
          </div>
          <div className="bg-white p-7 rounded-3xl border border-slate-200 shadow-sm text-center">
            <div className="text-sm font-black text-primary-600 mb-2">STEP 3</div>
            <h3 className="font-bold text-secondary-900 text-lg mb-2">Trial batch</h3>
            <p className="text-slate-600 text-sm">Shortlisted faculty take trial sessions with actual students before any long-term commitment.</p>
          </div>
          <div className="bg-white p-7 rounded-3xl border border-slate-200 shadow-sm text-center">
            <div className="text-sm font-black text-primary-600 mb-2">STEP 4</div>
            <h3 className="font-bold text-secondary-900 text-lg mb-2">Onboarding</h3>
            <p className="text-slate-600 text-sm">Material, testing systems and mentorship structure provided — you focus purely on teaching.</p>
          </div>
        </div>
        <h2 className="text-3xl font-black text-secondary-900 mb-4 text-center">Open Subjects</h2>
        <p className="text-slate-600 text-lg max-w-3xl mx-auto text-center mb-10">One subject per faculty — we don't ask Physics teachers to cover Chemistry.</p>
        <div className="blog-table-wrap max-w-3xl mx-auto mb-16">
          <table className="blog-table">
            <thead>
              <tr><th scope="col">Subject</th><th scope="col">Levels</th><th scope="col">Modes</th></tr>
            </thead>
            <tbody>
              <tr><td>Physics</td><td>Class 11–12, JEE, NEET</td><td>Offline, online, home tuition</td></tr>
              <tr><td>Chemistry</td><td>Class 11–12, JEE, NEET</td><td>Offline, online, home tuition</td></tr>
              <tr><td>Mathematics</td><td>Class 8–12, JEE, Olympiad</td><td>Offline, online, home tuition</td></tr>
              <tr><td>Biology</td><td>Class 9–12, NEET, Olympiad</td><td>Offline, online, home tuition</td></tr>
            </tbody>
          </table>
        </div>
        <h2 className="text-3xl font-black text-secondary-900 mb-3 text-center">Faculty FAQs</h2>
        <p className="text-slate-600 text-lg text-center mb-10">Common questions from teaching applicants.</p>
        <div className="flex flex-col gap-4 max-w-3xl mx-auto">
          {facultyFaqs.map((faq, idx) => (
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
    </div>
  );
}
