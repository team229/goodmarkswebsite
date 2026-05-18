export const streams = [
  { id: 'iit', label: 'IIT-JEE' },
  { id: 'neet', label: 'NEET-UG' },
  { id: 'prefoundation', label: 'Pre-Foundation' },
  { id: 'foundation', label: 'Foundation' }
];

export const courseTabs: Record<string, {id: string, label: string}[]> = {
  iit: [
    { id: 'class11', label: 'Class 11th' },
    { id: 'class12', label: 'Class 12th' },
    { id: 'dropper', label: 'Dropper' },
  ],
  neet: [
    { id: 'class11', label: 'Class 11th' },
    { id: 'class12', label: 'Class 12th' },
    { id: 'dropper', label: 'Dropper' },
  ],
  prefoundation: [
    { id: 'class7', label: 'Class 7th' },
    { id: 'class8', label: 'Class 8th' }
  ],
  foundation: [
    { id: 'class9', label: 'Class 9th' },
    { id: 'class10', label: 'Class 10th' }
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
      imageText: 'DROPPER',
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
      subtitle: 'NEET-UG Dropper',
      classLabel: '12th Passout',
      target: '2026',
      tag: 'NEET',
      imageGrad: 'from-primary-600 to-secondary-700',
      imageText: 'DROPPER',
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
  class7: [
    {
      id: '2-year-classroom-class-7',
      stream: 'prefoundation',
      title: '2 Year Classroom Programme',
      subtitle: 'For Class VII',
      classLabel: '7th',
      target: 'Olympiads',
      tag: 'Pre-Foundation',
      imageGrad: 'from-amber-400 to-yellow-500',
      imageText: 'CLASS VII',
      details: {
         description: "This programme aims at laying a strong foundation in school students for competitive exams and developing 'Logical & Scientific Thinking'.\n\nProgramme Objective:\nThe focus of the programme is to prepare the students for:\n• Science Talent Search Exam (STSE)\n• National Science Olympiad (NSO)\n• Mathematics Talent Search Exam (MTSE)\n• International English Olympiad (IEO)",
         schedule: "2-days in a week for 7.5 hrs\nSaturday & Sunday",
         hours: "600 hours (Including 'Tests & Discussions').",
         idealFor: "For Class VII students, who wish to prepare for NTSE, Olympiads and other School Level Scholarship Tests.",
         subjects: "Science, Mathematics, Mental Ability, English & Social Studies.",
         features: [
           "Mental Ability Classes to sharpen students' IQ",
           "Topic-wise Subjective and Objective Tests",
           "Conceptual clarity, in-depth analysis of doubts and problem solving skill development",
           "Special Tutorial Classes during Olympiads and School Exams",
           "A team of IITians as faculty members, employs an innovative teaching methodology",
           "Early Competitive Exams Orientation (ECEO) – an added advantage",
           "Subjective Tests and writing practice on regular basis",
           "Every year IIT-Delhi campus visit to see the innovation in science at 'Open House'"
         ]
      }
    }
  ],
  class8: [
    {
      id: '1-year-classroom-class-8',
      stream: 'prefoundation',
      title: '1 Year Classroom Programme',
      subtitle: 'For Class VIII',
      classLabel: '8th',
      target: 'Olympiads',
      tag: 'Pre-Foundation',
      imageGrad: 'from-amber-400 to-yellow-500',
      imageText: 'CLASS VIII',
      details: {
         description: "This programme focuses on developing certain attributes in students such as Rational thinking, Scientific temperament, Mathematical aptitude, Reasoning skills & problem solving aptitude, besides inculcating early awareness of competitive exams.\n\nProgramme Objective:\nThe programme helps students in training their brain to think logically and also sharpens their IQs to inculcate scientific temper, life-skills and common aptitude.",
         schedule: "2-day in a week for 7.5 hrs\nSaturday & Sunday",
         hours: "300 hours (Including 'Tests & Discussions').",
         idealFor: "For Class VIII students, who wish to prepare for NTSE, Olympiads and other School Level Scholarship Tests.",
         subjects: "Science, Mathematics, Mental Ability, English & Social Studies.",
         features: [
           "A scientifically designed programme aims to develop analytical skills & rational thinking",
           "Creating synergy between the preparation of school curriculum & competitive exams",
           "Sharpens latent skills of students and prepares them to face the challenges ahead in life",
           "Students get friendly environment for personal exploration and common skill enhancement",
           "Advantages of early starters for having more time before the actual competitive exams",
           "A team of IITians as faculty member employs innovative teaching methodology",
           "Every year IIT-Delhi campus visit to see the innovation in science at 'Open House'"
         ]
      }
    }
  ],
  class9: [
    {
      id: '2-year-regular-class-9',
      stream: 'foundation',
      title: '2 Year Regular Classroom Programme',
      subtitle: 'For Class IX',
      classLabel: '9th',
      target: 'NTSE',
      tag: 'Foundation',
      imageGrad: 'from-primary-500 to-secondary-600',
      imageText: 'CLASS IX',
      details: {
         description: "This programme focuses on Class X Board Exam right from Class IX with special emphasis on NTSE and other scholarship exams offering long-term scholarships.",
         schedule: "Weekdays: 3-days in a week (Total 6 classes/week)\nTuesday, Wednesday & Friday\n\nWeekends: 2-days in a week (Total 6 classes/week)\nSaturday & Sunday\n(Thursday is meant for doubts, discussions & back-up classes)",
         hours: "600 hours (Including 'Tests & Discussions').",
         idealFor: "For Class IX students, who wish to outperform in Class X Board and crack NTSE besides building a sound base for JEE (Main & Advanced), (NEET/AIIMS) and other competitive exams.",
         subjects: "Physics, Chemistry, Biology, Maths, Mental Ability, English & Social Studies.",
         features: [
           "Covers School Boards & Competitive Exams syllabi simultaneously",
           "Prepare for STSE, NTSE, NSO, MTSE, IMO, Science & Maths Olympiad Exams",
           "Imparts first level competency to succeed in IIT, NEET, AIIMS & other competitive exams",
           "Lays strong foundation for school boards and emphasis on conceptual clarity",
           "A team of IITians as faculty member employs innovative teaching methodology",
           "Every year IIT-Delhi campus visit to see the innovation in science at 'Open House'",
           "Create synergy between the preparation of school curriculum & competitive exams",
           "Focus on NTSE through NCERT Exemplar along with IQ booster"
         ]
      }
    }
  ],
  class10: [
    {
      id: '1-year-regular-class-10',
      stream: 'foundation',
      title: '1 Year Regular Classroom Programme',
      subtitle: 'For Class X',
      classLabel: '10th',
      target: 'NTSE & Boards',
      tag: 'Foundation',
      imageGrad: 'from-primary-500 to-secondary-600',
      imageText: 'CLASS X',
      details: {
         description: "This programme focuses on Class X Board Exam right from Class X with special emphasis on NTSE & other scholarship exams offering long-term scholarships & also lays the foundation for JEE (Main & Advanced), NEET & AIIMS.",
         schedule: "Weekdays: 3-days in a week (Total 6 classes/week)\nTuesday, Wednesday & Friday\n\nWeekends: 2-days in a week (Total 6 classes/week)\nSaturday & Sunday\n(Thursday is meant for doubts, discussions & back-up classes)",
         hours: "450 hours (Including 'Tests & Discussions').",
         idealFor: "For Class X students, who wish to outperform in Class X Board and crack NTSE besides building a sound base for JEE (Main & Advanced), (NEET & AIIMS) and NDA, CLAT etc.",
         subjects: "Physics, Chemistry, Biology, Maths, Mental Ability, English & Social Studies.",
         features: [
           "Special Session for Class X Board Exam with CBSE Reckoner Series",
           "Covers School Board & Competitive Exams syllabi simultaneously focusing on class X board",
           "Prepare for STSE, NTSE, NSO, MTSE, IMO, Science & Maths Olympiad Exams",
           "Imparts competency to succeed in IIT/Medical & other Competitive Exams",
           "Integrated Comprehensive Study Material covers 'Board and Competitive Exam' syllabi",
           "Early Competitive Exams Orientation (ECEO) turns fruitful, giving excellent results",
           "Every year IIT-Delhi campus visit to see the innovation in science at 'Open House'",
           "Subjective Tests followed by regular writing practice"
         ]
      }
    }
  ]
};
