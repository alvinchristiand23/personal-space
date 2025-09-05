import { StaticImageData } from "next/image";

export type EmploymentType =
  | "Full-time"
  | "Part-time"
  | "Contract"
  | "Internship"
  | "Class"
  | "Bootcamp";

export type WorkMode = "On-site" | "Hybrid" | "Remote" | "Online";

export interface ExperienceItem {
  position: string;
  startDate: string;
  endDate: string;
  type: EmploymentType;
  mode: WorkMode;
  companyLogo: StaticImageData | string;
  companyName: string;
  companyLink: string;
  skills: string[];
  contributions: string[];
}
