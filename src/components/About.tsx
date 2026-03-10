import { about } from "../data"
import type { AboutSegment } from "../data"
import "../styles/About.css"

export default function About() {
  return (
    <section id="about" className="section">
      <h2>About</h2>
      <div className="about-card">
        {about.map((paragraph, i) => (
          <p key={i}>
            {paragraph.map((segment: AboutSegment, j) => (
              segment.highlight
                ? <span key={j} className={`about-keyword about-keyword--${segment.highlight}`}>{segment.text}</span>
                : <span key={j}>{segment.text}</span>
            ))}
          </p>
        ))}
      </div>
    </section>
  )
}