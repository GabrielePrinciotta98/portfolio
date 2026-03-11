// ============================================================
// NAVBAR
// ============================================================

export const contactData = {
    fullName: "Gabriele Princiotta",
    titles: ["XR and Games Developer", "UI/UX & Interaction", "Computer Graphics"],
    location: "Garching bei München, Germany",
    contacts: [
        { label: "Email", href: "mailto:gabriele.princiotta98@gmail.com", icon: "email" },
        { label: "Phone", href: "tel:+393452339542", icon: "phone" },
        { label: "LinkedIn", href: "https://linkedin.com/in/gabrieleprinciotta", icon: "linkedin" },
        { label: "GitHub", href: "https://github.com/GabrielePrinciotta98", icon: "github"}
    ],
}

export const cvUrl = "downloadables/cv.pdf"

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
]

// ============================================================
// ABOUT
// ============================================================

export type AboutSegment = { text: string; highlight?: "primary" | "secondary" }
export type AboutParagraph = AboutSegment[]

export const about: AboutParagraph[] = [
  [ 
    { text: "I am a " },
    { text: "Software Developer", highlight: "primary" },
    { text: " based in Munich, with a " },
    { text: "MSc in Games Engineering", highlight: "primary" },
    { text: " from TU Munich. I specialize in building " },
    { text: "games and immersive AR/VR experiences", highlight: "secondary" },
    { text: " in Unity, with a focus on " },
    { text: "intuitive UI/UX", highlight: "secondary" },
    { text: " and " },
    { text: "real-time computer graphics", highlight: "secondary" },
    { text: ". I am passionate about the intersection of technology and human interaction, from " },
    { text: "LLM-powered voice interfaces", highlight: "secondary" },
    { text: " to " },
    { text: "educational 3D games", highlight: "secondary" },
    { text: "." },
  ],
  [
    { text: "I consider myself a " },
    { text: "solution-oriented", highlight: "primary" },
    { text: " and " },
    { text: "adaptable", highlight: "primary" },
    { text: " person, with good " },
    { text: "communication and teamwork", highlight: "primary" },
    { text: " skills." },
    { text: " I am eager to take on"},
    { text: " new challenges", highlight: "secondary"},
    { text: " that will allow me to grow both professionally and personally."}
  ]
]

// ============================================================
// PROJECTS
// ============================================================

export type ProjectType = "uni" | "work" | "personal"

export type Project = {
  title: string
  description: string
  thumbnail: string
  tags: string[]
  types: ProjectType[]
  links: { label: string; href: string; download?: boolean }[]
}

export const projects: Project[] = [
  {
    title: "XR Assembly Training with LLM Voice Assistant",
    description: "MSc thesis at TU Munich, developed in collaboration with Hololight as part of the Horizon Europe VOXReality project. Extended an AR industrial assembly training platform for HoloLens 2 with an open-ended 'Free Mode', integrating an LLM-based voice assistant (ARTA) and automatic speech recognition for hands-free, context-aware guidance. Conducted a within-subjects user study (n=13) comparing voice-driven vs. GUI-based interaction, measuring cognitive load, usability, and engagement.",
    thumbnail: "thumbnails/voxyPanel1.png",
    tags: ["Unity", "C#", "HoloLens 2", "MRTK", "AR", "LLM", "REST API", "Figma", "UX Research"],
    types: ["uni", "work"],
    links: [
      { label: "VOXReality Project", href: "https://voxreality.eu/use-cases/" },
      { label: "Download Thesis", href: "downloadables/Master_Thesis.pdf", download: true },
    ]
  },
  {
    title: "OVERWATCH — XR Management Map for Safety and Crisis Events",
    description: "Horizon Europe research project developed at Hololight. Built XR solutions for real-time monitoring of natural disasters and drone missions, featuring interactive 3D map visualizations and live geographical data overlays on HoloLens 2 and Meta Quest 3. Contributed to UI/UX design in Figma and Unity development of spatial data interfaces.",
    thumbnail: "thumbnails/overwatch.jpeg",
    tags: ["Unity", "C#", "HoloLens 2", "Meta Quest 3", "MRTK", "REST API", "Figma", "AR", "VR"],
    types: ["work"],
    links: [
      { label: "OVERWATCH Project", href: "https://overwatchproject.eu/en/" }
    ]
  },
  {
    title: "FLEXI-Cross — AR Border Security Situational Awareness",
    description: "Horizon Europe research project developed at Hololight, aimed at improving border-crossing experiences for passengers and authorities through advanced Human Machine Interfaces. Built an AR application for HoloLens 2 that consumes real-time border security data from a Kafka message broker, visualizing live situational awareness information spatially. Implemented HoloLens 2 camera streaming to a web dashboard using Unity Render Streaming, enabling remote monitoring of field operations.",
    thumbnail: "thumbnails/flexi.png",
    tags: ["Unity", "C#", "HoloLens 2", "MRTK", "AR", "Kafka", "REST API", "Unity Render Streaming", "Figma"],
    types: ["work"],
    links: [
      { label: "FLEXI-Cross Project", href: "https://flexicross-project.eu/" }
    ]
  },
  {
    title: "CrystalloGame — Educational X-Ray Crystallography Puzzle Game",
    description: "BSc thesis at University of Milan. A 3D educational game that teaches X-ray crystallography through hands-on exploration and interactive mechanics. Implements real-time simulation of diffraction patterns using Custom Render Textures and HLSL shaders. Awarded the Matteo Dellapiane Prize for Best BSc Thesis at EuroGraphics Italy STAG 2021.",
    thumbnail: "thumbnails/Crystal_gameview.png",
    tags: ["Unity", "C#", "HLSL", "Custom Render Textures", "Computer Graphics", "Game Design", "Education"],
    types: ["uni"],
    links: [
      { label: "Play Game", href: "https://gabrieleprinciotta98.github.io/CrystalloGame/" },
      { label: "Download Presentation", href: "downloadables/Bachelor-Thesis.pdf", download: true },
    ]
  },
  {
    title: "Hybrid — Tiny Vulkan Rendering Engine",
    description: "Group project for the GPU Programming course at TU Munich. A real-time rendering engine built from scratch in C++ and Vulkan, exploring hybrid rasterization and ray tracing techniques. Contributed to input systems and camera controls.",
    thumbnail: "thumbnails/hybrid.jpg",
    tags: ["C++", "Vulkan", "Ray Tracing", "Rasterization", "Computer Graphics", "GPU Programming"],
    types: ["uni"],
    links: [
      { label: "GitHub", href: "https://github.com/alpcihan/hybrid" }
    ]
  },
  {
  title: "Coin SoccAR",
  description: "Group project for the Augmented Reality course at TU Munich. An AR twist on the classic tabletop game penny football, where physical coins are tracked via computer vision and augmented with 3D rendered objects in real time. Built from scratch in C++ using OpenCV for marker and coin detection, pose estimation, and camera calibration, and OpenGL for rendering 3D models such as a soccer ball, shoes, and coin overlays. Features a particle system, sound effects, and a full game loop with scoring.",
  thumbnail: "thumbnails/coin-soccAR.png",
  tags: ["C++", "OpenCV", "OpenGL", "AR", "Computer Vision", "Game Design", "Computer Graphics"],
  types: ["uni"],
  links: [
    { label: "GitHub", href: "https://github.com/GabrielePrinciotta98/ARCoinSoccer" }
  ]
}
  
]

