"use client";

import Image from "next/image";
import { useState } from "react";
import { navigation } from "../../data/navigation";
import type {
  DropdownItem,
  NavEntry,
  PictorialIcon,
} from "../../types/navigation";

const chevronWidth = 10;
const chevronHeight = 6;
const menuIconWidth = 32;
const menuIconHeight = 18;
const closeIconWidth = 26;
const closeIconHeight = 26;

const dropdownIconSize: Record<
  PictorialIcon,
  { width: number; height: number }
> = {
  "/icons/icon-checklist.png": { width: 14, height: 16 },
  "/icons/icon-calendar.png": { width: 32, height: 32 },
  "/icons/icon-bell.png": { width: 13, height: 17 },
  "/icons/icon-clock.png": { width: 16, height: 16 },
};

const textClass = "font-medium whitespace-nowrap text-gray-500";
const outlineClass =
  "inline-flex h-[42px] items-center justify-center rounded-full border border-gray-950 px-3.5 font-medium whitespace-nowrap text-gray-950";
const triggerClass =
  "flex items-center gap-2 font-medium whitespace-nowrap text-gray-500";
const desktopPanelClass =
  "absolute top-full z-30 mt-3 flex min-w-max flex-col gap-4 rounded-[10px] bg-white p-6 shadow-[0_10px_20px_rgb(20_20_20/0.12)]";
const mobilePanelClass = "ml-6 flex flex-col items-start gap-4";

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

  function isExpanded(entry: Extract<NavEntry, { kind: "dropdown" }>) {
    return entry.id === "features" ? featuresOpen : companyOpen;
  }

  function renderTrigger(
    entry: Extract<NavEntry, { kind: "dropdown" }>,
    surface: "desktop" | "mobile",
  ) {
    const expanded = isExpanded(entry);
    const toggle = entry.id === "features" ? toggleFeatures : toggleCompany;
    const panelId =
      surface === "desktop"
        ? `${entry.id}-dropdown`
        : `mobile-${entry.id}-dropdown`;
    const panelVisible = expanded && (surface === "mobile" || !mobileOpen);

    return (
      <button
        type="button"
        className={triggerClass}
        aria-expanded={expanded}
        aria-controls={panelVisible ? panelId : undefined}
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

  function renderDropdownItem(item: DropdownItem) {
    const icon = "icon" in item ? item.icon : null;

    return (
      <button
        type="button"
        className="flex items-center gap-4 text-left font-medium whitespace-nowrap text-gray-500"
      >
        {icon ? (
          <Image
            src={icon}
            alt=""
            width={dropdownIconSize[icon].width}
            height={dropdownIconSize[icon].height}
            className={
              icon === "/icons/icon-calendar.png" ? "-mx-[7px] -my-2" : undefined
            }
          />
        ) : null}
        {item.label}
      </button>
    );
  }

  function renderDropdownPanel(
    entry: Extract<NavEntry, { kind: "dropdown" }>,
    surface: "desktop" | "mobile",
  ) {
    if (!isExpanded(entry)) {
      return null;
    }

    const desktop = surface === "desktop";

    return (
      <ul
        key={entry.id}
        id={desktop ? `${entry.id}-dropdown` : `mobile-${entry.id}-dropdown`}
        className={
          desktop
            ? `${desktopPanelClass} ${entry.id === "features" ? "right-0" : "left-0"}`
            : mobilePanelClass
        }
      >
        {entry.items.map((item) => (
          <li key={item.label}>{renderDropdownItem(item)}</li>
        ))}
      </ul>
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
      <div className="flex min-w-0 flex-1 items-center text-base">
        <nav
          aria-label="Primary navigation"
          className="hidden min-w-0 flex-1 items-center gap-10 min-[904px]:flex"
        >
          {navigation.entries.map((entry, index) => {
            const accountOffset = index === firstAccountIndex ? "ml-auto" : "";

            if (entry.kind === "dropdown") {
              return (
                <span
                  key={entry.id}
                  className={["relative", accountOffset].filter(Boolean).join(" ")}
                >
                  {renderTrigger(entry, "desktop")}
                  {mobileOpen ? null : renderDropdownPanel(entry, "desktop")}
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
            className="ml-auto shrink-0 min-[904px]:hidden"
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
          <nav
            aria-label="Primary navigation"
            className="fixed inset-y-0 right-0 z-50 flex w-[64%] flex-col bg-white p-6"
          >
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
            <div className="mt-7 flex flex-col items-start gap-4">
              {navigation.entries
                .filter((entry) => entry.group === "primary")
                .map((entry) =>
                  entry.kind === "dropdown" ? (
                    <div
                      key={entry.id}
                      className="flex flex-col items-start gap-4"
                    >
                      {renderTrigger(entry, "mobile")}
                      {renderDropdownPanel(entry, "mobile")}
                    </div>
                  ) : (
                    <span key={entry.label}>{renderAction(entry)}</span>
                  ),
                )}
            </div>
            <div className="mt-6 flex flex-col items-center gap-4">
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
          </nav>
        </>
      ) : null}
    </>
  );
}
