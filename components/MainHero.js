import Badge from "./Badge";

const MainHero = () => {
  return (
    <>
      <div className="items-center gap-5 my-6 md:my-14 text-center">
        <div className="">
          <div className="bg-violet-400 pointer-events-none absolute aspect-square w-60 rounded-full opacity-20 blur-3xl [transform:translate3d(0,0,0)]"></div>
          <Badge color="text-slate-700 bg-purple-200">
            - My Chas Academy Portfollio -
          </Badge>
          <h1 className=" text-3xl md:text-5xl font-extrabold mt-3 mb:mb-4">
            Hey, I'm Huseyin!
          </h1>
          <h2 className="text-3xl md:text-5xl font-extrabold my-3">
            I am a{" "}
            <span className="bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
              Frontend Developer
            </span>{" "}
            student <br />
            from Chas Academy.
          </h2>
          <p className=" text-sm md:text-lg">
            This portfolio website includes only my projects at Chas Academy and
            some side projects.
          </p>
          <a
            className="button md:large base primary rm mt-5"
            to="/buttons"
            href="/projects"
          >
            Projects
          </a>
          <a
            className="button md:large base secondary rm mt-5 ml-2"
            href="/about"
          >
            About
          </a>
        </div>
      </div>
    </>
  );
};

export default MainHero;
