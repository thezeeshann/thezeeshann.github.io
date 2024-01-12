import {Link} from "react-router-dom"

const Error = () => {
  return (
    <div className="text-darkTextSecondary mt-20 py-10 flex flex-col gap-y-5  text-center">
     <p className="text-base"> A 404 error occured! Page not found, check the URL and try again.</p>
      <Link to="/">
      <span className="text-base cursor-pointer hover:text-primary">Go Back</span>
      </Link> 
    </div>
  );
};

export default Error;
