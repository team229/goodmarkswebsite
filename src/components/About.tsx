import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  ArrowRight,
  UserCheck, 
  Users, 
  Layers, 
  BookOpen, 
  Settings, 
  CalendarCheck, 
  HelpCircle, 
  GraduationCap,
  Quote,
  PhoneCall
} from 'lucide-react';

export default function About() {
  return (
    <main className="pt-24 lg:pt-32 pb-20">
      {/* Hero / Founder's Message */}
      <section className="py-12 lg:py-20 px-6">
        <div className="max-w-container-max mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
               <div className="relative aspect-[4/5] lg:aspect-square max-w-md mx-auto lg:max-w-none">
                  <div className="absolute inset-0 bg-primary-600 rounded-full scale-95 origin-bottom translate-y-4"></div>
                  <img 
                    src="/sunil-gola.png" 
                    alt="Sunil Gola Sir" 
                    className="relative w-full h-full object-cover rounded-full shadow-2xl border-8 border-white bg-offwhite"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop";
                    }}
                  />
               </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <h1 className="font-h1 text-4xl lg:text-5xl text-secondary-900 leading-tight">Founder's Message</h1>
              
              <div className="space-y-4 text-slate-600 font-body-md leading-relaxed text-lg">
                <p>
                  Education isn't just about marks — it's about giving students the clarity to make the right decisions at the right time. When that foundation is strong, everything else follows.
                </p>
                <p>
                  At Good Marks Classes, I started with one straightforward belief: every student deserves focused, honest coaching — not a crowded classroom where they get lost, but a space where their doubts actually get answered and their progress is genuinely tracked.
                </p>
                <p>
                  We keep our offline batches small — max 30 students — because that's the only way to make sure no student slips through the cracks. Whether you're preparing for JEE, NEET, or building your Class 11 & 12 foundation, the goal is the same: deep understanding first, exam performance second. One follows naturally from the other.
                </p>
                <p>
                  I personally teach Physics for CBSE, IB, CUET, JEE, and NEET — because I believe a student learns best when the person teaching them actually cares about the outcome.
                </p>
                <p>
                  Before you decide, come try a full week for free. No pressure, no commitment — just see if it feels right.
                </p>
              </div>

              <div className="pt-4 pb-2">
                <h4 className="font-label-bold text-secondary-900 text-lg">Sunil Gola Sir</h4>
                <p className="text-secondary text-sm font-bold">Founder, Good Marks Classes</p>
                <p className="text-slate-500 text-sm">B.Tech, Delhi Technological University (DTU)</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button onClick={() => window.dispatchEvent(new CustomEvent('open-contact-modal'))} className="btn-gradient px-8 py-3.5 rounded-xl text-secondary-900 font-label-bold shadow-lg shadow-primary-500/30 hover:shadow-primary-500/50 flex items-center justify-center gap-2">
                  Enquire Now <ArrowRight className="w-5 h-5"/>
                </button>
                <a href="tel:+919876543210" className="px-8 py-3.5 rounded-xl border-2 border-slate-200 text-secondary-700 font-label-bold hover:bg-offwhite hover:border-slate-300 transition-colors flex items-center justify-center gap-2">
                  <PhoneCall className="w-5 h-5"/> Call for Consultation
                </a>
              </div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 lg:py-24 bg-offwhite relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary-100/50 blur-[100px] rounded-full -translate-y-1/2 -translate-x-1/2"></div>
        <div className="absolute text-[240px] font-black top-20 right-0 leading-none text-slate-100 opacity-50 select-none">
          MISSION
        </div>
        <div className="max-w-container-max mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="order-2 lg:order-1 space-y-6 max-w-2xl">
              <h2 className="font-h2 text-3xl lg:text-4xl text-secondary-900">Our Mission</h2>
              
              <div className="space-y-5 text-slate-600 font-body-md leading-relaxed text-lg">
                <p>
                  Good Marks Classes was built on a simple idea — that the right coaching, delivered the right way, can change a student's trajectory completely.
                </p>
                <p>
                  Founded by Sunil Gola Sir, a B.Tech graduate from Delhi Technological University (DTU), Good Marks Classes serves students across Gurugram — from Sectors 82 to 92 — with offline group classes, online batches, one-to-one sessions, hybrid classes, and home tuition, depending on what works best for each student.
                </p>
                <p>
                  We're not trying to be the biggest coaching centre. We're trying to be the most effective one. That means keeping batch sizes small (max 30 offline, max 10 online), teaching concepts from the ground up, and making sure every student — whether preparing for JEE, NEET, or Class 11 & 12 boards — gets the individual attention they actually need.
                </p>
                <p>
                  Education in the 21st century moves fast. Exam patterns change, syllabi get updated, and the competition gets tougher every year. At Good Marks Classes, we stay ahead of that — constantly refining how we teach so our students are never caught off guard on exam day.
                </p>
                <p>
                  Our students come from all backgrounds. Our commitment to every single one of them is the same: strong fundamentals, honest guidance, and coaching that genuinely prepares them — not just for the next exam, but for everything that comes after.
                </p>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden glass-card p-6 shadow-2xl flex items-center justify-center bg-offwhite relative">
                 <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-80" alt="Students learning" />
                 <div className="absolute inset-0 bg-primary-900/20"></div>
                 <div className="relative z-10 w-24 h-24 bg-offwhite/90 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-2xl">
                   <GraduationCap className="w-12 h-12 text-primary-600" />
                 </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Good Marks Classes */}
      <section className="py-20 lg:py-32 bg-offwhite">
        <div className="max-w-container-max mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
            <h2 className="font-h2 text-3xl lg:text-4xl text-secondary-900 mb-6">Why Good Marks Classes</h2>
            <p className="text-xl text-slate-600">
              Here's what actually makes the difference when you're choosing where to prepare for JEE or NEET:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glass-card p-8 rounded-2xl border border-slate-100 hover:shadow-xl hover:border-primary-200 transition-all bg-offwhite hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center mb-6">
                <UserCheck className="w-6 h-6" />
              </div>
              <h4 className="font-label-bold text-lg text-secondary-900 mb-3">Founder teaches directly</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Sunil Gola Sir doesn't just run the institute — he's in the classroom. Physics for JEE, NEET, CBSE, and IB is taught by him personally. You're learning from the person who built this place, not a rotating set of substitutes.
              </p>
            </div>

            <div className="glass-card p-8 rounded-2xl border border-slate-100 hover:shadow-xl hover:border-primary-200 transition-all bg-offwhite hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h4 className="font-label-bold text-lg text-secondary-900 mb-3">Small batches, real attention</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Max 30 students offline, max 10 online. That's not a selling point — it's the whole philosophy. Every student's progress gets tracked, every doubt gets addressed, and no one gets lost in the crowd.
              </p>
            </div>

            <div className="glass-card p-8 rounded-2xl border border-slate-100 hover:shadow-xl hover:border-primary-200 transition-all bg-offwhite hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center mb-6">
                <Layers className="w-6 h-6" />
              </div>
              <h4 className="font-label-bold text-lg text-secondary-900 mb-3">Separate batches for boards and competitive exams</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Board students and JEE/NEET aspirants have different needs and different paces. We don't mix them up. You're always in a batch that matches exactly where you're headed.
              </p>
            </div>

            <div className="glass-card p-8 rounded-2xl border border-slate-100 hover:shadow-xl hover:border-amber-200 transition-all bg-offwhite hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-6">
                <BookOpen className="w-6 h-6" />
              </div>
              <h4 className="font-label-bold text-lg text-secondary-900 mb-3">Subject-wise specialised classes</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Each subject has its own dedicated class — Physics, Chemistry, Maths, Biology — taught with full depth. You're not getting a generalist overview. You're getting focused, subject-specific coaching.
              </p>
            </div>

             <div className="glass-card p-8 rounded-2xl border border-slate-100 hover:shadow-xl hover:border-secondary-200 transition-all bg-offwhite hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-secondary-50 text-secondary-600 flex items-center justify-center mb-6">
                <Settings className="w-6 h-6" />
              </div>
              <h4 className="font-label-bold text-lg text-secondary-900 mb-3">Flexible learning options</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Offline group classes, online batches, one-to-one sessions, hybrid classes, and home tuition — across Gurugram Sectors 82 to 92. However you learn best, there's a format that fits.
              </p>
            </div>

            <div className="glass-card p-8 rounded-2xl border border-slate-100 hover:shadow-xl hover:border-pink-200 transition-all bg-offwhite hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center mb-6">
                <CalendarCheck className="w-6 h-6" />
              </div>
              <h4 className="font-label-bold text-lg text-secondary-900 mb-3">Try before you commit</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                One full week of demo classes, completely free. See the teaching style, meet the faculty, sit in the batch — then decide. No pressure, no hard sell.
              </p>
            </div>

            <div className="glass-card p-8 rounded-2xl border border-slate-100 hover:shadow-xl hover:border-secondary-200 transition-all bg-offwhite hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-secondary-50 text-secondary-600 flex items-center justify-center mb-6">
                <HelpCircle className="w-6 h-6" />
              </div>
              <h4 className="font-label-bold text-lg text-secondary-900 mb-3">Doubt-clearing built in</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Doubt sessions aren't an afterthought here. They're a structured part of how we run every program — because an unresolved doubt in October can cost marks in March.
              </p>
            </div>

            <div className="glass-card p-8 rounded-2xl border border-slate-100 hover:shadow-xl hover:border-cyan-200 transition-all bg-offwhite hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center mb-6">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="font-label-bold text-lg text-secondary-900 mb-3">Covers everything that matters</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                JEE Main & Advanced, NEET, CBSE boards, IB, CUET, Olympiads — and Class 8, 9, 10 foundation courses for students who want to start building early.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-24 bg-offwhite">
        <div className="max-w-container-max mx-auto px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="font-h2 text-3xl lg:text-4xl text-secondary-900 mb-4">What our students and parents Say about us</h2>
            <p className="text-lg text-slate-600">
              Real results from real families across Gurgaon — for IIT-JEE, NEET & Class 11/12 coaching.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-8 rounded-2xl italic text-on-surface-variant relative text-body-md bg-offwhite hover:shadow-xl transition-all">
              <Quote className="absolute top-6 right-6 text-primary-100 w-12 h-12 rotate-180" />
              <div className="relative z-10 space-y-4">
                <p>"Best IIT JEE coaching in Gurgaon, honestly.</p>
                <p>I tried two other institutes before joining Good Marks Classes. The difference was night and day. Sunil Gola Sir's Physics classes are genuinely the clearest I've ever attended — he breaks down concepts you'd otherwise mug up for days. If you're looking for the best IIT JEE tuition classes in Gurgaon, just come here and book the demo week first. You'll know immediately."</p>
              </div>
              <div className="mt-8 flex items-center gap-4 not-italic">
                <div className="w-12 h-12 rounded-full bg-primary-50 border border-primary-100 flex items-center justify-center font-heading text-secondary font-bold">A</div>
                <div>
                  <p className="font-label-bold text-secondary-900">Ananya Verma</p>
                  <p className="text-caption text-secondary">IIT-JEE student, Class 12 — Gurgaon</p>
                </div>
              </div>
              <div className="mt-6 px-4 py-2 bg-primary-50 text-primary-700 text-xs font-bold rounded-lg w-fit not-italic border border-primary-100">
                IIT JEE Topper
              </div>
            </div>
            
            <div className="glass-card p-8 rounded-2xl italic text-on-surface-variant relative text-body-md bg-offwhite hover:shadow-xl transition-all">
              <Quote className="absolute top-6 right-6 text-primary-100 w-12 h-12 rotate-180" />
              <div className="relative z-10 space-y-4">
                <p>"Finally found a NEET coaching centre that gets it.</p>
                <p>My parents were searching for a good NEET coaching institute near us in Gurgaon for almost three months. We tried demo classes at a few places but nothing clicked. Then we found Good Marks Classes. The batch sizes are small, the teachers actually track your progress, and Sunil Sir personally checks in if your Physics score dips. For NEET tuition classes in Gurgaon, this is the real deal."</p>
              </div>
              <div className="mt-8 flex items-center gap-4 not-italic">
                <div className="w-12 h-12 rounded-full bg-primary-50 border border-primary-100 flex items-center justify-center font-heading text-primary-600 font-bold">R</div>
                <div>
                  <p className="font-label-bold text-secondary-900">Rohit Sharma</p>
                  <p className="text-caption text-primary-600">NEET student, Class 12 — Gurgaon</p>
                </div>
              </div>
              <div className="mt-6 px-4 py-2 bg-primary-50 text-primary-700 text-xs font-bold rounded-lg w-fit not-italic border border-primary-100">
                NEET 680+ Score
              </div>
            </div>
            
             <div className="glass-card p-8 rounded-2xl italic text-on-surface-variant relative text-body-md bg-offwhite hover:shadow-xl transition-all">
              <Quote className="absolute top-6 right-6 text-primary-100 w-12 h-12 rotate-180" />
              <div className="relative z-10 space-y-4">
                <p>"Class 11 foundation done right — wish I found this earlier.</p>
                <p>I joined Good Marks Classes for Class 11 IIT coaching after my board results weren't great. The foundation batch is structured really well — they don't just teach, they make you think. Maths and Physics especially feel manageable now. My confidence going into Class 12 is something I didn't expect. If you're starting early and want solid IIT coaching for Class 11, this is where you should be."</p>
              </div>
              <div className="mt-8 flex items-center gap-4 not-italic">
                <div className="w-12 h-12 rounded-full bg-primary-50 border border-primary-100 flex items-center justify-center font-heading text-primary-600 font-bold">P</div>
                <div>
                  <p className="font-label-bold text-secondary-900">Priya Mehta</p>
                  <p className="text-caption text-primary-600">Class 11 Foundation student — Gurgaon</p>
                </div>
              </div>
               <div className="mt-6 px-4 py-2 bg-primary-50 text-primary-700 text-xs font-bold rounded-lg w-fit not-italic border border-primary-100">
                Foundation Batch
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer internal card */}
      <section className="py-12 px-6">
         <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary-700 to-primary-800 rounded-3xl p-8 lg:p-12 text-secondary-900 flex flex-col md:flex-row items-center justify-between shadow-2xl">
           <div className="mb-6 md:mb-0 max-w-lg">
             <h3 className="font-h2 text-3xl font-black text-yellow-400 mb-2">GET IN TOUCH</h3>
             <p className="text-xl font-medium">Putting students first, always — Experience the difference.</p>
           </div>
           <button onClick={() => window.dispatchEvent(new CustomEvent('open-contact-modal'))} className="bg-offwhite/20 hover:bg-offwhite/30 backdrop-blur-md border border-white/40 text-white px-8 py-4 rounded-xl font-bold transition-all w-full md:w-auto text-center">
             Enquire Now
           </button>
         </div>
      </section>
    </main>
  );
}
