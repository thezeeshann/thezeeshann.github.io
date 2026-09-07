import { FiExternalLink, FiPause, FiPlay } from "react-icons/fi";
import { music } from "../lib/data";
import { useYouTubeAudio } from "../lib/useYouTubeAudio";

const buttonClasses =
  "flex h-8 w-8 items-center justify-center rounded-full hairline text-muted transition-colors hover:bg-subtle hover:text-fg disabled:cursor-not-allowed disabled:opacity-50";

const MusicToggle = () => {
  const { containerRef, ready, playing, error, toggle } = useYouTubeAudio(
    music.videoId
  );

  // A blocked or non-embeddable video degrades to a link rather than a
  // button that silently does nothing.
  if (error) {
    return (
      <a
        href={music.url}
        target="_blank"
        rel="noreferrer"
        title={`${music.title} (opens on YouTube)`}
        aria-label={`${music.title} — open on YouTube`}
        className={buttonClasses}
      >
        <FiExternalLink size={14} />
      </a>
    );
  }

  return (
    <>
      <button
        type="button"
        onClick={toggle}
        disabled={!ready}
        aria-pressed={playing}
        aria-label={playing ? "Pause music" : `Play ${music.title}`}
        title={ready ? music.title : "Loading music…"}
        className={buttonClasses}
      >
        {playing ? <FiPause size={14} /> : <FiPlay size={14} />}
      </button>

      {/* Off-screen, not display:none — a display-hidden iframe can be
          refused playback. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-9999px] top-0 h-px w-px opacity-0"
      >
        <div ref={containerRef} />
      </div>
    </>
  );
};

export default MusicToggle;
