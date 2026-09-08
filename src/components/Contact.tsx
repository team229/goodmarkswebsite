import React from 'react';
import { motion } from 'motion/react';
import { useFormSubmit } from '../hooks/useFormSubmit';
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  ChevronDown,
  User,
  BookOpen,
  Home as HomeIcon,
  MonitorPlay,
  Users,
  GraduationCap,
  BadgeCheck,
  Star,
  CheckCircle2,
  Instagram,
  Youtube,
  Globe,
  Navigation,
  Send,
  CalendarCheck,
} from 'lucide-react';

const PHONE_DISPLAY = '8800 8800 28';
const PHONE_TEL = 'tel:8800880028';
const WHATSAPP_DISPLAY = '98680 94265';
const WHATSAPP_LINK = 'https://wa.me/919868094265?text=' + encodeURIComponent('Hi Good Marks Classes! I want to know more about your IIT JEE / NEET / CBSE coaching programs.');
const EMAIL = 'info@goodmarksclasses.com';
const GOOGLE_MAPS = 'https://share.google/vhB5jd28c0iT57ikX';
const MAPS_EMBED =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4236.391238712835!2d76.9489722760682!3d28.39628499476872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d3df96dc92b09%3A0x1ee2e068ba193a36!2sGOOD%20MARKS%20CLASSES!5e1!3m2!1sen!2sus!4v1778357077009!5m2!1sen!2sus';

const faqItems = [
  {
    q: 'How do I book a free demo class at Good Marks Classes Gurgaon?',
    a: 'The fastest way is to fill the enquiry form on this page, call us at 8800 8800 28, or send a WhatsApp message to 98680 94265. We offer a free trial period before you commit — including a 1 week free demo for full-time batches — so you can experience our teaching methodology risk-free.',
  },
  {
    q: 'What is the contact number of Good Marks Classes?',
    a: 'You can reach the student support desk at 8800 8800 28 (calls) or 98680 94265 (WhatsApp). For written enquiries, email us at info@goodmarksclasses.com and our team usually responds within 24 working hours.',
  },
  {
    q: 'Where is Good Marks Classes located in Gurgaon?',
    a: 'Good Marks Classes is based in Sector 85, Gurugram (Haryana). We serve students across Gurgaon Sectors 78–99 (including sectors 80, 81, 85, 87, 88, 88A, 93–96) and Manesar Sectors 1–5 + NSG Manesar. Use the map on this page to get directions.',
  },
  {
    q: 'What are the batch timings for coaching classes?',
    a: 'Weekday batches run on Tuesday, Wednesday and Friday (evening), while weekend batches run on Saturday and Sunday — with Thursday reserved for doubts, discussions and backup classes. Foundation and intensive programs also run 5 days a week. Morning, evening and weekend slots are available.',
  },
  {
    q: 'Do you offer online classes or home tuition as well?',
    a: 'Yes. We offer offline classes at our Gurgaon centre, live online batches (max 10 students) for students across India, hybrid learning, and one-to-one home tuition in Gurgaon for CBSE Classes 8–12, IIT JEE, NEET and subject-wise support.',
  },
  {
    q: 'How quickly does the Good Marks team respond to enquiries?',
    a: 'Calls and WhatsApp messages are answered during batch hours (usually the same day). Form submissions are typically followed up within 24 working hours. For urgent admission queries, calling 8800 8800 28 is the fastest option.',
  },
];

