import React from "react";
import Image from "next/image";

const SectionAbout2 = () => {
  return (
    <section className="hidden pb-64 bg-slate-100 md:flex xl:flex justify-center gap-10">

      {/* Images */}
      <div className="relative xl:w-1/5">
        <div className="relative overflowhidden rounded-2xl md:h-[265px] md:w-[265px] xl:h-[350px] xl:w-[350px] top-3">
          <Image
            src="/about.jpg"
            alt="About Me"
            height={350}
            width={350}
            className="absolute transition-transform transform duration-700 hover:scale-110 md:h-[265px] md:w-[265px] xl:h-[350px] xl:w-[350px]"
          />
        </div>

        <div className="w-28 h-28 absolute xl:-bottom-[40px] xl:-right-24 2xl:-bottom-[30px] 2xl:-right-10 md:-bottom-8 md:-right-12 rounded-full bg-slate-100 flex items-center justify-center text-2xl xl:-mr-8">
          👨‍💻
        </div>
      </div>

      {/* Tetxs */}
      <div className="md:w-[300px] xl:w-[380px] xl:mx-24 2xl:mx-16">
        <h6 className="font-extrabold mb-2 text-[11px] xl:text-[18px] text-blue-600 uppercase">
          About Me
        </h6>
        <h2 className="font-extrabold mb-2 xl:text-[20px]">
          A dedicated Front-End Developer based in Nigeria
        </h2>
        <p className="text-[12.5px] font-light xl:text-[17px]">
          I'm not just fluent in Next.js, React, Typescript, and TailwindCSS;
          I'm on a first-name basis with innovation. From responsive designs
          that dance across devices to coding wizardry that brings ideas to
          life, I thrive on turning code into captivating user experiences.
          Let's talk about weaving magic into your web projects.
          <br />
          I'm excited about the opportunity to bring a fresh perspective and a
          dash of creativity to your team. Looking forward to the possibility of
          transforming pixels together.
        </p>
      </div>
    </section>
  );
};

export default SectionAbout2;
