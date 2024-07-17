import clsx from "clsx";

export function Header() {
  const work = [
    {
      title: "Frontend developer",
      place: "Six Socks Studio",
      year: "2022—Ongoing",
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
        "grid md:grid-cols-2 p-sm z-0 pb-12 gap-8",
        "md:h-screen md:pb-base md:z-10 md:sticky md:top-0 md:gap-0"
      )}
    >
      <div
        className={clsx(
          "flex flex-col justify-between gap-8 h-full",
          "lg:gap-0"
        )}
      >
        <div
          className={clsx("grid grid-cols-2", "md:flex md:flex-col md:gap-0.5")}
        >
          <h1 className="gsap:scrumble">Elena Catani</h1>
          <p className="gsap:scrumble text-darkgrey">
            Web Development & <br /> Graphic Design
          </p>
        </div>
        <div className={clsx("grid grid-cols-2", "md:grid-cols-1")}>
          <div className="flex flex-col gap-0.5">
            <h1 className={clsx("gsap:scrumble")}>Social</h1>
            <div className="flex items-end">
              <a target="_blank" href="https://github.com/asse15131c">
                Github
              </a>
              <span className="mr-1">,</span>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/elena-catani/"
              >
                LinkedIn
              </a>
            </div>
          </div>
          <div className="md:hidden flex-col items-start flex gap-0.5">
            <h1 className={clsx("gsap:scrumble")}>Get in touch</h1>
            <div className="flex flex-col">
              <a href="mailto:catani.elena1@gmail.com">
                catani.elena1@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className={clsx(
          "flex flex-col gap-lg",
          "md:h-full md:flex md:flex-col md:justify-between md:gap-0"
        )}
      >
        <div className={clsx("flex flex-col gap-0.5", "lg:gap-0")}>
          <h3 className={clsx("lg:mb-0.5", "gsap:scrumble")}>Experiences</h3>
          <ul
            className={clsx(
              "grid grid-cols-2 gap-base text-darkgrey",
              "md:flex md:flex-col"
            )}
          >
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
        <div className="md:flex flex-col items-start hidden">
          <h1 className={clsx("gsap:scrumble")}>Get in touch</h1>
          <div className="flex flex-col">
            <a href="mailto:catani.elena1@gmail.com">catani.elena1@gmail.com</a>
          </div>
        </div>
      </div>
    </header>
  );
}
