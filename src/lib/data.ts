// Single source of truth for site content — transcribed directly from
// Kavya Raval's resume. Do not add facts, numbers, or claims not present there.

export const profile = {
  name: "Kavya Raval",
  role: "Data Analyst",
  rolesLong: "Product Analytics · Data Analytics · Product Management",
  location: "MPSTME, NMIMS University",
  email: "kavyaraval543@gmail.com",
  phone: "+91-8779827984",
  linkedin: "https://www.linkedin.com/in/kavya-raval1306/",
  github: "https://github.com/kavyaraval543-gif",
  resumeHref: "/kavya-raval-resume.pdf",
  tagline:
    "I turn raw data into structured, decision-ready insight — SQL, dashboards, and analysis that ship real outcomes.",
  summary:
    "Product- and data-minded builder who turns structured analysis (SQL, Power BI, RICE/MoSCoW) into shipped outcomes — from diagnosing a product trust deficit using 100+ user reviews to leading delivery of a full-stack platform now running 65+ concurrent projects. Comfortable working across the full loop: research, data, prioritization, and execution.",
  heroSkills: ["SQL", "Python", "Excel", "Tableau"],
} as const;

export const education = {
  school: "MPSTME, NMIMS University",
  degree: "B.Tech, Electronics & Telecommunication Engineering",
  period: "2023 – 2027",
  gpa: "3.1 / 4.0",
} as const;

export const experience = {
  company: "Galaxy Home Automation LLP",
  teamNote: "20-person team",
  title: "Project Management Intern",
  period: "May 2026 – Jul 2026",
  points: [
    "Analyzed cross-team workflows and stakeholder feedback to scope a platform now running 65+ concurrent projects, cutting manual task-tracking time by 30%",
    "Built real-time KPI dashboards and automated reporting workflows, replacing scattered updates with a single source of truth and cutting reporting delays by 45%",
    "Identified a manual bottleneck in the quotation process, then redesigned the workflow with the AI team — cutting turnaround from 4–5 hrs to 1–2 hrs",
  ],
  metrics: [
    { value: "65+", label: "concurrent projects" },
    { value: "30%", label: "less manual tracking time" },
    { value: "45%", label: "fewer reporting delays" },
    { value: "4–5h → 1–2h", label: "quotation turnaround" },
  ],
} as const;

export type Project = {
  number: string;
  name: string;
  tag: string;
  question: string;
  data: string;
  tools: string[];
  analysis: string;
  insight: string;
  role?: string;
};

export const projects: Project[] = [
  {
    number: "01",
    name: "CRED Engagement & Trust",
    tag: "Product Case Study",
    question:
      "Why does CRED's gamified reward mechanic underperform on trust with users?",
    data: "100+ user reviews across App Store, Trustpilot, and product teardowns",
    tools: ["Qualitative coding", "RICE scoring", "A/B test design"],
    analysis:
      "Diagnosed a trust deficit in the gamified reward mechanic, then RICE-scored three candidate fixes to force-rank them by impact vs. effort.",
    insight:
      "Top fix scored 144 vs. 77 and 15 for the alternatives — proposed validating it with an A/B test on a 10–15% holdout.",
  },
  {
    number: "02",
    name: "Olist E-Commerce Sales Dashboard",
    tag: "BI Dashboard",
    question:
      "How is revenue distributed across a 9-table e-commerce dataset, and where should the business look first?",
    data: "99K+ orders, 96K+ customers across a 9-table relational model",
    tools: ["Power BI", "SQL", "DAX"],
    analysis:
      "Modeled the 9-table schema and built DAX measures to surface revenue, order, and customer trends in an interactive BI dashboard.",
    insight: "Tracked $16M+ in revenue across the full order history.",
  },
  {
    number: "03",
    name: "Credit Card Loan Portfolio — Risk Analysis",
    tag: "Risk Analysis",
    question:
      "What actually drives default in a large consumer credit portfolio?",
    data: "150K loans, $1.98B portfolio",
    tools: ["SQL", "Excel risk scorecard"],
    analysis:
      "Built a SQL + Excel scorecard segmenting the portfolio by risk factors to isolate the strongest predictor of default.",
    insight:
      "Credit utilization was the top default driver (32.5% vs. 6.0%) — proposed underwriting changes projected to cut portfolio losses by ~$60M.",
  },
  {
    number: "04",
    name: "Project Management System — Galaxy Home Automation CRM",
    tag: "Full-Stack · Project Lead",
    role: "Project Lead",
    question:
      "Can one platform replace scattered spreadsheets and manual reporting across 65+ live projects?",
    data: "Live operational data across concurrent client projects, quotations, and KPIs",
    tools: ["React / Next.js", "Python / Flask", "PostgreSQL / Supabase", "Vercel"],
    analysis:
      "Designed and built a full-stack CRM centralizing project tracking, a quotation builder, real-time KPI dashboards, and automated notifications.",
    insight: "Now running 65+ concurrent projects in production.",
  },
  {
    number: "05",
    name: "AI Equity Trader",
    tag: "Applied ML · Project Lead",
    role: "Project Lead",
    question:
      "Can short-term trading opportunities be identified systematically from market data rather than discretion?",
    data: "Live and historical market data via market-data APIs",
    tools: ["Python", "Market-data APIs", "Git / GitHub"],
    analysis:
      "Owned system architecture, trading logic, and data analysis through iterative development, favoring repeated small trades over a single long-term thesis.",
    insight: "Currently in Phase 5/6 of iterative development.",
  },
];

