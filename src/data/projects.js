export const PROJECTS_DATA = [
  {
    title: "BTMS",
    img: "/tms1.png",
    body: "Brackets Team Managment System is a role-based management system for handling attendance, payroll, leave requests, and taxes and much more efficiently.",
  },
  {
    title: "YADEA POS",
    img: "/yadea.jpg",
    body: "A sleek and modern mock landing page for a Nike shoe store, designed for a smooth and stylish user experience.",
  },
  {
    title: "Nike Landing Page",
    img: "/nike-landing-page.png",
    body: "A sleek and modern mock landing page for a Nike shoe store, designed for a smooth and stylish user experience.",
  },
];

export const PROJECTS_CASE_STUDY_DATA = [
  {
    id: "yadea-pos",
    title: "YADEA POS – A Scalable Point-of-Sale System",
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
    github: "https://github.com/AaliyanAsif/NIke-Landing-Page",
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
];
