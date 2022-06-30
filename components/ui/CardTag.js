import Image from "next/image";
import React from "react";
import DecoratorServices from "../svg/DecoratorServices";

function CardTag({ src, service, description }) {
  return (
    <div className="w-[298px] h-[364px] bg-[#20202E] ">
      <div className="p-6">
        <Image
          alt="concept services"
          src={src}
          objectFit="cover"
          layout="responsive"
          width={250}
          height={155}
        />
      </div>
      <div className="relative flex items-center mb-6 ">
        <DecoratorServices className="absolute" />
        <h2 className="text-[#DEE1FF] font-gotham z-10 relative pl-6 ">
          {service}
        </h2>
      </div>
      <p className="text-[#DEE1FF] font-gotham px-6">{description}</p>
    </div>
  );
}

export default CardTag;
