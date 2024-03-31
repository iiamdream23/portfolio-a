import React from 'react';
import Image from 'next/image';

const MSectionMe = () => {
  return (
    <section className="min-h-screen md:hidden flex flex-col items-center pt-40 bg-slate-100 w-screen">

      {/* Text and Image */}
      <div className="flex flex-col items-center">

        {/* Texts Only (with Icon) */}
        <div className="flex w-auto mb-20 justify-center">
          <div className="left-div flex flex-col w-5/6 font-thin">
            <h1 className="text-4xl mb-2 font-bold">
              Front-End Web
              <br />
              <span className="">Developer 👽</span>
            </h1>
            <p className="mb-2 text-xs font-medium">
              Hi, I am Ik. A passionate front-end web developer from Nigeria
            </p>

            {/* Tetx Icons */}
            <div className="mb-2 flex gap-3">
            <a href="#" className="py-3">
                {
                  <Image
                    src="/imgs/linkedin.svg"
                    alt="Linkedin"
                    height={15}
                    width={15}
                    className=""
                  />
                }
              </a>
              <a href="#" className="py-3">
                {
                  <Image
                    src="/imgs/github.svg"
                    alt="GitHub"
                    height={15}
                    width={15}
                    className=""
                  />
                }
              </a>
            </div>
          </div>
        </div>

        {/* Image ME */}
          <div className="right-div relative overflow-hidden w-48 h-48 rounded-full">
            <Image
              src="/me.jpg"
              alt="Me"
              height={200}
              width={200}
              className="absolute hover:scale-110 transition-all ease-in-out duration-500"
            />
          </div>        
      </div>

      {/* Texh Stack */}
      <div className="flex gap-3 items-center mt-28">
        <h1 className="font-bold mt-[2px] text-xs">Tech Stack</h1>
        <div className="h-[16px] bg-slate-500 w-[1px]"></div>
        <div className="ml-5 flex gap-4 items-center">
        <Image
            src="/imgs/html-new.svg"
            alt="HTML5 Logo"
            height={15}
            width={15}
            className=""
          />
          <Image
            src="/imgs/css-new.svg"
            alt="CSS Logo"
            height={15}
            width={15}
            className=""
          />
          <Image
            src="/imgs/react.svg"
            alt="React Logo"
            height={15}
            width={15}
            className=""
          />
          <Image
            src="/next.svg"
            alt="Nextjs"
            height={40}
            width={40}
            className=""
          />
          <Image
            src="/vercel.svg"
            alt="vercel Logo"
            height={40}
            width={40}
            className=""
          />
          <Image
            src="/imgs/java.svg"
            alt="java Logo"
            height={15}
            width={15}
            className=""
          />
        </div>
      </div>
    </section>
  )
}

export default MSectionMe