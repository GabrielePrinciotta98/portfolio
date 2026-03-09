import { about } from "../data";
// import "../styles/About.css" // import to add a hovering background to the About body

export default function About() {
  return (
    <section id="about" className="section">
      <h2>About</h2>
        <div className="about-card">
          {about.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
    </section>
  )
}