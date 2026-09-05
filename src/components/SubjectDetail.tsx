import React, { useState } from 'react';
import { useFormSubmit } from '../hooks/useFormSubmit';
import { ArrowRight, Atom, FlaskConical, Calculator, Dna, CheckCircle, Calendar, Users, GraduationCap, MapPin, ChevronDown } from 'lucide-react';
import { coursesData } from '../data/courses';

const subjectContent: Record<string, {
  name: string;
  shortDesc: string;
  color: string;
  icon: any;
  gradient: string;
  textColor: string;
  bgLight: string;
  exams: string;
  overview: string;
  batches: { title: string; desc: string }[];
  whyUs: string;
  faqs: { q: string; a: string }[];
}> = {
  physics: {
    name: "Physics",
    shortDesc: "Conquer complex concepts and numericals with expert-led sessions.",
    color: "amber",
    icon: Atom,
    gradient: "from-amber-400 to-orange-500",
    textColor: "text-orange-500",
    bgLight: "bg-orange-50",
    exams: "CBSE • IIT JEE • NEET",
    overview: `Physics rarely stays the same subject from Class 9 through Class 12 — it keeps changing shape, from basic mechanics and light in the foundation years to full-blown rotational dynamics, electromagnetism, and modern physics by Class 12. A student who's simply following school lectures often finds the gap between "class notes" and "exam-ready" widening every year, especially once IIT-JEE or NEET enters the picture. That's the reason Physics Coaching Classes at Good Marks Classes exist as a separate, structured track rather than an extension of school teaching — built specifically around what each grade and exam actually demands.`,
    batches: [
      { title: "IIT-JEE – Class 11th – 2-Year Integrated Regular Programme (Offline / Online)", desc: "This is our core two-year track for students starting Class 11 with IIT-JEE as the target. Physics is built up from fundamentals — kinematics, laws of motion, work-energy-power — with numerical practice paced to match how JEE questions are actually structured, not just how school exams test the same chapters." },
      { title: "IIT-JEE – Class 11th – 2-Year Integrated School Programme (Spark Batch) (Offline / Online)", desc: "The Spark batch runs alongside school syllabus more closely, for students who want JEE-level physics preparation without falling behind on board coursework. It's a slightly gentler pace than the Regular Programme, aimed at students who need both tracks moving together." },
      { title: "NEET – Class 11th – 2-Year Integrated Regular Programme (Offline / Online)", desc: "Built specifically around NEET's physics section, this two-year programme keeps numerical practice tied closely to NCERT concepts, since that's where the majority of NEET physics questions originate, alongside application-based problem solving." },
      { title: "NEET – Class 11th – 2-Year Integrated School Programme (Spark Batch) (Offline / Online)", desc: "A parallel track to the Spark batch on the JEE side, this programme is designed for NEET aspirants who also need to keep pace with school physics and board preparation without treating them as separate efforts." },
      { title: "IIT-JEE – Class 12th – 1 Year Regular Programme (Offline / Online)", desc: "For students entering Class 12 with a JEE target, this one-year programme compresses revision and advanced problem-solving into a focused final stretch, with heavy emphasis on speed, accuracy, and previous-year JEE physics papers." },
      { title: "NEET – Class 12th – 1 Year Regular Programme (Offline / Online)", desc: "This mirrors the JEE Class 12 track but built around NEET's physics demands — application-heavy questions, NCERT-based recall, and consistent full-length test practice through the year." },
      { title: "IIT-JEE – Class 12th Passout – 1-Year Extended Classroom Program for IIT-JEE (Offline / Online)", desc: "Designed for students repeating a year specifically to improve their JEE score, this programme assumes a base level of physics knowledge already exists and focuses instead on closing specific gaps, sharpening problem-solving speed, and building exam temperament through repeated full-syllabus testing." },
      { title: "NEET – Class 12th Passout – 1-Year Extended Classroom Program for NEET-UG (Offline / Online)", desc: "Similarly built for NEET droppers, this programme works on precision and consistency rather than reteaching physics from scratch, since most passout students already have conceptual grounding and need focused, high-intensity revision instead." },
      { title: "Foundation – Class 9th – 2 Year Regular Classroom Programme (Offline / Online)", desc: "Physics foundation at Class 9 focuses on building comfort with the subject early — light, sound, motion, and force — taught in a way that sets up Class 11 physics rather than treating Class 9 as an isolated syllabus to get through." },
      { title: "Foundation – Class 10th – 1 Year Regular Classroom Programme (Offline / Online)", desc: "This one-year foundation track strengthens Class 10 physics concepts while gradually introducing the kind of problem-solving approach students will need once they reach Class 11 and 12, easing that transition instead of leaving it to happen all at once." }
    ],
    whyUs: `Every one of these Physics Coaching Classes batches is run in small groups, which matters more in physics than in most subjects — a single misunderstood concept in mechanics or electrostatics tends to resurface in three or four later chapters if it isn't corrected early. Our faculty specifically teaches within the grade and exam track they're assigned to, rather than rotating across all levels, so a Class 11 JEE batch is genuinely taught differently from a Class 9 foundation batch, not just simplified.

Regular testing runs through every programme — weekly chapter tests, monthly full-syllabus assessments, and previous-year question practice for JEE and NEET batches specifically. Study material is refreshed every academic session to track the current exam pattern, so students in any batch, from foundation to passout, are working with material that reflects what's actually being tested right now.

Both offline and online formats are available across every batch listed above, so families can choose based on what fits their routine rather than being restricted to one format. Batch timings are also kept flexible where possible, since Class 11 and 12 students especially are often juggling school, coaching, and self-study simultaneously.

If you're trying to figure out which of these physics batches suits your child best — Regular versus Spark, or whether a passout programme makes sense compared to repeating the full two-year track — our team can walk you through it based on where your child currently stands, not just their grade on paper.`,
    readyToJoin: `Seats across our physics batches, especially the Class 11 and Class 12 Regular Programmes, tend to fill up early each academic session. Visit Good Marks Classes for a free demo class in the batch that matches your child's grade and target exam before enrolling.`,
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
    overview: `Chemistry doesn't really stay one subject as students move from Class 9 through Class 12 — it kind of splits into three different disciplines along the way. Organic needs reaction logic, inorganic leans on periodic trends and sheer memory, and physical chemistry turns into pure numerical problem-solving once JEE or NEET enters the picture. A student relying only on school lectures often finds these three tracks blurring together in a way that doesn't really hold up once actual exam questions show up. That's basically why Chemistry Coaching Classes at Good Marks Classes exist as their own structured track instead of just repeating school teaching — built around what each grade and exam genuinely requires.`,
    batches: [
      { title: "IIT-JEE – Class 11th – 2-Year Integrated Regular Programme (Offline / Online)", desc: "Our core two-year track for students starting Class 11 with IIT-JEE as the goal. Physical chemistry builds up numerically from mole concept onward, while organic and inorganic get introduced in a way meant to scale toward JEE difficulty over two years, not just stay at board level." },
      { title: "IIT-JEE – Class 11th – 2-Year Integrated School Programme (Spark Batch) (Offline / Online)", desc: "The Spark batch runs closer alongside the school syllabus, for students who want JEE-level chemistry prep without falling behind on regular board coursework. It's a bit gentler in pace than the Regular Programme, meant for students juggling both tracks at once." },
      { title: "NEET – Class 11th – 2-Year Integrated Regular Programme (Offline / Online)", desc: "Built around NEET's chemistry section specifically, this one keeps a tight focus on NCERT-based recall for organic and inorganic, since that's where most NEET chemistry questions come from, along with steady numerical practice in physical chemistry." },
      { title: "NEET – Class 11th – 2-Year Integrated School Programme (Spark Batch) (Offline / Online)", desc: "A parallel to the JEE-side Spark batch, meant for NEET aspirants who also need to stay in step with school chemistry and board prep, rather than treating the two as competing priorities." },
      { title: "IIT-JEE – Class 12th – 1 Year Regular Programme (Offline / Online)", desc: "For students entering Class 12 with JEE as the target, this one-year track compresses revision and advanced problem-solving into a focused stretch, with heavy emphasis on organic mechanism-based questions and physical chemistry speed." },
      { title: "NEET – Class 12th – 1 Year Regular Programme (Offline / Online)", desc: "Mirrors the JEE Class 12 track but built around what NEET actually demands — precise NCERT recall, application-based organic and inorganic questions, and steady full-length test practice through the year." },
      { title: "IIT-JEE – Class 12th Passout – 1-Year Extended Classroom Program for IIT-JEE (Offline / Online)", desc: "Meant for students repeating a year specifically to push up their JEE score. This one assumes a working base of chemistry already exists and instead focuses on closing specific gaps, sharpening physical chemistry speed, and building consistency through repeated full-syllabus testing." },
      { title: "NEET – Class 12th Passout – 1-Year Extended Classroom Program for NEET-UG (Offline / Online)", desc: "Built for NEET droppers, prioritizing precision and recall accuracy over reteaching chemistry from scratch — most passout students already have the conceptual grounding and need focused, high-intensity revision more than fresh teaching." },
      { title: "Foundation – Class 9th – 2 Year Regular Classroom Programme (Offline / Online)", desc: "Chemistry foundation at Class 9 focuses on building comfort with core ideas early — atoms, molecules, chemical reactions — taught in a way that quietly sets up Class 11 chemistry rather than treating Class 9 as its own isolated syllabus." },
      { title: "Foundation – Class 10th – 1 Year Regular Classroom Programme (Offline / Online)", desc: "This one-year track strengthens Class 10 chemistry concepts while slowly introducing the structured problem-solving students will need by Class 11 and 12, easing that jump instead of leaving it to happen all at once." }
    ],
    whyUs: `Every one of these chemistry batches runs in small groups, and that matters a lot in a subject like this, where a shaky grasp of one idea — mole concept, say, or basic bonding — tends to quietly undermine two or three chapters built on top of it later. Our faculty teaches within the specific grade and exam track they're assigned to, rather than rotating across every level, so a Class 11 JEE batch is genuinely taught differently from a Class 9 foundation batch, not just a watered-down version of the same lecture.

Testing runs through every programme fairly consistently — weekly chapter tests, a full-syllabus assessment each month, and previous-year question practice specifically for JEE and NEET batches. Material gets refreshed every academic session to track the current exam pattern, so students in any batch, from foundation right up to passout, are working with content that reflects what's actually being tested now, not something recycled from a few years back.

Both offline and online formats run across every batch listed above, so families can pick whatever fits their routine instead of being stuck with one option. Timings stay flexible where possible too, since Class 11 and 12 students especially are usually juggling school, coaching, and self-study all at the same time.

If you're not sure which of these Chemistry Coaching Classes suits your child best — Regular versus Spark, or whether a passout programme makes more sense than repeating the full two-year track — our team can walk you through it based on where your child actually stands, not just the grade written on a report card.`,
    readyToJoin: `Seats across our chemistry batches, especially the Class 11 and Class 12 Regular Programmes, tend to fill up early each academic session. Visit Good Marks Classes for a free demo class in the batch matching your child's grade and target exam before enrolling.`,
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
    overview: `Maths punishes shortcuts more than almost any other subject. A student can get away with partial understanding in a lot of areas and still pull a decent score, but in maths one shaky step usually means the whole solution falls apart, no matter how neatly the rest is written. That's especially true once IIT-JEE enters the picture, since JEE questions are built specifically to test whether a concept is genuinely understood or just memorized. Mathematics Coaching Classes at Good Marks Classes exist to build that real understanding layer by layer, starting as early as Class 7 and carrying through to a full JEE-focused programme by Class 12.`,
    batches: [
      { title: "IIT-JEE – Class 11th – 2-Year Integrated Regular Programme (Offline / Online)", desc: "Our core two-year track for students starting Class 11 with IIT-JEE as the target. Algebra, coordinate geometry, trigonometry, and the early parts of calculus get built up methodically, with numerical practice paced to match how JEE questions are actually structured, not just how school exams test the same chapters." },
      { title: "IIT-JEE – Class 11th – 2-Year Integrated School Programme (Spark Batch) (Offline / Online)", desc: "The Spark batch runs closer alongside the school syllabus, meant for students who want JEE-level maths preparation without falling behind on regular board coursework. It moves at a slightly gentler pace than the Regular Programme, for students managing both tracks at once." },
      { title: "IIT-JEE – Class 12th – 1 Year Regular Programme (Offline / Online)", desc: "For students entering Class 12 with JEE as the target, this one-year programme compresses revision and advanced problem-solving into a focused final stretch, with heavy emphasis on calculus, vectors, 3D geometry, and probability — chapters that carry real weight in the JEE paper." },
      { title: "IIT-JEE – Class 12th Passout – 1-Year Extended Classroom Program for IIT-JEE (Offline / Online)", desc: "Built for students repeating a year specifically to push up their JEE score. This one assumes a working base of maths already exists and instead focuses on closing specific gaps, sharpening problem-solving speed, and building exam temperament through repeated full-syllabus testing rather than reteaching from scratch." },
      { title: "Pre-Foundation – Class 7th – 2 Year Classroom Programme (Offline / Online)", desc: "Pre-Foundation maths at Class 7 focuses on building genuine number sense and comfort with algebraic thinking early, instead of rushing through the syllabus. The goal here is a student who actually understands ratios, basic algebra, and geometry, not one who's just memorized enough to pass the next test." },
      { title: "Pre-Foundation – Class 8th – 1 Year Classroom Programme (Offline / Online)", desc: "This one-year track strengthens Class 8 mathematics while gradually introducing the kind of structured problem-solving students will eventually need for Class 11 and JEE-level maths, easing that transition well before it becomes urgent." }
    ],
    whyUs: `Every one of these mathematics batches runs in small groups, and in a subject like this, that matters more than almost anywhere else. A single misunderstood step in a Class 7 algebra chapter or a Class 11 calculus concept tends to resurface again and again in later problems if it isn't caught early — small gaps compound fast in maths in a way they don't always in other subjects. Our faculty teaches within the specific grade and track they're assigned to, so a Class 11 JEE batch is genuinely taught differently from a Class 7 Pre-Foundation batch, not just a simplified version of the same explanation handed down a level.

Regular testing runs through every programme — weekly problem sets, a full-syllabus assessment each month, and previous-year JEE question practice for the senior batches specifically. Question sets get refreshed every academic session to track the current exam pattern, so students in any batch, from Pre-Foundation right up to passout, are working with material that reflects what's actually being asked right now.

Both offline and online formats run across every batch listed above, so families can pick whatever fits their routine instead of being stuck with one option. Timings stay flexible where possible too, since Class 11 and 12 students especially are usually managing school, coaching, and self-study all at once.

If you're not sure which of these Mathematics Coaching Classes suits your child best — Regular versus Spark, or whether the passout programme makes more sense than repeating the full two-year track — our team can walk you through it based on where your child actually stands, not just their grade on paper.`,
    readyToJoin: `Seats across our mathematics batches, especially the Class 11 and Class 12 Regular Programmes, tend to fill up early each academic session. Visit Good Marks Classes for a free demo class in the batch matching your child's grade and target before enrolling.`,
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
    overview: `Biology asks for a different kind of preparation than most science subjects — it rewards precision and consistent recall far more than clever problem-solving tricks. A student can understand a concept reasonably well and still lose marks simply because a diagram wasn't labeled correctly, or because an NCERT line was paraphrased instead of recalled exactly. That gap between "roughly knowing" biology and "scoring well" in it is where most of the real work happens. Biology Coaching Classes at Good Marks Classes are built around closing that exact gap, whether a student is just starting to build a foundation in Class 9 or preparing for a second serious NEET attempt after Class 12.`,
    batches: [
      { title: "NEET – Class 12th Passout – 1-Year Extended Classroom Program for NEET-UG (Offline / Online)", desc: "This programme is built specifically for students repeating a year to strengthen their NEET score, particularly in biology, which typically carries the largest weightage in the exam. Rather than reteaching the entire syllabus from Class 11 and 12 again, the focus stays on precision — exact NCERT recall, diagram accuracy, and consistent full-length test practice designed to catch the small errors that quietly cost marks. Most passout students already have a reasonable conceptual base, so the year is spent tightening that base rather than rebuilding it, with regular assertion-reason and matching-type practice that mirrors how NEET actually tests biology." },
      { title: "Foundation – Class 9th – 2 Year Regular Classroom Programme (Offline / Online)", desc: "Biology foundation at Class 9 focuses on building comfort with the subject early, well before board pressure or NEET preparation enters the picture. Chapters on cell structure, tissues, and basic life processes are taught with an emphasis on understanding rather than memorization, since biology concepts introduced properly at this stage tend to make Class 11 and 12 biology considerably easier to handle later. Diagram practice starts here too, treated as a skill in itself rather than something picked up incidentally while reading." },
      { title: "Foundation – Class 10th – 1 Year Regular Classroom Programme (Offline / Online)", desc: "This one-year track strengthens Class 10 biology concepts while gradually introducing the kind of precise, NCERT-aligned recall that becomes essential once a student reaches Class 11 and, eventually, NEET preparation. Topics like heredity, reproduction, and basic ecology get covered with attention to exact terminology and labeling, since sloppy habits picked up at this stage tend to resurface later as recurring mistakes in board and competitive exams." }
    ],
    whyUs: `Every one of these Biology Coaching Classes batches is kept small deliberately, and in biology specifically, that matters because confusion in this subject tends to be quiet. A student can nod along through an entire chapter on human physiology and still be unable to correctly label a nephron diagram a week later, and in a large batch, that gap often isn't noticed until a test reveals it. Small class sizes let our faculty catch that disconnect early, whether it's a Class 9 student mixing up basic terminology or a NEET passout student consistently losing marks on assertion-reason questions despite understanding the underlying concept.

Our teachers work within the specific grade and track they're assigned to rather than rotating across every level, so the Foundation batches are genuinely built around comfort and habit-building, while the NEET Passout programme is built around precision and speed under exam conditions — two very different teaching approaches for two very different goals. Study material and question banks are refreshed every academic session to track the current NEET pattern and any NCERT revisions, so students aren't working from content that's quietly fallen out of sync with what's actually being tested.

Regular testing runs through every batch. Foundation students go through consistent chapter tests and diagram practice sessions, while the NEET Passout batch works through weekly biology-focused tests, full-length mock exams, and detailed review of previous years' NEET papers, so recall gaps surface with enough time left to actually fix them.

Both offline and online formats are available for every batch listed here, so families can choose based on what genuinely fits their routine. This matters particularly for the passout batch, where many students are balancing self-study, additional coaching, or even a partial repeat of school alongside NEET preparation.

If you're unsure whether your child needs the Class 9 or Class 10 Foundation track, or whether the NEET Passout programme is the right fit compared to other options, our team can walk you through it directly based on where they currently stand rather than assumptions based on age or grade alone.`,
    readyToJoin: `Seats in our biology batches, especially the NEET Passout programme, tend to fill up early each academic session, since class sizes are kept intentionally small. Visit Good Marks Classes for a free demo class in the batch that matches your current level and goals before enrolling.`,
    faqs: [
      { q: "My child is a NEET repeater and already scored reasonably well in biology last year. Is the Passout programme still useful?", a: "Yes, even students with a decent score often have specific, fixable gaps — a chapter that's consistently weak, or a pattern of careless errors — and the Passout programme is built to identify and correct exactly that rather than starting from zero again." },
      { q: "Why is there a Foundation batch for Class 9 biology specifically, rather than waiting until Class 11?", a: "Concepts introduced properly at Class 9, especially around cell biology and basic life processes, tend to make Class 11 biology far less overwhelming later, since students aren't encountering the underlying ideas for the first time under exam pressure." },
      { q: "Does the Class 10 Foundation batch prepare students for board exams, NEET readiness, or both?", a: "Both, in a sense — board exam performance is the immediate focus, but the way concepts and diagram practice are taught is deliberately aligned with habits that carry forward into NEET preparation later." },
      { q: "Is the online format for the NEET Passout biology batch as effective as attending offline?", a: "Core teaching content, testing, and doubt-clearing stay consistent across both formats, so the choice mostly comes down to what fits a student's routine and discipline for self-study at home." },
      { q: "How is progress tracked for a student in the NEET Passout batch over the year?", a: "Through regular chapter-wise tests, full-length mock exams, and detailed performance reviews that highlight specific weak areas, so both the student and our faculty can see measurable movement rather than relying on a general impression of progress." }
    ]
  }
};