export default function Contact() {
  const { submitForm, isSubmitting, isSuccess } = useFormSubmit('Contact Page');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    await submitForm(data);
  };

  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <main className="pt-24 lg:pt-32 pb-20">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50/60 via-white to-primary-50/30 px-6 py-14 lg:py-20">
        <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full opacity-30 pointer-events-none">
          <div className="absolute blur-[100px] bg-primary-400/20 w-96 h-96 rounded-full top-20 right-20"></div>
          <div className="absolute blur-[100px] bg-primary-400/20 w-96 h-96 rounded-full bottom-20 right-40"></div>
        </div>
        <div className="max-w-container-max mx-auto relative z-10">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
              <li>
                <a href="/" className="hover:text-primary-700 transition-colors font-semibold">Home</a>
              </li>
              <li className="text-slate-300">›</li>
              <li aria-current="page" className="text-secondary-900 font-bold">Contact Us</li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-secondary font-label-bold text-xs uppercase tracking-widest shadow-sm mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
                </span>
                Get Started in Minutes
              </div>
              <h1 className="font-h1 text-secondary-900 leading-[1.1] text-4xl md:text-5xl tracking-tight mb-5">
                Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-600">Good Marks Classes</span> – Gurgaon
              </h1>
              <p className="font-body-lg text-slate-600 max-w-xl text-lg leading-relaxed mb-6">
                Talk to our mentors about IIT JEE, NEET-UG, CBSE tuition (Classes 8–12) and subject-wise coaching. Book a free demo class, ask about batch timings, or simply get your doubts cleared — we respond fast.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-sm font-bold text-secondary-800 shadow-sm">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" /> 4.8 Rated by Students & Parents
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-sm font-bold text-secondary-800 shadow-sm">
                  <Users className="w-4 h-4 text-primary-600" /> 500+ Students Coached
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-sm font-bold text-secondary-800 shadow-sm">
                  <BadgeCheck className="w-4 h-4 text-green-600" /> 1 Week Free Demo
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={PHONE_TEL} className="btn-gradient px-8 py-4 rounded-xl text-secondary-900 font-label-bold shadow-lg shadow-primary-500/30 hover:shadow-primary-500/50 flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" /> Call {PHONE_DISPLAY}
                </a>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-xl bg-green-500 hover:bg-green-600 text-white font-label-bold shadow-lg shadow-green-500/30 transition-all flex items-center justify-center gap-2">
                  <MessageCircle className="w-5 h-5" /> WhatsApp Us
                </a>
                <button onClick={scrollToForm} className="px-8 py-4 rounded-xl border border-secondary-200 text-secondary-900 font-label-bold hover:bg-secondary-50 transition-colors flex items-center justify-center gap-2">
                  Send Enquiry <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>

            {/* Form card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 70, damping: 18, mass: 0.9 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400/35 via-primary-300/25 to-primary-500/25 rounded-[40px] blur-[60px] -translate-y-4 translate-x-2"></div>
              <div id="contact-form" className="relative bg-gradient-to-br from-primary-100 via-primary-50 to-white p-6 sm:p-8 rounded-[32px] shadow-[0_20px_60px_-12px_rgba(12,32,67,0.2),0_8px_24px_-6px_rgba(253,196,17,0.15)] border-2 border-primary-300/60 z-20">
                <div className="mb-6">
                  <h2 className="text-xl font-bold text-secondary-900 mb-1">Book Your Free Session</h2>
                  <p className="text-sm text-slate-600">Fill the form and our mentors will call you back — usually within 24 hours.</p>
                </div>
                <form className="space-y-3" onSubmit={handleSubmit}>
                  {isSuccess && (
                    <div className="bg-green-100 text-green-700 p-4 rounded-xl text-sm font-bold flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                      <span>Thanks! We have received your enquiry and will contact you soon.</span>
                    </div>
                  )}
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-primary-600 pointer-events-none" />
                    <input type="text" id="contact-name" name="name" placeholder="Your full name" className="w-full pl-10 pr-4 py-3 rounded-xl border border-primary-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500 transition-all text-sm shadow-sm" required />
                  </div>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-primary-600 pointer-events-none" />
                    <input type="tel" id="contact-phone" name="phone" placeholder="Your phone number" className="w-full pl-10 pr-4 py-3 rounded-xl border border-primary-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500 transition-all text-sm shadow-sm" required />
                  </div>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-primary-600 pointer-events-none" />
                    <input type="email" id="contact-email" name="email" placeholder="Your email address" className="w-full pl-10 pr-4 py-3 rounded-xl border border-primary-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500 transition-all text-sm shadow-sm" />
                  </div>
                  <div className="relative">
                    <BookOpen className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-primary-600 pointer-events-none" />
                    <select name="course" id="contact-course" defaultValue="" className="w-full pl-10 pr-10 py-3 rounded-xl border border-primary-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500 transition-all text-sm appearance-none shadow-sm" required>
                      <option value="" disabled>Select your course</option>
                      <option value="jee">IIT JEE Coaching (Mains & Advanced)</option>
                      <option value="neet">NEET-UG Coaching</option>
                      <option value="cbse">CBSE Tuition Classes 8–12</option>
                      <option value="foundation">Foundation / Pre-Foundation (Class 7–10)</option>
                      <option value="subject">Subject-wise Tuition (Physics/Chem/Maths/Bio)</option>
                      <option value="home-tuition">Home Tuition in Gurgaon</option>
                      <option value="olympiad">Olympiad / CUET / NDA</option>
                      <option value="other">Other / Not Sure</option>
                    </select>
                    <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-primary-600 pointer-events-none" />
                  </div>
                  <div className="relative">
                    <MonitorPlay className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-primary-600 pointer-events-none" />
                    <select name="mode" id="contact-mode" defaultValue="" className="w-full pl-10 pr-10 py-3 rounded-xl border border-primary-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500 transition-all text-sm appearance-none shadow-sm">
                      <option value="" disabled>Preferred learning mode (optional)</option>
                      <option value="offline">Offline – Gurgaon Centre</option>
                      <option value="online">Online (Live, max 10 students)</option>
                      <option value="hybrid">Hybrid</option>
                      <option value="home-tuition">Home Tuition</option>
                    </select>
                    <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-primary-600 pointer-events-none" />
                  </div>
                  <div className="relative">
                    <Send className="absolute left-3.5 top-4 w-4 h-4 text-primary-600 pointer-events-none" />
                    <textarea id="contact-message" name="message" rows={2} placeholder="Current class / goal — e.g. Class 11, targeting JEE 2028 (optional)" className="w-full pl-10 pr-4 py-3 rounded-xl border border-primary-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500 transition-all text-sm shadow-sm resize-none" />
                  </div>
                  <button disabled={isSubmitting} type="submit" className="disabled:opacity-70 w-full bg-gradient-to-r from-primary-500 via-primary-400 to-primary-500 py-3 rounded-xl text-secondary-900 font-label-bold shadow-[0_8px_20px_-4px_rgba(253,196,17,0.4)] hover:shadow-[0_12px_28px_-4px_rgba(253,196,17,0.5)] hover:scale-[1.02] mt-1 transition-all duration-200 flex items-center justify-center gap-2">
                    {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-[11px] text-slate-500 text-center mt-2">
                    By submitting, you agree to our <a href="#" className="underline hover:text-primary-600">Privacy Policy</a>.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick contact options */}
      <section className="py-16 md:py-20 bg-offwhite">
        <div className="max-w-container-max mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-h2 text-secondary-900 mb-3">Reach Us Any Way You Like</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">Phone, WhatsApp, email or visit us in person — the same fast, honest response across every channel.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a href={PHONE_TEL} className="glass-card p-7 rounded-3xl border border-slate-100 hover:border-primary-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-white flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-2xl bg-primary-100 flex items-center justify-center mb-5">
                <Phone className="w-7 h-7 text-primary-600" />
              </div>
              <h3 className="font-bold text-secondary-900 mb-1">Call Us</h3>
              <p className="text-2xl font-black text-secondary-900 mb-1">8800 8800 28</p>
              <p className="text-caption text-slate-500 mb-4">Student support desk — fastest response for admissions</p>
              <span className="inline-flex items-center gap-1 text-primary-700 font-bold text-sm">Call Now <ArrowRight className="w-4 h-4" /></span>
            </a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="glass-card p-7 rounded-3xl border border-slate-100 hover:border-green-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-white flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center mb-5">
                <MessageCircle className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="font-bold text-secondary-900 mb-1">WhatsApp</h3>
              <p className="text-2xl font-black text-secondary-900 mb-1">98680 94265</p>
              <p className="text-caption text-slate-500 mb-4">Chat with us anytime — share documents or doubts directly</p>
              <span className="inline-flex items-center gap-1 text-green-600 font-bold text-sm">Message Us <ArrowRight className="w-4 h-4" /></span>
            </a>
            <a href={`mailto:${EMAIL}`} className="glass-card p-7 rounded-3xl border border-slate-100 hover:border-secondary-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-white flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-2xl bg-secondary-50 flex items-center justify-center mb-5">
                <Mail className="w-7 h-7 text-secondary-600" />
              </div>
              <h3 className="font-bold text-secondary-900 mb-1">Email</h3>
              <p className="text-lg font-black text-secondary-900 break-all mb-1">{EMAIL}</p>
              <p className="text-caption text-slate-500 mb-4">For written enquiries, documents & collaboration</p>
              <span className="inline-flex items-center gap-1 text-secondary-600 font-bold text-sm">Send Email <ArrowRight className="w-4 h-4" /></span>
            </a>
            <a href={GOOGLE_MAPS} target="_blank" rel="noopener noreferrer" className="glass-card p-7 rounded-3xl border border-slate-100 hover:border-primary-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-white flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-2xl bg-primary-100 flex items-center justify-center mb-5">
                <Navigation className="w-7 h-7 text-primary-600" />
              </div>
              <h3 className="font-bold text-secondary-900 mb-1">Visit Campus</h3>
              <p className="text-lg font-black text-secondary-900 mb-1">Sector 85, Gurugram</p>
              <p className="text-caption text-slate-500 mb-4">Get directions on Google Maps & plan your visit</p>
              <span className="inline-flex items-center gap-1 text-primary-700 font-bold text-sm">Get Directions <ArrowRight className="w-4 h-4" /></span>
            </a>
          </div>
        </div>
      </section>

      {/* Map + details */}
      <section className="py-16 md:py-20 bg-white border-y border-slate-100">
        <div className="max-w-container-max mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
            <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-sm min-h-[380px]">
              <iframe
                src={MAPS_EMBED}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '380px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Good Marks Classes location on Google Maps"
              ></iframe>
            </div>
            <div className="flex flex-col gap-6">
              <div className="glass-card p-7 rounded-3xl border border-slate-100 bg-offwhite">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-primary-100 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary-900">Good Marks Classes</h3>
                    <p className="text-caption text-slate-500">Sector 85, Gurugram, Haryana — see map</p>
                  </div>
                </div>
                <div className="flex gap-2.5 mb-3">
                  <span className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-bold text-secondary-700">Gurgaon Sectors 78–99</span>
                  <span className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-bold text-secondary-700">Manesar Sectors 1–5, NSG</span>
                </div>
                <a href={GOOGLE_MAPS} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary-700 font-bold text-sm hover:gap-3 transition-all">
                  <Navigation className="w-4 h-4" /> Open in Google Maps
                </a>
              </div>
              <div className="glass-card p-7 rounded-3xl border border-slate-100 bg-offwhite">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-secondary-50 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-secondary-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary-900">Batch Timings</h3>
                    <p className="text-caption text-slate-500">Morning, evening & weekend batches</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex justify-between gap-4 border-b border-slate-100 pb-2"><span className="font-bold text-secondary-800">Weekday batches</span><span>Tue, Wed, Fri (evening)</span></li>
                  <li className="flex justify-between gap-4 border-b border-slate-100 pb-2"><span className="font-bold text-secondary-800">Weekend batches</span><span>Sat & Sun (morning + evening)</span></li>
                  <li className="flex justify-between gap-4 border-b border-slate-100 pb-2"><span className="font-bold text-secondary-800">Doubt sessions</span><span>Thu (reserved)</span></li>
                  <li className="flex justify-between gap-4"><span className="font-bold text-secondary-800">Intensive programs</span><span>5 days a week</span></li>
                </ul>
              </div>
              <div className="glass-card p-7 rounded-3xl border border-slate-100 bg-offwhite">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-secondary-50 flex items-center justify-center shrink-0">
                    <CalendarCheck className="w-5 h-5 text-secondary-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary-900">Book A Campus Visit</h3>
                    <p className="text-caption text-slate-500">Meet mentors, review study material, sit in a live class</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button onClick={scrollToForm} className="btn-gradient px-5 py-3 rounded-xl text-secondary-900 font-bold text-sm flex items-center justify-center gap-2">
                    Book Free Demo <ArrowRight className="w-4 h-4" />
                  </button>
                  <a href={PHONE_TEL} className="px-5 py-3 rounded-xl border border-slate-200 text-secondary-700 font-bold text-sm hover:bg-white transition-colors flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4" /> Call First
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs strip */}
      <section className="py-16 md:py-20 bg-offwhite">
        <div className="max-w-container-max mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="font-h2 text-secondary-900 mb-3">Enquiries Welcome for Every Course</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">Choose your program and our counsellors will guide you to the right batch.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: GraduationCap, title: 'IIT JEE Coaching', desc: 'Mains & Advanced, 1 & 2-year integrated programs', href: '/courses/iit' },
              { icon: BadgeCheck, title: 'NEET-UG Coaching', desc: 'Medical entrance with full syllabus coverage', href: '/courses/neet' },
              { icon: BookOpen, title: 'CBSE Tuition 8–12', desc: 'Physics, Chem, Maths, Bio with weekly tests', href: '/courses/cbse' },
              { icon: HomeIcon, title: 'Home Tuition', desc: 'One-to-one expert sessions in Gurgaon', href: '/home-tuition' },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <a key={idx} href={item.href} className="glass-card p-7 rounded-3xl border border-slate-100 hover:border-primary-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-white group">
                  <div className="w-12 h-12 rounded-2xl bg-primary-100 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="font-bold text-secondary-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-500 mb-3">{item.desc}</p>
                  <span className="inline-flex items-center gap-1 text-primary-700 font-bold text-sm group-hover:gap-2 transition-all">Explore <ArrowRight className="w-4 h-4" /></span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Follow us */}
      <section className="py-12 md:py-16 bg-white border-t border-slate-100">
        <div className="max-w-container-max mx-auto px-6 text-center">
          <h2 className="font-h2 text-secondary-900 mb-3">Follow Good Marks Classes</h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-8">Results, toppers, study tips and daily doubt-solving clips — stay connected.</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a href="https://www.instagram.com/goodmarksclassesgurgaon/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-sm shadow-lg hover:scale-105 transition-all">
              <Instagram className="w-5 h-5" /> Instagram
            </a>
            <a href="https://youtube.com/@sunilgolaphysicsclasses?si=4yL9JVuHUPDfdTYQ" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-red-500 to-red-600 text-white font-bold text-sm shadow-lg hover:scale-105 transition-all">
              <Youtube className="w-5 h-5" /> YouTube
            </a>
            <a href={GOOGLE_MAPS} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-secondary-600 text-white font-bold text-sm shadow-lg hover:scale-105 transition-all">
              <Globe className="w-5 h-5" /> Google Business
            </a>
            <a href="https://goodmarksclasses.classpro.in/people/sign_in" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-slate-200 text-secondary-700 font-bold text-sm hover:bg-offwhite transition-all">
              <Users className="w-5 h-5" /> Student Login
            </a>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-20 bg-offwhite">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-h2 text-secondary-900 mb-3">Contact FAQs</h2>
            <p className="text-slate-600 text-lg">Quick answers before you reach out — we're still just a call or message away.</p>
          </div>
          <div className="flex flex-col gap-4">
            {faqItems.map((faq, idx) => (
              <details key={idx} className="group bg-white border border-slate-200 rounded-2xl open:shadow-md transition-all duration-300 overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-bold text-secondary-800 text-lg select-none group-open:bg-offwhite/50">
                  {idx + 1}. {faq.q}
                  <div className="min-w-8 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 group-open:rotate-180 transition-transform duration-300">
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </summary>
                <div className="px-6 pb-6 pt-2 text-slate-600 bg-offwhite/50 font-body leading-relaxed border-t border-slate-100">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-secondary-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-900/20 to-transparent pointer-events-none"></div>
        <div className="max-w-container-max mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to Take the First Step?</h2>
          <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">Join Good Marks Classes in Gurgaon and give your JEE, NEET or board prep the attention it deserves. Limited seats — start with a free demo today.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button onClick={scrollToForm} className="btn-gradient px-10 py-4 rounded-xl text-secondary-900 font-bold text-lg shadow-lg shadow-primary-500/20 hover:shadow-primary-500/40 transition-all">
              Book Free Demo Class
            </button>
            <a href={PHONE_TEL} className="px-10 py-4 rounded-xl border border-secondary-700 text-slate-300 font-bold text-lg hover:bg-secondary-800 transition-colors flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" /> {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}