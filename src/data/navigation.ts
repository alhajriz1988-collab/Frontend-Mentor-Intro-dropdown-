import type { NavigationModel } from "../types/navigation";

export const navigation = {
  entries: [
    {
      kind: "dropdown",
      id: "features",
      label: "Features",
      group: "primary",
      items: [
        { label: "Todo List", icon: "/icons/icon-checklist.png" },
        { label: "Calendar", icon: "/icons/icon-calendar.png" },
        { label: "Reminders", icon: "/icons/icon-bell.png" },
        { label: "Planning", icon: "/icons/icon-clock.png" },
      ],
    },
    {
      kind: "dropdown",
      id: "company",
      label: "Company",
      group: "primary",
      items: [
        { label: "History" },
        { label: "Our Team" },
        { label: "Blog" },
      ],
    },
    {
      kind: "link",
      label: "Careers",
      group: "primary",
      treatment: "text",
    },
    {
      kind: "link",
      label: "About",
      group: "primary",
      treatment: "text",
    },
    {
      kind: "link",
      label: "Login",
      group: "account",
      treatment: "text",
    },
    {
      kind: "link",
      label: "Register",
      group: "account",
      treatment: "outline",
    },
  ],
} as const satisfies NavigationModel;
