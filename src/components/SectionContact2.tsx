import React from "react";
import Image from "next/image";

const SectionContact2 = () => {
  return (
    <section className="bg-slate-100 hidden md:block pl-36 xl:pl-64 pt-32 hscreen w-full">
      <h6 className="font-extrabold mb-2 text-[11px] xl:text-[18px] text-blue-600 uppercase">
        Contact
      </h6>
      <h2 className="font-extrabold mb-12 xl:text-[20px]">
        Do not be shy! Say Hi! 👇
      </h2>

      <div className="flex gap-12 xl:gap-24 pt-4 pb-20 xl:pt-8 xl:pb-32 ml-2 xl:ml-8">
        <div className="flex items-center gap-6">
          <Image src="/map-location.svg" alt="map" height={40} width={40} />
          <div>
            <h3 className="fontextrabold xl:text-[24px]">Location</h3>
            <p className="font-extrabold xl:text-[20px]">Nigeria</p>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <Image src="/envelope-open-text.svg" alt="message" height={40} width={40} />
          <div>
            <h3 className="fontextrabold xl:text-[24px]">Mail</h3>
            <p className="font-extrabold xl:text-[20px]">
              miracledonhappen@gmail.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionContact2;
