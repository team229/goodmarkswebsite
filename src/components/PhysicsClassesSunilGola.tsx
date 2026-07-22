import { Atom, CheckCircle2, GraduationCap, Calendar, ArrowRight } from 'lucide-react';
import { coursesData } from '../data/courses';

export default function PhysicsClassesSunilGola() {
  const allCourses = Object.values(coursesData).flat();
  const physicsCourses = allCourses.filter((course: any) =>
    course.details?.subjects?.toLowerCase().includes('physics')
  );

  return (
    <main className="pt-24 lg:pt-32 pb-20 bg-offwhite min-h-screen">
      <section className="max-w-container-max mx-auto px-6">
        <div className="rounded-[32px] overflow-hidden shadow-xl border border-slate-100 bg-offwhite mb-10">
          <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 p-10 text-white">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
                <Atom className="w-10 h-10" />
              </div>
              <div>
                <p className="uppercase tracking-[0.2em] text-xs font-bold mb-2">Dedicated Program</p>
                <h1 className="text-3xl md:text-5xl font-black">Physics Classes by Sunil Gola Sir</h1>
                <p className="text-white/90 mt-3 max-w-3xl text-lg">
                  Learn Physics directly from Sunil Gola Sir (DTU) with concept-first teaching, exam-focused practice,
                  and personal mentorship for CBSE, IIT JEE, and NEET aspirants.
                </p>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              'Direct mentorship by Sunil Gola Sir for every enrolled batch',
              'Strong focus on mechanics, electromagnetism, thermodynamics & modern physics',
              'Numerical problem-solving drills for board and competitive exams',
              'Small-batch attention with regular doubt-clearing and progress tracking',
              'Physics coaching available in offline, online, and hybrid formats',
              'Integrated support for Physics inside JEE/NEET/foundation pathways'
            ].map((point) => (
              <div key={point} className="rounded-2xl border border-slate-100 p-5 bg-offwhite shadow-sm flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                <p className="text-slate-700 font-medium text-sm">{point}</p>
              </div>
            ))}
          </div>
        </div>

        <section>
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="w-6 h-6 text-secondary-700" />
            <h2 className="text-2xl md:text-3xl font-black text-secondary-900">Physics Batches You Can Join</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {physicsCourses.map((course: any) => (
              <article key={course.id} className="bg-offwhite rounded-2xl border border-slate-100 shadow-sm p-6 flex flex-col">
                <div className="flex items-center gap-2 mb-3 flex-wrap">
                  <span className="px-3 py-1 rounded-full bg-orange-50 text-orange-700 text-xs font-bold uppercase">Physics</span>
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase">{course.tag}</span>
                </div>
                <h3 className="text-lg font-bold text-secondary-900 mb-2">{course.title}</h3>
                <p className="text-sm text-slate-500 mb-4">{course.subtitle}</p>
                <div className="mt-auto mb-5 rounded-xl border border-slate-100 p-3 bg-offwhite flex items-center gap-2 text-sm font-semibold text-slate-700">
                  <Calendar className="w-4 h-4 text-secondary-700" /> Target: {course.target}
                </div>
                <a href={`/course/${course.id}`} className="w-full py-3 rounded-xl bg-secondary-600 hover:bg-secondary-700 text-white text-sm font-bold flex items-center justify-center gap-2 transition-colors">
                  View Course Details <ArrowRight className="w-4 h-4" />
                </a>
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
