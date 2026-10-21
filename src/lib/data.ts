export const profile = {
  name: "Kavya Raval",
  role: "Product & Project Management",
  degree: "B.Tech, Electronics & Telecommunication Engineering",
  school: "MPSTME, NMIMS University",
  years: "2023 – 2027",
  classOf: "2027",
  email: "kavyaraval543@gmail.com",
  phone: "+91-8779827984",
  linkedin: "https://www.linkedin.com/in/kavya-raval1306/",
  github: "https://github.com/kavyaraval543-gif",
  resumeHref: "/kavya-raval-resume.pdf",
  photo: "/images/kavya-raval.jpg",
  intro:
    "I use customer feedback, data and structured problem-solving to find the real problem, decide what matters most, and ship the fix.",
  about: [
    "I'm an Electronics & Telecommunication engineering student at MPSTME, NMIMS, working where product thinking meets technology. My engineering background helps me work closely with developers; product and project work is where I put it to use.",
    "During my internship at Galaxy Home Automation, I found that project updates were scattered across teams, scoped a single source of truth, and led delivery of the platform that now runs 65+ concurrent projects. Outside work, I write product case studies, from consumer trust at CRED to gate entry at container yards.",
  ],
};

export const heroStats = [
  { value: "65+", label: "concurrent projects on a platform I led delivery of" },
  { value: "−45%", label: "reporting delays after the new dashboards" },
  { value: "1–2h", label: "quotation turnaround, down from 4–5h" },
];

export const marqueeItems = [
  "Product Management",
  "Project Management",
  "Agile / Scrum",
  "Feature Prioritization",
  "SQL",
  "KPI Tracking",
  "Product Documentation",
  "Cross-functional Collaboration",
  "AI Product Concepts",
];

export const experience = {
  company: "Galaxy Home Automation LLP",
  role: "Project Management Intern",
  period: "May 2026 – Jul 2026",
  team: "20-person team",
  points: [
    "Analyzed cross-team workflows and stakeholder feedback, identified scattered project updates as the core problem, and scoped an internal project-tracking platform as a single source of truth.",
    "Led delivery of the platform, adopted across Sales, AI and Operations, with real-time KPI dashboards, automated notifications and a quotation builder. It now supports 65+ concurrent projects.",
    "Found a manual bottleneck in the quotation process and redesigned the workflow with the AI team, cutting turnaround from 4–5 hrs to 1–2 hrs. Built and maintained 20+ quotations/BOQs.",
  ],
  metrics: [
    { value: "65+", label: "concurrent projects tracked" },
    { value: "−45%", label: "reporting delays" },
    { value: "−30%", label: "manual task-tracking time" },
    { value: "1–2h", label: "quotation turnaround, from 4–5h" },
  ],
};

export type ProjectCover =
  | {
      kind: "bars";
      title: string;
      bars: { label: string; value: number; display: string }[];
    }
  | { kind: "screens"; count: number; label: string }
  | { kind: "pipeline"; steps: string[]; highlight: string; label: string }
  | { kind: "image"; src: string; width: number; height: number };

export type Project = {
  number: string;
  name: string;
  type: string;
  summary: string;
  points: string[];
  tools: string[];
  cover: ProjectCover;
  coverAlt: string;
  tone: "mint" | "coral" | "butter" | "paper" | "cobalt";
  href?: string;
};

