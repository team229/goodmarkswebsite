const fs = require('fs');
const content = fs.readFileSync('src/pages/Home.tsx', 'utf-8');

const updatedSection = `        {/* Dedicated Subject Classes */}
        <section className="py-section-padding-lg bg-surface-container-low" id="live-classes">
          <div className="max-w-container-max mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-h2 mb-4 text-slate-900">Dedicated Subject Classes</h2>
              <p className="text-blue-700 text-xl font-bold max-w-2xl mx-auto mb-2">Are you facing difficulties with a specific subject?</p>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto mb-4">Master it with our highly-focused, expert-led sessions designed exclusively for CBSE, IIT JEE, and NEET preparation.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Physics */}
              <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col group">
                <div className="bg-gradient-to-br from-amber-400 to-orange-500 p-8 flex flex-col items-center text-center gap-4">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shrink-0 shadow-inner mb-2 group-hover:scale-110 transition-transform">
                    <Atom className="w-10 h-10 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-white mb-2">Physics</h3>
                    <p className="text-white/90 font-bold text-sm tracking-wide">CBSE • IIT JEE • NEET</p>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow bg-slate-50/50 justify-between">
                  <p className="text-slate-600 text-center mb-8">Conquer complex concepts and numericals with expert-led physics sessions.</p>
                  <div className="mt-auto flex justify-center">
                    <label className="flex items-center justify-center gap-3 cursor-pointer font-bold text-slate-700 select-none py-3 px-6 bg-white border border-slate-200 rounded-xl shadow-sm hover:border-blue-300 hover:text-blue-600 transition-colors w-full">
                      <input type="checkbox" className="w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer" />
                      Select Course
                    </label>
                  </div>
                </div>
              </div>

              {/* Chemistry */}
              <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col group">
                <div className="bg-gradient-to-br from-orange-400 to-red-500 p-8 flex flex-col items-center text-center gap-4">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shrink-0 shadow-inner mb-2 group-hover:scale-110 transition-transform">
                    <FlaskConical className="w-10 h-10 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-white mb-2">Chemistry</h3>
                    <p className="text-white/90 font-bold text-sm tracking-wide">CBSE • IIT JEE • NEET</p>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow bg-slate-50/50 justify-between">
                  <p className="text-slate-600 text-center mb-8">Master organic, inorganic, and physical chemistry with targeted learning.</p>
                  <div className="mt-auto flex justify-center">
                    <label className="flex items-center justify-center gap-3 cursor-pointer font-bold text-slate-700 select-none py-3 px-6 bg-white border border-slate-200 rounded-xl shadow-sm hover:border-blue-300 hover:text-blue-600 transition-colors w-full">
                      <input type="checkbox" className="w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer" />
                      Select Course
                    </label>
                  </div>
                </div>
              </div>

              {/* Mathematics */}
              <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col group">
                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-8 flex flex-col items-center text-center gap-4">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shrink-0 shadow-inner mb-2 group-hover:scale-110 transition-transform">
                    <Calculator className="w-10 h-10 text-indigo-500" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-white mb-2">Mathematics</h3>
                    <p className="text-white/90 font-bold text-sm tracking-wide">CBSE • IIT JEE</p>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow bg-slate-50/50 justify-between">
                  <p className="text-slate-600 text-center mb-8">Build rigorous problem-solving skills and mathematical thinking for top exams.</p>
                  <div className="mt-auto flex justify-center">
                    <label className="flex items-center justify-center gap-3 cursor-pointer font-bold text-slate-700 select-none py-3 px-6 bg-white border border-slate-200 rounded-xl shadow-sm hover:border-indigo-300 hover:text-indigo-600 transition-colors w-full">
                      <input type="checkbox" className="w-5 h-5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer" />
                      Select Course
                    </label>
                  </div>
                </div>
              </div>

              {/* Biology */}
              <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col group">
                <div className="bg-gradient-to-br from-emerald-400 to-green-600 p-8 flex flex-col items-center text-center gap-4">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shrink-0 shadow-inner mb-2 group-hover:scale-110 transition-transform">
                    <Dna className="w-10 h-10 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-white mb-2">Biology</h3>
                    <p className="text-white/90 font-bold text-sm tracking-wide">CBSE • NEET</p>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow bg-slate-50/50 justify-between">
                  <p className="text-slate-600 text-center mb-8">Deep dive into botany and zoology with comprehensive and interactive prep.</p>
                  <div className="mt-auto flex justify-center">
                    <label className="flex items-center justify-center gap-3 cursor-pointer font-bold text-slate-700 select-none py-3 px-6 bg-white border border-slate-200 rounded-xl shadow-sm hover:border-green-300 hover:text-green-600 transition-colors w-full">
                      <input type="checkbox" className="w-5 h-5 rounded border-slate-300 text-green-600 focus:ring-green-500 cursor-pointer" />
                      Select Course
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 text-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 xl:px-12 xl:py-5 rounded-full font-bold text-lg shadow-lg shadow-blue-600/20 transition-all transform hover:-translate-y-1 inline-flex items-center gap-2">
                Register For Dedicated Subject
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>`

// Find start and end indices
const startIndex = content.indexOf('{/* Dedicated Subject Classes */}');
const endIndexStr = '{/* Programs Bento Grid */}';
const endIndex = content.indexOf(endIndexStr);

if (startIndex !== -1 && endIndex !== -1) {
    const before = content.slice(0, startIndex);
    const after = content.slice(endIndex);
    fs.writeFileSync('src/pages/Home.tsx', before + updatedSection + '\n\n        ' + after);
    console.log('Successfully replaced');
} else {
    console.log('Could not find start or end index. start:', startIndex, 'end:', endIndex);
}
