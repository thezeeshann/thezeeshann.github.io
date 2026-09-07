import { experience } from "../lib/data";

const Experience = () => {
  return (
    <div className="relative ml-2.5 space-y-8 pl-6">
      {/* The rail begins at the first node's centre rather than above it, and
          sits back from the text so it reads as structure, not content. */}
      <span
        aria-hidden="true"
        className="absolute bottom-0 left-0 top-2.5 w-px rail"
      />

      {experience.map((job) => (
        <div key={job.id} className="relative">
          {/* h-5 matches the role line's height, so the node centres on it. */}
          <span className="absolute -left-6 top-0 flex h-5 -translate-x-1/2 items-center">
            {job.current ? (
              <>
                <span className="live-dot" />
                <span className="sr-only">Currently here</span>
              </>
            ) : (
              <span
                aria-hidden="true"
                className="h-[7px] w-[7px] rounded-full bg-muted"
              />
            )}
          </span>

          <div className="flex flex-col justify-between gap-0.5 sm:flex-row sm:items-baseline">
            <p className="text-sm font-semibold">
              {job.companyUrl ? (
                <a
                  href={job.companyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="underline-offset-4 hover:underline"
                >
                  {job.company}
                </a>
              ) : (
                job.company
              )}{" "}
              <span className="font-normal text-muted">· {job.role}</span>
            </p>
            <p className="shrink-0 text-[11px] font-medium text-muted">
              {job.duration}
            </p>
          </div>

          <p className="mt-0.5 text-[11px] text-muted">
            {job.employmentType} · {job.location}
          </p>

          <ul className="mt-2.5 space-y-1.5">
            {job.points.map((point) => (
              <li
                key={point}
                className="flex gap-2 text-xs leading-relaxed text-muted"
              >
                <span aria-hidden="true" className="font-bold">
                  ·
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <p className="mt-2.5 text-[11px] text-muted">
            {job.techstacks.join(" · ")}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Experience;
