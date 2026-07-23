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
      <footer className="bg-secondary-950 w-full py-12 px-8 text-slate-400">
      <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
        <div className="col-span-1 lg:col-span-2">
          <div className="flex items-center gap-3 mb-3">
            <img src="/good-marks-logo.png" alt="Good Marks Classes" className="h-9 w-auto object-contain rounded-lg" />
            <span className="text-lg font-heading font-medium text-white">Good Marks Classes</span>
          </div>
          <p className="text-sm mb-5 opacity-80 leading-relaxed">
            Small batches. Real attention. No student gets lost.
          </p>
          <div className="flex gap-3 mb-5">
            <a href="https://www.instagram.com/goodmarksclassesgurgaon/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-secondary-900 flex items-center justify-center hover:bg-primary-600 hover:text-secondary-900 transition-colors">
              <Instagram className="w-3.5 h-3.5" />
            </a>
            <a href="https://share.google/vhB5jd28c0iT57ikX" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-secondary-900 flex items-center justify-center hover:bg-primary-600 hover:text-secondary-900 transition-colors">
              <Globe className="w-3.5 h-3.5" />
            </a>
            <a href="https://youtube.com/@sunilgolaphysicsclasses?si=4yL9JVuHUPDfdTYQ" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-secondary-900 flex items-center justify-center hover:bg-primary-600 hover:text-secondary-900 transition-colors">
              <Youtube className="w-3.5 h-3.5" />
            </a>
          </div>

          <h4 className="font-label-bold mb-3 text-white uppercase tracking-wider text-xs">Stay Updated</h4>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.target as HTMLFormElement;
              const data = new FormData(form);
              fetch('https://api-inform.bythub.in/?formId=LCKaS6XiKh1hrfOgsasy', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(Object.fromEntries(data)),
              }).then(() => { form.reset(); alert('Thanks for subscribing!'); });
            }}
            className="flex gap-2 max-w-sm"
          >
            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
              className="flex-1 min-w-0 px-3.5 py-2 rounded-xl bg-secondary-900 text-white border border-secondary-700 placeholder:text-slate-500 text-sm focus:outline-none focus:border-primary-500 transition-colors"
            />
            <input type="hidden" name="type" value="newsletter" />
            <button type="submit" className="bg-primary-600 hover:bg-primary-500 text-secondary-900 font-bold px-4 py-2 rounded-xl text-sm transition-all shrink-0">
              Subscribe
            </button>
          </form>
        </div>
        
        <div className="col-span-1">
          <h4 className="font-label-bold mb-4 text-white uppercase tracking-wider text-xs">Quick Links</h4>
          <div className="flex flex-col gap-2.5 text-sm">
            <a className="hover:text-white transition-colors w-fit" href="/">Home</a>
            <a className="hover:text-white transition-colors w-fit" href="/about">About Us</a>
            <a className="hover:text-white transition-colors w-fit" href="/courses">Courses</a>
            <a className="hover:text-white transition-colors w-fit" href="/blogs">Blog</a>
          </div>
        </div>
        
        <div className="col-span-1">
          <h4 className="font-label-bold mb-4 text-white uppercase tracking-wider text-xs">Support</h4>
          <div className="flex flex-col gap-2.5 text-sm">
            <a className="hover:text-white transition-colors w-fit" href="#">Privacy Policy</a>
            <a className="hover:text-white transition-colors w-fit" href="#">Contact</a>
            <a className="hover:text-white transition-colors w-fit" href="#">Terms of Service</a>
          </div>
        </div>
        
        <div className="col-span-1">
          <h4 className="font-label-bold mb-4 text-white uppercase tracking-wider text-xs">Contact</h4>
          <div className="flex flex-col gap-2.5 text-sm opacity-80 mb-5">
            <p>Gurgaon, Haryana, India</p>
            <p>info@goodmarksclasses.com</p>
            <p><a href="tel:8800880028" className="hover:text-white transition-colors">8800 8800 28</a></p>
          </div>
          <h4 className="font-label-bold mb-4 text-white uppercase tracking-wider text-xs">Service Areas</h4>
          <div className="flex flex-col gap-2.5 text-sm opacity-80">
            <p><strong className="text-white">Gurgaon:</strong> Sectors 78 to 99 (incl. 80, 81, 85, 87, 88, 88A, 93-96)</p>
            <p><strong className="text-white">Manesar:</strong> Sectors 1-5, NSG Manesar</p>
          </div>
        </div>
        
      </div>
      
      <div className="max-w-container-max mx-auto mt-12 pt-6 border-t border-secondary-900 text-center text-xs opacity-60">
        <p>&copy; 2026 Good Marks Classes. All rights reserved.</p>
      </div>
    </footer>
    </>
  );
}
