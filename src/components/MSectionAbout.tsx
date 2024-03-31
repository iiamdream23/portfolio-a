import React, { useEffect } from "react";
import Image from "next/image";

const MSectionAbout = () => {
  return (
    <section className="md:hidden pt-40 bg-slate-100 w-full">
      <div className="flex flex-col-reverse items-center">
        {/* Image */}
        <div className="relative overflow-hidden rounded-2xl h-[300px] w-[300px]">
          <div className="relative">
            <Image
              src="/about.jpg"
              alt="About Me"
              height={300}
              width={300}
              className="absolute transition-all duration-700 hover:scale-110"
            />
          </div>
          <div className="w-28 h-28 rounded-full bg-slate-100 flex items-center justify-center absolute -bottom-10 -left-10 text-2xl">
            👨‍💻
          </div>
        </div>

        {/* Text */}
        <div className="right-div mb-24 flex flex-col w-3/5">
          <h6 className="font-extrabold mb-2 text-[11px] text-blue-600 uppercase">
            About Me
          </h6>
          <h2 className="font-extrabold mb-2">
            A dedicated Front-End Developer based in Nigeria
          </h2>
          <p className="text-[12.5px] font-light">
            I am not just fluent in Next.js, React, Typescript, and TailwindCSS. 
            I am on a first-name basis with innovation. From responsive designs
            that dance across devices to coding wizardry that brings ideas to
            life, I thrive on turning code into captivating user experiences.
            Let us talk about weaving magic into your web projects.
            <br />
            I am excited about the opportunity to bring a fresh perspective and a
            dash of creativity to your team. Looking forward to the possibility
            of transforming pixels together.
          </p>
        </div>
      </div>
    </section>
  );
};
export default MSectionAbout;
