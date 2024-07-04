import clsx from "clsx";

export function Header() {
  const work = [
    {
      title: "Frontend developer",
      place: "Six Socks Studio",
      year: "2022— ongoing",
    },
    {
      title: "Graphic designer",
      place: "Studio Azzurro",
      year: "2020—2021",
    },
    {
      title: "Master degree in",
      field: "Communication Design",
      place: "Politecnico di Milano",
      year: "2018—2021",
    },
    {
      title: "Bachelor's degree in",
      field: "Interior Design",
      place: "Politecnico di Milano",
      year: "2015—2018",
    },
  ];

  return (
    <header
      className={clsx(
        "grid grid-cols-2 p-sm z-0 pb-12 bg-white",
        "lg:h-screen lg:pb-base lg:z-10 lg:sticky lg:top-0"
      )}
    >
      <div
        className={clsx(
          "flex flex-col justify-between gap-lg h-full",
          "lg:gap-0"
        )}
      >
        <div className="flex flex-col gap-0.5">
          <h1 className="gsap:scrumble">Elena Catani</h1>
          <p className="gsap:scrumble text-darkgrey">
            Frontend developer <br />
            based in Milan
          </p>
        </div>
        <div className="flex flex-col gap-0.5">
          <h1 className={clsx("gsap:scrumble")}>Social</h1>
          <div className="flex items-end">
            <a
              className={clsx(
                "inline-block  text-blue underline pt-0.5 pb-[2px]",
                "hover:bg-blue hover:text-white",
                "gsap:scrumble"
              )}
              target="_blank"
              href="https://github.com/asse15131c"
            >
              Github
            </a>
            <span className="mr-1">,</span>
            <a
              className={clsx(
                "inline-block  text-blue hover:bg-blue hover:text-white underline pt-0.5 pb-[2px]",
                "hover:bg-blue hover:text-white",

                "gsap:scrumble"
              )}
              target="_blank"
              href="https://www.linkedin.com/in/elena-catani/"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div
        className={clsx(
          "flex flex-col gap-lg",
          "lg:h-full lg:flex lg:flex-col lg:justify-between lg:gap-0"
        )}
      >
        <div className={clsx("flex flex-col gap-md ", "lg:gap-0")}>
          <h3 className={clsx("lg:mb-0.5", "gsap:scrumble")}>Experiences</h3>
          <ul className="flex flex-col gap-base text-darkgrey">
            {work.map(({ title, place, year, field }, index) => (
              <li key={index} className="w-full flex flex-col">
                <span>{title}</span>
                {field && <span>{field}</span>}
                <div>{place}</div>
                <div className="flex-none">({year})</div>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-0.5">
          <h1 className={clsx("gsap:scrumble")}>Get in touch</h1>
          <div className="flex flex-col">
            <a
              className={clsx(
                "inline-block  text-blue underline pt-0.5 pb-[2px]",
                "hover:bg-blue hover:text-white",
                "gsap:scrumble"
              )}
              href="mailto:catani.elena1@gmail.com"
            >
              catani.elena1[at]gmail.com
              {/* Mail */}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
