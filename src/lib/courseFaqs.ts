/**
 * Single source of truth for course FAQs.
 * Used twice: visibly in CourseDetail.tsx and as FAQPage schema in
 * course/[id].astro — so schema and page content can never drift apart.
 */
export interface CourseFaq {
  q: string;
  a: string;
}

export function getFaqs(course: any): CourseFaq[] {
  const isJee = course.tag === 'IIT-JEE';
  const isNeet = course.tag === 'NEET';
  const isCbse = course.stream === 'cbse';

  const common: CourseFaq[] = [
    { q: 'What is the class schedule and frequency?', a: 'Classes are held as per the schedule mentioned above. Each session is designed to maximise learning while allowing time for self-study and revision.' },
    { q: 'Are there any demo classes available?', a: 'Yes, we offer free demo classes. Click "Book a Free Demo" above or contact us to schedule one at your convenience.' },
    { q: 'How are doubts handled?', a: 'We have a dedicated doubt clearing cell. Students can get their doubts resolved the same day through scheduled doubt sessions after each topic.' },
    { q: 'What study material is provided?', a: 'Research-oriented, custom-curated study material based on the NCERT / CBSE curriculum, updated regularly to align with the latest board and exam patterns.' },
  ];

  if (isCbse) {
    return [
      ...common,
      { q: 'When do classes for Class 8 run?', a: 'Class 8 CBSE tuition runs on a weekend-only timetable — Saturday evening and Sunday morning-to-afternoon — so it never clashes with weekday school and activities.' },
      { q: 'Do the Class 9 & 10 batches run on weekdays too?', a: 'Yes. Class 9 and 10 CBSE tuition runs on weekdays as well as weekends, giving more classroom contact across the week while staying manageable alongside school.' },
      { q: 'What subjects are covered for Class 11 & 12?', a: 'For Class 11 and 12, the programme focuses on Physics, Chemistry, Mathematics and Biology (PCMB), taught by subject-specialist faculty with board-focused preparation.' },
      { q: 'How is the class size for CBSE tuitions?', a: 'We maintain small batches so every student gets individual attention, teacher tracking and regular feedback.' },
    ];
  }

  if (isJee) {
    return [
      ...common,
      { q: 'How does this programme prepare me for JEE Main & Advanced?', a: 'The curriculum covers extensive JEE-specific topics, with All India Test Series (AITS), Special Rank Improvement Program (SRIP), and NCERT Exemplar focusing on JEE (Main & Advanced), BITSAT & KVPY patterns.' },
      { q: `What is the duration of the ${String(course.title || '').toLowerCase()}?`, a: `The total programme hours are ${course.details?.hours || 'specified in the schedule above'}, spread across the academic session with regular tests and discussions.` },
    ];
  }

  if (isNeet) {
    return [
      ...common,
      { q: 'Does this programme cover both Class 11/12 Board and NEET syllabus?', a: 'Yes, the programme is designed to simultaneously prepare students for their CBSE Board exams and NEET/AIIMS. We prioritise CBSE syllabus first, then build competitive exam readiness.' },
      { q: 'How are Biology practicals handled?', a: 'Practical sessions are integrated into the curriculum. Our lab facilities and experienced faculty ensure hands-on learning alongside theory.' },
    ];
  }

  return common;
}
