import { cn } from "@/lib/cn";

export function Section({
  children,
  className,
  bleed = false,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  bleed?: boolean;
  id?: string;
}) {
  return (
    <section id={id} className={cn("py-12 md:py-16", className)}>
      <div className={cn(bleed ? "" : "mx-auto max-w-7xl px-4")}>{children}</div>
    </section>
  );
}
