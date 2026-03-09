export const siteData = {
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

export const about = [
  "I am a Software Developer based in Munich, with a MSc in Games Engineering from TU Munich." +
  "I specialize in building games and immersive AR/VR experiences in Unity, with a focus on intuitive UI/UX and real-time computer graphics. " +
  "I am passionate about the intersection of technology and human interaction, from LLM-powered voice interfaces to educational 3D games.",
  "I consider myself a solution-oriented and adaptable person, with good communication and teamwork skills."
]

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
    thumbnail: "/thumbnails/voxyPanel1.png",
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
    thumbnail: "/thumbnails/overwatch.jpeg",
    tags: ["Unity", "C#", "HoloLens 2", "Meta Quest 3", "MRTK", "REST API", "Figma", "AR", "VR"],
    types: ["work"],
    links: [
      { label: "OVERWATCH Project", href: "https://overwatchproject.eu/en/" }
    ]
  },
  {
    title: "FLEXI-Cross — AR Border Security Situational Awareness",
    description: "Horizon Europe research project developed at Hololight, aimed at improving border-crossing experiences for passengers and authorities through advanced Human Machine Interfaces. Built an AR application for HoloLens 2 that consumes real-time border security data from a Kafka message broker, visualizing live situational awareness information spatially. Implemented HoloLens 2 camera streaming to a web dashboard using Unity Render Streaming, enabling remote monitoring of field operations.",
    thumbnail: "/thumbnails/flexi.png",
    tags: ["Unity", "C#", "HoloLens 2", "MRTK", "AR", "Kafka", "REST API", "Unity Render Streaming", "Figma"],
    types: ["work"],
    links: [
      { label: "FLEXI-Cross Project", href: "https://flexicross-project.eu/" }
    ]
  },
  {
    title: "CrystalloGame — Educational X-Ray Crystallography Puzzle Game",
    description: "BSc thesis at University of Milan. A 3D educational game that teaches X-ray crystallography through hands-on exploration and interactive mechanics. Implements real-time simulation of diffraction patterns using Custom Render Textures and HLSL shaders. Awarded the Matteo Dellapiane Prize for Best BSc Thesis at EuroGraphics Italy STAG 2021.",
    thumbnail: "/thumbnails/Crystal_gameview.png",
    tags: ["Unity", "C#", "HLSL", "Custom Render Textures", "Computer Graphics", "Game Design", "Education"],
    types: ["uni"],
    links: [
      { label: "Play Game", href: "https://gabrieleprinciotta98.github.io/CrystalloGame/" },
      { label: "Download Presentation", href: "downloadables/RiassuntoTesiGabrielePrinciotta.pdf", download: true },
    ]
  },
  {
    title: "Hybrid — Tiny Vulkan Rendering Engine",
    description: "Group project for the GPU Programming course at TU Munich. A real-time rendering engine built from scratch in C++ and Vulkan, exploring hybrid rasterization and ray tracing techniques. Contributed to input systems and camera controls.",
    thumbnail: "/thumbnails/hybrid.jpg",
    tags: ["C++", "Vulkan", "Ray Tracing", "Rasterization", "Computer Graphics", "GPU Programming"],
    types: ["uni"],
    links: [
      { label: "GitHub", href: "https://github.com/alpcihan/hybrid" }
    ]
  },
  
]