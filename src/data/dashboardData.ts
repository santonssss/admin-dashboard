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

// Analytics data
export const trafficData = [
  { name: "Jan", value: 4000 },
  { name: "Feb", value: 3000 },
  { name: "Mar", value: 2000 },
  { name: "Apr", value: 2780 },
  { name: "May", value: 1890 },
  { name: "Jun", value: 2390 },
  { name: "Jul", value: 3490 },
];

export const conversionData = [
  { name: "Jan", value: 2.4 },
  { name: "Feb", value: 3.1 },
  { name: "Mar", value: 2.8 },
  { name: "Apr", value: 3.2 },
  { name: "May", value: 3.6 },
  { name: "Jun", value: 4.1 },
  { name: "Jul", value: 4.3 },
];

export const userSourceData = [
  { name: "Direct", value: 300 },
  { name: "Social", value: 450 },
  { name: "Referral", value: 250 },
  { name: "Search", value: 600 },
  { name: "Other", value: 100 },
];

export const deviceData = [
  { name: "Desktop", value: 55 },
  { name: "Mobile", value: 35 },
  { name: "Tablet", value: 10 },
];

export const performanceData = [
  {
    name: "Jan",
    current: 4000,
    previous: 2400,
  },
  {
    name: "Feb",
    current: 3000,
    previous: 1398,
  },
  {
    name: "Mar",
    current: 2000,
    previous: 1800,
  },
  {
    name: "Apr",
    current: 2780,
    previous: 2908,
  },
  {
    name: "May",
    current: 1890,
    previous: 1800,
  },
  {
    name: "Jun",
    current: 2390,
    previous: 2100,
  },
  {
    name: "Jul",
    current: 3490,
    previous: 2400,
  },
];
// users data
export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: "active" | "inactive";
  avatarUrl?: string;
  dateJoined: string;
}

export const mockUsers: User[] = [
  {
    id: "1",
    name: "Alex Johnson",
    email: "alex@example.com",
    role: "Admin",
    status: "active",
    avatarUrl: "",
    dateJoined: "2023-01-15",
  },
  {
    id: "2",
    name: "Sarah Smith",
    email: "sarah@example.com",
    role: "Editor",
    status: "active",
    avatarUrl: "",
    dateJoined: "2023-02-20",
  },
  {
    id: "3",
    name: "Michael Brown",
    email: "michael@example.com",
    role: "Viewer",
    status: "inactive",
    avatarUrl: "",
    dateJoined: "2023-03-10",
  },
  {
    id: "4",
    name: "Emily Davis",
    email: "emily@example.com",
    role: "Editor",
    status: "active",
    avatarUrl: "",
    dateJoined: "2023-04-05",
  },
  {
    id: "5",
    name: "James Wilson",
    email: "james@example.com",
    role: "Viewer",
    status: "active",
    avatarUrl: "",
    dateJoined: "2023-05-12",
  },
];
