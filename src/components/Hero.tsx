import React from "react";

const Hero = () => {
  return (
    <header className=" flex flex-col justify-center h-[500px]">
      <div className=" space-y-4 md:space-y-6">
        <span className=" text-sm md:text-base lg:text-lg text-primary">
          Heyo👋
        </span>
        <h1 className=" text-4xl md:text-6xl lg:text-8xl !mt-1 font-bold">
          {` I'm Daniel Ikoyo`}
        </h1>
        <p className=" text-xl md:text-2xl lg:text-5xl font-semibold">
          Creative ideas, solid solutions!
        </p>
        <p className=" max-w-[650px] text-base md:text-lg lg:text-xl">
          {`I'm a fullstack developer with a passion for building innovative
          solutions and bringing wild ideas to life. I'm also a bit of a
          jokester, so you can be sure our collaboration will be fun.`}
        </p>
        <a
          href="mailto:dannirolands@gmail.com"
          className="inline-block no-underline py-3 px-4 md:py-4 md:px-8 text-base md:text-xl font-medium bg-primary shadow-xl rounded-md ">
          {`Let's have a chat`}
        </a>
      </div>
    </header>
  );
};

export default Hero;
