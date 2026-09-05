export const categoryIds = ["astar-built"] as const;

export type CategoryId = (typeof categoryIds)[number];
export type AvailabilityState = "yes" | "partial" | "no" | "not-applicable" | "unknown";

export type Category = {
  id: CategoryId;
  name: string;
  description: string;
};

export type Tool = {
  id: string;
  name: string;
  url: string;
  sourceUrl?: string;
  category: CategoryId;
  description: string;
  why: string;
  tags: readonly string[];
  openSource: {
    state: AvailabilityState;
    label: string;
  };
  selfHosting: {
    state: AvailabilityState;
    label: string;
  };
  lastReviewed: `${number}-${number}-${number}`;
};

export const categories: readonly Category[] = [
  {
    id: "astar-built",
    name: "Astar-built tools",
    description: "Open-source systems made by Astar and published for others to inspect, use and improve.",
  },
];

export const tools = [
  {
    id: "nm-ai-platform",
    name: "NM AI Platform",
    url: "https://github.com/astar-as/nm-ai-platform",
    sourceUrl: "https://github.com/astar-as/nm-ai-platform",
    category: "astar-built",
    description: "A task-agnostic platform for running AI competitions with reusable challenge infrastructure.",
    why: "It publishes the operational shell for fair, repeatable AI challenges instead of hiding it behind an event site.",
    tags: ["competitions", "evaluation", "Astar"],
    openSource: { state: "yes", label: "Yes · MIT" },
    selfHosting: { state: "yes", label: "Yes" },
    lastReviewed: "2026-09-03",
  },
] as const satisfies readonly Tool[];
