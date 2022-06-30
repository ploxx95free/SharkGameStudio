import React from "react";
import Link from "next/link";

function Footer() {
  let year = new Date().getFullYear();
  return (
    <div
      id="footer"
      className="border-[#30313F] border-t bg-[#1C1C28]  flex justify-center "
    >
      <div className="container  ">
        <div className="lg:max-w-[1264px] mx-auto ">
          <div className="flex justify-between py-10">
            <div className="">
              <div className="h4 max-w-[400px]">
                Get updates on your favourite games
              </div>
              <div className="flex flex-col items-start gap-5">
                <p className="">Ready to explore?</p>
                <div className="relative">
                  <Link href="/">
                    <div className=" buttonMedium">
                      <a className=" ">Get Started</a>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex lg:gap-[72px]">
              <div className=" flex flex-col  md:gap-8 lg:gap-9 ">
                <div>
                  <Link href="">
                    <a className="text-[#BDC3FF] font-gotham text-sm cursor-pointer">
                      SERVICES
                    </a>
                  </Link>
                </div>
                <nav className=" hidden  md:flex md:flex-col md:gap-6 md:text-white">
                  <ul>
                    <Link href="">
                      <a className=" ">Concepts Art</a>
                    </Link>
                  </ul>
                  <ul>
                    <Link href="">
                      <a className=" ">3D Production</a>
                    </Link>
                  </ul>
                  <ul>
                    <Link href="">
                      <a className=" ">Animation & Film</a>
                    </Link>
                  </ul>
                  <ul>
                    <Link href="">
                      <a className=" ">Character Design</a>
                    </Link>
                  </ul>
                </nav>
              </div>
              <div className="flex flex-col  md:gap-8 lg:gap-9">
                <div>
                  <Link href="">
                    <a className="text-[#BDC3FF] font-gotham text-sm cursor-pointer">
                      ABOUT
                    </a>
                  </Link>
                </div>
                <nav className=" hidden  md:flex md:flex-col md:gap-6 md:text-white">
                  <ul>
                    <Link href="">
                      <a className=" ">Our Culture</a>
                    </Link>
                  </ul>
                  <ul>
                    <Link href="">
                      <a className=" ">Blog</a>
                    </Link>
                  </ul>
                  <ul>
                    <Link href="">
                      <a className=" ">Team</a>
                    </Link>
                  </ul>
                </nav>
              </div>
              <div className="flex flex-col  md:gap-8 lg:gap-9">
                <div>
                  <Link href="">
                    <a className="text-[#BDC3FF] font-gotham text-sm cursor-pointer">
                      HELP
                    </a>
                  </Link>
                </div>
                <nav className=" hidden  md:flex md:flex-col md:gap-6 md:text-white">
                  <ul>
                    <Link href="">
                      <a className=" ">FAQs</a>
                    </Link>
                  </ul>
                  <ul>
                    <Link href="">
                      <a className=" ">Contact Us</a>
                    </Link>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end">
            <a
              href="https://www.artstation.com/sharkstudio8"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                className="h-12 w-12 mr-4"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                id="Layer_1"
                fill="#5F627E"
                x="0px"
                y="0px"
                viewBox="0 0 208.8 195.9"
                xmlSpace="preserve"
              >
                <g>
                  <path
                    className="st0"
                    d="M51.4,123.3l8.9,15.4l0,0c1.8,3.5,5.4,5.9,9.5,5.9l0,0l0,0h59.3l-12.3-21.3H51.4z"
                  />
                  <path
                    className="st0"
                    d="M157.2,123.4c0-2.1-0.6-4.1-1.7-5.8l-34.8-60.4c-1.8-3.4-5.3-5.7-9.4-5.7H92.9l53.7,93l8.5-14.7   C156.7,127,157.2,125.8,157.2,123.4z"
                  />
                  <polygon
                    className="st0"
                    points="108.1,108.1 84.2,66.6 60.2,108.1  "
                  />
                </g>
              </svg>
            </a>

            <div className="flex gap-[26px]">
              <a href="/" target="_blank" rel="noreferrer">
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="20"
                  viewBox="0 0 24 20"
                  fill="none"
                >
                  <path
                    d="M23.6762 2.49014C22.8311 2.88164 21.9306 3.14114 20.9918 3.26714C21.9576 2.65814 22.6947 1.70114 23.0413 0.547641C22.1408 1.11464 21.1466 1.51514 20.087 1.73864C19.232 0.777141 18.0134 0.181641 16.684 0.181641C14.1047 0.181641 12.0282 2.39264 12.0282 5.10314C12.0282 5.49314 12.0594 5.86814 12.1361 6.22514C8.26294 6.02564 4.83573 4.06514 2.5334 1.07864C2.13145 1.81514 1.89568 2.65814 1.89568 3.56564C1.89568 5.26964 2.72656 6.78014 3.96508 7.65464C3.21657 7.63964 2.48227 7.41014 1.86017 7.04864C1.86017 7.06364 1.86017 7.08314 1.86017 7.10264C1.86017 9.49364 3.47507 11.4796 5.59275 11.9371C5.21353 12.0466 4.80022 12.0991 4.37128 12.0991C4.07302 12.0991 3.77191 12.0811 3.48927 12.0151C4.0929 13.9636 5.8058 15.3961 7.84253 15.4426C6.25746 16.7521 4.24488 17.5411 2.06612 17.5411C1.68405 17.5411 1.31761 17.5231 0.951172 17.4736C3.01489 18.8791 5.46066 19.6816 8.09818 19.6816C16.6712 19.6816 21.3582 12.1816 21.3582 5.68064C21.3582 5.46314 21.3511 5.25314 21.3412 5.04464C22.2658 4.35164 23.0427 3.48614 23.6762 2.49014Z"
                    fill="#5F627E"
                  />
                </svg>
              </a>
              <a href="/" target="_blank" rel="noreferrer">
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.37891 0H15.9008C19.8223 0 23.0023 3.3585 23.0023 7.5V16.5C23.0023 20.6415 19.8223 24 15.9008 24H7.37891C3.45742 24 0.277344 20.6415 0.277344 16.5V7.5C0.277344 3.3585 3.45742 0 7.37891 0ZM15.9007 21.75C18.6419 21.75 20.8718 19.395 20.8718 16.5V7.5C20.8718 4.605 18.6419 2.25 15.9007 2.25H7.37878C4.63758 2.25 2.40769 4.605 2.40769 7.5V16.5C2.40769 19.395 4.63758 21.75 7.37878 21.75H15.9007Z"
                    fill="#5F627E"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.95898 12C5.95898 8.6865 8.50274 6 11.6402 6C14.7776 6 17.3214 8.6865 17.3214 12C17.3214 15.3135 14.7776 18 11.6402 18C8.50274 18 5.95898 15.3135 5.95898 12ZM8.08925 12C8.08925 14.067 9.68284 15.75 11.64 15.75C13.5972 15.75 15.1908 14.067 15.1908 12C15.1908 9.9315 13.5972 8.25 11.64 8.25C9.68284 8.25 8.08925 9.9315 8.08925 12Z"
                    fill="#5F627E"
                  />
                  <ellipse
                    cx="17.7473"
                    cy="5.54999"
                    rx="0.75708"
                    ry="0.7995"
                    fill="#5F627E"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="py-6">
            <p className=" text-center text-[#777B9E]">
              Copyright {year} Shark Studio
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
