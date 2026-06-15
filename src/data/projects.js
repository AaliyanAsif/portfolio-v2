export const PROJECTS_DATA = [
   {
    title: "YADEA POS",
    img: "/yadea.jpg",
    body: "YADEA POS is a point-of-sale system tailored for bike showrooms. It enables users to handle sales (including installment plans), manage stock levels, and track expenses with custom filtering options.",
  },
   {
    title: "RaveRunner - E-Commerce Web App",
    img: "/Raverunner",
    body: "Full-stack e-commerce platform for a Brackets client with Next.js, WooCommerce APIs, MongoDB, Stripe payments, Google Maps, and AWS services.",
  },
   {
    title: "Car Dealership Inventory & Analytics Dashboard",
    img: "/cardealer",
    body: "A full-stack dealership system with secure auth, KPI analytics, date-based filtering, inventory workflows, and PDF reporting for daily operations.",
  },
  {
    title: "BTMS",
    img: "/tms1.png",
    body: "Brackets Team Managment System is a role-based management system for handling attendance, payroll, leave requests, and taxes and much more efficiently.",
  },
 
  {
    title: "Nike Landing Page",
    img: "/nike-landing-page.png",
    body: "A sleek and modern mock landing page for a Nike shoe store, designed for a smooth and stylish user experience.",
  },
 
  {
    title: "NexusFlow",
    img: "/nexus",
    body: "A modern SaaS operations platform with real-time dashboards, workflow automation, and responsive role-based interfaces built from production-grade components.",
  },
];

