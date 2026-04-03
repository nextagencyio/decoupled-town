// Auto-generated TypeScript types from Drupal GraphQL schema.
// Run `decoupled-cli schema sync` to regenerate.

export interface NodeAlert {
  id: string;
  affectedArea: string;
  alertLevel: any[];
  body: { value: string; summary?: string };
  effectiveDate: { time: string };
  expirationDate: { time: string };
  path: string;
  title: string;
}

export interface NodeDepartment {
  id: string;
  body: { value: string; summary?: string };
  departmentCategory: any[];
  email: string;
  hours: string;
  image: { url: string; alt: string; width: number; height: number };
  location: string;
  path: string;
  phone: string;
  title: string;
}

export interface NodeHomepage {
  id: string;
  ctaDescription: { value: string };
  ctaPrimary: string;
  ctaSecondary: string;
  ctaTitle: string;
  featuredServicesTitle: string;
  heroDescription: { value: string };
  heroSubtitle: string;
  heroTitle: string;
  path: string;
  statsItems: any[];
  title: string;
}

export interface ParagraphStatItem {
  id: string;
  label: string;
  number: string;
}

export interface NodeMeeting {
  id: string;
  agendaUrl: string;
  body: { value: string; summary?: string };
  endDate: { time: string };
  image: { url: string; alt: string; width: number; height: number };
  location: string;
  meetingDate: { time: string };
  meetingType: any[];
  path: string;
  title: string;
}

export interface NodeOfficial {
  id: string;
  body: { value: string; summary?: string };
  department: any[];
  email: string;
  office: string;
  path: string;
  phone: string;
  photo: { url: string; alt: string; width: number; height: number };
  position: string;
  title: string;
}

export interface NodePage {
  id: string;
  body: { value: string; summary?: string };
  path: string;
  title: string;
}

export interface NodeService {
  id: string;
  body: { value: string; summary?: string };
  department: any[];
  eligibility: string;
  fee: string;
  image: { url: string; alt: string; width: number; height: number };
  onlineUrl: string;
  path: string;
  title: string;
}
