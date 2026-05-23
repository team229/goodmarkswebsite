import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, Phone, Menu } from 'lucide-react';
import { useFormSubmit } from '../hooks/useFormSubmit';

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { submitForm, isSubmitting, isSuccess } = useFormSubmit('Contact Us Modal');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    await submitForm(data);
    setTimeout(() => {
      setIsModalOpen(false);
    }, 2000);
  };


  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-offwhite/90 backdrop-blur-lg border-b border-slate-100 transition-all duration-300">
        <div className="flex justify-between items-center px-6 lg:px-12 py-4 max-w-container-max mx-auto">
          <Link to="/" className="text-2xl font-black text-secondary-900 tracking-tighter flex items-center gap-2">
            <img src="/good-marks-logo.png" alt="Good Marks Classes" className="h-10 w-auto object-contain rounded-lg" />
            <span className="text-xs sm:text-lg font-bold whitespace-nowrap">Good Marks Classes</span>
          </Link>
          <div className="flex items-center gap-4">
            <nav className="hidden lg:flex items-center gap-8 text-sm font-bold text-slate-600">
              <Link className="hover:text-primary-600 transition-colors" to="/">Home</Link>
               <div className="relative group py-6 -my-6 flex items-center">
                <Link className="hover:text-primary-600 transition-colors flex items-center gap-1" to="/courses">
                  Courses
                  <svg className="w-4 h-4 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </Link>
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top group-hover:translate-y-0 translate-y-2 z-50">
                   <div className="bg-offwhite shadow-xl shadow-slate-200/50 rounded-2xl border border-slate-100 p-2 flex flex-col gap-1">
                     <Link to="/courses?stream=iit" className="px-4 py-2.5 hover:bg-secondary-50 rounded-xl transition-colors font-bold text-secondary-700 hover:text-secondary-600 flex items-center gap-2">
                       <div className="w-2 h-2 rounded-full bg-secondary-500"></div> IIT-JEE
                     </Link>
                     <Link to="/courses?stream=neet" className="px-4 py-2.5 hover:bg-primary-50 rounded-xl transition-colors font-bold text-secondary-700 hover:text-primary-600 flex items-center gap-2">
                       <div className="w-2 h-2 rounded-full bg-primary-500"></div> NEET-UG
                     </Link>
                     <Link to="/courses?stream=prefoundation" className="px-4 py-2.5 hover:bg-amber-50 rounded-xl transition-colors font-bold text-secondary-700 hover:text-amber-600 flex items-center gap-2">
                       <div className="w-2 h-2 rounded-full bg-amber-500"></div> Pre-Foundation
                     </Link>
                     <Link to="/courses?stream=foundation" className="px-4 py-2.5 hover:bg-amber-50 rounded-xl transition-colors font-bold text-secondary-700 hover:text-amber-600 flex items-center gap-2">
                       <div className="w-2 h-2 rounded-full bg-amber-500"></div> Foundation
                     </Link>
                     <Link to="#" className="px-4 py-2.5 hover:bg-primary-50 rounded-xl transition-colors font-bold text-secondary-700 hover:text-primary-600 flex items-center gap-2">
                       <div className="w-2 h-2 rounded-full bg-primary-500"></div> Online Courses
                     </Link>
                     <Link to="/physics-classes-sunil-gola" className="px-4 py-2.5 hover:bg-orange-50 rounded-xl transition-colors font-bold text-secondary-700 hover:text-orange-600 flex items-center gap-2">
                       <div className="w-2 h-2 rounded-full bg-orange-500"></div> Physics by Sunil Gola
                     </Link>
                   </div>
                </div>
              </div>
              <Link className="hover:text-primary-600 transition-colors" to="#">Blog</Link>
              <Link className="hover:text-primary-600 transition-colors" to="/about">About Us</Link>
              <Link className="hover:text-primary-600 transition-colors" to="/join-faculty">Join as Faculty</Link>
              <button onClick={() => setIsModalOpen(true)} className="hover:text-primary-600 transition-colors cursor-pointer">Contact Us</button>
              <a href="tel:8800880028" className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary-50 text-primary-700 hover:bg-primary-100 transition-colors"><Phone className="w-4 h-4" /> 8800 8800 28</a>
            </nav>
            
            <Link to="#" className="hidden sm:flex bg-gradient-to-r from-primary-600 to-primary-600 hover:from-primary-700 hover:to-primary-700 text-secondary-900 px-6 py-2.5 rounded-xl font-bold text-sm shadow-md shadow-primary-500/20 transition-all items-center gap-2">
              Student Login
            </Link>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 hover:bg-slate-100 rounded-lg transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-100 bg-offwhite/95 backdrop-blur-lg">
            <nav className="flex flex-col gap-1 px-6 py-4 text-sm font-bold text-slate-600">
              <Link 
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-primary-600 transition-colors px-4 py-3 rounded-lg hover:bg-slate-50" 
                to="/"
              >
                Home
              </Link>
              <div className="px-4 py-3">
                <Link 
                  className="hover:text-primary-600 transition-colors flex items-center gap-2"
                  to="/courses"
                >
                  Courses
                </Link>
                <div className="mt-2 ml-4 space-y-2 border-l border-slate-200 pl-4">
                  <Link to="/courses?stream=iit" className="block hover:text-secondary-600 transition-colors text-xs font-semibold">IIT-JEE</Link>
                  <Link to="/courses?stream=neet" className="block hover:text-primary-600 transition-colors text-xs font-semibold">NEET-UG</Link>
                  <Link to="/courses?stream=prefoundation" className="block hover:text-amber-600 transition-colors text-xs font-semibold">Pre-Foundation</Link>
                  <Link to="/courses?stream=foundation" className="block hover:text-amber-600 transition-colors text-xs font-semibold">Foundation</Link>
                  <Link to="#" className="block hover:text-primary-600 transition-colors text-xs font-semibold">Online Courses</Link>
                  <Link to="/physics-classes-sunil-gola" className="block hover:text-orange-600 transition-colors text-xs font-semibold">Physics by Sunil Gola</Link>
                </div>
              </div>
              <Link 
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-primary-600 transition-colors px-4 py-3 rounded-lg hover:bg-slate-50" 
                to="#"
              >
                Blog
              </Link>
              <Link 
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-primary-600 transition-colors px-4 py-3 rounded-lg hover:bg-slate-50" 
                to="/about"
              >
                About Us
              </Link>
              <Link 
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-primary-600 transition-colors px-4 py-3 rounded-lg hover:bg-slate-50" 
                to="/join-faculty"
              >
                Join as Faculty
              </Link>
              <button 
                onClick={() => {
                  setIsModalOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                className="hover:text-primary-600 transition-colors px-4 py-3 rounded-lg hover:bg-slate-50 text-left"
              >
                Contact Us
              </button>
              <a 
                href="tel:8800880028" 
                className="flex items-center gap-2 px-4 py-3 rounded-lg hover:bg-slate-50 text-primary-700 font-semibold"
              >
                <Phone className="w-4 h-4" /> 8800 8800 28
              </a>
              <Link 
                onClick={() => setIsMobileMenuOpen(false)}
                to="#" 
                className="bg-gradient-to-r from-primary-600 to-primary-600 hover:from-primary-700 hover:to-primary-700 text-secondary-900 px-6 py-2.5 rounded-xl font-bold text-sm shadow-md shadow-primary-500/20 transition-all text-center mt-2"
              >
                Student Login
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Contact Us Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-secondary-900/40 backdrop-blur-sm" 
            onClick={() => setIsModalOpen(false)}
          ></div>
          <div className="relative bg-offwhite rounded-3xl shadow-2xl p-8 max-w-md w-full" style={{ animation: 'fadeIn 0.2s ease-out' }}>
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-secondary-900 mb-2">Book Your Free Session</h2>
              <p className="text-slate-500 text-sm">Fill the form below to get a callback from our mentors.</p>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
              {isSuccess && (
                <div className="bg-green-100 text-green-700 p-3 rounded-xl text-sm font-bold">
                  Thanks! We will contact you soon.
                </div>
              )}
              <div>
                <input 
                  type="text" 
                  name="name"
                  placeholder="Student Name" 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all placeholder:text-slate-400 text-sm"
                  required
                />
              </div>
              <div>
                <input 
                  type="tel" 
                  name="phone"
                  placeholder="Mobile Number" 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all placeholder:text-slate-400 text-sm"
                  required
                />
              </div>
              <div>
                <select name="course" className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-600 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all appearance-none bg-offwhite text-sm" required defaultValue="">
                  <option value="" disabled hidden>Select Course</option>
                  <option value="iit-jee">IIT-JEE</option>
                  <option value="neet-ug">NEET-UG</option>
                  <option value="pre-foundation">Pre-Foundation</option>
                  <option value="foundation">Foundation</option>
                  <option value="online-courses">Online Courses</option>
                </select>
              </div>
              <div>
                <textarea 
                  name="message"
                  placeholder="Any Questions? (Optional)" 
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all placeholder:text-slate-400 resize-none text-sm"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-primary-500 hover:bg-primary-600 text-secondary-900 font-bold py-3.5 rounded-xl transition-all shadow-lg shadow-primary-500/20 mt-4 disabled:opacity-70"
              >
                {isSubmitting ? 'SUBMITTING...' : 'GET STARTED \u2192'}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
