import { CheckCircle } from 'lucide-react';

export default function ThankYou() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-6">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>
        <h1 className="text-3xl font-bold text-secondary-900 mb-3">Thank You!</h1>
        <p className="text-slate-500 mb-3">
          Your enquiry has been submitted successfully. Our team will get back to you shortly.
        </p>
        <p className="text-slate-500 mb-8">
          Meanwhile, you can explore our <a href="/courses/iit" className="text-primary-600 font-semibold hover:underline">IIT JEE coaching in Gurgaon</a> or <a href="/courses/neet" className="text-primary-600 font-semibold hover:underline">NEET coaching in Gurgaon</a> pages.
        </p>
        <a
          href="/"
          className="inline-flex bg-gradient-to-r from-primary-600 to-primary-600 hover:from-primary-700 hover:to-primary-700 text-secondary-900 px-8 py-3 rounded-xl font-bold text-sm shadow-md shadow-primary-500/20 transition-all"
        >
          Back to Home
        </a>
      </div>
    </section>
  );
}
