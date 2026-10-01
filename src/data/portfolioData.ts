// ============================================================
// PORTFOLIO DATA — Source of Truth (Resume-Based Only)
// Varun K | Data Science & Healthcare AI
// ============================================================

export const personalInfo = {
  name: "Varun K",
  initials: "VK",
  tagline: "Data Science & Healthcare AI",
  location: "Chennai, Tamil Nadu, India",
  phone: "+91 63741 28438",
  email: "varuketheboyna@gmail.com",
  linkedin: "https://linkedin.com/in/varunk43",
  github: "https://github.com/varun7418",
  summary:
    "B.E. Computer Science graduate with a focus on healthcare data science and AI. Developed a Streamlit application with a Random Forest model that classifies depression severity from PHQ-9 data, and critically evaluated its validity by identifying label leakage. Proficient in Python, Pandas, SQL, and data visualization, with strong communication skills from leading technical content and conducting workshops.",
  openToWork: true,
  roles: [
    "Data Science Enthusiast",
    "Machine Learning Engineer",
    "Data Analyst",
    "Python Developer",
    "Healthcare AI Researcher",
    "AI/ML Intern",
  ],
};

export const skills = {
  languages: [
    { name: "Python", level: "Experienced", color: "#3B82F6" },
    { name: "SQL", level: "Experienced", color: "#22C55E" },
    { name: "Java", level: "Familiar", color: "#F59E0B" },
  ],
  mlAndVisualization: [
    { name: "Scikit-learn", level: "Project-Based", color: "#F97316" },
    { name: "Pandas", level: "Experienced", color: "#6366F1" },
    { name: "NumPy", level: "Experienced", color: "#06B6D4" },
    { name: "Matplotlib", level: "Experienced", color: "#EC4899" },
    { name: "Seaborn", level: "Project-Based", color: "#8B5CF6" },
    { name: "Excel", level: "Familiar", color: "#22C55E" },
    { name: "Google Sheets", level: "Familiar", color: "#34D399" },
  ],
  concepts: [
    "Machine Learning (Classification)",
    "Data Cleaning",
    "Exploratory Data Analysis",
    "Feature Importance",
    "Model Evaluation",
    "Cross-Validation",
    "Label Leakage Detection",
    "Random Forest",
    "F1 Score",
  ],
  toolsAndPlatforms: [
    { name: "Jupyter Notebook", level: "Experienced", color: "#F59E0B" },
    { name: "Google Colab", level: "Experienced", color: "#F97316" },
    { name: "Git / GitHub", level: "Experienced", color: "#F8FAFC" },
    { name: "Streamlit", level: "Project-Based", color: "#EC4899" },
    { name: "Folium", level: "Project-Based", color: "#22C55E" },
    { name: "VS Code", level: "Experienced", color: "#3B82F6" },
    { name: "PyCharm", level: "Familiar", color: "#22C55E" },
    { name: "IntelliJ", level: "Familiar", color: "#F97316" },
  ],
  databases: [
    { name: "MySQL", level: "Experienced", color: "#06B6D4" },
  ],
};

