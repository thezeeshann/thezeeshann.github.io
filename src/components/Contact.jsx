import { MdOutlineEmail } from "react-icons/md";
import { FiTwitter } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineCalendar } from "react-icons/ai";

const Contact = () => {
  return (
    <section className="mt-20 mb-10 " id="contact">
      <div className="flex flex-col mb-10 text-center gap-y-2">
        <h1 className="text-5xl font-bold text-darkTextPrimary sm:text-4xl">
          Contact Me
        </h1>
        <p className="text-base font-semibold text-darkTextSecondary sm:text-sm">
          Want to connect? My inbox is always open!
        </p>
      </div>

      <div className="flex flex-row sm:flex sm:flex-col gap-x-5 sm:mx-auto sm:gap-y-14">
        {/* meeting */}
        <div className="flex flex-col w-full gap-y-5 ">
          <div className="flex flex-row gap-x-3 sm:flex sm:flex-row sm:items-center">
            <MdOutlineEmail className="text-primary cursor-pointer text-[2rem] sm:text-[2.5rem]" />
            <div className="flex flex-col ">
              <p className="font-bold text-darkTextPrimary ">Email</p>
              <span className="text-base text-darkTextSecondary ">
                info.zeeshann@gmail.com
              </span>
            </div>
          </div>
          <div className="flex flex-row gap-x-3">
            <AiOutlineCalendar className="text-primary cursor-pointer text-[2rem] sm:text-[2.5rem]" />
            <div className="flex flex-col">
              <p className="font-bold text-darkTextPrimary">Online Meet</p>
              <span className="text-base text-darkTextSecondary ">
                Schedule an Online Meet
              </span>
            </div>
          </div>
          <div className="flex flex-row gap-x-3">
            <FiTwitter className="text-primary cursor-pointer text-[2rem] sm:text-[2.5rem]" />
            <div className="flex flex-col">
              <p className="font-bold text-darkTextPrimary sm:text-lg">
                Twitter
              </p>
              <span className="text-base text-darkTextSecondary ">
                @thezeeshann
              </span>
            </div>
          </div>
          <div className="flex flex-row gap-x-3">
            <IoLocationOutline className="text-primary cursor-pointer text-[2rem] sm:text-[2.5rem]" />
            <div className="flex flex-col">
              <p className="font-bold text-darkTextPrimary sm:text-lg">
                Location
              </p>
              <span className="text-base text-darkTextSecondary ">
                Mumbai, India
              </span>
            </div>
          </div>
        </div>

        {/* contact form */}
        <div className="w-full ">
          <form action="" method="post">
            <div className="flex flex-col gap-y-3">
              <div className="flex flex-col">
                <label htmlFor="name" className="text-bgSecondary ">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="p-2 border-2 rounded-md outline-none bg-darkBgSecondary border-primary text-darkTextSecondary"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="text-bgSecondary ">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="p-2 border-2 rounded-md outline-none bg-darkBgSecondary border-primary text-darkTextSecondary"
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
                  className="p-2 border-2 rounded-md outline-none bg-darkBgSecondary border-primary text-darkTextSecondary"
                ></textarea>
              </div>
            </div>
            <button className="px-4 py-2 mt-5 rounded-lg bg-primary">
              <span className="text-base font-semibold tracking-normal text-black">
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
