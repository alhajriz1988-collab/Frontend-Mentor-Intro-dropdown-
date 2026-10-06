export type PictorialIcon =
  | "/icons/icon-checklist.png"
  | "/icons/icon-calendar.png"
  | "/icons/icon-bell.png"
  | "/icons/icon-clock.png";

export interface FeaturesDropdownItem {
  label: "Todo List" | "Calendar" | "Reminders" | "Planning";
  icon: PictorialIcon;
}

export interface CompanyDropdownItem {
  label: "History" | "Our Team" | "Blog";
}

export type DropdownItem = FeaturesDropdownItem | CompanyDropdownItem;

export interface FeaturesDropdown {
  kind: "dropdown";
  id: "features";
  label: "Features";
  group: "primary";
  items: readonly FeaturesDropdownItem[];
}

export interface CompanyDropdown {
  kind: "dropdown";
  id: "company";
  label: "Company";
  group: "primary";
  items: readonly CompanyDropdownItem[];
}

export type TopLevelLink =
  | {
      kind: "link";
      label: "Careers";
      group: "primary";
      treatment: "text";
    }
  | {
      kind: "link";
      label: "About";
      group: "primary";
      treatment: "text";
    }
  | {
      kind: "link";
      label: "Login";
      group: "account";
      treatment: "text";
    }
  | {
      kind: "link";
      label: "Register";
      group: "account";
      treatment: "outline";
    };

export type NavEntry = FeaturesDropdown | CompanyDropdown | TopLevelLink;

export interface NavigationModel {
  entries: readonly NavEntry[];
}
