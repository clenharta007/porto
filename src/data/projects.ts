// Content sourced from "CV Clen Hartanto v1.docx".

export type Project = {
  title: string;
  description: string;
  tags: string[];
  context?: string; // e.g. client / employer and period
  repoUrl?: string;
  liveUrl?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: 'Order Integration Platform',
    context: 'PT SRC Indonesia Sembilan · 2024 — 2025',
    description:
      'Order integration with multiple external applications, including real-time exchange with the AYO PH REST API, plus a private order flow and web/mobile customizations.',
    tags: ['Laravel', 'Angular', 'React.js', 'REST API'],
    featured: true,
  },
  {
    title: 'Honor Calculation System',
    context: 'Bina Nusantara · 2023 — 2024',
    description:
      'Responsive web app with a configurable honor calculation module, a .NET Core + NoSQL back-end, Azure AD access control, automated Excel reports, and external data connectors.',
    tags: ['React.js', '.NET Core', 'NoSQL', 'Azure AD'],
    featured: true,
  },
];