// ============================================================
// SKILLS
// ============================================================

export type SkillLevel = "proficient" | "familiar" | "basic"

export type Skill = {
  name: string
  level: SkillLevel
  icon?: string 
  invertOnDark?: boolean
}

export type SkillCategory = {
  category: string
  skills: Skill[]
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Game Dev, XR & Graphics",
    skills: [
      { name: "Unity", level: "proficient", icon: "skill-icons/unity.png", invertOnDark: true },
      { name: "Unreal Engine", level: "basic", icon: "skill-icons/unreal-engine.png", invertOnDark: true },
      { name: "MRTK", level: "familiar", icon: "skill-icons/mrtk.png", invertOnDark: true },
      { name: "OpenGL", level: "basic", icon: "skill-icons/opengl.png" },
      { name: "Vulkan", level: "basic", icon: "skill-icons/vulkan.png" },
      { name: "GLSL/HLSL", level: "basic", icon: "skill-icons/glsl.png" },
      { name: "OpenCV", level: "basic", icon: "skill-icons/opencv.png" },
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "C#", level: "proficient", icon: "skill-icons/c-sharp.png" },
      { name: "C++", level: "familiar", icon: "skill-icons/c++.png" },
      { name: "C", level: "familiar", icon: "skill-icons/c.png" },
      { name: "Java", level: "familiar", icon: "skill-icons/java.png" },
      { name: "Python", level: "familiar", icon: "skill-icons/python.png" },
      { name: "SQL", level: "familiar", icon: "skill-icons/sql.png" },
      { name: "REST APIs", level: "proficient", icon: "skill-icons/rest-api.png" },
      { name: "JSON", level: "proficient", icon: "skill-icons/json.png", invertOnDark: true },
      { name: "Kafka", level: "basic", icon: "skill-icons/kafka.png", invertOnDark: true },
    ]
  },
  {
    category: "Frontend & Design",
    skills: [
      { name: "JavaScript", level: "basic", icon: "skill-icons/javascript.png" },
      { name: "TypeScript", level: "basic", icon: "skill-icons/typescript.png" },
      { name: "HTML", level: "familiar", icon: "skill-icons/html5.png" },
      { name: "CSS", level: "basic", icon: "skill-icons/css-3.png" },
      { name: "React", level: "basic", icon: "skill-icons/react.png" },
      { name: "Markdown", level: "proficient", icon: "skill-icons/markdown.png", invertOnDark: true },
      { name: "Figma", level: "proficient", icon: "skill-icons/figma.png" },
    ]
  },
  {
    category: "DevOps & Workflow",
    skills: [
      { name: "Git", level: "proficient", icon: "skill-icons/git.png" },
      { name: "GitHub", level: "proficient", icon: "skill-icons/github.png", invertOnDark: true},
      { name: "Azure DevOps", level: "proficient", icon: "skill-icons/azure-devops.png"},
      { name: "Scrum", level: "proficient", icon: "skill-icons/scrum.png" },
      { name: "Jira", level: "proficient", icon: "skill-icons/jira.png" },
      { name: "Confluence", level: "proficient", icon: "skill-icons/confluence.png" },
      { name: "Windows", level: "proficient", icon: "skill-icons/microsoft-windows.png" },
      { name: "Linux", level: "familiar", icon: "skill-icons/linux.png"},
      { name: "MS Office", level: "proficient", icon: "skill-icons/microsoft-office.png" },
    ]
  },
]

// ============================================================
// FOOTER
// ============================================================

export const footer = "© 2026 Gabriele Princiotta. The logos and registered trademarks are the property of their respective owners."