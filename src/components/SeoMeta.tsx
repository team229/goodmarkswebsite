import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

type MetaConfig = {
  title: string;
  description: string;
};

const routeMeta: Record<string, MetaConfig> = {
  '/': {
    title: '#1 JEE & NEET Coaching in Gurgaon | Enroll at GoodMarks Classes',
    description: "Join Gurgaon's most trusted JEE & NEET coaching institute. Expert faculty, proven results, and personalized attention for Class 9–12. Limited seats available — enroll at GoodMarks Classes today!"
  },
  '/about': {
    title: 'Why 1000+ Students Trust GoodMarks Classes in Gurgaon | About Us',
    description: "Discover what makes GoodMarks Classes Gurgaon's preferred coaching institute. Experienced faculty, structured programs, and a track record of results. See why students and parents choose us every year."
  },
  '/join-faculty': {
    title: 'Teach at GoodMarks Classes Gurgaon | Faculty Openings | Apply Now',
    description: "Are you an expert educator in Physics, Chemistry, Maths, or Biology? Join a growing coaching institute in Gurgaon that values great teaching. Apply now and make a real impact on students' futures."
  },
  '/home-tuition': {
    title: 'Home Tuition in Gurgaon for Science & Maths | GoodMarks Classes',
    description: 'Get personalised home tuition in Gurgaon for Physics, Chemistry, Maths, and Biology. GoodMarks Classes connects students with experienced tutors for one-on-one learning at your convenience.'
  },
  '/olympiad': {
    title: 'Olympiad Coaching in Gurgaon | Science & Maths | GoodMarks Classes',
    description: 'Prepare for Science and Maths Olympiads with dedicated coaching at GoodMarks Classes in Gurgaon. We help students develop analytical thinking and problem-solving skills to excel in national-level competitions.'
  },
  '/doubt-sessions': {
    title: 'Doubt Clearing Sessions in Gurgaon | GoodMarks Classes',
    description: 'Clear your concepts with dedicated doubt sessions at GoodMarks Classes in Gurgaon. Our expert faculty address student queries in Physics, Chemistry, Maths, and Biology to ensure no topic is left unclear.'
  },
  '/physics-classes-sunil-gola': {
    title: 'Physics Classes by Sunil Gola Sir in Gurgaon | GoodMarks Classes',
    description: 'Join dedicated Physics classes by Sunil Gola Sir (DTU) at GoodMarks Classes Gurgaon. Concept clarity, exam-focused preparation, and personalised mentorship for CBSE, JEE, and NEET.'
  },
  '/courses': {
    title: 'All Courses | JEE & NEET Coaching Programs in Gurgaon | GoodMarks Classes',
    description: 'Explore all coaching programs at GoodMarks Classes in Gurgaon. From JEE and NEET preparation to foundation and subject-specific courses, find the right program for your academic goals.'
  }
};

const coursesByStreamMeta: Record<string, MetaConfig> = {
  iit: {
    title: 'Best IIT JEE Coaching in Gurgaon | Dropper Batch Available | GoodMarks Classes',
    description: 'Join the best IIT JEE coaching institute in Gurgaon. GoodMarks Classes offers regular batches and a dedicated JEE dropper course with focused revision, test series, and personalized guidance to boost your rank.'
  },
  neet: {
    title: 'Best NEET Coaching in Gurgaon | Dropper Batch Available | GoodMarks Classes',
    description: 'Searching for the best NEET coaching in Gurgaon? GoodMarks Classes offers expert-led NEET preparation with regular and dropper batches, full syllabus coverage, and mock tests designed for NEET success.'
  },
  foundation: {
    title: 'IIT JEE & NEET Foundation Course in Gurgaon | GoodMarks Classes',
    description: 'Prepare early for IIT JEE and NEET with our foundation course in Gurgaon. GoodMarks Classes offers expert coaching in Physics, Chemistry, Maths, and Biology for Class 9 and 10 students.'
  },
  prefoundation: {
    title: 'Pre-Foundation Course in Gurgaon | Build Early, Rank Higher | GoodMarks Classes',
    description: 'Give your child the competitive edge from Class 8 itself. Our pre-foundation program in Gurgaon builds the concepts that top JEE & NEET rankers swear by. Book a free counselling session today!'
  }
};

