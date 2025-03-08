import {
  BarChart2,
  Calendar,
  FileText,
  LayoutDashboard,
  Mail,
  PlusSquare,
  Settings,
  Users,
} from "lucide-react";

export const salesData = [
  { name: "Jan", value: 1200 },
  { name: "Feb", value: 1900 },
  { name: "Mar", value: 2400 },
  { name: "Apr", value: 1800 },
  { name: "May", value: 2800 },
  { name: "Jun", value: 3800 },
  { name: "Jul", value: 3500 },
];

export const userActivityData = [
  { name: "Jan", value: 500 },
  { name: "Feb", value: 700 },
  { name: "Mar", value: 900 },
  { name: "Apr", value: 1200 },
  { name: "May", value: 1500 },
  { name: "Jun", value: 1700 },
  { name: "Jul", value: 1900 },
];

export const recentActivities = [
  {
    id: "1",
    title: "New User Registration",
    description: "Sarah Johnson has created a new account.",
    time: "2 hours ago",
    status: "completed" as const,
  },
  {
    id: "2",
    title: "Product Update",
    description: "New inventory items have been added to the store.",
    time: "3 hours ago",
    status: "completed" as const,
  },
  {
    id: "3",
    title: "Server Maintenance",
    description: "Server updates scheduled for tonight at 2 AM.",
    time: "5 hours ago",
    status: "pending" as const,
  },
  {
    id: "4",
    title: "Analytics Report",
    description: "Monthly analytics report is being generated.",
    time: "6 hours ago",
    status: "in-progress" as const,
  },
];

export const userActivities = [
  {
    id: "1",
    user: {
      name: "Alex Morgan",
      initials: "AM",
    },
    action: "created a new project",
    target: "Website Redesign",
    time: "2 hours ago",
  },
  {
    id: "2",
    user: {
      name: "Taylor Swift",
      initials: "TS",
    },
    action: "commented on",
    target: "Marketing Campaign",
    time: "3 hours ago",
  },
  {
    id: "3",
    user: {
      name: "Chris Johnson",
      initials: "CJ",
    },
    action: "uploaded a file to",
    target: "Project Assets",
    time: "5 hours ago",
  },
  {
    id: "4",
    user: {
      name: "Emily Davis",
      initials: "ED",
    },
    action: "completed task",
    target: "Design Review",
    time: "1 day ago",
  },
];

export const quickActions = [
  {
    id: "1",
    title: "Add User",
    icon: PlusSquare,
    color: "blue" as const,
    onClick: () => console.log("Add User "),
  },
  {
    id: "2",
    title: "New Report",
    icon: FileText,
    color: "green" as const,
    onClick: () => console.log("New Report"),
  },
  {
    id: "3",
    title: "Send Email",
    icon: Mail,
    color: "purple" as const,
    onClick: () => console.log("Send Email "),
  },
  {
    id: "4",
    title: "Schedule",
    icon: Calendar,
    color: "orange" as const,
    onClick: () => console.log("Schedule clicked"),
  },
];
export const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/" },
  { icon: BarChart2, label: "Analytics", path: "/analytics" },
  { icon: Calendar, label: "Calendar", path: "/calendar" },
  { icon: Mail, label: "Messages", path: "/messages" },
  { icon: FileText, label: "Documents", path: "/documents" },
  { icon: Users, label: "Users", path: "/users" },
  { icon: Settings, label: "Settings", path: "/settings" },
];
