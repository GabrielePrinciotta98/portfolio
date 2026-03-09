import type { Skill } from "../data"
import "../styles/SkillChip.css"

const levelDots: Record<string, number> = {
  basic: 1,
  familiar: 2,
  proficient: 3,
}

export default function SkillChip({ skill }: { skill: Skill }) {
  const filled = levelDots[skill.level]

  return (
    <div className={`skill-chip skill-chip--${skill.level}`}>
      {skill.icon && (
        <img src={skill.icon} alt={skill.name} className="skill-chip__icon" />
      )}
      <span className="skill-chip__name">{skill.name}</span>
      <div className="skill-chip__dots">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className={`skill-chip__dot ${i < filled ? `skill-chip__dot--${skill.level}` : "skill-chip__dot--empty"}`}
          />
        ))}
      </div>
    </div>
  )
}