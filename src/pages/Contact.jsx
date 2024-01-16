import { MdOutlineEmail } from "react-icons/md";
import { FiTwitter } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import {AiOutlineCalendar} from "react-icons/ai"

const Contact = () => {
  return ( 
    <section className="mt-20 mb-10" id="contact">
      
      <div className="text-center flex flex-col gap-y-2 mb-10">
        <h1 className="text-darkTextPrimary text-5xl sm:text-4xl font-bold">Contact Me</h1>
        <p className=" font-semibold text-darkTextSecondary text-base sm:text-sm">
          Want to connect? My inbox is always open!
        </p>
      </div>
      
      <div className="sm:flex sm:flex-col flex flex-row gap-x-5 sm:mx-auto  sm:gap-y-14">
        {/* meeting */}
        <div className="flex flex-col  gap-y-5 w-full ">
          <div className="flex flex-row gap-x-3  sm:flex sm:flex-row sm:items-center">
            <MdOutlineEmail
              className="text-primary cursor-pointer text-[2rem] sm:text-[2.5rem]"
            />
            <div className="flex flex-col ">
              <p className="text-darkTextPrimary font-bold ">Email</p>
              <span className="text-darkTextSecondary text-base ">
                info.zeeshann@gmail.com
              </span>
            </div>
          </div>
          <div className="flex flex-row gap-x-3">
            <AiOutlineCalendar
              className="text-primary cursor-pointer text-[2rem] sm:text-[2.5rem]"
            />
            <div className="flex flex-col">
              <p className="text-darkTextPrimary font-bold">Online Meet</p>
              <span className="text-darkTextSecondary text-base ">
                Schedule an Online Meet
              </span>
            </div>
          </div>
          <div className="flex flex-row gap-x-3">
            <FiTwitter  className="text-primary cursor-pointer text-[2rem] sm:text-[2.5rem]" />
            <div className="flex flex-col">
              <p className="text-darkTextPrimary font-bold sm:text-lg">Twitter</p>
              <span className="text-darkTextSecondary text-base ">
                @thezeeshann
              </span>
            </div>
          </div>
          <div className="flex flex-row gap-x-3">
            <IoLocationOutline
              className="text-primary cursor-pointer text-[2rem] sm:text-[2.5rem]"
            />
            <div className="flex flex-col">
              <p className="text-darkTextPrimary font-bold sm:text-lg">Location</p>
              <span className="text-darkTextSecondary text-base ">
                Mumbai, India
              </span>
            </div>
          </div>
        </div>

        {/* contact form */}
        <div className=" w-full">
          <form action="" method="post">
            <div className="flex flex-col gap-y-3">
              <div className="flex flex-col">
                <label htmlFor="name" className="text-bgSecondary ">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="outline-none rounded-md p-2 bg-darkBgSecondary border-2 border-primary text-darkTextSecondary"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="text-bgSecondary ">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="outline-none rounded-md p-2 bg-darkBgSecondary border-2 border-primary text-darkTextSecondary"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="message" className="text-bgSecondary">
                  Message
                </label>
                <textarea
                  name="message"
                  cols="30"
                  rows="2"
                  className="outline-none rounded-md p-2 bg-darkBgSecondary border-2 border-primary text-darkTextSecondary"
                ></textarea>
              </div>
            </div>
            <button className="mt-5 bg-primary rounded-lg py-2 px-4">
              <span className="text-base  text-black font-semibold tracking-normal">
                {" "}
                Send Message
              </span>
            </button>
            {/* <Button text="Send Message" /> */}
          </form>
        </div>
      </div>
      
    </section>
  );
};

export default Contact;
