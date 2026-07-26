import React, { useState } from 'react';
import { X, Phone, Menu } from 'lucide-react';

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-offwhite/90 backdrop-blur-lg border-b border-slate-100 transition-all duration-300">
          <div className="flex justify-between items-center px-4 sm:px-6 lg:px-12 py-3.5 sm:py-4 max-w-container-max mx-auto gap-3 flex-nowrap">
          <a href="/" className="text-2xl font-black text-secondary-900 tracking-tight flex items-center gap-2.5 shrink-0">
            <img src="/good-marks-logo.png" alt="Good Marks Classes" className="h-9 sm:h-10 w-auto object-contain rounded-lg shrink-0" />
            <span className="text-sm sm:text-lg font-bold leading-none whitespace-nowrap">Good Marks Classes</span>
          </a>
          <div className="flex items-center gap-2 sm:gap-4">
            <nav className="hidden lg:flex items-center gap-4 xl:gap-6 text-xs xl:text-sm font-bold text-slate-600 flex-nowrap">
              <a className="hover:text-primary-600 transition-colors whitespace-nowrap" href="/">Home</a>
               <div className="relative group py-6 -my-6 flex items-center">
                <a className="hover:text-primary-600 transition-colors flex items-center gap-1 whitespace-nowrap" href="/courses">
                  Courses
                  <svg className="w-4 h-4 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </a>
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top group-hover:translate-y-0 translate-y-2 z-50">
                   <div className="bg-offwhite shadow-xl shadow-slate-200/50 rounded-2xl border border-slate-100 p-2 flex flex-col gap-1">
                     <a href="/courses/iit" className="px-4 py-2.5 hover:bg-secondary-50 rounded-xl transition-colors font-bold text-secondary-700 hover:text-secondary-600 flex items-center gap-2">
                       <div className="w-2 h-2 rounded-full bg-secondary-500"></div> IIT-JEE
                     </a>
                     <a href="/courses/neet" className="px-4 py-2.5 hover:bg-primary-50 rounded-xl transition-colors font-bold text-secondary-700 hover:text-primary-600 flex items-center gap-2">
                       <div className="w-2 h-2 rounded-full bg-primary-500"></div> NEET-UG
                     </a>
                     <a href="/courses/prefoundation" className="px-4 py-2.5 hover:bg-amber-50 rounded-xl transition-colors font-bold text-secondary-700 hover:text-amber-600 flex items-center gap-2">
                       <div className="w-2 h-2 rounded-full bg-amber-500"></div> Pre-Foundation
                     </a>
                     <a href="/courses/foundation" className="px-4 py-2.5 hover:bg-amber-50 rounded-xl transition-colors font-bold text-secondary-700 hover:text-amber-600 flex items-center gap-2">
                       <div className="w-2 h-2 rounded-full bg-amber-500"></div> Foundation
                     </a>
                     <a href="/courses" className="px-4 py-2.5 hover:bg-primary-50 rounded-xl transition-colors font-bold text-secondary-700 hover:text-primary-600 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary-500"></div> Online Courses
                      </a>
                     <a href="/physics-classes-sunil-gola" className="px-4 py-2.5 hover:bg-orange-50 rounded-xl transition-colors font-bold text-secondary-700 hover:text-orange-600 flex items-center gap-2">
                       <div className="w-2 h-2 rounded-full bg-orange-500"></div> Physics by Sunil Gola
                     </a>
                   </div>
                </div>
              </div>
                <a className="hover:text-primary-600 transition-colors whitespace-nowrap" href="/blogs">Blog</a>
                <a className="hover:text-primary-600 transition-colors whitespace-nowrap" href="/locations">Locations</a>
                <a className="hover:text-primary-600 transition-colors whitespace-nowrap" href="/about">About Us</a>
                <a className="hover:text-primary-600 transition-colors whitespace-nowrap" href="/join-faculty">Join as Faculty</a>
              <button onClick={() => setIsModalOpen(true)} className="hover:text-primary-600 transition-colors cursor-pointer whitespace-nowrap">Contact Us</button>
              <a href="tel:8800880028" className="flex items-center gap-1.5 px-2 lg:px-3 py-1.5 rounded-lg bg-primary-50 text-primary-700 hover:bg-primary-100 transition-colors shrink-0 whitespace-nowrap"><Phone className="w-3.5 h-3.5 lg:w-4 lg:h-4" /><span className="hidden xl:inline">8800 8800 28</span><span className="xl:hidden">8800880028</span></a>
            </nav>
            
            <a
              href="https://goodmarksclasses.classpro.in/people/sign_in"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex bg-gradient-to-r from-primary-600 to-primary-600 hover:from-primary-700 hover:to-primary-700 text-secondary-900 px-4 lg:px-6 py-2 rounded-xl font-bold text-xs lg:text-sm shadow-md shadow-primary-500/20 transition-all items-center gap-2 shrink-0 whitespace-nowrap"
            >
              Student Login
            </a>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 hover:bg-slate-100 rounded-lg transition-colors shrink-0"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-100 bg-offwhite/95 backdrop-blur-lg">
            <nav className="flex flex-col gap-1 px-6 py-4 text-sm font-bold text-slate-600">
              <a 
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-primary-600 transition-colors px-4 py-3 rounded-lg hover:bg-slate-50" 
                href="/"
              >
                Home
              </a>
              <div className="px-4 py-3">
                <a 
                  className="hover:text-primary-600 transition-colors flex items-center gap-2"
                  href="/courses"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Courses
                </a>
                <div className="mt-2 ml-4 space-y-2 border-l border-slate-200 pl-4">
                  <a href="/courses/iit" className="block hover:text-secondary-600 transition-colors text-xs font-semibold">IIT-JEE</a>
                  <a href="/courses/neet" className="block hover:text-primary-600 transition-colors text-xs font-semibold">NEET-UG</a>
                  <a href="/courses/prefoundation" className="block hover:text-amber-600 transition-colors text-xs font-semibold">Pre-Foundation</a>
                  <a href="/courses/foundation" className="block hover:text-amber-600 transition-colors text-xs font-semibold">Foundation</a>
                  <a href="/courses" className="block hover:text-primary-600 transition-colors text-xs font-semibold">Online Courses</a>
                  <a href="/physics-classes-sunil-gola" className="block hover:text-orange-600 transition-colors text-xs font-semibold">Physics by Sunil Gola</a>
                </div>
              </div>
              <a 
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-primary-600 transition-colors px-4 py-3 rounded-lg hover:bg-slate-50" 
                href="/blogs"
              >
                Blog
              </a>
              <a 
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-primary-600 transition-colors px-4 py-3 rounded-lg hover:bg-slate-50" 
                href="/locations"
              >
                Locations
              </a>
              <a 
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-primary-600 transition-colors px-4 py-3 rounded-lg hover:bg-slate-50" 
                href="/about"
              >
                About Us
              </a>
              <a 
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-primary-600 transition-colors px-4 py-3 rounded-lg hover:bg-slate-50" 
                href="/join-faculty"
              >
                Join as Faculty
              </a>
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
              <a 
                onClick={() => setIsMobileMenuOpen(false)}
                href="https://goodmarksclasses.classpro.in/people/sign_in"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-primary-600 to-primary-600 hover:from-primary-700 hover:to-primary-700 text-secondary-900 px-6 py-2.5 rounded-xl font-bold text-sm shadow-md shadow-primary-500/20 transition-all text-center mt-2"
              >
                Student Login
              </a>
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

            <div className="space-y-4">
              <iframe
                src="https://www.classpro.in/api/v3/web_enquiries/new.html?token=8c53169a1eccae8f6aedb5aa64122a3507e5c5f1"
                width="100%"
                style={{ height: '47em', border: '0px' }}
                title="Contact Us Form"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
