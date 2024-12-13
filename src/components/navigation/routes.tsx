import {
  Bug,
  Flag,
  FolderKanban,
  Home,
  Inbox,
  Layers,
  Settings,
  Store,
  Trophy,
  User,
  UsersRound,
} from "lucide-react";

export const dashboard_routes = [
  {
    name: "Projects",
    href: "/dashboard/projects",
    icon: <FolderKanban />,
  },
  {
    name: "Leaderboards",
    href: "/dashboard/leaderboards",
    icon: <Trophy />,
  },
  {
    name: "OS Projects",
    href: "/dashboard/osprojects",
    icon: <Layers />,
  },
  {
    name: "Inbox",
    href: "/dashboard/inbox",
    icon: <Inbox />,
  },
  {
    name: "Teams",
    href: "/dashboard/teams",
    icon: <UsersRound />,
  },

  {
    name: "Members",
    href: "/dashboard/members",
    icon: <UsersRound />,
  },
  {
    name: "Challenges",
    href: "/dashboard/challenges",
    icon: <Bug />,
  },
  {
    name: "Hackathons",
    href: "/dashboard/hackathons",
    icon: <Flag />,
  },
] as const;

export const routes = [
  {
    name: "Home",
    href: "/",
    icon: <Home />,
    children: undefined,
  },
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: <Store />,
    children: dashboard_routes,
  },
  {
    name: "Profile",
    href: "/profile",
    icon: <User />,
    children: undefined,
  },
  {
    name: "Settings",
    href: "/settings",
    icon: <Settings />,
    children: undefined,
  },
] as const;

export const landingPageRoutes = [
  { name: "about us", href: "https://www.spaceyatech.com/about-us" },
  { name: "resources", href: "https://www.spaceyatech.com/resources" },
  { name: "colabs", href: "/dashboard" },
  { name: "products", href: "https://www.spaceyatech.com/products" },
  { name: "blog", href: "https://www.spaceyatech.com/blogs" },
];
