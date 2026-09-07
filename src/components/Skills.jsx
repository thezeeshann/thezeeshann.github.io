import { skills } from "../lib/data";

// Monochrome brand marks, no local assets. A missing slug just hides the
// image and leaves the label.
const iconUrl = (slug) => `https://cdn.simpleicons.org/${slug}/000000`;

const Skills = () => {
  return (
    <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
      {skills.map((skill) => (
        <span
          key={skill.name}
          className="flex items-center gap-1.5 hairline rounded-md px-2 py-1 text-[11px] text-muted transition-colors hover:bg-subtle hover:text-fg"
        >
          {skill.icon && (
            <img
              src={iconUrl(skill.icon)}
              alt=""
              aria-hidden="true"
              loading="lazy"
              className="h-3 w-3 opacity-80 dark:invert"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />
          )}
          {skill.name}
        </span>
      ))}
    </div>
  );
};

export default Skills;
