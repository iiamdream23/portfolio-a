"use client"
import React from 'react';
import Image from 'next/image';

const ProjectCar = () => {

  const handleVisitClick = () => {
    window.location.href = "https://car-showcase-hmuf.vercel.app/";
  };

  const handleCode = () => {
    window.location.href = "https://github.com/iiamdream23/car-showcase";
  };

  return (
    <section className='hidden pt-28 md:gap-12 xl:gap-0 bg-slate-100 md:flex xl:flex justify-center items-center'>
      
      {/* Tetxs and Buttons */}
      <div className="md:w-[300px] xl:w-[330px] xl:mx-24 2xl:mx-16 flex flex-col items-center justify-center">
        <h2 className="font-extrabold mb-2 xl:text-[20px]">Car Showcase</h2>

        <p className="text-[14.5px] font-light xl:text-[17px]">
        Explore an exquisite collection of top-tier automobiles on our sleek car showcase website. From luxury sedans to powerful sports cars, immerse yourself in stunning visuals and detailed specifications. Discover your dream ride with ease and sophistication.
        </p>

        <div className="flex gap-8 mt-3 mb-8">
          <h1 className="font-extrabold md:text-sm xl:text-lg">TailwindCSS</h1>
          <h1 className="font-bold md:text-sm xl:text-lg">Next.js</h1>
        </div>

        <div className="flex gap-16">
          <button
            type="submit"
            className="flex items-center gap-2 hover:py-2 hover:px-4 hover:border transform-all duration-500 hover:border-black border border-transparent py-2 px-4"
            onClick={handleCode}
          >
            <span className="text-lg font-semibold">Code</span>
            <Image src="/imgs/github.svg" alt="GitHub" width={15} height={15} />
          </button>
          <button
            type="submit"
            className="flex items-center gap-2 hover:py-2 hover:px-4 hover:border transform-all duration-500 hover:border-black border border-transparent py-2 px-4"
            onClick={handleVisitClick}
          >
            <span className="text-lg font-semibold">Visit</span>
            <Image
              src="/imgs/arrow-right-from-bracket.svg"
              alt="Live Demo"
              width={15}
              height={15}
              className="transform-all duration-500 hover:translate-x-2"
            />
          </button>
        </div>
      </div>

      {/* Images */}
      <div className="xl:w-[500px] md:w-[400px] xl:ml-10">
        <Image
          src="/car.png"
          alt="car"
          height={500}
          width={500}
          className="rounded-2xl xl:w-[450px] md:w-[400px] transition-all duration-500 ease-in-out hover:scale-110"
        />
      </div>
    </section>
  )
}

export default ProjectCar