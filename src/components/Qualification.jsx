const Qualification = () => {
  return (
    <section className="mt-8 mb-10" id="qualification">
      <div className="flex flex-col mb-10 gap-y-2">
        <h1 className="text-xl font-semibold text-darkTextPrimary sm:text-4xl">
          Qualifications 📚
        </h1>
      </div>

      <div className="flex flex-col gap-y-4">
        <div className="flex flex-row items-center justify-between gap-y-1">
          <div className="flex flex-col ">
            <span className="text-[15px] text-darkTextSecondary sm:text-sm">
              Bachelor's in Computer Application
            </span>
            <a
              href="https://www.tmv.edu.in/"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-darkTextSecondary sm:text-xs"
            >
              Tilak Maharashtra Vidyapeeth
            </a>
          </div>
          <span className="text-[15px] text-darkTextSecondary sm:text-sm">
            2021-2023
          </span>
        </div>
        <div className="flex flex-row items-center justify-between gap-y-1">
          <div className="flex flex-col">
            <span className="text-[15px] text-darkTextPrimary sm:text-sm">
              Master of Computer Application
            </span>
            <a
              href="https://www.tmv.edu.in/"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-darkTextSecondary sm:text-xs"
            >
              Tilak Maharashtra Vidyapeeth
            </a>
          </div>

          <span className="text-[15px] text-darkTextSecondary sm:text-sm">
            2023-2024
          </span>
        </div>
      </div>

      {/* {work === true && (
        <div className="">
          <div className="flex flex-row items-center justify-between gap-y-1">
            <div className="flex flex-col">
              <span className="text-base font-semibold text-darkTextPrimary sm:text-sm">
                [work] - Comming soon....
              </span>
              <a
                href="https://www.tmv.edu.in/"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold text-darkTextSecondary"
              >
                
              </a>
            </div>
            <div className="flex flex-row items-center justify-center gap-x-1 text-darkTextSecondary">
              <div className="font-semibold">
                <AiOutlineCalendar size={"1.25rem"} />{" "}
              </div>
              <span className="text-base font-semibold sm:text-sm">0000-0000</span>
            </div>
          </div>
        </div>
      )} */}
    </section>
  );
};

export default Qualification;
