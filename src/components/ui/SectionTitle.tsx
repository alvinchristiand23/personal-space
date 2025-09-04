import { cn } from "@/utils/cn";

interface Props {
  title: string;
  sectionNumber: string;
  className?: string;
}

export default function SectionTitle({ title, sectionNumber, className }: Props) {
  return (
    <div
      className={cn(
        "bg-root sticky top-0 z-20 flex flex-col pt-8 pb-8 lg:top-8 lg:pt-0",
        className,
      )}
    >
      <p className="supporting-text">Section {sectionNumber}</p>
      <h2 className="heading-section">{title}</h2>
    </div>
  );
}
