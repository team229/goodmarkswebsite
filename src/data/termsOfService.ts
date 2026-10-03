/**
 * Terms of Service content for Good Marks Classes.
 * Structure modelled on standard coaching-institute terms of service, written for
 * Good Marks Classes' own programmes (CBSE tuition, IIT-JEE, NEET, Olympiad, home tuition).
 */

import type { LegalMeta, PolicySection } from './legal';

export const termsOfServiceMeta = {
  eyebrow: 'Legal',
  title: 'Terms of Service',
  lede: 'The rules that apply when you use this website, book a demo class, or enrol in a programme with us.',
} satisfies LegalMeta;

export const termsOfServiceIntro: string[] = [
  'By browsing this website, submitting an enquiry, booking a demo class, or enrolling in a programme with Good Marks Classes, you agree to these Terms of Service. If you do not agree with them, please do not use the website or proceed with an enrolment.',
  'These Terms apply to every student, parent, and guardian who interacts with Good Marks Classes, whether online or at our centre in Gurgaon.',
];

export const termsOfServiceSections: PolicySection[] = [
  {
    id: 'acceptance-of-these-terms',
    heading: '1. Acceptance of These Terms',
    blocks: [
      {
        type: 'paragraph',
        text: 'These Terms of Service form a binding agreement between you and Good Marks Classes. They apply to your use of the website and to your participation in any classroom, tuition, test series, doubt session, Olympiad programme, or home tuition we deliver.',
      },
      {
        type: 'paragraph',
        text: 'Where a student is below the age of consent, a parent or legal guardian accepts these Terms on the student’s behalf and confirms they have the authority to do so.',
      },
      {
        type: 'paragraph',
        text: 'We may ask you to accept these Terms again at the point of enrolment. If you do not accept them, we may decline to process an enquiry, booking, or admission.',
      },
    ],
  },
  {
    id: 'about-good-marks-classes',
    heading: '2. About Good Marks Classes',
    blocks: [
      {
        type: 'paragraph',
        text: 'Good Marks Classes is a coaching and tuition provider operating from Gurgaon, Haryana, India. We offer CBSE tuition for Classes 8 to 12, subject-specific tuition, two-year and one-year IIT-JEE programmes, NEET preparation, Olympiad coaching, doubt sessions, and home tuition.',
      },
      {
        type: 'paragraph',
        text: 'In these Terms, “Good Marks Classes”, “we”, “us”, and “our” refer to Good Marks Classes. “You” refers to the person browsing the website or taking part in a programme, and where applicable includes the student’s parent or guardian.',
      },
    ],
  },
  {
    id: 'enquiries-and-demo-classes',
    heading: '3. Enquiries and Demo Classes',
    blocks: [
      {
        type: 'paragraph',
        text: 'Submitting an enquiry form, calling our number, or messaging us on WhatsApp does not create a contract and does not reserve a seat in any batch.',
      },
      {
        type: 'paragraph',
        text: 'Demo classes are offered subject to availability. We may reschedule or cancel a demo class, and a demo class does not guarantee admission to a particular batch or programme.',
      },
      {
        type: 'paragraph',
        text: 'Please provide accurate and complete information in your enquiry so that we can respond usefully and recommend the right programme. Deliberately inaccurate information may delay or prevent an admission.',
      },
    ],
  },
  {
    id: 'course-enrolment-and-fees',
    heading: '4. Course Enrolment and Fees',
    blocks: [
      {
        type: 'paragraph',
        text: 'A seat is confirmed only once registration is complete and the applicable fees have been paid, and we have issued a confirmation.',
      },
      {
        type: 'paragraph',
        text: 'Fees, instalment schedules, and what each programme includes are set out in the fee schedule or written agreement given to you at the time of enrolment. Those terms form part of these Terms and take precedence over anything stated on this website.',
      },
      {
        type: 'paragraph',
        text: 'Study material, test papers, and other resources supplied as part of a programme remain the property of Good Marks Classes unless we agree otherwise in writing.',
      },
      {
        type: 'paragraph',
        text: 'Fees once paid are subject to the refund and cancellation terms in section 8 of these Terms.',
      },
    ],
  },
  {
    id: 'batch-schedules-and-changes',
    heading: '5. Batch Schedules and Changes',
    blocks: [
      {
        type: 'paragraph',
        text: 'Timetables and faculty allocations may change during a programme. We may adjust class timings, reschedule sessions, or reorganise batches for academic or operational reasons.',
      },
      {
        type: 'paragraph',
        text: 'Where a change affects a scheduled class, we will make reasonable efforts to inform students and parents through the contact details held on record.',
      },
      {
        type: 'paragraph',
        text: 'Students who miss scheduled classes remain responsible for the syllabus covered in their absence. Recorded sessions or make-up classes are provided at our discretion and are not guaranteed.',
      },
    ],
  },
  {
    id: 'attendance-and-results',
    heading: '6. Attendance and Results',
    blocks: [
      {
        type: 'paragraph',
        text: 'Regular attendance, participation in scheduled tests, and timely submission of practice work are expected of every enrolled student.',
      },
      {
        type: 'paragraph',
        text: 'Academic outcomes depend on a student’s own effort, attendance, and consistency. Good Marks Classes does not guarantee any rank, selection, admission, or result for any examination or institution.',
      },
      {
        type: 'paragraph',
        text: 'Any results, testimonials, or past outcomes published on this website or in our communications illustrate past performance only. They are not a promise or guarantee of future performance.',
      },
      {
        type: 'paragraph',
        text: 'Parents and guardians receive periodic progress updates as part of our standard programme communication.',
      },
    ],
  },
  {
    id: 'student-and-guardian-conduct',
    heading: '7. Student and Guardian Conduct',
    blocks: [
      {
        type: 'paragraph',
        text: 'Students are expected to treat faculty and classmates respectfully, attend regularly, submit their own work, and help maintain a classroom environment in which others can learn.',
      },
      {
        type: 'paragraph',
        text: 'Harassment, bullying, disruption of classes, copying or redistribution of copyrighted study material, and academic dishonesty are not tolerated.',
      },
      {
        type: 'paragraph',
        text: 'We may take disciplinary action, up to and including removal from a batch, where these standards are not met. Fees paid are not refundable where a student is removed for disciplinary reasons.',
      },
    ],
  },
  {
    id: 'refunds-and-cancellations',
    heading: '8. Refunds and Cancellations',
    blocks: [
      {
        type: 'paragraph',
        text: 'Refund requests must be raised in writing by contacting us using the details in section 18 of these Terms.',
      },
      {
        type: 'paragraph',
        text: 'Any admission or registration fee already paid is non-refundable. Fees for study material, test series, or digital resources that have already been issued, downloaded, or accessed are also non-refundable.',
      },
      {
        type: 'paragraph',
        text: 'Pro-rata refunds for a mid-programme withdrawal are calculated on the parts of the programme actually delivered to the student, and are subject to the fee schedule provided at the time of enrolment.',
      },
      {
        type: 'paragraph',
        text: 'Where a request is made after a batch has concluded or after results have been declared, a refund is generally not available.',
      },
      {
        type: 'paragraph',
        text: 'Fees that remain unpaid beyond the agreed due date may result in a seat being placed on hold or released, and may result in removal from the batch.',
      },
      {
        type: 'paragraph',
        text: 'This summary is provided for clarity. The refund terms in your own enrolment agreement take precedence, and we will apply those terms when handling a request.',
      },
    ],
  },
  {
    id: 'intellectual-property',
    heading: '9. Intellectual Property',
    blocks: [
      {
        type: 'paragraph',
        text: 'The Good Marks Classes name, logo, brand marks, website layout and design, course names, study material, question papers, and all other content on this website are owned by or licensed to Good Marks Classes.',
      },
      {
        type: 'paragraph',
        text: 'You may view, download, and print materials for your own enrolled use only.',
      },
      {
        type: 'paragraph',
        text: 'You may not reproduce, republish, sell, sublicense, or commercially exploit any content from this website, or remove attribution from it, without our written permission.',
      },
      {
        type: 'paragraph',
        text: 'Photographs and video of classes published on this website or on our social media pages may be shared only with our prior written consent.',
      },
    ],
  },
  {
    id: 'acceptable-website-use',
    heading: '10. Acceptable Website Use',
    blocks: [
      { type: 'subheading', text: 'Security' },
      {
        type: 'paragraph',
        text: 'When using this website you must not:',
      },
      {
        type: 'list',
        items: [
          'Access data that is not intended for you, or log into a server or account you are not authorised to use',
          'Probe, scan, or test the vulnerability of any system or network without proper authorisation',
          'Bypass, disable, or interfere with any security or authentication measure',
          'Introduce malware, or interfere with service to other users by overloading, flooding, or sending unsolicited bulk email',
          'Scrape, harvest, or bulk-copy content from this website',
        ],
      },
      {
        type: 'paragraph',
        text: 'Violations of system or network security may result in civil or criminal liability. Where we suspect a violation, we may investigate and cooperate with law-enforcement authorities as we are legally required to.',
      },
      { type: 'subheading', text: 'General' },
      {
        type: 'paragraph',
        text: 'You must not use this website to transmit or distribute material that is unlawful, that infringes the copyright, trademark, trade secret, or other intellectual property rights of others, or that violates anyone’s privacy or publicity rights.',
      },
      {
        type: 'paragraph',
        text: 'You must not use this website to post or distribute material that is libellous, defamatory, obscene, threatening, abusive, or hateful, nor to post content that is unlawful in the jurisdiction in which it is accessed.',
      },
    ],
  },
  {
    id: 'external-links-and-third-parties',
    heading: '11. External Links and Third-Party Services',
    blocks: [
      {
        type: 'paragraph',
        text: 'This website may link to third-party websites, social media platforms, or educational resources. We do not control those services and are not responsible for their content, availability, or privacy practices.',
      },
      {
        type: 'paragraph',
        text: 'Your use of any third-party service is governed by that service’s own terms. We recommend reviewing its privacy policy before sharing personal information.',
      },
    ],
  },
  {
    id: 'your-data-and-privacy',
    heading: '12. Your Data and Privacy',
    blocks: [
      {
        type: 'paragraph',
        text: 'We collect and process personal information in connection with enquiries, registrations, attendance, and communication with students and parents.',
      },
      {
        type: 'paragraph',
        text: 'Our Privacy Policy explains what we collect, why we collect it, and how long we keep it. It forms part of these Terms and is available on this website.',
      },
      {
        type: 'paragraph',
        text: 'You can control or disable cookies through your browser settings, although disabling certain cookies may affect how parts of this website work.',
      },
    ],
  },
  {
    id: 'disclaimer-of-warranties',
    heading: '13. Disclaimer of Warranties',
    blocks: [
      {
        type: 'paragraph',
        text: 'This website and all content, courses, and services are provided on an “as is” and “as available” basis.',
      },
      {
        type: 'paragraph',
        text: 'We do not warrant that this website will be uninterrupted, error-free, or free of malicious components, or that any content will always be current, complete, or accurate.',
      },
      {
        type: 'paragraph',
        text: 'Study material, syllabus references, and examination information may change from time to time and do not constitute a guarantee about any examination, board, or conducting authority.',
      },
    ],
  },
  {
    id: 'limitation-of-liability',
    heading: '14. Limitation of Liability',
    blocks: [
      {
        type: 'paragraph',
        text: 'To the maximum extent permitted by law, Good Marks Classes, its faculty, staff, and partners are not liable for any indirect, incidental, special, consequential, or exemplary damages, or for loss of profits, data, or goodwill, arising from your use of this website or your inability to use it.',
      },
      {
        type: 'paragraph',
        text: 'We are not liable for damages arising from any interruption, suspension, or termination of classes or services, whether or not that interruption was justified, negligent, or intentional.',
      },
      {
        type: 'paragraph',
        text: 'We are not responsible or liable to you for the statements or conduct of any third party.',
      },
      {
        type: 'paragraph',
        text: 'Nothing in these Terms excludes or limits any liability that cannot lawfully be excluded or limited, including liability for death or personal injury caused by negligence, or for fraud or fraudulent misrepresentation.',
      },
    ],
  },
  {
    id: 'indemnity',
    heading: '15. Indemnity',
    blocks: [
      {
        type: 'paragraph',
        text: 'You agree to indemnify and hold harmless Good Marks Classes, its officers, employees, and agents against any claims, demands, losses, damages, and expenses arising from your use of this website, your breach of these Terms, or your infringement of any third-party right.',
      },
    ],
  },
  {
    id: 'governing-law-and-jurisdiction',
    heading: '16. Governing Law and Jurisdiction',
    blocks: [
      {
        type: 'paragraph',
        text: 'These Terms are governed by the laws of India.',
      },
      {
        type: 'paragraph',
        text: 'Subject to the paragraph below, the courts at Gurgaon, Haryana have exclusive jurisdiction over any dispute arising out of or in connection with these Terms. We will always attempt to resolve a dispute informally by contacting you first.',
      },
      {
        type: 'paragraph',
        text: 'Nothing in these Terms limits any right or remedy you have under the Consumer Protection Act, 2019, or any other applicable law.',
      },
    ],
  },
  {
    id: 'changes-to-these-terms',
    heading: '17. Changes to These Terms',
    blocks: [
      {
        type: 'paragraph',
        text: 'We may update these Terms from time to time to reflect changes in our services, operations, or legal requirements.',
      },
      {
        type: 'paragraph',
        text: 'When we make changes, we will publish the updated version of this page. Continued use of the website or participation in a programme after a change is published means you accept the updated Terms.',
      },
    ],
  },
  {
    id: 'contact-us',
    heading: '18. Contact Us',
    blocks: [
      {
        type: 'paragraph',
        text: 'If you have any questions, concerns, requests, or complaints regarding these Terms, or need to raise a refund or cancellation request, please contact us:',
      },
    ],
  },
];
