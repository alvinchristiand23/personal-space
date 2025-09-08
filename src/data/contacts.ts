import {
  IconBrandGithub,
  IconBrandGmail,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandWhatsapp,
} from "@tabler/icons-react";

import { CONTACT_URL, GMAIL, PHONE_NUMBER, USERNAME } from "@/constants/user";
import { ContactItem } from "@/types/ContactItem";

export const contacts: ContactItem[] = [
  {
    icon: IconBrandWhatsapp,
    name: "Whatsapp",
    username: PHONE_NUMBER,
    label: "Start a Chat",
    url: CONTACT_URL.whatsapp,
    color: "light-dark(#128c7e, #25d366)",
  },
  {
    icon: IconBrandGmail,
    name: "Gmail",
    username: GMAIL,
    label: "Send an Email",
    url: CONTACT_URL.mail,
    color: "light-dark(#c5221f, #ea4335)",
  },
  {
    icon: IconBrandLinkedin,
    name: "LinkedIn",
    username: USERNAME,
    label: "View My Career",
    url: CONTACT_URL.linkedin,
    color: "light-dark(#0077b5, #00a0dc)",
  },
  {
    icon: IconBrandGithub,
    name: "Github",
    username: USERNAME,
    label: "Explore My Code",
    url: CONTACT_URL.github,
    color: "light-dark(#000000, #ffffff)",
  },
  {
    icon: IconBrandInstagram,
    name: "Instagram",
    username: USERNAME,
    label: "Follow My Journey",
    url: CONTACT_URL.instagram,
    color: "light-dark(#e1306c, #ff4f88)",
  },
];