export const featuredProject = {
  number: "01",
  name: "YardFlow",
  subtitle: "Digital yard entry and slot management",
  type: "Product case study · Retrospective",
  status: ["Prototype · never deployed", "Problem hypothesis · not yet validated"],
  promise:
    "Every truck at the gate is either verified and gate-confirmed, or refused or escalated with a logged reason.",
  problem:
    "When booking and gate entry don't share data, gate staff can't quickly and reliably confirm that an arriving truck holds a valid booking.",
  context:
    "A retrospective case study of a container-yard prototype that was built and demonstrated: slot booking, a staff phone QR scan, a booking check and ESP32 gate control. It was never deployed and the original code is lost, so the screens below are reconstructed concepts from my clickable HTML prototype.",
  gateImage: {
    src: "/images/yardflow/gate.png",
    width: 1440,
    height: 2520,
    alt: "Illustration: a watchman in a hi-vis vest scans the QR pass on a truck driver's phone at a closed yard gate.",
  },
  screens: [
    {
      src: "/images/yardflow/screen-1.png",
      title: "Pick a free hour",
      note: "Today or tomorrow. Full hours can't be picked.",
      who: "Customer",
    },
    {
      src: "/images/yardflow/screen-2.png",
      title: "Pass goes to the driver",
      note: "Works only for this truck, in this hour.",
      who: "Customer",
    },
    {
      src: "/images/yardflow/screen-3.png",
      title: "Is this the truck?",
      note: "A QR proves a booking, not the truck.",
      who: "Watchman",
    },
    {
      src: "/images/yardflow/screen-4.png",
      title: "Entered only when the gate confirms",
      note: "Booking and gate status are shown apart.",
      who: "Watchman",
    },
    {
      src: "/images/yardflow/screen-5.png",
      title: "Hindi in one tap",
      note: "No open button on a refusal; plain words for the driver.",
      who: "Watchman",
    },
  ],
  loopImage: {
    src: "/images/yardflow/core-loop.png",
    width: 1950,
    height: 660,
    alt: "The core loop: book and get a pass, the watchman scans, the gate confirms, the event is logged.",
  },
  decisions: [
    "A yes/no truck-number check before the gate opens.",
    "Booking status and gate status shown separately.",
    "A booking becomes Entered only when the gate controller confirms.",
    "Refusal screens never show an open button.",
  ],
  prioritization:
    "MoSCoW, not RICE: there's no usage data, so reach and impact scores would be invented. The event log is a Must nobody sees, because no metric or dispute review works without it.",
  northStar: {
    name: "Clean verified entry rate",
    definition:
      "Entries the gate confirmed on the first command, with a truck-number check, no exception and no manual lookup, divided by all recorded entries. Definitions only: no baselines or targets exist yet.",
  },
  gaps: [
    "No interviews or gate observation yet",
    "Never tested at a real yard",
    "Unknown whether the ESP32 confirmed opening",
    "No usage data, so no baselines or targets",
  ],
  lessons: [
    "The happy path was the easy part; failure states are the product.",
    "A sent command is not an open gate.",
    "Design for the real user: a watchman needs one answer, in their own language.",
    "Measurement has to be designed in from day one.",
  ],
  next: "Observe a real gate, interview watchmen and transporters, and test the prototype with 5 people before rebuilding anything.",
  tools: ["Product Discovery", "User Journeys", "MoSCoW", "HTML Prototype", "ESP32", "Flask", "SQL"],
};

export const galaxyProject = {
  number: "02",
  name: "Galaxy Home Automation CRM",
  subtitle: "Project management & operations platform",
  type: "Internship build · Project Lead",
  status: "In use · 65+ concurrent projects",
  summary:
    "An internal platform that centralizes project tracking, customer management, quotations, daily reporting and team workflows for a home automation business, in one place instead of scattered tools.",
  problem: [
    "Project information was scattered across multiple tools.",
    "Teams lacked a single view of project progress.",
    "Quotations and operational updates were hard to track.",
    "Daily reporting and approvals needed manual follow-up.",
  ],
  contributions: [
    "Translated operational requirements into product features.",
    "Worked with stakeholders to refine workflows.",
    "Designed the interfaces for project tracking, quotations, notifications and reporting.",
    "Built and improved key modules, iterating on internal feedback.",
  ],
  tools: ["Next.js", "React", "Python/Flask", "Supabase", "Vercel"],
  dataNote: "Screens use anonymized sample data",
  screens: [
    {
      id: "quotation-builder",
      label: "Quotation Builder",
      src: "/images/galaxy/quotation-builder.jpg",
      width: 1802,
      height: 853,
      note: "Products are placed directly onto the client's floor plan, and pricing and the proposal are generated from it.",
    },
    {
      id: "projects",
      label: "Projects",
      src: "/images/galaxy/projects.jpg",
      width: 1802,
      height: 863,
      note: "Every project from creation to completion, with progress, status, stages and search shared across departments.",
    },
    {
      id: "notifications",
      label: "Notifications",
      src: "/images/galaxy/notifications.jpg",
      width: 1802,
      height: 856,
      note: "Approvals, pending actions and project events in one place, so updates don't get missed.",
    },
    {
      id: "daily-reports",
      label: "Daily Reports",
      src: "/images/galaxy/daily-reports.jpg",
      width: 1802,
      height: 868,
      note: "End-of-day reporting goes digital, with the day's quotation and project activity tracked automatically.",
    },
    {
      id: "dashboard",
      label: "Dashboard",
      src: "/images/galaxy/dashboard.jpg",
      width: 1802,
      height: 867,
      note: "One operational view of projects, customers and reports for each team member.",
    },
  ],
};