export const PROJECTS_CASE_STUDY_DATA = [
  {
    id: "yadea-pos",
    title: "YADEA POS – A Scalable Point-of-Sale System",
    link: "https://yadea-demo.vercel.app/",
    img: "/yadea.jpg",
    overview:
      "YADEA POS is a point-of-sale system tailored for bike showrooms. It enables users to handle sales (including installment plans), manage stock levels, and track expenses with custom filtering options. The system was built from scratch as a solo MERN stack project and served as a learning experience for both frontend and backend development.",
    myRole:
      "Solo Developer – I managed the entire project from backend structuring to frontend development and UI/UX design.",
    keyFeatures: [
      {
        title: "Sales & Installments",
        body: "Users can track bike sales and manage installment payments.",
      },
      {
        title: "Stock Management",
        body: "Real-time stock tracking for efficient inventory control.",
      },
      {
        title: "Expense Module",
        body: "Fully customizable expense tracking with categories, filtering, and summaries.",
      },
      {
        title: "Search & Filtering",
        body: "Advanced search functionality for sales, expenses, and stock records.",
      },
    ],
    challenges:
      "This was my first full MERN stack project. Initially, I faced difficulties in backend structuring, particularly understanding middleware, services, and controllers. The most complex feature was managing installment-based sales and calculating payment plans. I overcame these challenges through consistent research, documentation, and trial-and-error approaches using real-world logic.",
    technologies: [
      {
        title: "Frontend",
        body: "React, Material-UI, Axios",
      },
      {
        title: "Backend",
        body: "Node.js, Express, MongoDB, Mongoose",
      },
      {
        title: "Other",
        body: "React Hook Form, MUI Select, Middleware-based architecture, Render for backend, Vercel for frontend",
      },
    ],
  },
  {
    id: "btms",
    title: " BTMS (Brackets Team Management System)",
    img: "/tms.png",
    overview:
      "BTMS is a multi-module system designed to manage employees, their tasks, requests, finances, and performance. It functions similarly to an ERP-lite system and is used by Brackets for handling internal operations. The system has evolved over time with contributions from multiple developers.",
    myRole:
      "Frontend Developer – I was the main contributor during my time, focusing primarily on UI development across several modules.",
    keyFeatures: [
      {
        title: "Employee Management ",
        body: "Manage users, teams, departments, designations, and shifts.",
      },
      {
        title: "Payroll Module",
        body: "Generates detailed employee payrolls based on attendance, per-day/hour salary, performance stats, overtime, and deductions",
      },
      {
        title: "Request System",
        body: "Handle various employee requests like leave, reimbursement, loan, advanced salary, WFH, and general or overtime requests.",
      },
      {
        title: "Inventory & Assets",
        body: "Manage hardware/software assets and inventory levels.",
      },
      {
        title: "Finance Module",
        body: "Track company accounts, expenses, funds, and loan reports.",
      },
      {
        title: "Assessment & Tax",
        body: "Assess employee performance and automate tax calculations.",
      },
      {
        title: "Recruitment ",
        body: "Post jobs and track applicants, integrated with Brackets’ careers portal.",
      },
      {
        title: "Projects & Teams",
        body: "Assign users to projects and manage team structures.",
      },
    ],
    challenges:
      "BTMS helped me grow in large-scale front-end development. I worked with complex dynamic forms, conditionally rendered UIs, and data-intensive dashboards. Understanding how to structure modular UIs and collaborate on shared components taught me a lot. Contributing to such a large system made me comfortable working with codebases that span multiple teams and modules.",
    technologies: [
      {
        title: "Frontend",
        body: "React, Material-UI, Redux Toolkit",
      },
      {
        title: "Backend",
        body: "Node.js, Express, MongoDB, Mongoose",
      },
      {
        title: "Other",
        body: "React Hook Form, MUI Select, React Query, Axios, Chart.js, React Router",
      },
    ],
  },
  {
    id: "nike-landing-page",
    title: "A Modren Nike Landing Page ",
    link: "https://aaliyanasif.github.io/NIke-Landing-Page/",
    img: "/nike-landing-page.png",
    overview:
      "This was a personal learning project where I created a responsive Nike-themed landing page to sharpen my frontend skills. The page features sleek design, smooth UI interactions, and a clean layout—replicating a professional brand experience. This project was my introduction to using Tailwind CSS, and I also practiced managing state using Redux.",
    myRole:
      "Solo Developer – I handled everything from the component architecture and styling to state management and responsiveness.",
    keyFeatures: [
      {
        title: "Responsive Layout",
        body: " Mobile-first design with Tailwind utility classes.",
      },
      {
        title: "Product Highlight Sections",
        body: "Modern sections showcasing Nike shoes and collections.",
      },
      {
        title: "Smooth Scrolling & Animation",
        body: "User-friendly transitions and UI effects.",
      },
      {
        title: "IRedux Integration",
        body: "Global state management for cart and product interactions.",
      },
    ],
    challenges:
      "his was my first project using Tailwind CSS. Initially, I struggled to get used to utility-first styling and managing layout without traditional CSS files. Through hands-on experimentation, documentation, and practicing component reuse, I quickly got comfortable. Using Redux in a small UI-focused project also helped me strengthen my understanding of global state patterns.",
    technologies: [
      {
        title: "Frontend",
        body: "React, Tailwind-CSS, Redux Toolkit",
      },
      {
        title: "Other",
        body: "Responsive design, Scroll animations",
      },
    ],
  },
  {
    id: "raverunner---e-commerce-web-app",
    title: "RaveRunner - E-Commerce Web App",
    category: "E-Commerce Platform",
    link: "https://raverunner.co",
    img: "/Raverunner",
    overview:
      "I worked as the full-stack developer on RaveRunner, an e-commerce platform built for a client at Brackets. I developed the Next.js frontend, integrated WooCommerce APIs, MongoDB, Stripe payments, Google Maps API, and AWS services including Amplify, Lambda, SQS, and S3. I managed full development for 9 months and delivered a scalable, production-ready store.",
    myRole:
      "Full-Stack Developer - Owned frontend and backend integrations, cloud services setup, payment workflow implementation, and production delivery.",
    keyFeatures: [
      {
        title: "Commerce Workflows",
        body: "Built product, checkout, and order flows with WooCommerce API integrations.",
      },
      {
        title: "Payment Integration",
        body: "Integrated Stripe SDK for secure transactions and checkout handling.",
      },
      {
        title: "Cloud-Ready Architecture",
        body: "Used AWS Amplify, Lambda, S3, and SQS to support scalable operations and async processing.",
      },
      {
        title: "Location & Utility APIs",
        body: "Integrated Google APIs to support location-based and utility features.",
      },
    ],
    challenges:
      "Delivering a production-ready e-commerce system required balancing performance, payment reliability, and cloud integration complexity. I solved this by structuring integrations in modular layers, validating critical purchase flows, and optimizing deployment workflows for stable releases.",
    technologies: [
      {
        title: "Frontend",
        body: "Next.js",
      },
      {
        title: "Backend & Data",
        body: "WooCommerce, MongoDB",
      },
      {
        title: "Cloud & Integrations",
        body: "AWS Lambda, AWS Amplify, AWS S3, AWS SQS, Stripe SDK, Google APIs",
      },
    ],
  },
  {
    id: "car-dealership-inventory-&-analytics-dashboard",
    title: "Car Dealership Inventory & Analytics Dashboard",
    category: "Business Management System",
    link: "https://azan-cms.vercel.app",
    img: "/cardealer",
    overview:
      "I built a full-stack car dealership management system using Next.js and MongoDB. It includes secure authentication, a dynamic analytics dashboard, profit/loss charts, KPIs, and advanced date-based filtering. Users can add, update, and sell cars, manage inventory, and generate PDF reports. The system also includes customizable theme settings, user profile management, and responsive UI for seamless daily dealership operations.",
    myRole:
      "Full-Stack Developer - Designed and implemented the complete system architecture, dashboard analytics, and inventory workflows.",
    keyFeatures: [
      {
        title: "Inventory Lifecycle Management",
        body: "Enabled create, update, sell, and status tracking workflows for dealership inventory.",
      },
      {
        title: "Analytics & KPIs",
        body: "Built actionable dashboards with profit/loss charts, KPIs, and date-based filtering.",
      },
      {
        title: "Operational Reporting",
        body: "Implemented PDF report generation for business visibility and record-keeping.",
      },
      {
        title: "User Experience Controls",
        body: "Added responsive UI, theme customization, and user profile management for everyday workflows.",
      },
    ],
    challenges:
      "The main challenge was keeping dashboard analytics accurate while supporting complex inventory state changes and date filters. I addressed this with consistent data modeling, carefully scoped calculations, and a responsive UI structure optimized for high-usage operations.",
    technologies: [
      {
        title: "Frontend",
        body: "Next.js, TypeScript, Tailwind CSS",
      },
      {
        title: "Backend & Data",
        body: "MongoDB",
      },
      {
        title: "Other",
        body: "Responsive Design",
      },
    ],
  },
  {
    id: "nexusflow",
    title: "NexusFlow - Operations Intelligence for Modern Teams",
    category: "SaaS Platform",
    link: "https://nexus-flow-omega.vercel.app/",
    img: "/nexus",
    overview:
      "NexusFlow is a modern SaaS operations platform that centralizes real-time analytics, workflow automation, and team collaboration in one unified dashboard. I converted Figma designs into pixel-perfect, fully responsive UI and built scalable React components for live dashboards, automated workflows, and role-based access. The project demonstrates expertise in production-ready SaaS interfaces with clean architecture and high visual accuracy.",
    myRole:
      "Frontend-Focused Full-Stack Developer - Converted design systems into production interfaces and built scalable dashboard components.",
    keyFeatures: [
      {
        title: "Unified Operations Dashboard",
        body: "Centralized real-time analytics, collaboration modules, and workflow status views.",
      },
      {
        title: "Workflow Automation UI",
        body: "Built reusable components to configure and monitor automated operational flows.",
      },
      {
        title: "Role-Based Interfaces",
        body: "Implemented role-aware UI states for teams with different permissions and responsibilities.",
      },
      {
        title: "Design-to-Code Accuracy",
        body: "Translated Figma screens into pixel-precise, responsive components with production consistency.",
      },
    ],
    challenges:
      "A key challenge was preserving visual fidelity from design while keeping complex SaaS dashboards maintainable. I solved this by building a reusable component architecture, enforcing consistent spacing and state patterns, and validating responsiveness across breakpoints.",
    technologies: [
      {
        title: "Frontend",
        body: "Next.js, Tailwind CSS, TypeScript",
      },
      {
        title: "Backend & Data",
        body: "Node.js, MongoDB",
      },
    ],
  },
];
