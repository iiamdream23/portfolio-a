"use client"
import React from 'react';
import Image from 'next/image';

const MProjectByte = () => {

  const handleVisitClick2 = () => {
    window.location.href = "https://byte-bridge.vercel.app/";
  }

  const handleCode2 = () => {
    window.location.href = "https://github.com/iiamdream23/Byte-Bridge";
  }
  
  return (
    <section className="flex flex-col-reverse items-center md:hidden bg-slate-100 pt-10 gap-6 w-full">
        
        {/* Image */}
        <div className="left-div relative flex items-center justify-center rounded-2xl w-[400px] h-[350px]">
          <Image
            src="/download.png"
            alt="download"
            width={400}
            height={400}
            className="absolute rounded-2xl transition-all duration-700 hover:scale-110"
          />
        </div>

        {/* Texts */}
        <div className="right-div rounded-2xl flex flex-col items-center justify-center w-1/2">
          <h1 className="font-extrabold mb-4">Byte-Bridge</h1>
          <p className="font-light text-sm text-center mb-4">
            Byte Bridge is a communtiy where you can connect with fellow
            developers, share knowledge, and collaborate on exciting projects
            communtiy where you can connect with fellow developers, share
            knowledge communtiy where you can connect with fellow developers,
            share knowledge where you can
          </p>
          <div className="flex gap-8 mb-10">
            <h1 className="font-extrabold text-sm">React</h1>
            <h1 className="font-bold text-sm">Next.js</h1>
          </div>
          <div className="flex gap-16">
            <button
              type="submit"
              className="flex items-center gap-2 hover:py-2 hover:px-4 hover:border transform-all duration-500 hover:border-black border border-transparent py-2 px-4"
              onClick={handleCode2}
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
              onClick={handleVisitClick2}
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

export default MProjectByte