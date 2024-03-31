import React from "react";
import Image from "next/image";

const SectionMe2 = () => {
  return (
    <section className="h-screen md:pt-52 hidden md:block bg-slate-100">

      {/* Texts, Icons and Images */}
      <div className="md:flex xl:flex justify-center gap-10">
        {/* Tetxs and Icons */}
        <div className="md:w-[300px] xl:w-[380px] xl:mx24 2xl:mx16">
          <div className="left-div flex flex-col justify-center items-left font-thin">
            <h1 className="text-4xl xl:text-5xl mb-2 font-bold">
              Front-End Web
              <br />
              <span className="">Developer 👽</span>
            </h1>
            <p className="md:mb-2 text-md xl:text-lg max-w-sm font-medium">
              Hi, I am Ik. A passionate front-end web developer from Nigeria
            </p>

            {/* Icons */}
            <div className="md:mb2 h-[50px] w-[50px] xl:h-[60px] xl:w-[60px] flex gap-3">
              <a href="#" className="py-3">
                {
                  <Image
                    src="/imgs/linkedin.svg"
                    alt="Linkedin"
                    height={30}
                    width={30}
                    className=""
                  />
                }
              </a>
              <a href="#" className="py-3">
                {
                  <Image
                    src="/imgs/github.svg"
                    alt="GitHub"
                    height={30}
                    width={30}
                    className=""
                  />
                }
              </a>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="relative overflow-hidden w-48 h-48 xl:w-60 xl:h-60 rounded-full">
          <Image
            src="/me.jpg"
            alt="Me"
            height={300}
            width={300}
            className="absolute transition-all duration-500 hover:scale-110 ease-in-out"
          />
        </div>
      </div>

      {/* Tech Stack */}
      <div className="flex gap-3 justify-center items-center mt-36 xl:mt-40 pb-12">
        <h1 className="font-bold text:sm xl:text-lg">Tech Stack</h1>
        <div className="h-[16px] w-[1px] xl:h-[20px] xl:w-[2px] bg-slate-500"></div>
        <div className="ml-16 flex items-center gap-6">
          <div className="h-[20px] w-[20px] xl:h[28px] xl:w-[28px] xl:-mt-2">
            <Image
              src="/imgs/html-new.svg"
              alt="HTML5 Logo"
              height={30}
              width={30}
              className=""
            />
          </div>
          <div className="h-[20px] w-[20px] xl:h[28px] xl:w-[28px] xl:-mt-2">
            <Image
              src="/imgs/css-new.svg"
              alt="CSS Logo"
              height={30}
              width={30}
              className=""
            />
          </div>
          <div className="h-[20px] w-[20px] xl:h[28px] xl:w-[28px] xl:-mt-2">
            <Image
              src="/imgs/react.svg"
              alt="React Logo"
              height={30}
              width={30}
              className=""
            />
          </div>
          <div className="h-[15px] w-[50px] xl:h[28px] xl:w-[60px]">
            <Image
              src="/next.svg"
              alt="Nextjs"
              height={60}
              width={60}
              className=""
            />
          </div>
          <div className="h-[15px] w-[55px] xl:h[28px] xl:w-[65px]">
            <Image
              src="/vercel.svg"
              alt="vercel Logo"
              height={65}
              width={65}
              className=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionMe2;
