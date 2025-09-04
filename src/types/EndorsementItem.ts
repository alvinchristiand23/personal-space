import { StaticImageData } from "next/image";

export interface EndorsementItem {
  name: string;
  position: string;
  companyName: string;
  companyLogo: StaticImageData | string;
  companyLink: string;
  message: string;
}
