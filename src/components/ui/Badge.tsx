import { cn } from "@/lib/utils";

const tones = {
  neutral: "bg-white/[0.05] text-muted border-line",
  purple: "bg-purple/12 text-[#c4b5fd] border-purple/30",
  cyan: "bg-cyan/10 text-cyan border-cyan/30",
  success: "bg-success/12 text-[#4ade80] border-success/30",
  warning: "bg-warning/12 text-[#fbbf24] border-warning/30",
  error: "bg-error/12 text-[#f87171] border-error/30",
} as const;

export type BadgeTone = keyof typeof tones;

export function Badge({
  tone = "neutral",
  className,
  children,
}: {
  tone?: BadgeTone;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
