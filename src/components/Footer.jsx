import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex flex-col mt-8 gap-y-4 font-Inter">
      <p className="text-[15px] font-medium font-Inter text-textPrimary dark:text-darkTextPrimary">
        If you're looking to connect with me for a project, feel free to reach
        out to me.
      </p>
      <div className="flex flex-row items-center gap-x-4 text-textSecondary dark:text-darkTextSecondary">
        <a
          target="_blank"
          href="mailto:info.zeeshann@gmail.com"
          rel="noreferrer"
          className="text-[14px] hover:underline cursor-pointer"
        >
          Email
        </a>
        <p className="text-[14px] hover:underline cursor-pointer">
          <Link rel="preconnect" to="https://github.com/thezeeshann" target="_blank">
            Github
          </Link>
        </p>
        <span className="cursor-pointer">
          <Link to="https://twitter.com/thezeeshann" target="_blank">
            <FaXTwitter size={18} className="hover:scale-90" />
          </Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
