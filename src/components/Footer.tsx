import { Instagram, Youtube, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <>
      <div className="w-full h-80 md:h-96">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4236.391238712835!2d76.9489722760682!3d28.39628499476872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d3df96dc92b09%3A0x1ee2e068ba193a36!2sGOOD%20MARKS%20CLASSES!5e1!3m2!1sen!2sus!4v1778357077009!5m2!1sen!2sus" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
      <footer className="bg-secondary-950 w-full py-16 px-8 text-slate-400">
      <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
        <div className="col-span-1 lg:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <img src="/good-marks-logo.png" alt="Good Marks Classes" className="h-10 w-auto object-contain rounded-lg" />
            <span className="text-xl font-heading font-medium text-white">Good Marks Classes</span>
          </div>
          <p className="text-sm font-sans mb-6 opacity-80 leading-relaxed">
            Small batches. Real attention. No student gets lost.
          </p>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/goodmarksclassesgurgaon/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-secondary-900 flex items-center justify-center hover:bg-primary-600 hover:text-secondary-900 transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://share.google/vhB5jd28c0iT57ikX" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-secondary-900 flex items-center justify-center hover:bg-primary-600 hover:text-secondary-900 transition-colors">
              <Globe className="w-4 h-4" />
            </a>
            <a href="https://youtube.com/@sunilgolaphysicsclasses?si=4yL9JVuHUPDfdTYQ" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-secondary-900 flex items-center justify-center hover:bg-primary-600 hover:text-secondary-900 transition-colors">
              <Youtube className="w-4 h-4" />
            </a>
          </div>
        </div>
        
        <div className="col-span-1">
          <h4 className="font-label-bold mb-6 text-white uppercase tracking-wider text-xs">Quick Links</h4>
          <div className="flex flex-col gap-3 text-sm">
            <a className="hover:text-white transition-colors w-fit" href="/">Home</a>
            <a className="hover:text-white transition-colors w-fit" href="/about">About Us</a>
            <a className="hover:text-white transition-colors w-fit" href="/courses">Courses</a>
            <a className="hover:text-white transition-colors w-fit" href="/blogs">Blog</a>
          </div>
        </div>
        
        <div className="col-span-1">
          <h4 className="font-label-bold mb-6 text-white uppercase tracking-wider text-xs">Support</h4>
          <div className="flex flex-col gap-3 text-sm">
            <a className="hover:text-white transition-colors w-fit" href="#">Privacy Policy</a>
            <a className="hover:text-white transition-colors w-fit" href="#">Contact</a>
            <a className="hover:text-white transition-colors w-fit" href="#">Terms of Service</a>
          </div>
        </div>
        
        <div className="col-span-1">
          <h4 className="font-label-bold mb-6 text-white uppercase tracking-wider text-xs">Contact</h4>
          <div className="flex flex-col gap-3 text-sm opacity-80">
            <p>Gurgaon, Haryana, India</p>
            <p>info@goodmarksclasses.com</p>
            <p><a href="tel:8800880028" className="hover:text-white transition-colors">8800 8800 28</a></p>
          </div>
        </div>
        
        <div className="col-span-1 border-l border-secondary-800 lg:pl-8">
          <h4 className="font-label-bold mb-6 text-white uppercase tracking-wider text-xs flex items-center gap-2">
            Service Areas
          </h4>
          <div className="flex flex-col gap-3 text-sm opacity-80">
            <p><strong className="text-white">Gurgaon:</strong> Sectors 78 to 99 (incl. 80, 81, 85, 87, 88, 88A, 93, 94, 95, 96)</p>
            <p><strong className="text-white">Manesar:</strong> Sectors 1, 2, 3, 4, 5, NSG Manesar</p>
          </div>
        </div>
        
      </div>
      
      <div className="max-w-container-max mx-auto mt-16 pt-8 border-t border-secondary-900 text-center flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-60">
        <p>
          &copy; 2026 Good Marks Classes. All rights reserved.
        </p>
        <div className="flex gap-4">
           <span>Terms</span>
           <span>Privacy</span>
        </div>
      </div>
    </footer>
    </>
  );
}
