import React from 'react';
import { useFormSubmit } from '../hooks/useFormSubmit';
import { ArrowRight, Atom, FlaskConical, Calculator, Dna, CheckCircle, Calendar, Users, GraduationCap, MapPin } from 'lucide-react';
import { coursesData } from '../data/courses';

export default function SubjectDetail({ subjectId }: { subjectId?: string }) {
  const { submitForm, isSubmitting } = useFormSubmit('SubjectDetail');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    await submitForm(data);
  };

  // Basic configuration per subject
  const subjectConfigs: Record<string, any> = {
    physics: {
      name: "Physics",
      shortDesc: "Conquer complex concepts and numericals with expert-led sessions.",
      color: "amber",
      icon: Atom,
      gradient: "from-amber-400 to-orange-500",
      textColor: "text-orange-500",
      bgLight: "bg-orange-50",
      exams: "CBSE • IIT JEE • NEET",
      features: [
        "In-depth mechanics and thermodynamics",
        "Electromagnetism and modern physics",
        "Heavy focus on numerical problem solving",
        "Direct mentorship by Sunil Gola Sir (DTU)"
      ]
    },
    chemistry: {
      name: "Chemistry",
      shortDesc: "Master organic, inorganic, and physical chemistry with targeted learning.",
      color: "red",
      icon: FlaskConical,
      gradient: "from-orange-400 to-red-500",
      textColor: "text-red-500",
      bgLight: "bg-red-50",
      exams: "CBSE • IIT JEE • NEET",
      features: [
        "Reaction mechanisms and naming reactions",
        "Physical chemistry numericals practice",
        "NCERT-aligned inorganic chemistry",
        "Tricks to memorize periodic trends"
      ]
    },
    mathematics: {
      name: "Mathematics",
      shortDesc: "Build rigorous problem-solving skills and mathematical thinking for top exams.",
      color: "teal",
      icon: Calculator,
      gradient: "from-primary-500 to-secondary-600",
      textColor: "text-secondary-500",
      bgLight: "bg-secondary-50",
      exams: "CBSE • IIT JEE",
      features: [
        "Calculus and Coordinate Geometry focus",
        "Shortcuts for Algebra and Trigonometry",
        "Previous year JEE advanced questions",
        "Speed and accuracy building techniques"
      ]
    },
    biology: {
      name: "Biology",
      shortDesc: "Deep dive into botany and zoology with comprehensive and interactive prep.",
      color: "green",
      icon: Dna,
      gradient: "from-primary-400 to-primary-600",
      textColor: "text-primary-600",
      bgLight: "bg-primary-50",
      exams: "CBSE • NEET",
      features: [
        "Line-by-line NCERT coverage",
        "Detailed human physiology focus",
        "Genetics and evolution deep dives",
        "Diagram-based and assertion-reason questions"
      ]
    }
  };

  const config = subjectConfigs[subjectId || ''] || subjectConfigs['physics'];
  const Icon = config.icon;


  const subjectHeadings: Record<string, string> = {
    biology: 'Biology Tuition for Class 10, 11 & 12 in Gurgaon',
    chemistry: 'Chemistry Tuition for Class 11 & 12 in Gurgaon',
    mathematics: 'Maths Coaching for Class 10, 11 & 12 in Gurgaon',
    physics: 'Physics Tuition for Class 9, 10, 11 & 12 in Gurgaon'
  };

  const subjectHeading = subjectHeadings[subjectId || ''] || `${config.name} Classes`;

  // Flatten all courses from coursesData
  const allCourses = Object.values(coursesData).flat();

  // Filter courses that include this subject
  const relatedCourses = allCourses.filter((course: any) => 
    course.details && course.details.subjects && course.details.subjects.toLowerCase().includes(config.name.toLowerCase())
  );

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <div className={`bg-gradient-to-br ${config.gradient} py-16 mb-12`}>
        <div className="max-w-container-max mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="w-32 h-32 bg-offwhite rounded-full flex items-center justify-center shrink-0 shadow-xl">
              <Icon className={`w-16 h-16 ${config.textColor}`} />
            </div>
            <div className="text-center md:text-left text-white">
              <div className="inline-block px-4 py-1 bg-offwhite/20 backdrop-blur-md rounded-full font-bold text-sm tracking-wide mb-4">
                {config.exams}
              </div>
              <h1 className="text-4xl md:text-6xl font-black mb-4">{subjectHeading}</h1>
              <p className="text-xl md:text-2xl font-medium text-white/90 max-w-2xl">{config.shortDesc}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-container-max mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-2 space-y-12">
            {/* What you will learn */}
            <section className="bg-offwhite rounded-3xl p-8 border border-slate-200 shadow-sm">
              <h2 className="text-3xl font-black text-secondary-900 mb-6">Why study {config.name} with us?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {config.features.map((feature: string, index: number) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className={`w-6 h-6 ${config.textColor} shrink-0 mt-0.5`} />
                    <p className="text-secondary-700 font-medium">{feature}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Related Courses */}
            <section>
              <h2 className="text-3xl font-black text-secondary-900 mb-6">Available {config.name} Batches</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedCourses.map(course => (
                  <div key={course.id} className="bg-offwhite border text-center p-6 border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center">
                      <div className="flex flex-wrap gap-2 mb-4 justify-center">
                        <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-bold uppercase tracking-wider">{course.tag}</span>
                        <span className={`px-3 py-1 ${config.bgLight} ${config.textColor} rounded-full text-xs font-bold uppercase tracking-wider`}>Class {course.classLabel}</span>
                      </div>
                      <h3 className="text-xl font-bold text-secondary-900 mb-3">{course.title}</h3>
                      <div className="space-y-2 mb-6 text-sm text-slate-600 flex-grow pt-2">
                        <div className="flex items-center gap-2 justify-center">
                           <MapPin className="w-4 h-4" /> <span>Offline / Online</span>
                        </div>
                      </div>
                      <a 
                        href={`/course/${course.id}`}
                        className={`w-full py-3 rounded-xl font-bold text-white text-center bg-gradient-to-r ${config.gradient} shadow-md transition-transform hover:-translate-y-0.5`}
                      >
                        View Details
                      </a>
                  </div>
                ))}
                
                {relatedCourses.length === 0 && (
                   <div className="col-span-full py-8 text-center bg-offwhite border border-slate-200 rounded-2xl text-slate-500">
                     No specific active batches found for this subject right now. Contact us for custom tuition.
                   </div>
                )}
              </div>
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-offwhite rounded-3xl p-8 border border-slate-200 shadow-sm">
              <h3 className="text-2xl font-black text-secondary-900 mb-4">Book a trial class</h3>
              <p className="text-slate-600 mb-6">Experience our teaching methodology before you commit to a full course.</p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div>
                  <label className="block text-sm font-bold text-secondary-700 mb-1">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-slate-400 outline-none transition-all focus:border-slate-400" name="studentname" placeholder="Student Name" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-secondary-700 mb-1">Mobile Number</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-slate-400 outline-none transition-all focus:border-slate-400" name="phone" placeholder="+91" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-secondary-700 mb-1">Class</label>
                  <select name="selection" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-slate-400 outline-none transition-all focus:border-slate-400 cursor-pointer">
                    <option value="">Select Class</option>
                    <option value="11">Class 11</option>
                    <option value="12">Class 12</option>
                    <option value="dropper">Repeaters</option>
                  </select>
                </div>
                <button type="submit" disabled={isSubmitting} className={`w-full py-4 rounded-xl font-bold text-white text-center bg-gradient-to-r ${config.gradient} shadow-lg transition-transform hover:-translate-y-0.5 mt-4`}>
                  Request Callback
                </button>
              </form>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
