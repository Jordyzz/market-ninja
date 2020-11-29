import iconsMap from "@components/Icon/iconsMap";

interface MenuItem {
  label: string;
  route: string;
  icon: keyof typeof iconsMap;
}

export const menuItems: MenuItem[] = [
  {
    label: "Home",
    route: "/home",
    icon: "dashboard",
  },
  {
    label: "Markets",
    route: "/markets",
    icon: "market",
  },
  {
    label: "Transaction History",
    route: "/transaction-history",
    icon: "history",
  },
];
