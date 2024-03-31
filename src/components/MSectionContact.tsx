import React from "react";
import Image from "next/image";

const MSectionContact = () => {
  return (
    <section className="bg-slate-100 md:hidden pt-20 w-full">
      <h6 className="font-extrabold mb-2 text-[11px] text-blue-600 uppercase">
        Contact
      </h6>
      <h2 className="font-extrabold mb-2">Don't be shy! Hit me up! 👇</h2>

      <div className="flex gap-12 pt-12 pb-24 justify-center ml-2">
        <div className="flex items-center gap-6">
          <Image src="/map-location.svg" alt="map" height={30} width={30} />
          <div>
            <h3 className="font-extrabold xl:text-[24px]">Location</h3>
            <p className="font-extrabold xl:text-[20px]">Nigeria</p>
            </div>         
        </div>
        <div className="flex items-center gap-6">
          <Image src="/envelope-open-text.svg" alt="mail" height={30} width={30} />
          <div>
            <h3 className="font-extrabold xl:text-[24px]">Mail</h3>
            <p  className="font-extrabold xl:text-[20px]">miracledonhappen@gmail.com</p>
            </div>         
        </div>
      </div>
    </section>
  );
};

export default MSectionContact;
