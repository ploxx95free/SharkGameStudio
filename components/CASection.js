import Image from "next/image";
import Link from "next/link";
import React from "react";

function CASection() {
  return (
    <div className="min-w-[1264px] lg:min-h-[483px] flex items-center ">
      <div className="max-w-[460px] lg:pb-14">
        <div className="subtitleRight  w-[270px]  text-[#F68E5F] before:bg-[#F68E5F] ">
          <h4 className=" font-gotham text-sm ">EXPLORE A NEW DIMENSION</h4>
        </div>
        <h3 className="h3 mt-4 mb-12">
          Ready to unlock your potentials in a world of fun?
        </h3>
        <Link href="/">
          <a className=" buttonMedium">Become a Member for Free!</a>
        </Link>
      </div>
      <div className="w-full">
        <Image
          alt="concept services"
          src="/img/joinImg.jpg"
          objectFit="cover"
          layout="responsive"
          width={867}
          height={483}
        />
      </div>
    </div>
  );
}

export default CASection;