const courseMeta: Record<string, MetaConfig> = {
  '1-year-regular-12': {
    title: '1 Year JEE Coaching in Gurgaon | GoodMarks Classes',
    description: 'Looking for focused 1 year JEE coaching in Gurgaon? GoodMarks Classes offers structured classroom programs, expert faculty, and proven results to help you crack IIT JEE in one year.'
  },
  '1-year-regular-12-neet': {
    title: '1 Year NEET Coaching in Gurgaon | GoodMarks Classes',
    description: 'Prepare for NEET in one year with GoodMarks Classes in Gurgaon. Our intensive 1 year NEET coaching program covers Biology, Chemistry, and Physics with dedicated mentorship and regular mock tests.'
  },
  '2-year-integrated-regular': {
    title: '2 Year IIT JEE Coaching Program in Gurgaon | GoodMarks Classes',
    description: 'Build a strong foundation with our 2 year IIT JEE program in Gurgaon. GoodMarks Classes offers comprehensive study plans, experienced faculty, and consistent practice to maximize your JEE score.'
  },
  '2-year-integrated-regular-neet': {
    title: '2 Year NEET Coaching in Gurgaon | GoodMarks Classes',
    description: 'Get a head start with our 2 year NEET coaching program in Gurgaon. GoodMarks Classes provides in-depth subject coverage, NCERT-based teaching, and continuous assessment to help you qualify NEET with confidence.'
  },
  '2-year-regular-class-9': {
    title: '2 Year Coaching Program for Class 9 in Gurgaon | GoodMarks Classes',
    description: 'Start strong from Class 9 with our 2 year regular coaching program in Gurgaon. GoodMarks Classes lays the groundwork for board exams and competitive entrance tests like JEE and NEET.'
  },
  '1-year-regular-class-10': {
    title: '1 Year Coaching for Class 10 Board Exams in Gurgaon | GoodMarks Classes',
    description: 'Score high in your Class 10 board exams with our 1 year coaching program in Gurgaon. GoodMarks Classes offers CBSE-focused tuition in Science and Maths with consistent practice and guidance.'
  }
};

const subjectMeta: Record<string, MetaConfig> = {
  biology: {
    title: 'Biology Tuition for Class 10, 11 & 12 in Gurgaon | GoodMarks Classes',
    description: 'Looking for a biology tutor in Gurgaon for board exams or NEET preparation? GoodMarks Classes offers CBSE and NCERT-based biology tuition for Class 10, 11, and 12 students across Gurugram, including near Sohna Road.'
  },
  chemistry: {
    title: 'Chemistry Tuition for Class 11 & 12 in Gurgaon | GoodMarks Classes',
    description: 'Get expert chemistry coaching in Gurgaon for Class 11 and 12 board exams. GoodMarks Classes offers CBSE-aligned chemistry tuition near Sector 85 and across Gurugram with concept-focused and exam-ready teaching.'
  },
  mathematics: {
    title: 'Maths Coaching for Class 10, 11 & 12 in Gurgaon | GoodMarks Classes',
    description: 'Struggling with maths? GoodMarks Classes offers CBSE and ICSE maths tuition in Gurgaon for Class 10, 11, and 12. Our patient, concept-first approach is especially effective for students who need extra support.'
  },
  physics: {
    title: 'Physics Tuition for Class 9, 10, 11 & 12 in Gurgaon | GoodMarks Classes',
    description: 'Find the best physics tutor in Gurgaon for CBSE board exams and competitive prep. GoodMarks Classes provides quality physics tuition for Class 9 to 12 students across Gurugram, including Sector 85, with experienced and dedicated teachers.'
  }
};

function setMetaDescription(description: string) {
  let meta = document.querySelector('meta[name="description"]');
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute('name', 'description');
    document.head.appendChild(meta);
  }
  meta.setAttribute('content', description);
}

export default function SeoMeta() {
  const location = useLocation();

  useEffect(() => {
    const { pathname, search } = location;
    let meta: MetaConfig | undefined;

    if (pathname === '/courses') {
      const params = new URLSearchParams(search);
      const stream = params.get('stream') || '';
      meta = coursesByStreamMeta[stream] || routeMeta['/courses'];
    } else if (pathname.startsWith('/course/')) {
      const courseId = pathname.replace('/course/', '');
      meta = courseMeta[courseId];
    } else if (pathname.startsWith('/subject/')) {
      const subjectId = pathname.replace('/subject/', '');
      meta = subjectMeta[subjectId];
    } else {
      meta = routeMeta[pathname];
    }

    if (!meta) return;
    document.title = meta.title;
    setMetaDescription(meta.description);
  }, [location]);

  return null;
}
