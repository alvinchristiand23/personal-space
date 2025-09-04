import { TablerIcon } from "@tabler/icons-react";

export type TechLevel = "Beg" | "Int" | "Adv";

export interface TechStackItem {
  logo: TablerIcon | React.FC<React.SVGProps<SVGSVGElement>>;
  color: string;
  name: string;
  level: TechLevel;
}
