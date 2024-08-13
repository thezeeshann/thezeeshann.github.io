import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex flex-col mt-8 gap-y-4 font-Poppins">
      <p className="text-[15px] font-medium font-Poppins text-darkTextPrimary">
        If you're looking to connect with me for a project, feel free to reach
        out to me.
      </p>
      <div className="flex flex-row gap-x-4">
        <p className="text-[14px] hover:underline cursor-pointer text-darkTextSecondary">
          Email
        </p>
        <p className="text-[14px] hover:underline cursor-pointer text-darkTextSecondary">
          <Link to="https://github.com/thezeeshann" target="_blank">
            Github
          </Link>
        </p>
        <span className="cursor-pointer">
          <Link to="https://twitter.com/thezeeshann" target="_blank" >
            <FaXTwitter color="#cdd6f4" size={18} className="hover:scale-90" />
          </Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