export const projects = [
  {
    id: "depression-severity",
    title: "Depression Severity Assessment",
    subtitle: "Final Year Project — Healthcare AI",
    category: "Machine Learning / Healthcare AI",
    tags: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "Streamlit", "Folium", "Random Forest"],
    github: "https://github.com/varun7418/depression-severity-prediction",
    demo: null,
    featured: true,
    description:
      "A Streamlit web application that uses a Random Forest classifier to assess depression severity from PHQ-9 questionnaire responses, with integrated psychiatrist location mapping and a critical investigation into label leakage.",
    problem:
      "Depression is a widespread but often under-diagnosed mental health condition. PHQ-9 is a validated clinical questionnaire for assessing depression severity. The challenge was to build a machine learning model that could classify depression into four severity levels and make the tool accessible via a web interface.",
    dataset: {
      description: "200-row balanced PHQ-9 dataset",
      size: "200 rows",
      source: "PHQ-9 clinical questionnaire data",
      classes: ["Normal", "Mild", "Moderate", "Severe"],
    },
    approach: [
      "Extracted and cleaned a 200-row balanced PHQ-9 dataset using Python and Pandas",
      "Handled missing values, outliers, and data validation",
      "Applied Random Forest classification using Scikit-learn",
      "Evaluated model using cross-validation and F1 score across four severity classes",
      "Critically identified label leakage during evaluation phase",
      "Generated evaluation reports and Matplotlib visualizations",
      "Built an interactive Streamlit application with tailored recommendations",
      "Integrated a Folium map for nearby psychiatrist locations",
    ],
    keyFinding:
      "Identified label leakage: the total PHQ score determined the severity class (~99% accuracy with it vs ~29% without it), demonstrating strong analytical and critical evaluation skills.",
    technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "Streamlit", "Folium", "Random Forest", "Cross-Validation"],
    learnings: [
      "Understanding of clinical data (PHQ-9 questionnaire structure)",
      "Hands-on experience with Random Forest classification",
      "Critical model evaluation — detecting label leakage",
      "Building end-to-end ML pipelines in Python",
      "Deploying interactive apps with Streamlit",
      "Geospatial data visualization with Folium",
    ],
    status: "Completed",
    highlight: "Label Leakage Identified",
  },
  {
    id: "inventory-management",
    title: "Inventory Management System",
    subtitle: "Python + MySQL Backend",
    category: "Python / Database",
    tags: ["Python", "MySQL", "SQL"],
    github: null,
    demo: null,
    featured: false,
    description:
      "A Python-based inventory management system backed by MySQL that tracks stock levels and manages supplier details with optimized SQL queries.",
    problem:
      "Manual inventory tracking leads to data inconsistencies and supplier management difficulties. The goal was to build a reliable, query-optimized backend system for tracking stock and supplier information.",
    dataset: null,
    approach: [
      "Designed a relational MySQL schema for inventory and supplier data",
      "Built a Python interface to interact with the MySQL database",
      "Wrote optimized MySQL queries for insert, update, and retrieval operations",
      "Ensured data accuracy and integrity across all operations",
    ],
    keyFinding: null,
    technologies: ["Python", "MySQL", "SQL"],
    learnings: [
      "Relational database design and normalization",
      "Python-MySQL integration",
      "Writing optimized SQL queries",
      "Data integrity and consistency management",
    ],
    status: "Completed",
    highlight: null,
  },
  {
    id: "zestflix",
    title: "Zestflix — Fruit Shop Web App",
    subtitle: "Full-Stack E-Commerce Application",
    category: "Full-Stack Development",
    tags: ["Spring Boot", "MySQL", "Java", "Full-Stack"],
    github: null,
    demo: null,
    featured: false,
    description:
      "A full-stack e-commerce web application for a fruit shop with admin-side fruit management, customer ordering, real-time stock updates, and secure checkout.",
    problem:
      "Small fruit shop businesses need a simple, reliable digital platform for managing inventory and processing customer orders.",
    dataset: null,
    approach: [
      "Built a full-stack application using Spring Boot (Java) backend and MySQL database",
      "Implemented admin panel for fruit management",
      "Created customer-facing ordering and checkout flow",
      "Integrated real-time stock updates on orders",
      "Ensured data consistency with secure checkout process",
    ],
    keyFinding: null,
    technologies: ["Spring Boot", "MySQL", "Java"],
    learnings: [
      "Full-stack development with Java Spring Boot",
      "RESTful backend API design",
      "Database-driven application development",
      "Real-time data consistency in transactional systems",
    ],
    status: "Completed",
    highlight: null,
  },
];

