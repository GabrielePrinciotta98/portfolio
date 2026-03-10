import { skillCategories } from "../data"
import SkillChip from "./SkillChip"
import "../styles/Skills.css"

export default function Skills() {
  return (
    <section id="skills" className="section">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skillCategories.map((cat) => (
          <div key={cat.category} className="skill-category">
            <h3 className="skill-category__title">{cat.category}</h3>
            <div className="skill-category__chips">
              {cat.skills.map((skill) => (
                <SkillChip key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}