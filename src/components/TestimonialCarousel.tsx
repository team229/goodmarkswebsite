import { useRef } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    initials: "LS",
    name: "Lakshya Soni",
    title: "IIT Hyderabad Alumnus",
    quote: "Great teachers who make complex topics easy to understand and fun to learn. They taught me during my foundation years, and I eventually went on to pursue my bachelor’s degree at IIT Hyderabad. Highly recommended!",
    colorClass: "bg-primary-50 border-primary-100 text-secondary",
    iconColorClass: "text-primary-100"
  },
  {
    initials: "RT",
    name: "Roopam Taneja",
    title: "AIR 790, JEE Adv 2022",
    quote: "I am a former student of Sunil Sir. I secured AIR 790 in JEE Adv. 2022. He's a great physics teacher and a supportive mentor.",
    colorClass: "bg-primary-50 border-primary-100 text-primary-600",
    iconColorClass: "text-primary-100"
  },
  {
    initials: "AM",
    name: "Avik Madan",
    title: "JEE & NEET Aspirant",
    quote: "I am one of the first students here. The quality here is top notch. Teachers are interactive and helpful. Doubt Solving is the first priority here... Highly recommend for JEE and NEET preparation.",
    colorClass: "bg-primary-50 border-primary-100 text-primary-600",
    iconColorClass: "text-primary-100"
  },
  {
    initials: "TK",
    name: "Tushar Kont",
    title: "Old Student",
    quote: "Had a great experience learning here. I’m an old student, and the teaching has always been clear and supportive. Concepts are explained in a simple way, and the environment is very motivating.",
    colorClass: "bg-orange-50 border-orange-100 text-orange-600",
    iconColorClass: "text-orange-100"
  },
  {
    initials: "KS",
    name: "Kavisha Shakya",
    title: "JEE Aspirant",
    quote: "I am a student of Bal Bharati, Manesar and joined recently. I was searching for best physics, chemistry and maths classes for JEE in sector 85 gurugram. The teachers are extremely supportive.",
    colorClass: "bg-secondary-50 border-secondary-100 text-secondary-600",
    iconColorClass: "text-secondary-100"
  },
  {
    initials: "AB",
    name: "Adwita Bansal",
    title: "Student",
    quote: "I'm one of the inaugural batch student of good marks classes, and I am very happy... All my teachers are very supportive and quite experienced, they make learning very easy.",
    colorClass: "bg-rose-50 border-rose-100 text-rose-600",
    iconColorClass: "text-rose-100"
  }
];

export default function TestimonialCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative group max-w-container-max mx-auto px-6">
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      
      {/* Navigation arrows */}
      <button 
        onClick={scrollLeft}
        className="absolute -left-2 md:-left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-offwhite rounded-full shadow-lg border border-slate-200 flex items-center justify-center text-secondary-800 hover:bg-offwhite transition-colors opacity-90 hover:opacity-100"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button 
        onClick={scrollRight}
        className="absolute -right-2 md:-right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-offwhite rounded-full shadow-lg border border-slate-200 flex items-center justify-center text-secondary-800 hover:bg-offwhite transition-colors opacity-90 hover:opacity-100"
        aria-label="Next testimonial"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Carousel Container */}
      <div 
        ref={containerRef}
        className="flex overflow-x-auto gap-6 pb-8 pt-4 snap-x snap-mandatory no-scrollbar scroll-smooth"
      >
        {testimonials.map((t, i) => (
          <div 
            key={i} 
            className="snap-start shrink-0 w-full md:w-[400px] glass-card p-8 rounded-2xl italic text-on-surface-variant relative text-sm bg-offwhite h-full flex flex-col justify-between border border-slate-100/50 shadow-sm"
          >
            <div>
              <Quote className={`absolute top-6 right-6 w-12 h-12 rotate-180 opacity-50 ${t.iconColorClass}`} />
              <p className="relative z-10 leading-relaxed text-slate-600">"{t.quote}"</p>
            </div>
            <div className="mt-8 flex items-center gap-4 not-italic relative z-10 shrink-0">
              <div className={`w-10 h-10 rounded-full border flex items-center justify-center font-heading font-bold text-sm ${t.colorClass}`}>
                {t.initials}
              </div>
              <div>
                <p className="font-label-bold text-secondary-900 text-sm">{t.name}</p>
                <p className={`text-xs ${t.colorClass.split(' ').find(c => c.startsWith('text-'))}`}>{t.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
