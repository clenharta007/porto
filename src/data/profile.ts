// Content sourced from "CV Clen Hartanto v1.docx".
// TODO: fill in email, location, socials, and resumeUrl (not present in the CV).

export const profile = {
  name: 'Clen Hartanto',
  role: 'Software Engineer',
  tagline:
    'Developer passionate about continuous learning, clean code, and solving complex technical challenges across web, mobile, and backend.',
  location: 'Jakarta, Indonesia', // TODO
  email: 'clenharta007@gmail.com', // TODO
  resumeUrl: '', // e.g. '/resume.pdf' (put the file in /public)
  about: [
    'I am a developer looking to grow in a forward-thinking organization, where I can leverage my technical expertise and passion for continuous learning, clean code, and solving complex technical challenges.',
    'I have been working professionally since 2023, as a Technical Consultant at Berca Hardayaperkasa delivering web, mobile, and backend solutions for enterprise clients — from React.js front-ends and .NET Core / Laravel back-ends to third-party API integrations.',
  ],
  socials: [
    { label: 'GitHub', url: 'https://github.com/clenharta007' }, // TODO
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/clen-hartanto-16044514a/' }, // TODO
  ],
};

export const education = {
  major: 'Computer Science',
  period: '2017 — 2021',
  gpa: '3.44',
};

export const skills: { category: string; items: string[] }[] = [
  { category: 'Web Development', items: ['React.js', 'Angular', 'Responsive UI'] },
  { category: 'Mobile Development', items: ['Mobile app customization'] },
  {
    category: 'Backend Development',
    items: ['.NET Core', 'Laravel', 'NoSQL', 'RESTful APIs', 'Azure AD'],
  },
  { category: 'Other', items: ['System integration', 'Excel reporting', 'Regression testing'] },
];

export type Engagement = {
  client: string;
  period: string;
  highlights: string[];
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  description: string;
  engagements?: Engagement[];
};

export const experience: Experience[] = [
  {
    company: 'Berca Hardayaperkasa',
    role: 'Technical Consultant',
    period: '2023 — Present',
    description: 'Delivering web, mobile, and backend solutions for enterprise clients.',
    engagements: [
      {
        client: 'PT SRC Indonesia Sembilan',
        period: 'April 2024 — June 2025',
        highlights: [
          'Designed and implemented order integration with multiple external applications to streamline business workflows.',
          'Integrated order processing with the AYO PH REST API, enabling real-time data exchange and validation.',
          'Built a private order feature in the SRC application to support secure, restricted order flows, with tailored order management options for specific business needs.',
          'Delivered mobile application customizations to improve usability and align with client requirements.',
          'Built web application customizations with React.js, with responsive design and dynamic user interfaces.',
          'Developed new business logic in Laravel using modular, maintainable code structures for scalability and long-term support.',
          'Developed integration services using Laravel and Angular for application logic and data integration.',
          'Performed regression testing across several apps for the migration to DEEP.',
        ],
      },
      {
        client: 'Bina Nusantara',
        period: 'April 2023 — March 2024',
        highlights: [
          'Designed and implemented a responsive web application in React.js, with dynamic UI components for configurable honor calculation setup.',
          'Developed a configurable calculation module that lets administrators define and adjust honor calculation rules dynamically, with real-time validation and error handling.',
          'Built a scalable .NET Core back-end with NoSQL database integration.',
          'Designed RESTful APIs for front-end communication and third-party integrations.',
          'Integrated Azure Active Directory for secure authentication and role-based access control, following data protection and compliance best practices.',
          'Automated Excel report generation with customizable, exportable templates to give stakeholders detailed insights.',
          'Built connectors to accept and validate data from external systems, ensuring smooth API-based interoperability with partner platforms.',
          'Ensured cross-browser compatibility and optimized performance for end users.',
        ],
      },
    ],
  },
];
