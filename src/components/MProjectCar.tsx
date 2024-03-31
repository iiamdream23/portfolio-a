"use client"
import React from 'react';
import Image from 'next/image';

const MProjectCar = () => {

  const handleVisitClick = () => {
    window.location.href = "https://car-showcase-hmuf.vercel.app/";
  }

  const handleCode = () => {
    window.location.href = "https://github.com/iiamdream23/car-showcase";
  }
  
  return (
    <section className='flex flex-col-reverse items-center md:hidden bg-slate-100 pt-20 gap-6 w-full'>
      
      {/* Image */}
      <div className="left-div relative flex items-center justify-center rounded-2xl w-[400px] h-[350px]">
          <Image
            src="/car.png"
            alt="car"
            width={400}
            height={400}
            className="absolute rounded-2xl transition-all duration-700 hover:scale-110"
          />
        </div>

        {/* Texts */}
        <div className="right-div rounded-2xl flex flex-col items-center justify-center w-1/2">
          <h1 className="font-extrabold mb-4">Car Showcase</h1>
          <p className="font-light text-sm text-center mb-4">
          Explore an exquisite collection of top-tier automobiles on our sleek car showcase website. From luxury sedans to powerful sports cars, immerse yourself in stunning visuals and detailed specifications. Discover your dream ride with ease and sophistication.
          </p>
          <div className="flex gap-8 mb-10">
            <h1 className="font-extrabold text-sm">TailwindCSS</h1>
            <h1 className="font-bold text-sm">Next.js</h1>
          </div>
          <div className="flex gap-16">
            <button
              type="submit"
              className="flex items-center gap-2 hover:py-2 hover:px-4 hover:border transform-all duration-500 hover:border-black border border-transparent py-2 px-4"
              onClick={handleCode}
            >
              <span>Code</span>
              <Image
                src="/imgs/github.svg"
                alt="GitHub"
                width={15}
                height={15}
              />
            </button>
            <button
              type="submit"
              className="flex items-center gap-2 hover:py-2 hover:px-4 hover:border transform-all duration-500 hover:border-black border border-transparent py-2 px-4"
              onClick={handleVisitClick}
            >
              <span>Visit</span>
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
    </section>
  )
}

export default MProjectCar