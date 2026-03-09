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

export const about = "I am an XR Developer based in Munich, with a MSc in Games Engineering from TU Munich. I specialize in building immersive AR/VR experiences in Unity, with a focus on intuitive UI/UX and real-time computer graphics. I am passionate about the intersection of technology and human interaction, from LLM-powered voice interfaces to educational 3D games."

export type Project = {
  title: string
  description: string
  thumbnail: string
  tags: string[]
  links: { label: string; href: string; download?: boolean }[]
}

export const projects: Project[] = [
  {
    title: "[Msc Thesis] XR Assembly Training with LLM Voice Assistant",
    description: "MSc thesis at TU Munich in collaboration with Hololight. Customized an AR industrial assembly training app for HoloLens 2, integrating an LLM-based voice assistant (ARTA) and open-ended 'Free Mode'. Conducted a comparative user study evaluating voice vs. GUI interaction.",
    thumbnail: "/thumbnails/voxyPanel1.png",
    tags: ["Unity", "C#", "HoloLens 2", "MRTK", "REST API", "UX Research", "AR"],
    links: [
      { label: "VOXReality Project", href: "https://voxreality.eu/use-cases/" },
      { label: "Download Thesis", href: "downloadables/Master_Thesis.pdf", download: true },
    ]
  },
  {
    title: "[Bsc Thesis] CrystalloGame — Educational X-ray Crystallography Game",
    description: "BSc thesis at University of Milan. A 3D educational game teaching X-ray crystallography concepts through interactive mechanics. Features real-time diffraction pattern simulation using Custom Render Textures and HLSL shaders. Won the Matteo Dellapiane Award at EuroGraphics Italy STAG 2021.",
    thumbnail: "/thumbnails/Crystal_gameview.png",
    tags: ["Unity", "C#", "HLSL", "Computer Graphics", "Game Design"],
    links: [
      { label: "Play Game", href: "https://gabrieleprinciotta98.github.io/CrystalloGame/" },
      { label: "Download Presentation", href: "downloadables/RiassuntoTesiGabrielePrinciotta.pdf", download: true },
    ]
  },
]