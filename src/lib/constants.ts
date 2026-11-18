import type { TopicStatus } from "@/types/learning";

export const STATUS_META: Record<TopicStatus, { label: string; color: string }> = {
  mastered: { label: "Mastered", color: "#16A34A" },
  developing: { label: "Developing", color: "#F59E0B" },
  weak: { label: "Weak", color: "#EF4444" },
  not_assessed: { label: "Not assessed", color: "#64748B" },
};

export const TARGET = { label: "Current target", color: "#22D3EE" } as const;

export const LANDING_NAV = [
  { href: "#how-it-works", label: "How It Works" },
  { href: "#features", label: "Core Features" },
  { href: "#scope", label: "Learning Scope" },
  { href: "#about", label: "About" },
] as const;

export const DEMO_ENTRY_ROUTE = "/onboarding";
