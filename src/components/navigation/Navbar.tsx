"use client";

import Image from "next/image";
import { useState } from "react";
import { navigation } from "../../data/navigation";
import type { NavEntry } from "../../types/navigation";

const chevronWidth = 10;
const chevronHeight = 6;
const menuIconWidth = 32;
const menuIconHeight = 18;
const closeIconWidth = 26;
const closeIconHeight = 26;

const textClass = "font-medium text-gray-500";
const outlineClass =
  "rounded-full border border-gray-950 px-5 py-2 font-medium text-gray-950";
const triggerClass = "flex items-center gap-2 font-medium text-gray-500";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
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

  function renderTrigger(entry: Extract<NavEntry, { kind: "dropdown" }>) {
    const expanded = entry.id === "features" ? featuresOpen : companyOpen;
    const toggle = entry.id === "features" ? toggleFeatures : toggleCompany;

    return (
      <button
        type="button"
        className={triggerClass}
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

  function renderAction(
    entry: Extract<NavEntry, { kind: "link" }>,
    className = "",
  ) {
    return (
      <button
        type="button"
        className={[
          entry.treatment === "outline" ? outlineClass : textClass,
          className,
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {entry.label}
      </button>
    );
  }

  return (
    <>
      <div className="flex min-w-0 flex-1 items-center gap-8">
        <nav
          aria-label="Primary navigation"
          className="flex min-w-0 flex-1 items-center gap-8 overflow-hidden"
        >
          {navigation.entries.map((entry, index) => {
            const accountOffset = index === firstAccountIndex ? "ml-auto" : "";

            if (entry.kind === "dropdown") {
              return (
                <span key={entry.id} className={accountOffset}>
                  {renderTrigger(entry)}
                </span>
              );
            }

            return (
              <span key={entry.label} className={accountOffset}>
                {renderAction(entry)}
              </span>
            );
          })}
        </nav>
        {mobileOpen ? null : (
          <button
            type="button"
            className="shrink-0"
            aria-label="Open menu"
            aria-expanded={false}
            onClick={() => setMobileOpen(true)}
          >
            <Image
              src="/icons/icon-menu.png"
              alt=""
              width={menuIconWidth}
              height={menuIconHeight}
            />
          </button>
        )}
      </div>
      {mobileOpen ? (
        <>
          <div
            className="fixed inset-0 z-40 bg-gray-950/75"
            aria-hidden="true"
          />
          <div className="fixed inset-y-0 right-0 z-50 flex w-[64%] flex-col bg-white p-6">
            <button
              type="button"
              className="self-end"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
            >
              <Image
                src="/icons/icon-close.png"
                alt=""
                width={closeIconWidth}
                height={closeIconHeight}
              />
            </button>
            <div className="mt-8 flex flex-col items-start gap-4">
              {navigation.entries
                .filter((entry) => entry.group === "primary")
                .map((entry) =>
                  entry.kind === "dropdown" ? (
                    <span key={entry.id}>{renderTrigger(entry)}</span>
                  ) : (
                    <span key={entry.label}>{renderAction(entry)}</span>
                  ),
                )}
            </div>
            <div className="mt-8 flex flex-col items-center gap-4">
              {navigation.entries
                .filter((entry) => entry.group === "account")
                .map((entry) => (
                  <span
                    key={entry.label}
                    className={
                      entry.treatment === "outline" ? "w-full" : undefined
                    }
                  >
                    {renderAction(
                      entry,
                      entry.treatment === "outline" ? "w-full" : "",
                    )}
                  </span>
                ))}
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
