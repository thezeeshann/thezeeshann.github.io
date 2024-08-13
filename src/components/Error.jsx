import {Link} from "react-router-dom"

const Error = () => {
  return (
    <div className="flex flex-col min-h-screen py-10 mt-20 text-center text-darkTextSecondary gap-y-5">
     <p className="text-base"> A 404 error occured! Page not found, check the URL and try again.</p>
      <Link to="/">
      <span className="text-base cursor-pointer hover:text-primary">Go Back</span>
      </Link> 
    </div>
  );
};

export default Error;
