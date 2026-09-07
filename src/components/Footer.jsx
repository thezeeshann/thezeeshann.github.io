import { profile } from "../lib/data";

const Footer = () => {
  return (
    <footer>
      <hr className="mb-6 divider" />
      <div className="flex select-none flex-col gap-1 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <a
          href={profile.socials.email}
          className="transition-colors hover:text-fg hover:underline hover:underline-offset-4"
        >
          say hi → info.zeeshann@gmail.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
