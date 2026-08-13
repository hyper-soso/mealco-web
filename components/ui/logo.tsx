import { croissantOne } from "@/lib/fonts";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

export function Logo({ className }: Props) {
  return (
    <div className={cn(croissantOne.className, "text-brand-400", className)}>
      mealco
    </div>
  );
}
