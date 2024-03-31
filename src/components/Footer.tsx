import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="h-24 bgblack flex items-center gap-[100px] sm:gap-[150px] md:gap-[250px] xl:gap-[450px] justify-center border-t border-black p-10">
      <h3>Copyright C 2024. All rights reserved</h3>
      {/* Icons */}
      <div className="h-[70px] w-[70px] xl:h-[80px] xl:w-[80px] flex items-center space-x-8">
        <a href="#">
          <Image
            src="/imgs/linkedin.svg"
            alt="Linkedin"
            height={100}
            width={100}
            className=""
          />
        </a>
        <a href="#">
          <Image
            src="/imgs/github.svg"
            alt="GitHub"
            height={100}
            width={100}
            className=""
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
