"use client";

import Image from "next/image";
import { useState } from "react";
import { navigation } from "../../data/navigation";

const chevronWidth = 10;
const chevronHeight = 6;

export default function Navbar() {
  const [mobileOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);

  const firstAccountIndex = navigation.entries.findIndex(
    (entry) => entry.group === "account",
  );

  function toggleFeatures() {
    setFeaturesOpen((open) => !open);
  }

  function toggleCompany() {
    setCompanyOpen((open) => !open);
  }

  return (
    <nav
      aria-label="Primary navigation"
      className="flex min-w-0 flex-1 items-center gap-8"
      data-mobile-open={mobileOpen ? "true" : "false"}
    >
      {navigation.entries.map((entry, index) => {
        const accountOffset = index === firstAccountIndex ? "ml-auto" : "";

        if (entry.kind === "dropdown") {
          const expanded = entry.id === "features" ? featuresOpen : companyOpen;
          const toggle = entry.id === "features" ? toggleFeatures : toggleCompany;

          return (
            <button
              key={entry.id}
              type="button"
              className={[
                accountOffset,
                "flex items-center gap-2 font-medium text-gray-500",
              ]
                .filter(Boolean)
                .join(" ")}
              aria-expanded={expanded}
              onClick={toggle}
            >
              {entry.label}
              <Image
                src={
                  expanded
                    ? "/icons/icon-chevron-up.png"
                    : "/icons/icon-chevron-down.png"
                }
                alt=""
                width={chevronWidth}
                height={chevronHeight}
              />
            </button>
          );
        }

        return (
          <button
            key={entry.label}
            type="button"
            className={[
              accountOffset,
              entry.treatment === "outline"
                ? "rounded-full border border-gray-950 px-5 py-2 font-medium text-gray-950"
                : "font-medium text-gray-500",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            {entry.label}
          </button>
        );
      })}
    </nav>
  );
}
