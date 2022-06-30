import Image from "next/image";
import Link from "next/link";
import React from "react";
import CASection from "../components/CASection";
import CardTag from "../components/ui/CardTag";
import Footer from "../components/ui/Footer";
import GetEmail from "../components/ui/GetEmail";
import Header from "../components/ui/Header";

function index() {
  return (
    <div className=" overflow-hidden  ">
      <main className="">
        {/* Jumbo and Header */}
        <Image
          className=" overflow-hidden -z-10"
          alt="3d Artist"
          src="/img-jmb1.jpg"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className=" twoGradient h-screen w-screen  flex flex-col justify-between">
          <Header />
          <div className="w-full  flex flex-col items-center justify-center relative ">
            <div className="-mt-[40%] sm:-mt-[10%] gap-2 max-w-5xl text-center flex flex-col items-center lg:gap-4 lg:-mt-[10%]">
              <div className="subtitle w-[310px] text-white before:bg-white after:bg-white ">
                <h4 className=" font-gotham text-sm ">
                  GAMEWORLD DISTRIBUTORS
                </h4>
              </div>
              <h1 className="h1 mb-5 lg:mb-8">
                Connecting Players & <br />
                Games in an Immersive environment.
              </h1>
              <Link href="/">
                <a className=" text-base font-gotham text-white rounded-full px-10 py-[18.5px] bg-gradient-to-tr  from-gradient2-100 to-gradient1-100">
                  Become a Member for Free!
                </a>
              </Link>
            </div>
          </div>
          <div className="flex justify-center mb-16">
            <a className="flex gap-2 text-lg text-white font-semibold font-sans">
              <span>Scroll down</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 "
                fill="#ffff"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </a>
          </div>
        </div>
      </main>
      <main className=" bg-[#1C1C28]  ">
        <section className="oneGradient  pb-[200px]">
          <div className=" container mx-auto  ">
            <div className="h-full flex items-center justify-center gap-[53px] pt-8 mb-24">
              <div className="h-full w-[158px]">
                <Image
                  alt="Zbrush"
                  src="/img/zbrush.png"
                  layout="responsive"
                  width={158}
                  height={40}
                />
              </div>
              <div className="h-full w-[120px]">
                <Image
                  alt="Zbrush"
                  src="/img/maya.png"
                  layout="responsive"
                  width={120}
                  height={40}
                />
              </div>
              <div className="h-full w-[148px]">
                <Image
                  alt="Zbrush"
                  src="/img/blender.png"
                  layout="responsive"
                  width={148}
                  height={40}
                />
              </div>
              <div className="h-full w-[111px]">
                <Image
                  alt="Zbrush"
                  src="/img/ue5.png"
                  layout="responsive"
                  width={111}
                  height={40}
                />
              </div>
              <div className="h-full w-[100px] ">
                <Image
                  alt="Zbrush"
                  src="/img/unity.png"
                  layout="responsive"
                  width={100}
                  height={40}
                />
              </div>
              <div className="h-full w-[41px]">
                <Image
                  alt="Zbrush"
                  src="/img/psd.png"
                  layout="responsive"
                  width={41}
                  height={40}
                />
              </div>
            </div>
            <div className="relative pt-[75px]">
              <div className="elipse w-[516px] h-[516px] top-[1px] -left-48"></div>
              <div className="elipse w-[389px] h-[389px] top-9 -right-44"></div>

              <div className="m-auto max-w-[532px] flex flex-col items-center  relative">
                <div className="subtitle w-[184px] text-[#F68E5F] before:bg-[#F68E5F] after:bg-[#F68E5F]">
                  <h4 className=" font-gotham text-sm ">What we do</h4>
                </div>
                <h2 className="mt-4 font-gotham text-[32px] text-white text-center">
                  Meeting the needs of players across the world
                </h2>
                <div className="flex gap-6 mt-[84px]">
                  <div className="border-t-2 border-[#61FFDA]">
                    <CardTag
                      src="/img/concept.jpg"
                      service="Concepts"
                      description="List of carefully selected, verified, high quality suppliers in different regions worldwide."
                    />
                  </div>
                  <div className="border-t-2 border-[#7B61FF]">
                    <CardTag
                      src="/img/concept.jpg"
                      service="Concepts"
                      description="List of carefully selected, verified, high quality suppliers in different regions worldwide."
                    />
                  </div>
                  <div className="border-t-2 border-[#FF626B]">
                    <CardTag
                      src="/img/concept.jpg"
                      service="Concepts"
                      description="List of carefully selected, verified, high quality suppliers in different regions worldwide."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="join" className="flex flex-col items-center">
          <div className="pb-[186px]">
            <CASection />
          </div>
        </section>
        <section>
          <div className="flex justify-center">
            <GetEmail />
          </div>
        </section>
      </main>
      <main>
        <Footer />
      </main>
    </div>
  );
}

export default index;
