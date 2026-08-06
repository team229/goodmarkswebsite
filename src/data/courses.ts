export const streams = [
  { id: 'iit', label: 'IIT-JEE' },
  { id: 'neet', label: 'NEET-UG' },
  { id: 'cbse', label: 'CBSE Tuitions' }
];

export const courseTabs: Record<string, {id: string, label: string}[]> = {
  iit: [
    { id: 'class11', label: 'Class 11th' },
    { id: 'class12', label: 'Class 12th' },
    { id: 'dropper', label: 'Repeaters Batch' },
  ],
  neet: [
    { id: 'class11', label: 'Class 11th' },
    { id: 'class12', label: 'Class 12th' },
    { id: 'dropper', label: 'Repeaters Batch' },
  ],
  cbse: [
    { id: 'class8', label: 'Class 8th' },
    { id: 'class9', label: 'Class 9th' },
    { id: 'class10', label: 'Class 10th' },
    { id: 'class11', label: 'Class 11th' },
    { id: 'class12', label: 'Class 12th' }
  ]
};

export const coursesData: Record<string, any[]> = {
  class11: [
    {
      id: '2-year-integrated-regular',
      stream: 'iit',
      title: '2-Year Integrated Regular Programme',
      subtitle: '(Main + Advanced) + BITSAT + KVPY',
      classLabel: '11th',
      target: '2028',
      tag: 'IIT-JEE',
      imageGrad: 'from-orange-500 to-red-600',
      imageText: 'REGULAR',
      details: {
         description: "This programme focuses on conceptual clarity, besides strengthening the fundamentals of Physics, Chemistry & Mathematics, aiming to enable the students to crack JEE (Main & Advanced), BITSAT & KVPY.",
         schedule: "Weekdays: 3-days in a week (Total 6 classes/week)\nTuesday, Wednesday & Friday.\n\nWeekends: 2-days in a week (Total 6 classes/week)\nSaturday & Sunday\n(Thursday is meant for doubts, discussions & back-up classes)",
         hours: "900 hours (Including 'Tests & Discussions').\n(450 hours in class XI + 450 hours in class XII)",
         idealFor: "For Class X passed students, who wish to outperform in Class XI & Class XII Board as well as in JEE (Main & Advanced), BITSAT and other Engineering Entrance Exams.",
         subjects: "Physics, Chemistry and Mathematics.",
         features: [
           "Extensive coverage of topics meant for JEE (Main & Advanced) and BITSAT",
           "Comprehensive and updated study material based on NCERT curriculum",
           "'Special Doubt Clearing Classes' (SDCC) after the completion of each topic",
           "Special Rank Improvement Program (SRIP), 2 months before JEE (Main & Advanced)",
           "All India Test Series (AITS) based on JEE (Main & Advanced), BITSAT Patterns",
           "Students' Mentorship Programme (SMP) under the guidance of dedicated faculty members",
           "Every year IIT-Delhi campus visit to see the innovation in science at 'Open House'",
           "NCERT Exemplar focusing on JEE (Main & Advanced), BITSAT & KVPY"
         ]
      }
    },
    {
      id: '2-year-integrated-spark',
      stream: 'iit',
      title: '2-Year Integrated School Programme (Spark Batch)',
      subtitle: 'School Integrated Programme',
      classLabel: '11th',
      target: '2028',
      tag: 'IIT-JEE',
      imageGrad: 'from-pink-500 to-rose-600',
      imageText: 'SPARK',
      details: {
         description: "This programme focuses on 'School Integrated Programme' that aims to prepare them simultaneously for Class XI & XII Board as well as JEE (Main & Advanced), BITSAT & KVPY.",
         schedule: "5-day in a week (3 classes /day)\nTuesday to Saturday.",
         hours: "1500 hours (Including 'Tests & Discussions').\n(750 hours in class XI + 750 hours in class XII)",
         idealFor: "For Class X passed students, who wish to outperform in Class XI & Class XII Board as well as in JEE (Main & Advanced), BITSAT & KVPY.",
         subjects: "Physics, Chemistry, Mathematics and English of Class XI & XII Board.",
         features: [
           "Coverage of Class XI & XII Board as well as JEE (Main & Advanced) syllabi",
           "English Classes for XI & XII along with Personality Development Programme (PDP)",
           "'Special Doubt Clearing Classes' (SDCC) after the completion of each topic",
           "Comprehensive and updated study material based on NCERT curriculum",
           "Special CBSE Reckoner Series based on the pattern of Class XI & XII Board",
           "All India Test Series (AITS) based on JEE (Main & Advanced), BITSAT Patterns",
           "Students' Mentorship Programme (SMP) under the guidance of dedicated faculty members",
           "Every year IIT-Delhi campus visit to see the innovation in science at 'Open House'"
         ]
      }
    },
    {
      id: '2-year-integrated-regular-neet',
      stream: 'neet',
      title: '2-Year Integrated Regular Programme',
      subtitle: 'NEET & AIIMS',
      classLabel: '11th',
      target: '2028',
      tag: 'NEET',
      imageGrad: 'from-primary-500 to-secondary-600',
      imageText: 'REGULAR',
      details: {
         description: "This programme focuses on conceptual clarity, besides strengthening the fundamentals of Physics, Chemistry, Zoology & Botany, aiming to enable the students to crack NEET & AIIMS.",
         schedule: "Weekdays: 3-days in a week (Total 6 classes/week)\nTuesday, Wednesday & Friday.\n\n2-day on weekends (6 classes)\nSaturday & Sunday\n(Thursday is meant for doubts, discussions & back-up classes)",
         hours: "900 hours (Including 'Tests & Discussions').\n(450 hours in class XI + 450 hours in class XII)",
         idealFor: "For Class X passed students, who wish to outperform in Class XI & Class XII Board as well as in NEET, AIIMS and other Medical Entrance Exams.",
         subjects: "Physics, Chemistry, Zoology & Botany.",
         features: [
           "Extensive coverage of topics meant for NEET & AIIMS",
           "Comprehensive and updated study material based on NCERT curriculum",
           "'Special Doubt Clearing Classes' (SDCC) after the completion of each topic",
           "Class Learning Improvement Program (CLIP) through gradual monitoring",
           "Special Rank Improvement Program (SRIP), 3 months before NEET & AIIMS",
           "All India Test Series (AITS) based on NEET & AIIMS Patterns",
           "Students' Mentorship Programme (SMP) under the guidance of dedicated faculty members"
         ]
      }
    },
    {
      id: '2-year-integrated-spark-neet',
      stream: 'neet',
      title: '2-Year Integrated School Programme (Spark Batch)',
      subtitle: 'School Integrated Programme',
      classLabel: '11th',
      target: '2028',
      tag: 'NEET',
      imageGrad: 'from-primary-400 to-secondary-500',
      imageText: 'SPARK',
      details: {
         description: "The two-year integrated programme is meant for 'School Integrated Programme' that aims to prepare them simultaneously for Class XI & XII Board as well as Medical Entrance Exams.",
         schedule: "5 days in a week (3 classes /day)\nTuesday to Saturday.",
         hours: "1500 hours (Including 'Tests & Discussions').\n(750 hours in class XI + 750 hours in class XII)",
         idealFor: "For Class X passed students, who wish to outperform in Class XI & XII Board as well as in NEET, AIIMS and other Medical Entrance Exams.",
         subjects: "Physics, Chemistry, Zoology, Botany and English of Class XI & XII Board.",
         features: [
           "Coverage of Class XI & XII Board as well as NEET & AIIMS syllabi",
           "English Classes for XI & XII along with Personality Development Programme (PDP)",
           "'Special Doubt Clearing Classes' (SDCC) after the completion of each topic",
           "Comprehensive and updated study material based on NCERT curriculum",
           "Special CBSE Reckoner Series based on the pattern of Class XI & XII Board",
           "Class Learning Improvement Program (CLIP) through regular review & monitoring",
           "All India Test Series (AITS) based on NEET & AIIMS Patterns",
"Students' Mentorship Programme (SMP) under the guidance of dedicated faculty members"
          ]
       }
     },
    {
      id: 'cbse-tuition-class-11',
      stream: 'cbse',
      title: 'CBSE Tuition for Class 11 (PCMB)',
      subtitle: 'Physics, Chemistry, Mathematics & Biology',
      classLabel: '11th',
      target: 'CBSE Boards',
      tag: 'CBSE Tuition',
      imageGrad: 'from-amber-400 to-orange-500',
      imageText: 'CLASS XI',
      details: {
         description: "Class 11 is the year where school Science suddenly stops being easy, and students who drift through it pay for it in Class 12. Our CBSE Tuition for Class 11 is built around getting Physics, Chemistry, Mathematics and Biology right the first time, with subject-specialist faculty, NCERT-first teaching and continuous worksheet testing.\n\nEvery chapter is taught for understanding, not just completion, because Class 11 marks the step-up from 'learning what the textbook says' to 'using it to solve unfamiliar problems'.\n\nProgramme Objective:\nThe focus of the programme is to help Class 11 CBSE Science students master the core subjects of Physics, Chemistry, Mathematics and Biology while building the study habits, subjective writing skills and test temperament that Class 12 boards and competitive exams later demand.",
         schedule: "Weekdays: 2-3 evening classes a week\nTuesday, Wednesday & Friday\n\nWeekends: Saturday (2 classes) & Sunday (2 classes)\n(Total 6-7 classes per week)",
         hours: "~450 hours in the academic year (Including 'Tests & Worksheet Tests').",
         idealFor: "For Class 11 CBSE Science students (PCM, PCB or PCMB) who want genuine conceptual command over Physics, Chemistry, Mathematics and Biology, along with strong subjective writing skills and board-level problem-solving.",
         subjects: "Physics, Chemistry, Mathematics and Biology.",
         features: [
           "Subject-specialist faculty for each of Physics, Chemistry, Maths and Biology",
           "NCERT-first teaching with CBSE board-pattern practice built in",
           "Weekly worksheet tests covering concepts, numericals and assertion-reasoning",
           "Subjective writing practice and answer-framing sessions for board marks",
           "Regular doubt-clearing sessions scheduled into the timetable",
           "Small batches so every student is tracked individually",
           "Periodic progress reports to parents"
         ]
      }
    }
  ],
  class12: [
    {
      id: '1-year-regular-12',
      stream: 'iit',
      title: '1 Year Regular Programme',
      subtitle: '(Main + Advanced)',
      classLabel: '12th',
      target: '2027',
      tag: 'IIT-JEE',
      imageGrad: 'from-orange-500 to-red-600',
      imageText: 'REGULAR',
      details: {
         description: "The one-year integrated regular classroom programme focuses on conceptual clarity, besides strengthening the fundamentals of Physics, Chemistry & Mathematics, aiming to enable the students to crack JEE (Main & Advanced).",
         schedule: "Weekdays: 3-days in a week (Total 6 classes/week)\nTuesday, Wednesday & Friday.\n\nWeekends: 2-days in a week (Total 6 classes/week)\nSaturday & Sunday\n(Thursday is meant for doubts, discussions & back-up classes)",
         hours: "450 hours (Including 'Tests & Discussions').",
         idealFor: "For Class XI passed students, who wish to outperform in Class XII Board as well as in JEE (Main & Advanced), BITSAT & KVPY Exams.",
         subjects: "Physics, Chemistry and Mathematics.",
         features: [
           "Extensive coverage of topics meant for JEE (Main & Advanced) and BITSAT",
           "Comprehensive and updated study material based on NCERT curriculum",
           "'Special Doubt Clearing Classes' (SDCC) after the completion of each topic",
           "Special Rank Improvement Program (SRIP), 2 months before JEE (Main & Advanced)",
           "All India Test Series (AITS) based on JEE (Main & Advanced), BITSAT Patterns",
           "Students' Mentorship Programme (SMP) under the guidance of dedicated faculty members",
           "Every year IIT-Delhi campus visit to see the innovation in science at 'Open House'",
           "NCERT Exemplar focusing on JEE (Main & Advanced), BITSAT & KVPY"
         ]
      }
    },
    {
      id: '1-year-regular-12-neet',
      stream: 'neet',
      title: '1 Year Regular Programme',
      subtitle: 'NEET & AIIMS',
      classLabel: '12th',
      target: '2027',
      tag: 'NEET',
      imageGrad: 'from-primary-500 to-secondary-600',
      imageText: 'REGULAR',
      details: {
         description: "This programme focuses on conceptual clarity, besides strengthening the fundamentals of Physics, Chemistry, Zoology & Botany with special emphasis on class XI syllabus, aiming to enable the students to crack NEET.",
         schedule: "3-4 days on weekdays (6 classes)\nTuesday, Wednesday & Friday.\n\nWeekends: 2-days in a week (Total 6 classes/week)\nSaturday & Sunday\n(Thursday is meant for doubts, discussions & back-up classes)",
         hours: "450 hours (Including 'Tests & Discussions').",
         idealFor: "For Class XI passed students, who wish to outperform in Class XII Board as well as in NEET and other Medical Entrance Exams.",
         subjects: "Physics, Chemistry, Zoology & Botany.",
         features: [
           "Extensive coverage of topics meant for NEET",
           "Comprehensive and updated study material based on NCERT curriculum",
           "'Special Doubt Clearing Classes' (SDCC) after the completion of each topic",
           "Class Learning Improvement Program (CLIP) through gradual monitoring",
           "Special Rank Improvement Program (SRIP), 3 months before NEET",
"All India Test Series (AITS) based on NEET & AIIMS Patterns",
            "Students' Mentorship Programme (SMP) under the guidance of dedicated faculty members"
          ]
       }
     },
    {
      id: 'cbse-tuition-class-12',
      stream: 'cbse',
      title: 'CBSE Tuition for Class 12 (PCMB)',
      subtitle: 'Physics, Chemistry, Mathematics & Biology',
      classLabel: '12th',
      target: 'CBSE Boards',
      tag: 'CBSE Tuition',
      imageGrad: 'from-amber-500 to-orange-600',
      imageText: 'CLASS XII',
      details: {
         description: "Class 12 boards carry a weight that decides admission into colleges, and preparation here can't afford to be last-minute. Our CBSE Tuition for Class 12 is a focused board-preparation programme covering Physics, Chemistry, Mathematics and Biology with NCERT-first teaching, rigorous worksheet tests and intensive subjective writing practice.\n\nWe train students to frame answers the way CBSE examiners award marks, frame them cleanly, label diagrams, show method steps and write to the word limit.\n\nProgramme Objective:\nThe focus of the programme is to help Class 12 CBSE Science students maximise their board scores in Physics, Chemistry, Mathematics and Biology while converting their Class 11 groundwork into marks through consistent revision, board-pattern practice and mock examinations.",
         schedule: "Weekdays: 2-3 evening classes a week\nTuesday, Wednesday & Friday\n\nWeekends: Saturday (2 classes) & Sunday (2 classes)\n(Total 6-7 classes per week)",
         hours: "~420 hours in the academic year (Including 'Tests & Worksheet Tests').",
         idealFor: "For Class 12 CBSE Science students (PCM, PCB or PCMB) preparing for board exams who want subject-specialist teaching in Physics, Chemistry, Mathematics and Biology, targeted revision, and strong subjective writing skills for maximum board score.",
         subjects: "Physics, Chemistry, Mathematics and Biology.",
         features: [
           "Board-focused syllabus coverage across Physics, Chemistry, Maths and Biology",
           "Subjective writing and answer-framing workshops for board pattern",
           "Weekly worksheet tests, mock board papers and time-bound practice",
           "NCERT-first preparation with previous-year board paper analysis",
           "Sample-paper solving and examiner-style marking feedback",
           "Doubt-clearing sessions and individual follow-up in small batches",
           "Periodic progress reports to parents"
         ]
      }
    }
  ],
  dropper: [
    {
      id: '1-year-extended-classroom-jee',
      stream: 'iit',
      title: '1-Year Extended Classroom Program for IIT-JEE',
      subtitle: '(Main + Advanced)',
      classLabel: '12th Passout',
      target: '2026',
      tag: 'IIT-JEE',
      imageGrad: 'from-amber-500 to-orange-600',
      imageText: 'REPEATERS',
      details: {
         description: "This program by Good Marks Classes is for IIT-JEE aspirants. NTA conducts JEE Main and JEE Advanced exams for admission into prestigious engineering colleges like IITs and NITs across India. For these exams students need targeted guidance by expert faculty. Good Marks Classes offers a 1 year extended Classroom Program for JEE (Main + Advanced).\n\nThe curriculum is specifically designed for the repeater JEE aspirants. To strengthen the foundation, conceptual knowledge and improve competition rank this course is the best option.",
         schedule: "To be announced",
         hours: "750+ hours of Conceptual Classes for class 11th & 12th\n100+ hours of Revision Classes",
         idealFor: "This program is ideal for students aiming to secure admission to top engineering colleges through the JEE Main and Advanced exams.",
         subjects: "Physics, Chemistry, Mathematics",
         features: [
           "750+ hours of Conceptual Classes for class 11th & 12th",
           "100+ hours of Revision Classes",
           "Additional classroom slots for Doubt Clearing Classes",
           "Special Rank Improvement Sessions",
           "Along with unique Assisted Problem Solving Sessions (APSS)",
           "20 Minor Tests on JEE Main pattern",
           "4 Major Tests on JEE Advanced pattern"
         ]
      }
    },
    {
      id: '1-year-extended-classroom-neet',
      stream: 'neet',
      title: '1-Year Extended Classroom Program for NEET-UG',
      subtitle: 'NEET-UG Repeaters',
      classLabel: '12th Passout',
      target: '2026',
      tag: 'NEET',
      imageGrad: 'from-primary-600 to-secondary-700',
      imageText: 'REPEATERS',
      details: {
         description: "For repeater students seeking another opportunity to excel in the NEET UG examination, our 1-year Extended Classroom Program is meticulously designed to meet their specific needs. With the guidance of experienced faculty, a personalized learning approach, and a comprehensive curriculum, this program provides the necessary edge for a successful comeback.\n\nStudents gain access to top-quality study materials, rigorous mock tests, and structured learning modules, all aimed at reinforcing their foundation, strengthening conceptual understanding, and improving their competitive rank. With a proven track record of successful candidates, this program is the ideal choice for students striving to achieve their dream of a fulfilling medical career and NEET UG success in their second attempt.",
         schedule: "To be announced",
         hours: "750+ hours of Conceptual Classes for class 12th\n100+ hours of Revision Class for class 12th",
         idealFor: "This program is suitable for students who want to attend their school in morning and then coaching classes in evening.",
         subjects: "Physics, Chemistry & Biology",
         features: [
           "750+ hours of Conceptual Classes for class 12th",
           "100+ hours of Revision Class for class 12th",
           "Additional classroom slots for Doubt Clearing Classes",
           "Special Rank Improvement Sessions",
           "Along with unique Assisted Problem Solving Sessions (APSS)",
           "20 Minor Tests",
           "4 Major Tests"
         ]
      }
    }
],
  class8: [
    {
      id: 'cbse-tuition-class-8',
      stream: 'cbse',
      title: 'CBSE Tuition for Class 8',
      subtitle: 'Weekend Programme',
      classLabel: '8th',
      target: 'CBSE + Olympiads',
      tag: 'CBSE Tuition',
      imageGrad: 'from-amber-400 to-yellow-500',
      imageText: 'CLASS VIII',
      details: {
         description: "Class 8 is where science and maths start getting genuinely interesting, and also where small gaps start showing. Our CBSE Tuition for Class 8 is a weekend-only programme designed not to disturb weekday school and activities, covering Science, Mathematics, English and Social Studies with clear conceptual teaching.\n\nThe focus is on mastering the CBSE Class 8 syllabus, preparing for science and maths olympiads, and building the reasoning and subjective writing skills that Class 9 and 10 will depend on.\n\nProgramme Objective:\nThe focus of the programme is to get the Class 8 CBSE basics rock-solid, nurture olympiad and reasoning skills, and build confident, structured writing habits, all within a weekend timetable.",
         schedule: "Weekends only — 5 classes a week\nSaturday: 2 classes (evening)\nSunday: 3 classes (morning to afternoon)",
         hours: "~200 hours in the academic year (Including 'Tests & Worksheets').",
         idealFor: "For Class 8 CBSE students who want to master Science, Maths, English and SST, prepare for olympiads, and build strong writing and reasoning skills, without sacrificing weekday studies or activities.",
         subjects: "Science, Mathematics, English and Social Studies.",
         features: [
           "CBSE Class 8 syllabus covered thoroughly with NCERT-first teaching",
           "Olympiad preparation (NSO, IMO) with topic-wise worksheet tests",
           "Mental ability and reasoning sessions to sharpen analytical thinking",
           "Subjective writing practice and answer-framing for school exams",
           "Weekly worksheet tests to track understanding honestly",
           "Small batches with dedicated doubt-clearing time",
           "Periodic progress reports to parents"
         ]
      }
    }
  ],
class9: [
    {
      id: 'cbse-tuition-class-9',
      stream: 'cbse',
      title: 'CBSE Tuition for Class 9',
      subtitle: 'Weekday + Weekend Programme',
      classLabel: '9th',
      target: 'CBSE + Olympiads + NTSE',
      tag: 'CBSE Tuition',
      imageGrad: 'from-amber-400 to-orange-500',
      imageText: 'CLASS IX',
      details: {
         description: "Class 9 marks the first real shift toward board-level, application-based learning, and the concepts built here carry straight into Class 10 boards. Our CBSE Tuition for Class 9 runs on weekdays as well as weekends, covering Physics, Chemistry, Biology, Mathematics, English and Social Studies.\n\nBeyond the CBSE syllabus, the programme trains students for olympiads, NTSE and scholarship exams while building the subjective writing skills and reasoning that decide school exam scores.\n\nProgramme Objective:\nThe focus of the programme is to make Class 9 CBSE fundamentals genuinely solid, prepare for olympiads and NTSE, and develop worksheet-based testing, subjective writing and problem-solving habits before the pressure of Class 10 boards.",
         schedule: "Weekdays: 2-3 evening classes a week\nTuesday, Wednesday & Friday\n\nWeekends: Saturday (2 classes) & Sunday (2-3 classes)\n(Total 6-7 classes per week)",
         hours: "~350 hours in the academic year (Including 'Tests & Worksheet Tests').",
         idealFor: "For Class 9 CBSE students who want to master Science and Maths, prepare for olympiads and NTSE, and build the subjective writing and reasoning skills that decide board performance in Class 10.",
         subjects: "Physics, Chemistry, Biology, Mathematics, English and Social Studies.",
         features: [
           "CBSE Class 9 syllabus covered with NCERT-first teaching",
           "Olympiad and NTSE preparation with topic-wise worksheet tests",
           "Subjective writing practice and answer-framing for school exams",
           "Weekly worksheet and chapter tests to track progress honestly",
           "Conceptual clarity with application-based problem solving",
           "Small batches with dedicated doubt-clearing time",
           "Periodic progress reports to parents"
         ]
      }
    }
  ],
class10: [
    {
      id: 'cbse-tuition-class-10',
      stream: 'cbse',
      title: 'CBSE Tuition for Class 10',
      subtitle: 'Weekday + Weekend Programme (Board Focus)',
      classLabel: '10th',
      target: 'CBSE Boards + Olympiads',
      tag: 'CBSE Tuition',
      imageGrad: 'from-amber-500 to-orange-600',
      imageText: 'CLASS X',
      details: {
         description: "Class 10 boards are the first high-stakes exam a student faces, and a good score depends on mastering the syllabus AND learning to present answers the examiners reward. Our CBSE Tuition for Class 10 runs on weekdays as well as weekends, covering Physics, Chemistry, Biology, Mathematics, English and Social Studies with a board-first focus.\n\nAlongside board preparation, the programme keeps olympiad and scholarship-exam readiness alive, so students hold strong subject command whatever they choose in Class 11.\n\nProgramme Objective:\nThe focus of the programme is to maximise Class 10 CBSE board scores through complete syllabus coverage, intensive subjective writing practice, previous-year paper work and worksheet-based testing, while keeping olympiad preparation intact.",
         schedule: "Weekdays: 2-3 evening classes a week\nTuesday, Wednesday & Friday\n\nWeekends: Saturday (2 classes) & Sunday (2-3 classes)\n(Total 6-7 classes per week)",
         hours: "~350 hours in the academic year (Including 'Tests & Worksheet Tests').",
         idealFor: "For Class 10 CBSE students preparing for board exams who want subject-specialist teaching, intensive subjective writing practice, and strong foundational command that also supports future JEE and NEET preparation.",
         subjects: "Physics, Chemistry, Biology, Mathematics, English and Social Studies.",
         features: [
           "Board-first CBSE Class 10 syllabus coverage across all subjects",
           "Intensive subjective writing and answer-framing for board pattern",
           "Previous-year board papers and mock-style worksheet tests",
           "Olympiad preparation alongside board readiness",
           "NCERT-first teaching with examiner-style feedback",
           "Small batches with dedicated doubt-clearing time",
           "Periodic progress reports to parents"
         ]
      }
    }
  ]
};
