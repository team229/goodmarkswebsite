import React from 'react';
import { useFormSubmit } from '../hooks/useFormSubmit';
import { ArrowRight, Atom, FlaskConical, Calculator, Dna, CheckCircle, Calendar, Users, GraduationCap, MapPin, ChevronDown } from 'lucide-react';
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
      ],
      introTitle: "Physics Coaching Classes at Good Marks Classes",
      introParagraphs: [
        "Physics rarely stays the same subject from Class 9 through Class 12 — it keeps changing shape, from basic mechanics and light in the foundation years to full-blown rotational dynamics, electromagnetism, and modern physics by Class 12. A student who's simply following school lectures often finds the gap between \"class notes\" and \"exam-ready\" widening every year, especially once IIT-JEE or NEET enters the picture. That's the reason Physics Coaching Classes at Good Marks Classes exist as a separate, structured track rather than an extension of school teaching — built specifically around what each grade and exam actually demands.",
        "Below is a full breakdown of the physics batches currently running, so you can see exactly where your child fits before booking a demo class."
      ],
      whyTitle: "Why Good Marks Classes for Physics Coaching",
      whyParagraphs: [
        "Every one of these Physics Coaching Classes batches is run in small groups, which matters more in physics than in most subjects — a single misunderstood concept in mechanics or electrostatics tends to resurface in three or four later chapters if it isn't corrected early. Our faculty specifically teaches within the grade and exam track they're assigned to, rather than rotating across all levels, so a Class 11 JEE batch is genuinely taught differently from a Class 9 foundation batch, not just simplified.",
        "Regular testing runs through every programme — weekly chapter tests, monthly full-syllabus assessments, and previous-year question practice for JEE and NEET batches specifically. Study material is refreshed every academic session to track the current exam pattern, so students in any batch, from foundation to passout, are working with material that reflects what's actually being tested right now.",
        "Both offline and online formats are available across every batch listed above, so families can choose based on what fits their routine rather than being restricted to one format. Batch timings are also kept flexible where possible, since Class 11 and 12 students especially are often juggling school, coaching, and self-study simultaneously.",
        "If you're trying to figure out which of these physics batches suits your child best — Regular versus Spark, or whether a passout programme makes sense compared to repeating the full two-year track — our team can walk you through it based on where your child currently stands, not just their grade on paper."
      ],
      readyToJoinText: "Seats across our physics batches, especially the Class 11 and Class 12 Regular Programmes, tend to fill up early each academic session. Visit Good Marks Classes for a free demo class in the batch that matches your child's grade and target exam before enrolling.",
      faqs: [
        { q: "What's the actual difference between the Regular Programme and the Spark Batch for Class 11?", a: "The Regular Programme is built purely around IIT-JEE or NEET pacing, while the Spark Batch is designed to run closely alongside school syllabus, for students who need both board preparation and competitive exam coaching moving together without one falling behind." },
        { q: "Is the 1-Year Extended Classroom Program only for students repeating a year after Class 12?", a: "Yes, this track is specifically for Class 12 passout students preparing for another attempt at JEE or NEET, and it assumes existing conceptual knowledge rather than starting physics from the basics again." },
        { q: "Can a student switch from online to offline batches partway through the programme?", a: "In most cases yes, depending on batch availability at the time — it's best to discuss this directly with our counselling team before enrolling if flexibility matters to you." },
        { q: "Do the Foundation batches for Class 9 and 10 also prepare students for future JEE or NEET coaching?", a: "Yes, foundation batches are structured to build habits and conceptual clarity that carry directly into Class 11 JEE and NEET batches, rather than treating Class 9 and 10 physics as disconnected from what comes after." },
        { q: "How do I decide which physics batch is right for my child if I'm unsure of their current level?", a: "The best way is to attend a free demo class and have a short discussion with our faculty, who can recommend the right batch based on your child's current understanding rather than just their grade." }
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
      ],
      introTitle: "Chemistry Coaching Classes at Good Marks Classes",
      introParagraphs: [
        "Chemistry doesn't really stay one subject as students move from Class 9 through Class 12 — it kind of splits into three different disciplines along the way. Organic needs reaction logic, inorganic leans on periodic trends and sheer memory, and physical chemistry turns into pure numerical problem-solving once JEE or NEET enters the picture. A student relying only on school lectures often finds these three tracks blurring together in a way that doesn't really hold up once actual exam questions show up. That's basically why Chemistry Coaching Classes at Good Marks Classes exist as their own structured track instead of just repeating school teaching — built around what each grade and exam genuinely requires.",
        "Here's the full list of chemistry batches currently running, so you can see roughly where your child fits before booking a demo class."
      ],
      whyTitle: "Why Good Marks Classes for Chemistry Coaching",
      whyParagraphs: [
        "Every one of these chemistry batches runs in small groups, and that matters a lot in a subject like this, where a shaky grasp of one idea — mole concept, say, or basic bonding — tends to quietly undermine two or three chapters built on top of it later. Our faculty teaches within the specific grade and exam track they're assigned to, rather than rotating across every level, so a Class 11 JEE batch is genuinely taught differently from a Class 9 foundation batch, not just a watered-down version of the same lecture.",
        "Testing runs through every programme fairly consistently — weekly chapter tests, a full-syllabus assessment each month, and previous-year question practice specifically for JEE and NEET batches. Material gets refreshed every academic session to track the current exam pattern, so students in any batch, from foundation right up to passout, are working with content that reflects what's actually being tested now, not something recycled from a few years back.",
        "Both offline and online formats run across every batch listed above, so families can pick whatever fits their routine instead of being stuck with one option. Timings stay flexible where possible too, since Class 11 and 12 students especially are usually juggling school, coaching, and self-study all at the same time.",
        "If you're not sure which of these Chemistry Coaching Classes suits your child best — Regular versus Spark, or whether a passout programme makes more sense than repeating the full two-year track — our team can walk you through it based on where your child actually stands, not just the grade written on a report card."
      ],
      readyToJoinText: "Seats across our chemistry batches, especially the Class 11 and Class 12 Regular Programmes, tend to fill up early each academic session. Visit Good Marks Classes for a free demo class in the batch matching your child's grade and target exam before enrolling.",
      faqs: [
        { q: "How is organic chemistry taught differently across the Regular and Spark batches?", a: "The Regular Programme moves at IIT-JEE or NEET pace right from the start, while the Spark Batch introduces organic reaction logic more gradually, timed to stay in step with school syllabus so students aren't juggling two separate paces." },
        { q: "Is the Class 12 Passout programme suitable for a student who was weak in physical chemistry the first time around?", a: "Yes — the passout programme specifically targets weak areas through focused practice and repeated testing rather than reteaching the entire syllabus from scratch, which makes it a decent fit for closing that kind of gap." },
        { q: "Do the online chemistry batches include the same lab-based or reaction demonstration content as offline batches?", a: "Core teaching content and testing stay consistent across both formats, though some demonstrations naturally suit the offline setting better — our counselling team can walk you through specifics for a given batch." },
        { q: "At what stage should a Class 9 or 10 student start focused chemistry coaching instead of relying on school alone?", a: "It depends on the student honestly, but the Foundation batches generally work best when started early enough to build comfort with core concepts like mole concept and periodic trends before Class 11 chemistry ramps up." },
        { q: "How do I know which chemistry batch matches my child's current preparation level?", a: "The most reliable way is attending a free demo class, where our faculty can actually assess where your child stands and recommend a batch accordingly, rather than going purely by grade." }
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
      ],
      introTitle: "Mathematics Coaching Classes at Good Marks Classes",
      introParagraphs: [
        "Maths punishes shortcuts more than almost any other subject. A student can get away with partial understanding in a lot of areas and still pull a decent score, but in maths one shaky step usually means the whole solution falls apart, no matter how neatly the rest is written. That's especially true once IIT-JEE enters the picture, since JEE questions are built specifically to test whether a concept is genuinely understood or just memorized. Mathematics Coaching Classes at Good Marks Classes exist to build that real understanding layer by layer, starting as early as Class 7 and carrying through to a full JEE-focused programme by Class 12.",
        "Here's the complete list of mathematics batches currently running, so you can see roughly where your child fits before booking a demo class."
      ],
      whyTitle: "Why Good Marks Classes for Mathematics Coaching",
      whyParagraphs: [
        "Every one of these mathematics batches runs in small groups, and in a subject like this, that matters more than almost anywhere else. A single misunderstood step in a Class 7 algebra chapter or a Class 11 calculus concept tends to resurface again and again in later problems if it isn't caught early — small gaps compound fast in maths in a way they don't always in other subjects. Our faculty teaches within the specific grade and track they're assigned to, so a Class 11 JEE batch is genuinely taught differently from a Class 7 Pre-Foundation batch, not just a simplified version of the same explanation handed down a level.",
        "Regular testing runs through every programme — weekly problem sets, a full-syllabus assessment each month, and previous-year JEE question practice for the senior batches specifically. Question sets get refreshed every academic session to track the current exam pattern, so students in any batch, from Pre-Foundation right up to passout, are working with material that reflects what's actually being asked right now.",
        "Both offline and online formats run across every batch listed above, so families can pick whatever fits their routine instead of being stuck with one option. Timings stay flexible where possible too, since Class 11 and 12 students especially are usually managing school, coaching, and self-study all at once.",
        "If you're not sure which of these Mathematics Coaching Classes suits your child best — Regular versus Spark, or whether the passout programme makes more sense than repeating the full two-year track — our team can walk you through it based on where your child actually stands, not just their grade on paper."
      ],
      readyToJoinText: "Seats across our mathematics batches, especially the Class 11 and Class 12 Regular Programmes, tend to fill up early each academic session. Visit Good Marks Classes for a free demo class in the batch matching your child's grade and target before enrolling.",
      faqs: [
        { q: "Why start Pre-Foundation maths as early as Class 7 instead of waiting until Class 9 or 10?", a: "Concepts like algebraic thinking and number sense, once built solidly early, make a real difference in how comfortably a student handles Class 11 maths later — which is basically why the Pre-Foundation track starts at Class 7 rather than waiting." },
        { q: "Does the Class 12 Passout programme reteach the entire maths syllabus from scratch?", a: "No, it assumes a working base already exists from the first attempt and instead focuses on closing specific weak areas, improving speed, and building consistency through repeated testing rather than starting over from Class 11 basics." },
        { q: "My child is comfortable with algebra but struggles with geometry and mensuration. Can that gap be addressed directly?", a: "Yes — since batches stay small, teachers can identify a specific weak area like geometry and give it targeted attention without slowing down the rest of the group's progress." },
        { q: "Is there a difference in the level of numerical practice between the Regular and Spark batches for Class 11?", a: "Yes, the Regular Programme moves at full JEE pace from the outset, while the Spark Batch builds numerical difficulty more gradually, timed to stay aligned with school coursework." },
        { q: "Can a student join the Class 12 Regular Programme mid-year if they're switching from another coaching centre?", a: "It depends on how far the batch has progressed and where the student currently stands — our team evaluates this directly during a free demo class rather than making assumptions beforehand." }
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
      ],
      introTitle: "Biology Coaching Classes at Good Marks Classes",
      introParagraphs: [
        "Biology asks for a different kind of preparation than most science subjects — it rewards precision and consistent recall far more than clever problem-solving tricks. A student can understand a concept reasonably well and still lose marks simply because a diagram wasn't labeled correctly, or because an NCERT line was paraphrased instead of recalled exactly. That gap between \"roughly knowing\" biology and \"scoring well\" in it is where most of the real work happens. Biology Coaching Classes at Good Marks Classes are built around closing that exact gap, whether a student is just starting to build a foundation in Class 9 or preparing for a second serious NEET attempt after Class 12.",
        "Below is the current list of biology batches running at Good Marks Classes, so you can see where your child or ward fits before booking a demo class."
      ],
      whyTitle: "Why Good Marks Classes for Biology Coaching",
      whyParagraphs: [
        "Every one of these Biology Coaching Classes batches is kept small deliberately, and in biology specifically, that matters because confusion in this subject tends to be quiet. A student can nod along through an entire chapter on human physiology and still be unable to correctly label a nephron diagram a week later, and in a large batch, that gap often isn't noticed until a test reveals it. Small class sizes let our faculty catch that disconnect early, whether it's a Class 9 student mixing up basic terminology or a NEET passout student consistently losing marks on assertion-reason questions despite understanding the underlying concept.",
        "Our teachers work within the specific grade and track they're assigned to rather than rotating across every level, so the Foundation batches are genuinely built around comfort and habit-building, while the NEET Passout programme is built around precision and speed under exam conditions — two very different teaching approaches for two very different goals. Study material and question banks are refreshed every academic session to track the current NEET pattern and any NCERT revisions, so students aren't working from content that's quietly fallen out of sync with what's actually being tested.",
        "Regular testing runs through every batch. Foundation students go through consistent chapter tests and diagram practice sessions, while the NEET Passout batch works through weekly biology-focused tests, full-length mock exams, and detailed review of previous years' NEET papers, so recall gaps surface with enough time left to actually fix them.",
        "Both offline and online formats are available for every batch listed here, so families can choose based on what genuinely fits their routine. This matters particularly for the passout batch, where many students are balancing self-study, additional coaching, or even a partial repeat of school alongside NEET preparation.",
        "If you're unsure whether your child needs the Class 9 or Class 10 Foundation track, or whether the NEET Passout programme is the right fit compared to other options, our team can walk you through it directly based on where they currently stand rather than assumptions based on age or grade alone."
      ],
      readyToJoinText: "Seats in our biology batches, especially the NEET Passout programme, tend to fill up early each academic session, since class sizes are kept intentionally small. Visit Good Marks Classes for a free demo class in the batch that matches your current level and goals before enrolling.",
      faqs: [
        { q: "My child is a NEET repeater and already scored reasonably well in biology last year. Is the Passout programme still useful?", a: "Yes, even students with a decent score often have specific, fixable gaps — a chapter that's consistently weak, or a pattern of careless errors — and the Passout programme is built to identify and correct exactly that rather than starting from zero again." },
        { q: "Why is there a Foundation batch for Class 9 biology specifically, rather than waiting until Class 11?", a: "Concepts introduced properly at Class 9, especially around cell biology and basic life processes, tend to make Class 11 biology far less overwhelming later, since students aren't encountering the underlying ideas for the first time under exam pressure." },
        { q: "Does the Class 10 Foundation batch prepare students for board exams, NEET readiness, or both?", a: "Both, in a sense — board exam performance is the immediate focus, but the way concepts and diagram practice are taught is deliberately aligned with habits that carry forward into NEET preparation later." },
        { q: "Is the online format for the NEET Passout biology batch as effective as attending offline?", a: "Core teaching content, testing, and doubt-clearing stay consistent across both formats, so the choice mostly comes down to what fits a student's routine and discipline for self-study at home." },
        { q: "How is progress tracked for a student in the NEET Passout batch over the year?", a: "Through regular chapter-wise tests, full-length mock exams, and detailed performance reviews that highlight specific weak areas, so both the student and our faculty can see measurable movement rather than relying on a general impression of progress." }
      ]
    }
  };

  const config = subjectConfigs[subjectId || ''] || subjectConfigs['physics'];
  const Icon = config.icon;

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: (config.faqs || []).map((faq: any) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a
      }
    }))
  };


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

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="max-w-container-max mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-2 space-y-12">
            {/* Intro Content */}
            <section className="bg-offwhite rounded-3xl p-8 border border-slate-200 shadow-sm">
              <h2 className="text-3xl font-black text-secondary-900 mb-6">{config.introTitle}</h2>
              <div className="space-y-4">
                {config.introParagraphs.map((para: string, index: number) => (
                  <p key={index} className="text-secondary-700 font-medium leading-relaxed">{para}</p>
                ))}
              </div>
            </section>

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

            {/* Why Good Marks Classes */}
            <section className="bg-offwhite rounded-3xl p-8 border border-slate-200 shadow-sm">
              <h2 className="text-3xl font-black text-secondary-900 mb-6">{config.whyTitle}</h2>
              <div className="space-y-4">
                {config.whyParagraphs.map((para: string, index: number) => (
                  <p key={index} className="text-secondary-700 font-medium leading-relaxed">{para}</p>
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

            {/* Ready to Join */}
            <section className={`rounded-3xl p-8 bg-gradient-to-br ${config.gradient} text-white shadow-lg`}>
              <h2 className="text-3xl font-black mb-4">Ready to Join?</h2>
              <p className="text-white/90 font-medium leading-relaxed mb-6">{config.readyToJoinText}</p>
              <a
                href="/home-tuition"
                className="inline-flex items-center gap-2 bg-white text-secondary-900 font-bold px-8 py-3 rounded-xl shadow-md transition-transform hover:-translate-y-0.5"
              >
                Book a Free Demo Class <ArrowRight className="w-4 h-4" />
              </a>
            </section>

            {/* FAQs */}
            <section className="bg-offwhite rounded-3xl p-8 border border-slate-200 shadow-sm">
              <h2 className="text-3xl font-black text-secondary-900 mb-6">{config.name} Classes FAQs</h2>
              <div className="flex flex-col gap-4">
                {config.faqs.map((faq: any, idx: number) => (
                  <details key={idx} className="group bg-white border border-slate-200 rounded-2xl open:shadow-md transition-all duration-300 overflow-hidden">
                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-bold text-secondary-800 text-lg select-none">
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
