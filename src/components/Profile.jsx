import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { profile } from "../lib/data";
import MusicToggle from "./MusicToggle";
import ThemeToggle from "./ThemeToggle";

const socials = [
  { label: "Twitter", href: profile.socials.twitter, Icon: FaXTwitter },
  { label: "GitHub", href: profile.socials.github, Icon: FiGithub },
  { label: "LinkedIn", href: profile.socials.linkedin, Icon: FiLinkedin },
  { label: "Email", href: profile.socials.email, Icon: FiMail },
];

const Profile = () => {
  return (
    <div>
      <div className="flex items-center justify-between gap-4">
        <h1 className="select-none text-lg font-bold tracking-tight sm:text-xl">
          {profile.name}
        </h1>

        <div className="relative flex items-center gap-2">
          <MusicToggle />
          <ThemeToggle />
        </div>
      </div>

      <div className="mt-2 space-y-0.5 text-[13px] leading-relaxed text-muted sm:text-sm">
        <p>
          I&apos;m a <span className="font-semibold text-fg">{profile.role}</span>
          , {profile.bio}
        </p>
        <p>{profile.availability}</p>
      </div>

      <div className="mt-3.5 flex flex-wrap items-center gap-2">
        {socials.map(({ label, href, Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("mailto:") ? undefined : "_blank"}
            rel="noreferrer"
            className="flex items-center gap-1.5 rounded-lg hairline px-2.5 py-1 text-[11px] text-muted transition-colors hover:bg-subtle hover:text-fg sm:px-3.5 sm:py-1.5"
          >
            <Icon size={12} />
            {label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Profile;