export const leadership = [
  {
    role: "Sub-Head, R&D",
    org: "TechSafar 2026 — State-Level R&D Techfest, IEEE NMIMS MPSTME Student Branch",
    period: "Apr 2026",
    note: "Certificate of Appreciation from the Dean",
  },
  {
    role: "Organising Committee Member",
    org: "Taqneeq 18.0 — Tech Fest, NMIMS MPSTME",
    period: "Mar 2026",
    note: "Coordinated a 4-day, multi-team fest",
  },
  {
    role: "Advisory Member",
    org: "Team DARVIN, MPSTME",
    period: "2026",
    note: "Supported the team representing NMIMS University at the Intelligent Ground Vehicle Competition (IGVC) 2026, Oakland University, USA",
  },
];

export const certifications = [
  { name: "IBM AI Product Management", org: "IBM", period: "In Progress" },
  { name: "SQL (Intermediate)", org: "HackerRank", period: "Jul 2026" },
  { name: "SQL (Basic)", org: "HackerRank", period: "Jul 2026" },
  { name: "GenAI Powered Data Analytics", org: "Tata (Forage)", period: "Apr 2026" },
  { name: "Product Management Basics", org: "SimpliLearn SkillUp", period: "Jul 2026" },
  { name: "Scrum Fundamentals Certified (SFC)", org: "SCRUMstudy", period: "Mar 2026" },
  { name: "Project Manager Job Simulation", org: "Siemens (Forage)", period: "Jan 2026" },
] as const;

export const skills = {
  "Product & Data Analytics": [
    "SQL",
    "Power BI",
    "Tableau",
    "Python (Pandas, NumPy)",
    "DAX",
    "A/B Testing",
    "RICE / MoSCoW Prioritization",
    "Exploratory Data Analysis",
  ],
  "Cross-Functional & Process": [
    "Requirements Gathering",
    "Stakeholder Management",
    "Agile / Scrum",
    "Product Roadmaps",
  ],
  Tools: ["Excel (Advanced)", "Git / GitHub", "Jira", "Notion", "REST APIs"],
} as const;

export const achievements = [
  "Selected among the Top Teams for Stage 2 of Tata Technologies InnoVent-27, out of 7,000+ project submissions from 20,000+ students across 500+ colleges",
  "Won 1st place at NMIMS Indore's inter-campus tech fest, representing the Mumbai campus",
  "Secured 2nd place in the AI Whisperer competition at NMIMS Indore's tech fest",
  "Smart India Hackathon (SIH) 2024 — Participant, Government of India",
  "Scored 91.64 percentile nationally in ISWDP Level 1 — Samsung Semiconductor x IISc x Synopsys",
] as const;

export const nav = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
] as const;
