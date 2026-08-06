import { useState } from 'react';
import { MapPin, GraduationCap, ChevronRight } from 'lucide-react';
import { locationPages } from '../data/locations';

const areas = ['All', 'Gurgaon', 'Manesar'];
const types = ['All', 'IITJEE', 'NEET', 'CBSE'];

type TypeMeta = { label: string; prefix: string; heading: string; icon: string; iconBg: string; iconFg: string };
const TYPE_META: Record<string, TypeMeta> = {
  IITJEE: { label: 'IIT-JEE Main & Advanced', prefix: 'IIT-JEE Main & Advanced Coaching in ', heading: 'IIT-JEE Main & Advanced Coaching', icon: 'bg-blue-100 text-blue-600', iconBg: 'bg-blue-50', iconFg: 'text-blue-500' },
  NEET: { label: 'NEET', prefix: 'NEET Coaching in ', heading: 'NEET Coaching', icon: 'bg-emerald-100 text-emerald-600', iconBg: 'bg-emerald-50', iconFg: 'text-emerald-500' },
  CBSE: { label: 'CBSE Tuition', prefix: 'CBSE Tuition in ', heading: 'CBSE Tuition', icon: 'bg-amber-100 text-amber-600', iconBg: 'bg-amber-50', iconFg: 'text-amber-500' },
};

function getArea(title: string): string {
  if (title.toLowerCase().includes('manesar')) return 'Manesar';
  return 'Gurgaon';
}

export default function LocationsList() {
  const [activeType, setActiveType] = useState('All');
  const [activeArea, setActiveArea] = useState('All');

  const filtered = locationPages.filter(p => {
    if (activeType !== 'All' && p.type !== activeType) return false;
    if (activeArea !== 'All' && getArea(p.title) !== activeArea) return false;
    return true;
  });

  const grouped = filtered.reduce((acc, page) => {
    const key = `${page.type} - ${getArea(page.title)}`;
    if (!acc[key]) acc[key] = [];
    acc[key].push(page);
    return acc;
  }, {} as Record<string, typeof locationPages>);

  return (
    <main className="pt-24 lg:pt-32 pb-20 bg-offwhite min-h-screen">
      <section className="max-w-container-max mx-auto px-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center">
            <MapPin className="w-8 h-8 text-primary-600" />
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-black text-secondary-900 tracking-tight">Our Locations</h1>
            <p className="text-slate-500 mt-1">Find Good Marks Classes coaching near you</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 mb-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm font-bold text-slate-500">Type:</span>
            {types.map(t => (
              <button
                key={t}
                onClick={() => setActiveType(t)}
                className={`px-4 py-2 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                  activeType === t
                    ? 'bg-secondary-600 text-white shadow-md'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300'
                }`}
              >
                {t === 'All' ? 'All Types' : TYPE_META[t]?.label || t}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm font-bold text-slate-500">Area:</span>
            {areas.map(a => (
              <button
                key={a}
                onClick={() => setActiveArea(a)}
                className={`px-4 py-2 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                  activeArea === a
                    ? 'bg-secondary-600 text-white shadow-md'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300'
                }`}
              >
                {a === 'All' ? 'All Areas' : a}
              </button>
            ))}
          </div>
        </div>

        {Object.keys(grouped).length === 0 ? (
          <div className="text-center py-20">
            <MapPin className="w-16 h-16 text-slate-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-secondary-900 mb-2">No locations found</h2>
            <p className="text-slate-500">Try changing the filters above.</p>
          </div>
        ) : (
          Object.entries(grouped).map(([group, pages]) => {
            const area = group.split(' - ')[1];
            const type = group.split(' - ')[0];
            const meta = TYPE_META[type] || { label: type, prefix: '', heading: `${type} Coaching`, icon: 'bg-secondary-100 text-secondary-600', iconBg: 'bg-secondary-50', iconFg: 'text-secondary-500' };
            return (
              <div key={group} className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${meta.icon}`}>
                    <GraduationCap className={`w-5 h-5 ${meta.icon.split(' ')[1]}`} />
                  </div>
                  <h2 className="text-2xl font-black text-secondary-900">
                    {meta.heading} in {area}
                  </h2>
                  <span className="text-sm text-slate-400 font-semibold">({pages.length} locations)</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {pages.map(page => (
                    <a
                      key={page.slug}
                      href={`/locations/${page.slug}`}
                      className="flex items-center justify-between p-4 rounded-xl bg-white border border-slate-100 hover:border-slate-200 hover:shadow-md transition-all group"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${meta.iconBg}`}>
                          <MapPin className={`w-4 h-4 ${meta.iconFg}`} />
                        </div>
                        <span className="font-bold text-secondary-700 text-sm group-hover:text-primary-600 transition-colors">
                          {page.title.replace(meta.prefix, '')}
                        </span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-primary-500 transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            );
          })
        )}
      </section>
    </main>
  );
}