export const projects: Project[] = [
  {
    number: "03",
    name: "CRED Engagement & Trust",
    type: "Product case study · Independent",
    summary: "Diagnosed a trust deficit in CRED's gamified reward mechanic using public data.",
    points: [
      "Analyzed 100+ user reviews (App Store, Trustpilot) and product teardowns.",
      "RICE-scored 3 proposed fixes to decide what to build first.",
      "Proposed an A/B test on a 10–15% user holdout to validate impact.",
    ],
    tools: ["User Research", "RICE", "A/B Test Design"],
    tone: "coral",
    cover: {
      kind: "bars",
      title: "RICE score by proposed fix",
      bars: [
        { label: "Fix 1", value: 144, display: "144" },
        { label: "Fix 2", value: 77, display: "77" },
        { label: "Fix 3", value: 15, display: "15" },
      ],
    },
    coverAlt: "Bar chart of RICE scores for three proposed fixes: 144, 77 and 15.",
  },
  {
    number: "04",
    name: "Swiggy Smart Group Ordering",
    type: "Product case study · PRD",
    summary: "An end-to-end PRD and UI spec for a group-ordering feature.",
    points: [
      "Wrote the PRD and a 15-screen UI spec end to end.",
      "Grounded the feature in competitive research.",
      "Scoped it with RICE and MoSCoW prioritization.",
    ],
    tools: ["PRD", "UI Spec", "Competitive Research", "MoSCoW"],
    tone: "butter",
    cover: { kind: "screens", count: 15, label: "15-screen spec" },
    coverAlt: "Fifteen phone outlines, one per screen in the UI spec.",
  },
  {
    number: "05",
    name: "Credit Card Loan Portfolio",
    type: "Risk analysis · Synthetic dataset",
    summary: "A risk scorecard on a synthetic 150K-loan, $1.98B portfolio.",
    points: [
      "Found credit utilization to be the top default driver.",
      "Proposed underwriting changes projected to cut losses by ~$60M.",
    ],
    tools: ["SQL", "Excel"],
    tone: "paper",
    cover: {
      kind: "bars",
      title: "Default rate by credit utilization",
      bars: [
        { label: "High utilization", value: 32.5, display: "32.5%" },
        { label: "Low utilization", value: 6.0, display: "6.0%" },
      ],
    },
    coverAlt: "Bar chart: default rate is 32.5% for high credit utilization versus 6.0% for low.",
  },
  {
    number: "06",
    name: "AI Equity Trader — Adaptive SIP",
    type: "Research project · Project Lead",
    summary:
      "Tested whether adaptive allocations could beat a conventional SIP on five Indian stocks and the Nifty 50.",
    points: [
      "Compared a rule-based baseline with ML models in an 8-year walk-forward backtest.",
      "Built a paper-trading platform around the research, with strategies, a risk engine no trade can bypass, and backtesting dashboards.",
      "Result: the adaptive strategy did not outperform the SIP.",
    ],
    tools: ["Python", "FastAPI", "Next.js", "PostgreSQL", "Machine Learning"],
    tone: "cobalt",
    cover: {
      kind: "pipeline",
      steps: ["Market data", "Strategy", "Signal", "Risk engine", "Execution", "Portfolio", "Dashboard"],
      highlight: "Risk engine",
      label: "Paper trading only",
    },
    coverAlt:
      "System pipeline: market data, strategy, signal, risk engine, execution, portfolio, dashboard. Every trade passes the risk engine; paper trading only.",
    href: "https://github.com/kavyaraval543-gif/ai-equity-trader",
  },
  {
    number: "07",
    name: "Olist E-Commerce Sales Dashboard",
    type: "BI dashboard · Power BI",
    summary: "A Power BI dashboard over a 9-table model of 99K+ orders from 96K+ customers.",
    points: [
      "Tracks 16M+ in revenue, order status, the monthly order trend and an average review score of 4.09.",
      "Health & beauty leads product categories by sales; São Paulo leads revenue by customer state.",
      "Filterable by year, 2016–2018.",
    ],
    tools: ["Power BI", "SQL", "DAX"],
    tone: "mint",
    cover: { kind: "image", src: "/images/olist/dashboard.png", width: 956, height: 537 },
    coverAlt:
      "Screenshot of the Olist Power BI dashboard: KPI cards, top 5 product categories by sales, order status distribution, monthly order trend and revenue by customer state.",
  },
];

