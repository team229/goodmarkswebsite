import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Link, useSearchParams } from 'react-router-dom';
import { 
  ArrowRight, 
  GraduationCap, 
  Calendar, 
  CheckCircle2,
  Trophy,
  BookOpen
} from 'lucide-react';

import { courseTabs, coursesData, streams } from '../data/courses';

export default function Courses() {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const initialStream = streams.find(s => s.id === searchParams.get('stream')) ? (searchParams.get('stream') as string) : 'iit';
  const [activeStream, setActiveStream] = useState(initialStream);
  
  const availableTabs = courseTabs[activeStream] || [];
  const [activeTab, setActiveTab] = useState(availableTabs[0]?.id || 'class11');

  useEffect(() => {
    const stream = searchParams.get('stream');
    if (stream && streams.find(s => s.id === stream)) {
      setActiveStream(stream);
      const newAvailableTabs = courseTabs[stream] || [];
      if (!newAvailableTabs.find(t => t.id === activeTab)) {
        setActiveTab(newAvailableTabs[0]?.id || '');
      }
    }
  }, [searchParams, activeTab]);

  const handleStreamChange = (stream: string) => {
    setActiveStream(stream);
    setSearchParams({ stream });
  };

  return (
    <main className="pt-24 lg:pt-32 pb-20 bg-offwhite min-h-screen">
      {/* Header text */}
      <section className="px-6 relative z-10 text-center mb-10">
         <p className="text-slate-500 font-semibold mb-2">Choose your preparation path and unlock your engineering dreams</p>
      </section>

      {/* Tabs UI */}
      <section className="px-6 max-w-container-max mx-auto relative z-20">
        
        {/* Stream Buttons */}
        <div className="flex justify-center mb-6">
           <div className="inline-flex bg-slate-200 p-1.5 rounded-2xl shadow-inner overflow-x-auto max-w-full no-scrollbar">
             {streams.map(stream => (
                <button
                  key={stream.id}
                  onClick={() => handleStreamChange(stream.id)}
                  className={`px-6 py-3 rounded-xl font-bold text-sm transition-all whitespace-nowrap ${
                    activeStream === stream.id 
                      ? stream.id === 'neet' 
                        ? 'bg-offwhite text-primary-700 shadow border border-primary-100'
                        : stream.id === 'prefoundation' || stream.id === 'foundation'
                          ? 'bg-offwhite text-amber-600 shadow border border-amber-100'
                          : 'bg-offwhite text-secondary-700 shadow border border-secondary-100'
                      : 'text-slate-600 hover:text-secondary-900'
                  }`}
                >
                  {stream.label}
                </button>
             ))}
           </div>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <div className="bg-offwhite p-2 rounded-2xl shadow-sm border border-slate-100 flex gap-2 overflow-x-auto max-w-full no-scrollbar">
            {availableTabs.map((tab) => {
              let Icon = GraduationCap;
              if (tab.id === 'dropper') Icon = Trophy;
              if (tab.id.startsWith('class7') || tab.id.startsWith('class8') || tab.id.startsWith('class9') || tab.id.startsWith('class10')) Icon = BookOpen;
              
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all whitespace-nowrap ${
                    isActive 
                      ? 'bg-secondary-600 text-white shadow-md' 
                      : 'bg-transparent text-slate-600 hover:bg-offwhite'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-secondary-600'}`} />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Courses Container */}
        <div className="bg-offwhite rounded-[32px] shadow-xl shadow-slate-200/50 p-6 md:p-10 border border-slate-100 relative overflow-hidden">
          {/* Top border gradient */}
          <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${
            activeStream === 'iit' ? 'from-secondary-500 via-primary-500 to-pink-500' : 
            activeStream === 'neet' ? 'from-primary-400 via-secondary-500 to-cyan-500' :
            'from-amber-400 via-orange-500 to-red-500'
          }`}></div>

          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  activeStream === 'iit' ? 'bg-secondary-100' : 
                  activeStream === 'neet' ? 'bg-primary-100' :
                  'bg-orange-100'
                }`}>
                  <GraduationCap className={`w-5 h-5 ${
                    activeStream === 'iit' ? 'text-secondary-700' :
                    activeStream === 'neet' ? 'text-primary-700' : 
                    'text-orange-700'
                  }`} />
                </div>
                <h2 className="text-2xl font-bold text-secondary-900">
                  {availableTabs.find(t => t.id === activeTab)?.label} Courses {
                    activeStream === 'foundation' || activeStream === 'prefoundation' 
                      ? '' 
                      : `for ${streams.find(s => s.id === activeStream)?.label}`
                  }
                </h2>
              </div>
              {activeStream === 'prefoundation' && (
                <p className="text-sm font-medium text-slate-500 italic ml-14">
                  "A good education is a foundation for a better future" - Elizabeth Warren
                </p>
              )}
              {activeStream === 'foundation' && (
                <p className="text-sm font-medium text-slate-500 italic ml-14 max-w-lg">
                  "No other investment yields as great a return as the investment in education. An educated workforce is the foundation of every community and the future of every economy." - Brad Henry
                </p>
              )}
            </div>

            {(activeStream === 'prefoundation') && (
              <div className="bg-amber-50 p-4 rounded-xl border border-amber-100 md:min-w-64">
                <p className="text-xs font-bold text-amber-800 uppercase tracking-widest mb-3">Programme Directors</p>
                <div className="flex flex-col gap-3">
                  <div>
                    <p className="text-sm font-bold text-secondary-900">Dr. Deepak Gola</p>
                    <p className="text-xs text-slate-500">PhD, IIT Delhi (Director)</p>
                  </div>
                  <div>
                     <p className="text-sm font-bold text-secondary-900">Mr. Amit Gupta</p>
                     <p className="text-xs text-slate-500">PhD, IIT Delhi (Associate Director)</p>
                  </div>
                </div>
              </div>
            )}

            {(activeStream === 'foundation') && (
              <div className="bg-amber-50 p-4 rounded-xl border border-amber-100 md:min-w-64">
                <p className="text-xs font-bold text-amber-800 uppercase tracking-widest mb-3">Programme Directors</p>
                <div className="flex flex-col gap-3">
                  <div>
                    <p className="text-sm font-bold text-secondary-900">Ms. Geetanjali</p>
                    <p className="text-xs text-slate-500">M.Sc, Sri Venkateswara College (DU) (Director)</p>
                  </div>
                  <div>
                     <p className="text-sm font-bold text-secondary-900">Dr. Deepak Gola</p>
                     <p className="text-xs text-slate-500">PhD, IIT Delhi (Associate Director)</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coursesData[activeTab]?.filter(c => c.stream === activeStream || c.stream === 'all').map((course, idx) => (
              <motion.div 
                key={course.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className="bg-offwhite rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all overflow-hidden flex flex-col group"
              >
                {/* Placeholder Image Graphic */}
                <div className={`h-48 w-full m-2 rounded-xl bg-gradient-to-br ${course.imageGrad} flex items-center justify-center relative overflow-hidden`}>
                   {/* Abstract shapes inside gradient */}
                   <div className="absolute top-0 right-0 w-32 h-32 bg-offwhite/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/4"></div>
                   <div className="absolute bottom-0 left-0 w-24 h-24 bg-black/10 rounded-full blur-xl translate-y-1/4 -translate-x-1/4"></div>
                   
                   <h3 className="text-4xl font-black text-white italic tracking-tighter drop-shadow-md z-10 font-heading text-center px-4">
                     {course.imageText}
                   </h3>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  
                  {/* Title Area */}
                  <div className="flex items-start gap-3 mb-6">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1 ${activeStream === 'iit' ? 'bg-secondary-50' : 'bg-primary-50'}`}>
                      <GraduationCap className={`w-4 h-4 ${activeStream === 'iit' ? 'text-secondary-600' : 'text-primary-600'}`} />
                    </div>
                    <div>
                      <h4 className="font-bold text-secondary-900 text-lg leading-tight mb-1">{course.title}</h4>
                      <p className="text-xs text-slate-500 font-semibold">{course.subtitle}</p>
                    </div>
                  </div>

                  {/* Info Badges */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="bg-offwhite rounded-xl p-3 border border-slate-100 flex flex-col gap-1">
                       <span className="text-[10px] uppercase font-bold text-slate-400 flex items-center gap-1"><BookOpen className="w-3 h-3"/> Class</span>
                       <span className="font-bold text-secondary-900 text-sm">{course.classLabel}</span>
                    </div>
                    <div className={`${activeStream === 'iit' ? 'bg-secondary-50/50 border-secondary-50' : 'bg-primary-50/50 border-primary-50'} rounded-xl p-3 border flex flex-col gap-1`}>
                       <span className={`text-[10px] uppercase font-bold flex items-center gap-1 ${activeStream === 'iit' ? 'text-secondary-400' : 'text-primary-500'}`}><Calendar className="w-3 h-3"/> Target</span>
                       <span className={`font-bold text-sm ${activeStream === 'iit' ? 'text-secondary-900' : 'text-primary-900'}`}>{course.target}</span>
                    </div>
                  </div>

                  {/* Admission Status */}
                  <div className="bg-primary-50 border border-primary-100 rounded-xl p-3 flex items-center gap-2 mb-6 mt-auto">
                    <CheckCircle2 className="w-4 h-4 text-primary-600" />
                    <span className="text-xs font-bold text-primary-700">Admission Open</span>
                  </div>

                  {/* Button */}
                  <Link 
                    to={`/course/${course.id}`}
                    className={`w-full py-3.5 rounded-xl border font-bold text-sm flex items-center justify-center gap-2 transition-colors ${
                      activeStream === 'iit' 
                        ? 'border-secondary-200 text-secondary-600 hover:bg-secondary-50 group-hover:border-secondary-600 group-hover:bg-secondary-600 group-hover:text-white' 
                        : 'border-primary-200 text-primary-600 hover:bg-primary-50 group-hover:border-primary-600 group-hover:bg-primary-600 group-hover:text-secondary-900'
                    }`}>
                    View Details <ArrowRight className="w-4 h-4" />
                  </Link>

                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}
