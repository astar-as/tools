export const categoryIds = ["ai-assistants", "deployment-operations", "identity-access", "astar-built"] as const;

export type CategoryId = (typeof categoryIds)[number];
export type AvailabilityState = "yes" | "partial" | "mixed" | "no" | "not-applicable" | "unknown";

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
    id: "ai-assistants",
    name: "AI assistants",
    description: "General-purpose interfaces for working with language models across research, writing and analysis.",
  },
  {
    id: "deployment-operations",
    name: "Deployment and operations",
    description: "Tools for shipping, observing and operating useful AI systems.",
  },
  {
    id: "identity-access",
    name: "Identity and access",
    description: "Authentication, authorization and enterprise identity infrastructure.",
  },
  {
    id: "astar-built",
    name: "Astar-built tools",
    description: "Open-source systems made by Astar and published for others to inspect, use and improve.",
  },
];

export const tools = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    url: "https://chatgpt.com/",
    category: "ai-assistants",
    description: "A general-purpose AI assistant for conversation, writing, research, analysis, coding and working with files.",
    why: "A useful baseline for evaluating how a general-purpose assistant handles mixed everyday and professional tasks.",
    tags: ["assistant", "multimodal", "research"],
    openSource: { state: "no", label: "No · hosted product" },
    selfHosting: { state: "no", label: "No" },
    lastReviewed: "2026-09-05",
  },
  {
    id: "claude",
    name: "Claude",
    url: "https://claude.ai/",
    category: "ai-assistants",
    description: "Anthropic’s AI assistant for conversation, analysis, writing, coding and working with files.",
    why: "Another major assistant environment for comparing interaction patterns and knowledge-work workflows.",
    tags: ["assistant", "documents", "coding"],
    openSource: { state: "no", label: "No · hosted product" },
    selfHosting: { state: "no", label: "No" },
    lastReviewed: "2026-09-05",
  },
  {
    id: "grok",
    name: "Grok",
    url: "https://grok.com/",
    category: "ai-assistants",
    description: "xAI’s assistant for chat, file analysis, voice, and image and video creation.",
    why: "A distinct assistant product with connected, conversational and media-generation workflows.",
    tags: ["assistant", "multimodal", "media"],
    openSource: { state: "no", label: "No · hosted product" },
    selfHosting: { state: "no", label: "No" },
    lastReviewed: "2026-09-05",
  },
  {
    id: "vercel",
    name: "Vercel",
    url: "https://vercel.com/",
    sourceUrl: "https://github.com/vercel/vercel",
    category: "deployment-operations",
    description: "A managed platform for building and deploying web applications with preview and production environments.",
    why: "It makes deployment review, promotion and rollback explicit parts of a web delivery workflow.",
    tags: ["hosting", "deployments", "web"],
    openSource: { state: "mixed", label: "Mixed · CLI Apache-2.0; platform proprietary" },
    selfHosting: { state: "no", label: "No · managed platform" },
    lastReviewed: "2026-09-05",
  },
  {
    id: "grafana",
    name: "Grafana",
    url: "https://grafana.com/oss/grafana/",
    sourceUrl: "https://github.com/grafana/grafana",
    category: "deployment-operations",
    description: "An interface for exploring and presenting metrics, logs, traces and other operational data.",
    why: "A practical surface for making system behaviour visible to the people operating it.",
    tags: ["observability", "dashboards", "operations"],
    openSource: { state: "yes", label: "Yes · AGPL-3.0" },
    selfHosting: { state: "yes", label: "Yes" },
    lastReviewed: "2026-09-05",
  },
  {
    id: "workos",
    name: "WorkOS",
    url: "https://workos.com/",
    sourceUrl: "https://github.com/workos",
    category: "identity-access",
    description: "Authentication infrastructure spanning user management, enterprise SSO, directory sync, RBAC and audit logs.",
    why: "Useful when an application needs enterprise identity features without building each provider integration separately.",
    tags: ["authentication", "SSO", "directory sync"],
    openSource: { state: "mixed", label: "Mixed · SDKs open source; platform proprietary" },
    selfHosting: { state: "no", label: "No · managed platform" },
    lastReviewed: "2026-09-05",
  },
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
