import adCopy from "../assets/Template Img/adcopy.webp";
import blogpost from "../assets/Template Img/blogpost.webp";
import scoialMedia from "../assets/Template Img/socialMedia.webp";
import content from "../assets/Template Img/content.webp";
import email from "../assets/Template Img/email.webp";
import product from "../assets/Template Img/product.webp";

// all template images
import ideaImg from "../assets/Template Img/how.webp";
import caseImg from "../assets/Template Img/case.webp";
import faqImg from "../assets/Template Img/faq.webp";
import listicleImg from "../assets/Template Img/listicle.webp";
import problemImg from "../assets/Template Img/problem.webp";
import quoteImg from "../assets/Template Img/quote.webp";
import testimonialImg from "../assets/Template Img/testimonial.webp";
import topicImg from "../assets/Template Img/topic.webp";
import videoImg from "../assets/Template Img/video.webp";

export const templates = [
  {
    id: 1,
    title: "Blog Post Outline",
    description: "Create a detailed outline for your blog post.",
    image: blogpost,
    imageAlt: "blogPost",
    iconBg: "#047857",
    uses: "12.4K",
  },
  {
    id: 2,
    title: "Social Media Post",
    description: "Generate engaging posts for any platform.",
    image: scoialMedia,
    imageAlt: "socialMedia",
    iconBg: "#4C1D95",
    uses: "11.2K",
  },
  {
    id: 3,
    title: "Email Newsletter",
    description: "Write compelling newsletters that convert.",
    image: email,
    imageAlt: "email",
    iconBg: "#075985",
    uses: "9.8K",
  },
  {
    id: 4,
    title: "Ad Copy (AIDA)",
    description: "Create high-converting ad copy using AIDA.",
    image: adCopy,
    imageAlt: "adCopy",
    iconBg: "#92400E",
    uses: "8.7K",
  },
  {
    id: 5,
    title: "Product Description",
    description: "Craft persuasive product descriptions.",
    image: product,
    imageAlt: "product",
    iconBg: "#0F766E",
    uses: "7.6K",
  },
  {
    id: 6,
    title: "Content Rewriter",
    description: "Rewrite content to improve clarity.",
    image: content,
    imageAlt: "contentWirtter",
    iconBg: "#831843",
    uses: "6.3K",
  },
];

export const templateCategories = [
  {
    id: 1,
    name: "All",
    value: 48,
  },
  {
    id: 2,
    name: "Blog",
    value: 12,
  },
  {
    id: 3,
    name: "Social Media",
    value: 9,
  },
  {
    id: 4,
    name: "Email",
    value: 6,
  },
  {
    id: 5,
    name: "Marketing",
    value: 8,
  },
  {
    id: 6,
    name: "E-commerce",
    value: 5,
  },
  {
    id: 7,
    name: "SEO",
    value: 4,
  },
  {
    id: 8,
    name: "Video",
    value: 3,
  },
  {
    id: 9,
    name: "Other",
    value: 1,
  },
];

export const allTemplates = [
  {
    id: 1,
    title: "How-To Guide",
    description: "Step-by-step guides to help your audience solve problems.",
    image: ideaImg,
    imageAlt: "ideaImg",
    category: "Blog",
    platform: "All",
    uses: "5.4K",
  },
  {
    id: 2,
    title: "Listicle",
    description: "Create engaging list-based articles and posts.",
    image: listicleImg,
    imageALt: "listicleImg",
    category: "Blog",
    platform: "All",
    uses: "4.8K",
  },
  {
    id: 3,
    title: "Quote Post",
    description: "Turn quotes into beautiful and shareable posts.",
    image: quoteImg,
    imageAlt: "quoteImg",
    category: "Social Media",
    platform: "Instagram",
    uses: "4.2K",
  },
  {
    id: 4,
    title: "Problem-Agitate-Solve",
    description: "Identify problems, agitate and provide the perfect solution.",
    image: problemImg,
    imageATl: "problemImg",
    category: "Marketing",
    platform: "All",
    uses: "4.1K",
  },
  {
    id: 5,
    title: "Case Study",
    description: "Write detailed case studies that build trust.",
    image: caseImg,
    imageAlt: "caseImg",
    category: "Marketing",
    platform: "All",
    uses: "3.6K",
  },
  {
    id: 6,
    title: "Testimonial",
    description: "Create authentic testimonials that build credibility.",
    image: testimonialImg,
    imageAlt: "testimonialImg",
    category: "Marketing",
    platform: "All",
    uses: "3.2K",
  },
  {
    id: 7,
    title: "FAQ Generator",
    description: "Generate frequently asked questions about any topic.",
    image: faqImg,
    imageAlt: "faqImg",
    category: "SEO",
    platform: "All",
    uses: "2.9K",
  },
  {
    id: 8,
    title: "Video Script",
    description: "Create engaging scripts for your videos.",
    image: videoImg,
    imageAlt: "videoImg",
    category: "Video",
    platform: "YouTube",
    uses: "2.7K",
  },
  {
    id: 9,
    title: "Topic Ideas",
    description: "Generate trending topic ideas for your content.",
    image: topicImg,
    imageAlt: "topicImg",
    category: "Blog",
    platform: "All",
    uses: "2.5K",
  },
];

export const templateSummary = [
  { name: "Blog ", usage: 25, percentage: 52, color: "#4ADE80" },
  { name: "Social Media", usage: 10, percentage: 21, color: "#3B82F6" },
  { name: "Email", usage: 6, percentage: 13, color: "#7C3AED" },
  { name: "Marketing", usage: 5, percentage: 10, color: "#EF4444" },
  { name: "Videos", usage: 2, percentage: 4, color: "#FACC15" },
];
