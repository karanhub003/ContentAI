
import instagramLogo from "../assets/Social Icon pack/Instagram Logo.webp"
import birdLogo from "../assets/Social Icon pack/Bird Logo.webp"
import LinkedinLogo from "../assets/Social Icon pack/Linkedin Logo.webp"
import emailLogo from "../assets/Social Icon pack/New Gmail Logo.webp"








export const calendarDays = [
  28, 29, 30,
  1, 2, 3, 4,
  5, 6, 7, 8, 9, 10, 11,
  12, 13, 14, 15, 16, 17, 18,
  19, 20, 21, 22, 23, 24, 25,
  26, 27, 28, 29, 30, 31, 1,
];

export const calendarEvents = [
  {
    id: 1,
    date: 1,
    month: "May",
    time: "10:00 AM",
    title: "AI in Content Marketing",
    platform: "Twitter",
    icon: "fa-twitter",
    type: "social",
    color: "22C55E",
  },
  {
    id: 2,
    date: 3,
    month: "May",
    time: "02:00 PM",
    title: "Product Update Announcement",
    platform: "LinkedIn",
    icon: "fa-linkedin",
    type: "social",
    color:"22C55E" ,
  },
  {
    id: 3,
    date: 6,
    month: "May",
    time: "11:00 AM",
    title: "5 Tips for Better Blog Writing",
    platform: "Blog",
    icon: "fa-file-lines",
    type: "blog",
    color: "22C55E",
  },
  {
    id: 4,
    date: 7,
    month: "May",
    time: "04:30 PM",
    title: "New Template Launch",
    platform: "Instagram",
    icon: "fa-instagram",
    type: "social",
    color: "EF4444",
  },
  {
    id: 5,
    date: 9,
    month: "May",
    time: "10:00 AM",
    title: "Case Study Showcase",
    platform: "Facebook",
    icon: "fa-facebook",
    type: "social",
    color: "3B82F6",
  },
  {
    id: 6,
    date: 12,
    month: "May",
    time: "09:00 AM",
    title: "Weekly Newsletter",
    platform: "Email",
    icon: "fa-envelope",
    type: "email",
    color: "8B5CF6",
  },
  {
    id: 7,
    date: 14,
    month: "May",
    time: "01:00 PM",
    title: "Behind the Scenes",
    platform: "TikTok",
    icon: "fa-tiktok",
    type: "social",
    color: "22C55E",
  },
  {
    id: 8,
    date: 15,
    month: "May",
    time: "11:30 AM",
    title: "How AI Saves Time",
    platform: "Email",
    icon: "fa-envelope",
    type: "email",
    color: "8B5CF6",
  },
  {
    id: 9,
    date: 17,
    month: "May",
    time: "03:00 PM",
    title: "Customer Testimonial",
    platform: "YouTube",
    icon: "fa-youtube",
    type: "video",
    color: "EF4444",
  },
  {
    id: 10,
    date: 20,
    month: "May",
    time: "10:00 AM",
    title: "Blog: Content Strategy",
    platform: "Blog",
    icon: "fa-file-lines",
    type: "blog",
    color: "22C55E",
  },
  {
    id: 11,
    date: 22,
    month: "May",
    time: "02:00 PM",
    title: "Poll: What do you prefer?",
    platform: "Twitter",
    icon: "fa-twitter",
    type: "social",
    color: "3B82F6",
  },
  {
    id: 12,
    date: 24,
    month: "May",
    time: "11:00 AM",
    title: "Product Demo Video",
    platform: "YouTube",
    icon: "fa-youtube",
    type: "video",
    color: "EF4444",
  },
  {
    id: 13,
    date: 28,
    month: "May",
    time: "09:30 AM",
    title: "Industry News Roundup",
    platform: "LinkedIn",
    icon: "fa-linkedin",
    type: "social",
    color: "3B82F6",
  },
  {
    id: 14,
    date: 30,
    month: "May",
    time: "10:00 AM",
    title: "Success Story Highlight",
    platform: "Instagram",
    icon: "fa-instagram",
    type: "social",
    color: "EF4444",
  },
];





export const contentSummary = [
  { name: "Blog Posts", posts: 6, percentage: 25, color: "#4ADE80" },
  { name: "Social Posts", posts: 10, percentage: 41, color: "#3B82F6" },
  { name: "Emails", posts: 3, percentage: 12, color: "#7C3AED" },
  { name: "Videos", posts: 4, percentage: 17, color: "#EF4444" },
  { name: "Other", posts: 1, percentage: 5, color: "#FACC15" },
];

export const upcomingContent = [
  {
    id: 1,
    title: "How AI Can Improve Your Writing",
    platform: "Twitter",
    image: birdLogo,
    imageAlt:"twitter-logo",
    date: "May 16, 2024",
    time: "11:30 AM",
    color: "#3B82F6",
  },
  {
    id: 2,
    title: "Productivity Tips for Creators",
    platform: "Instagram",
    image: instagramLogo,
    imageAlt:"instagram-logo",
    date: "May 17, 2024",
    time: "04:00 PM",
    color: "#A855F7",
  },
  {
    id: 3,
    title: "Weekly Newsletter",
    platform: "Email",
    image: emailLogo,
    imageAlt:"email-logo",
    date: "May 19, 2024",
    time: "09:00 AM",
    color: "#7C3AED",
  },
  {
    id: 4,
    title: "Case Study: 2x Growth with AI",
    platform: "LinkedIn",
    image: LinkedinLogo,
    imageAlt:"linkedin-logo",
    date: "May 20, 2024",
    time: "10:00 AM",
    color: "#2563EB",
  },
];