export default function SubjectDetail({ subjectId }: { subjectId?: string }) {
  const { submitForm, isSubmitting } = useFormSubmit('SubjectDetail');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    await submitForm(data);
  };

  const config = subjectContent[subjectId || ''] || subjectContent['physics'];
  const Icon = config.icon;

  const subjectHeadings: Record<string, string> = {
    biology: 'Biology Coaching Classes at Good Marks Classes',
    chemistry: 'Chemistry Coaching Classes at Good Marks Classes',
    mathematics: 'Mathematics Coaching Classes at Good Marks Classes',
    physics: 'Physics Coaching Classes at Good Marks Classes'
  };

  const subjectHeading = subjectHeadings[subjectId || ''] || `${config.name} Coaching Classes`;

  const allCourses = Object.values(coursesData).flat();
  const relatedCourses = allCourses.filter((course: any) =>
    course.details && course.details.subjects && course.details.subjects.toLowerCase().includes(config.name.toLowerCase())
  );

  const subjectLinks: { kw: string; href: string }[] = (() => {
    const base: Record<string, { kw: string; href: string }[]> = {
      physics: [
        { kw: 'IIT JEE coaching in Gurgaon', href: '/courses/iit' },
        { kw: '2 year IIT JEE program Gurgaon', href: '/course/2-year-integrated-regular' },
        { kw: 'IIT JEE foundation course Gurgaon', href: '/courses/foundation' },
      ],
      chemistry: [
        { kw: 'IIT JEE coaching in Gurgaon', href: '/courses/iit' },
        { kw: '2 year IIT JEE program Gurgaon', href: '/course/2-year-integrated-regular' },
        { kw: 'NEET coaching in Gurgaon', href: '/courses/neet' },
      ],
      mathematics: [
        { kw: 'IIT JEE coaching in Gurgaon', href: '/courses/iit' },
        { kw: '2 year IIT JEE program Gurgaon', href: '/course/2-year-integrated-regular' },
        { kw: 'IIT JEE foundation course Gurgaon', href: '/courses/foundation' },
      ],
      biology: [
        { kw: 'NEET coaching in Gurgaon', href: '/courses/neet' },
        { kw: '1 year NEET coaching Gurgaon', href: '/course/1-year-regular-12-neet' },
        { kw: 'NEET foundation course Gurgaon', href: '/courses/foundation' },
      ],
    };
    return base[subjectId || ''] || [];
  })();

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
            {/* Overview */}
            <section className="bg-offwhite rounded-3xl p-8 border border-slate-200 shadow-sm">
              <p className="text-secondary-700 leading-relaxed text-lg">{config.overview}</p>
            </section>

            {/* Explore Related Programmes */}
            {subjectLinks.length > 0 && (
              <section className="bg-offwhite rounded-3xl p-8 border border-slate-200 shadow-sm">
                <h2 className="text-2xl font-black text-secondary-900 mb-2">Explore Related Programmes</h2>
                <p className="text-secondary-600 text-sm mb-4">Students preparing {config.name} also explore these coaching programmes at Good Marks Classes:</p>
                <div className="flex flex-wrap gap-3">
                  {subjectLinks.map((link) => (
                    <a key={link.href + link.kw} href={link.href} className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl ${config.bgLight} ${config.textColor} border border-slate-200 text-sm font-bold hover:opacity-80 transition-opacity`}>
                      {link.kw}
                    </a>
                  ))}
                </div>
              </section>
            )}

            {/* Available Batches */}
            <section>
              <h2 className="text-3xl font-black text-secondary-900 mb-6">Available {config.name} Batches</h2>
              <div className="space-y-4">
                {config.batches.map((batch, index) => (
                  <div key={index} className="bg-offwhite border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-lg font-bold text-secondary-900 mb-2">{batch.title}</h3>
                    <p className="text-secondary-600 leading-relaxed">{batch.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Why Good Marks Classes */}
            <section className="bg-offwhite rounded-3xl p-8 border border-slate-200 shadow-sm">
              <h2 className="text-3xl font-black text-secondary-900 mb-6">Why Good Marks Classes for {config.name} Coaching</h2>
              <div className="space-y-4">
                {config.whyUs.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="text-secondary-700 leading-relaxed">{paragraph}</p>
                ))}
              </div>
            </section>

            {/* Ready to Join */}
            <section className={`bg-gradient-to-br ${config.gradient} rounded-3xl p-8 text-white`}>
              <h2 className="text-3xl font-black mb-4">Ready to Join?</h2>
              <p className="text-white/90 leading-relaxed text-lg">
                {config.readyToJoin}
              </p>
            </section>

            {/* FAQs */}
            <section>
              <h2 className="text-3xl font-black text-secondary-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-3">
                {config.faqs.map((faq, index) => (
                  <div key={index} className="bg-offwhite border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                    <button
                      className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    >
                      <span className="font-bold text-secondary-900">{faq.q}</span>
                      <ChevronDown className={`w-5 h-5 text-secondary-400 shrink-0 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                    </button>
                    {openFaq === index && (
                      <div className="px-6 pb-4">
                        <p className="text-secondary-600 leading-relaxed">{faq.a}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Related Courses */}
            {relatedCourses.length > 0 && (
              <section>
                <h2 className="text-3xl font-black text-secondary-900 mb-6">All {config.name} Batches</h2>
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
                </div>
              </section>
            )}
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
                    <option value="7">Class 7</option>
                    <option value="8">Class 8</option>
                    <option value="9">Class 9</option>
                    <option value="10">Class 10</option>
                    <option value="11">Class 11</option>
                    <option value="12">Class 12</option>
                    <option value="dropper">Dropper</option>
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