export const skills = [
  {
    label: "Product",
    items: [
      "Product Management",
      "Project Management",
      "Agile & Scrum",
      "Product Roadmapping",
      "Feature Prioritization",
      "Workflow Optimization",
      "Cross-functional Collaboration",
      "Product Documentation",
    ],
  },
  {
    label: "Analytics",
    items: [
      "SQL",
      "Basic Python",
      "Machine Learning Fundamentals",
      "Data Analysis",
      "KPI & Metrics Tracking",
    ],
  },
  {
    label: "Technology",
    items: [
      "AI Tools & AI Product Concepts",
      "Next.js, React, JavaScript",
      "HTML & CSS / Tailwind CSS",
      "Firebase, Supabase",
      "Git & GitHub",
      "IoT & ESP32",
    ],
  },
  {
    label: "Tools",
    items: ["Jira", "Canva", "Vercel", "Claude & Generative AI Tools"],
  },
];

export const certifications = [
  { name: "AI Product Management", issuer: "IBM", date: "In progress" },
  { name: "Product Management Basics", issuer: "SimpliLearn SkillUp", date: "Jul 2026" },
  { name: "Managing Projects with AI", issuer: "AI CERTs", date: "2026" },
  { name: "Scrum Fundamentals Certified", issuer: "SCRUMstudy", date: "Mar 2026" },
  { name: "SQL (Basic & Intermediate)", issuer: "HackerRank", date: "Jul 2026" },
  { name: "GenAI Powered Data Analytics", issuer: "Tata · Forage", date: "Apr 2026" },
  { name: "Operations Job Simulation", issuer: "Goldman Sachs · Forage", date: "Jul 2026" },
  { name: "Project Manager Job Simulation", issuer: "Siemens · Forage", date: "Jan 2026" },
  { name: "Six Sigma White Belt", issuer: "CSSC", date: "Mar 2026" },
];

export const achievements = [
  {
    title: "Top Teams, Stage 2 — Tata Technologies InnoVent-27",
    detail: "Selected from 7,000+ project submissions by 20,000+ students across 500+ colleges.",
  },
  {
    title: "1st place — NMIMS Indore inter-campus tech fest",
    detail: "Represented the Mumbai campus. Also 2nd place in its AI Whisperer competition.",
  },
  {
    title: "91.64 percentile nationally — ISWDP Level 1",
    detail: "Samsung Semiconductor × IISc × Synopsys.",
  },
  {
    title: "Smart India Hackathon 2024",
    detail: "Participant, Government of India.",
  },
];

export const leadership = [
  {
    role: "Sub-Head, R&D",
    org: "TechSafar 2026 · IEEE NMIMS MPSTME",
    detail: "State-level R&D techfest. Certificate of Appreciation from the Dean.",
  },
  {
    role: "Organising Committee Member",
    org: "Taqneeq 18.0 · NMIMS MPSTME",
    detail: "Coordinated a 4-day, multi-team tech fest.",
  },
  {
    role: "Advisory Member",
    org: "Team DARVIN MPSTME",
    detail: "Supported the team representing NMIMS at IGVC 2026, Oakland University, USA.",
  },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];