export const experience = [
  {
    id: "ms-club-content-lead",
    role: "Content Team Co-Lead",
    organization: "Microsoft Club, Sathyabama University",
    type: "Leadership",
    period: "2023 – 2026",
    icon: "leadership",
    description: [
      "Led a team to produce technical articles, event write-ups, and social media posts",
      "Managed audience engagement across platforms",
      "Coordinated end-to-end communication strategies for club events",
      "Ensured timely and consistent delivery of all communications",
    ],
    skills: ["Technical Writing", "Team Leadership", "Content Strategy", "Communication"],
  },
  {
    id: "git-workshop",
    role: "Volunteer — Git Set Go Workshop",
    organization: "Microsoft Club, Sathyabama University",
    type: "Workshop",
    period: "2023",
    icon: "workshop",
    description: [
      "Conducted hands-on workshops on Git and GitHub basics for junior students",
      "Simplified version control concepts through live demonstrations",
      "Strengthened technical communication and public presentation skills",
    ],
    skills: ["Git", "GitHub", "Public Speaking", "Technical Teaching"],
  },
  {
    id: "smart-india-hackathon",
    role: "Participant",
    organization: "Smart India Hackathon",
    type: "Hackathon",
    period: "2023",
    icon: "hackathon",
    description: [
      "Collaborated with a cross-functional team to propose innovative, user-centric technical solutions",
      "Worked within a tight deadline to deliver a complete proposal",
    ],
    skills: ["Problem Solving", "Team Collaboration", "Rapid Prototyping"],
  },
];

export const education = [
  {
    id: "be-cse",
    degree: "B.E. Computer Science and Engineering",
    institution: "Sathyabama Institute of Science and Technology",
    period: "Sep 2022 – Jul 2026",
    score: "7.89 / 10",
    scoreLabel: "CGPA",
    type: "undergraduate",
    icon: "🎓",
  },
  {
    id: "hsc",
    degree: "Higher Secondary Certificate (12th Grade)",
    institution: "Vanavani Matriculation Higher Secondary School",
    period: "2022",
    score: "78.5%",
    scoreLabel: "Percentage",
    type: "school",
    icon: "🏫",
  },
];

export const certifications = [
  {
    id: "sql-python-imarticus",
    name: "SQL & Python",
    provider: "Imarticus Learning",
    duration: "40 hrs",
    year: null,
    color: "#7C3AED",
  },
  {
    id: "dbms-nptel",
    name: "Database Management Systems",
    provider: "NPTEL",
    duration: null,
    year: null,
    color: "#2563EB",
  },
  {
    id: "oracle-oci",
    name: "Oracle Cloud Infrastructure Foundations Associate",
    provider: "Oracle",
    duration: null,
    year: "2023",
    color: "#F59E0B",
  },
  {
    id: "java-infosys",
    name: "Java",
    provider: "Infosys Springboard",
    duration: null,
    year: null,
    color: "#F97316",
  },
  {
    id: "matlab-mathworks",
    name: "MATLAB Fundamentals",
    provider: "MathWorks",
    duration: null,
    year: null,
    color: "#06B6D4",
  },
  {
    id: "fullstack-credoz",
    name: "Full Stack Development",
    provider: "Credoz Systemz",
    duration: null,
    year: null,
    color: "#22C55E",
  },
];

export const dataWorkflow = [
  { step: "01", title: "Problem Definition", desc: "Define clinical question — classifying PHQ-9 depression severity", emoji: "🎯" },
  { step: "02", title: "Data Collection", desc: "Source balanced 200-row PHQ-9 clinical questionnaire dataset", emoji: "📊" },
  { step: "03", title: "Data Cleaning", desc: "Handle missing values, outliers, and validation using Pandas", emoji: "🧹" },
  { step: "04", title: "Exploratory Analysis", desc: "Visualize class distribution, correlations, and feature patterns", emoji: "🔍" },
  { step: "05", title: "Feature Engineering", desc: "Select and prepare PHQ-9 item features for modelling", emoji: "⚙️" },
  { step: "06", title: "Model Selection", desc: "Choose Random Forest for multi-class severity classification", emoji: "🌲" },
  { step: "07", title: "Model Training", desc: "Train with cross-validation on the balanced dataset", emoji: "🏋️" },
  { step: "08", title: "Model Evaluation", desc: "Evaluate using F1 score; critically identify label leakage", emoji: "📈" },
  { step: "09", title: "Deployment", desc: "Build and ship interactive Streamlit app with Folium maps", emoji: "🚀" },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Workflow", href: "#workflow" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];
