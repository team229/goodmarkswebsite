import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import SeoMeta from './components/SeoMeta';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';
import SubjectDetail from './pages/SubjectDetail';
import HomeTuition from './pages/HomeTuition';
import Olympiad from './pages/Olympiad';
import DoubtSessions from './pages/DoubtSessions';
import JoinFaculty from './pages/JoinFaculty';
import PhysicsClassesSunilGola from './pages/PhysicsClassesSunilGola';

export default function App() {
  return (
    <div className="bg-background text-on-background font-body-md scroll-smooth selection:bg-secondary/20 selection:text-secondary flex flex-col min-h-screen">
      <ScrollToTop />
      <SeoMeta />
      <Navbar />
      <div className="flex-1">
         <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:stream" element={<Courses />} />
          <Route path="/course/:id" element={<CourseDetail />} />
          <Route path="/subject/:subjectId" element={<SubjectDetail />} />
          <Route path="/home-tuition" element={<HomeTuition />} />
          <Route path="/olympiad" element={<Olympiad />} />
          <Route path="/doubt-sessions" element={<DoubtSessions />} />
          <Route path="/join-faculty" element={<JoinFaculty />} />
          <Route path="/physics-classes-sunil-gola" element={<PhysicsClassesSunilGola />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
