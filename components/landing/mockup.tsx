import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export function Mockup({ children, className }: Props) {
  return (
    <div
      className={cn(
        "z-50 p-1.5 w-72 shrink-0 rounded-lg bg-neutral-800 shadow-2xl",
        className,
      )}
    >
      <div className="relative aspect-1080/2340 w-full overflow-hidden rounded-lg bg-background">
        <div className="absolute top-4 left-1/2 -translate-x-1/2 h-4 w-12 rounded-full bg-neutral-800" />
        {children}
      </div>
    </div>
  );
}
