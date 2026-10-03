/**
 * Privacy Policy content for Good Marks Classes.
 * Kept as structured data so the page component stays thin and copy stays editable in one place.
 */

import type { LegalMeta, PolicySection } from './legal';

export const privacyPolicyMeta = {
  eyebrow: 'Legal',
  title: 'Privacy Policy',
  lede: 'How we collect, use, store and protect your personal information.',
} satisfies LegalMeta;

export const privacyPolicyIntro: string[] = [
  'Good Marks Classes (“Good Marks Classes”, “we”, “us”, or “our”) respects your privacy and is committed to protecting the personal information you share with us.',
  'This Privacy Policy explains how we collect, use, store, and protect information when you visit our website, submit an enquiry, register for a course, book a demo class, contact us, or otherwise interact with Good Marks Classes.',
];

export const privacyPolicySections: PolicySection[] = [
  {
    id: 'information-we-collect',
    heading: '1. Information We Collect',
    blocks: [
      {
        type: 'paragraph',
        text: 'Depending on how you interact with our website and services, we may collect the following information:',
      },
      { type: 'subheading', text: 'Personal Information' },
      {
        type: 'paragraph',
        text: 'When you submit an enquiry, contact us, book a free demo, or request information about our courses, we may collect:',
      },
      {
        type: 'list',
        items: [
          'Student’s name',
          'Parent/Guardian’s name',
          'Mobile number',
          'Email address',
          'Class/grade',
          'Course or programme of interest',
          'Preferred location',
          'Preferred learning mode',
          'Enquiry details',
          'Any other information you voluntarily provide',
        ],
      },
      { type: 'subheading', text: 'Website and Technical Information' },
      {
        type: 'paragraph',
        text: 'When you visit our website, certain technical information may be collected automatically, such as:',
      },
      {
        type: 'list',
        items: [
          'IP address',
          'Browser type',
          'Device type',
          'Operating system',
          'Pages visited',
          'Date and time of visit',
          'Referring website or source',
          'General website usage information',
        ],
      },
      {
        type: 'paragraph',
        text: 'This information may be used for website security, analytics, performance monitoring, and improving our services.',
      },
    ],
  },
  {
    id: 'how-we-use-your-information',
    heading: '2. How We Use Your Information',
    blocks: [
      { type: 'paragraph', text: 'We may use the information collected to:' },
      {
        type: 'list',
        items: [
          'Respond to your enquiries and requests',
          'Contact you regarding courses and programmes',
          'Schedule free demo classes',
          'Provide information about our educational programmes',
          'Process registrations or admissions',
          'Provide customer support',
          'Understand your educational requirements',
          'Improve our website, courses, and services',
          'Analyse website usage and advertising performance',
          'Send relevant updates, notifications, or promotional communications where permitted',
          'Prevent fraud, misuse, spam, or security threats',
          'Comply with applicable legal and regulatory requirements',
        ],
      },
      {
        type: 'paragraph',
        text: 'We will use your information only for legitimate business and educational purposes.',
      },
    ],
  },
  {
    id: 'google-ads-and-marketing',
    heading: '3. Google Ads and Marketing',
    blocks: [
      {
        type: 'paragraph',
        text: 'Good Marks Classes may use online advertising platforms such as Google Ads and other digital marketing platforms to promote our courses and services.',
      },
      {
        type: 'paragraph',
        text: 'These platforms may use cookies, tags, pixels, or similar technologies to measure advertising performance and, where applicable, show relevant advertisements to users.',
      },
      {
        type: 'paragraph',
        text: 'We may use information such as website visits, enquiries, and conversions to understand the effectiveness of our advertising campaigns.',
      },
      {
        type: 'paragraph',
        text: 'We do not sell your personal information to advertising platforms.',
      },
    ],
  },
  {
    id: 'cookies',
    heading: '4. Cookies',
    blocks: [
      {
        type: 'paragraph',
        text: 'Our website may use cookies and similar technologies. Cookies may help us:',
      },
      {
        type: 'list',
        items: [
          'Keep the website functioning properly',
          'Remember certain preferences',
          'Understand how visitors use our website',
          'Improve website performance',
          'Measure advertising and marketing effectiveness',
          'Provide a better user experience',
        ],
      },
      {
        type: 'paragraph',
        text: 'You can control or disable cookies through your browser settings. However, disabling certain cookies may affect some website functionality.',
      },
    ],
  },
  {
    id: 'analytics-and-third-party-services',
    heading: '5. Analytics and Third-Party Services',
    blocks: [
      {
        type: 'paragraph',
        text: 'We may use third-party services for website analytics, advertising, communication, payment processing, hosting, security, or other business functions. These services may process certain information according to their own privacy policies and applicable laws. Third-party services may include, where applicable:',
      },
      {
        type: 'list',
        items: [
          'Google Analytics',
          'Google Ads',
          'Google Tag Manager',
          'Meta advertising services',
          'WhatsApp or other communication services',
          'Website hosting and security providers',
          'Payment service providers',
        ],
      },
      {
        type: 'paragraph',
        text: 'We recommend reviewing the privacy policies of third-party services you use.',
      },
    ],
  },
  {
    id: 'how-we-share-information',
    heading: '6. How We Share Information',
    blocks: [
      {
        type: 'paragraph',
        text: 'We do not sell, rent, or trade your personal information for monetary gain. We may share information when reasonably necessary with:',
      },
      {
        type: 'list',
        items: [
          'Our authorised employees and representatives',
          'Service providers working on our behalf',
          'Website, hosting, analytics, advertising, or technology providers',
          'Payment service providers, where applicable',
          'Government authorities or law-enforcement agencies when legally required',
          'Professional advisers where necessary to protect our legal rights',
        ],
      },
      {
        type: 'paragraph',
        text: 'Any sharing of information will be limited to what is reasonably necessary for the relevant purpose.',
      },
    ],
  },
  {
    id: 'protection-of-your-information',
    heading: '7. Protection of Your Information',
    blocks: [
      {
        type: 'paragraph',
        text: 'We take reasonable technical and organisational measures to protect personal information from:',
      },
      {
        type: 'list',
        items: ['Unauthorised access', 'Unauthorised disclosure', 'Loss', 'Misuse', 'Alteration', 'Destruction'],
      },
      {
        type: 'paragraph',
        text: 'However, no website, online service, or method of electronic transmission can be guaranteed to be completely secure. Therefore, while we take reasonable steps to protect your information, we cannot guarantee absolute security.',
      },
    ],
  },
  {
    id: 'childrens-privacy',
    heading: '8. Children’s Privacy',
    blocks: [
      {
        type: 'paragraph',
        text: 'Good Marks Classes provides educational services for school students, including minors.',
      },
      {
        type: 'paragraph',
        text: 'Where information relating to a student below the applicable age of consent is submitted through our website, we expect the information to be provided by, or with the knowledge and involvement of, a parent or legal guardian.',
      },
      {
        type: 'paragraph',
        text: 'Parents or legal guardians may contact us if they believe that information relating to a child has been submitted without appropriate permission. We may take reasonable steps to verify and address such requests.',
      },
    ],
  },
  {
    id: 'communication-and-marketing',
    heading: '9. Communication and Marketing',
    blocks: [
      {
        type: 'paragraph',
        text: 'If you provide your phone number, email address, or other contact details, we may contact you regarding:',
      },
      {
        type: 'list',
        items: [
          'Course enquiries',
          'Demo classes',
          'Admissions',
          'Programme information',
          'Schedule updates',
          'Important service communications',
          'Offers or promotional information, where permitted',
        ],
      },
      {
        type: 'paragraph',
        text: 'You may request that we stop sending promotional communications by contacting us using the details provided below.',
      },
      {
        type: 'paragraph',
        text: 'Please note that you may still receive essential service-related communications where necessary.',
      },
    ],
  },
  {
    id: 'data-retention',
    heading: '10. Data Retention',
    blocks: [
      {
        type: 'paragraph',
        text: 'We retain personal information only for as long as reasonably necessary for the purposes described in this Privacy Policy, including:',
      },
      {
        type: 'list',
        items: [
          'Providing our services',
          'Maintaining enquiry and admission records',
          'Meeting legal or regulatory requirements',
          'Resolving disputes',
          'Maintaining business records',
          'Protecting our legitimate interests',
        ],
      },
      {
        type: 'paragraph',
        text: 'The retention period may vary depending on the type and purpose of the information.',
      },
    ],
  },
  {
    id: 'your-privacy-rights',
    heading: '11. Your Privacy Rights',
    blocks: [
      {
        type: 'paragraph',
        text: 'Depending on applicable law, you may have rights regarding your personal information, including the right to:',
      },
      {
        type: 'list',
        items: [
          'Request access to information we hold about you',
          'Request correction of inaccurate information',
          'Request deletion of information where legally applicable',
          'Withdraw consent where processing is based on consent',
          'Request information about how your data is being used',
          'Opt out of certain promotional communications',
        ],
      },
      {
        type: 'paragraph',
        text: 'To make a privacy-related request, please contact us using the details below.',
      },
      {
        type: 'paragraph',
        text: 'We may need to verify your identity before processing certain requests.',
      },
    ],
  },
  {
    id: 'external-links',
    heading: '12. External Links',
    blocks: [
      {
        type: 'paragraph',
        text: 'Our website may contain links to third-party websites, social media platforms, educational resources, or other external services.',
      },
      {
        type: 'paragraph',
        text: 'Good Marks Classes is not responsible for the privacy practices, content, or security of third-party websites. We recommend reviewing the privacy policy of any external website before providing personal information.',
      },
    ],
  },
  {
    id: 'changes-to-this-privacy-policy',
    heading: '13. Changes to This Privacy Policy',
    blocks: [
      {
        type: 'paragraph',
        text: 'We may update this Privacy Policy from time to time to reflect changes in our services, technology, legal requirements, or privacy practices.',
      },
      {
        type: 'paragraph',
        text: 'When we make changes, we will publish the updated version of this page. We encourage visitors to review this page periodically.',
      },
    ],
  },
  {
    id: 'contact-us',
    heading: '14. Contact Us',
    blocks: [
      {
        type: 'paragraph',
        text: 'If you have any questions, concerns, requests, or complaints regarding this Privacy Policy or the handling of your personal information, please contact us:',
      },
    ],
  },
  {
    id: 'consent',
    heading: '15. Consent',
    blocks: [
      {
        type: 'paragraph',
        text: 'By using the Good Marks Classes website or submitting your information through our enquiry, registration, demo, or contact forms, you acknowledge that you have read and understood this Privacy Policy and agree to the collection and use of information as described above, subject to applicable law.',
      },
    ],
  },
];
