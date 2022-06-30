import React, { useState } from "react";
import Logo from "../svg/Logo";

function GetEmail() {
  const [email, setEmail] = useState("");
  const [rexe, setRexe] = useState(false);
  const [error, setError] = useState(false);
  function handleInput(e) {
    setEmail(e.target.value);
    let regEmail =
      /^[a-z0-9](.?[a-z0-9_-]){0,}@[a-z0-9-]+.([a-z]{1,6}.)?[a-z]{2,6}$/g;
    let rex = email.match(regEmail);
    if (rex) {
      setRexe(true);
      console.log("SI paso");
    } else {
      setRexe(false);
      console.log("NO paso");
    }
  }
  function handleClick() {
    if (!rexe) {
      setError(true);
    }
  }
  return (
    <div className="container ">
      <div className="   lg:max-w-[1264px] mx-auto py-8 ">
        <div className="flex justify-between items-center">
          <div className="flex gap-3">
            <Logo />
            <h1 className="font-gotham text-white text-xl ">Shark Studio</h1>
          </div>

          <div className="relative">
            {error && (
              <div
                className="absolute -top-1/2 -translate-y-1/2  -mt-2 text-[#F7024A] py-3 px-5 font-gotham font-medium flex items-center gap-3 bg bg-gradient-to-r from-[#4D2148] to-[#262246] rounded-full"
                role="alert"
              >
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <rect width="16" height="16" rx="8" fill="#FF0047" />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.9497 5.29289C11.3403 5.68342 11.3403 6.31658 10.9497 6.70711L9.53553 8.12132L10.9497 9.53553C11.3403 9.92606 11.3403 10.5592 10.9497 10.9497C10.5592 11.3403 9.92606 11.3403 9.53553 10.9497L8.12132 9.53553L6.70711 10.9497C6.31658 11.3403 5.68342 11.3403 5.29289 10.9497C4.90237 10.5592 4.90237 9.92606 5.29289 9.53553L6.70711 8.12132L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L8.12132 6.70711L9.53553 5.29289C9.92606 4.90237 10.5592 4.90237 10.9497 5.29289Z"
                      fill="#160C2B"
                    />
                  </svg>
                </div>
                <p>Invalid email address</p>
              </div>
            )}
            <form
              id="sib-form"
              method="POST"
              action="https://09a0f5ab.sibforms.com/serve/MUIEAKMl3DSV7VBwaml3SYokeFxfkrJ3ZP8aCM2V-MhwVW4su5tiowTxNMrJaHJbresNo-qrStmilGuug9kOeiB0dP3Br0RkM8vEDZ5HC-Z4ekpMPgqaoIfLXEU8UbgK2c06L7CmWZmtMXwjeVrsA8NTCrQ4l6CdcyNRDpNtBLiRUc_G81Eq3Fl74M1D1Ko_3drHgqzN0mfKCeVL"
            >
              <div className="relative">
                <input
                  placeholder="Email address"
                  className=" py-[14px] pl-4 pr-[65px] w-[350px] max-w-[400px] rounded-full bg-[#292945] text-white"
                  onChange={handleInput}
                  value={email}
                  type="text"
                  id="EMAIL"
                  name="EMAIL"
                  autoComplete="off"
                  data-required="true"
                />
                <div onClick={handleClick}>
                  <button
                    form="sib-form"
                    type="submit"
                    className="absolute w-9 h-9 bg-[#596AFE] rounded-full flex justify-center items-center  top-1/2 -translate-y-1/2 right-[14px] "
                    disabled={!rexe}
                  >
                    <svg
                      className="ml-1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="9"
                      height="14"
                      viewBox="0 0 9 14"
                      fill="none"
                    >
                      <path
                        d="M0 12.1967L5.28313 6.91358L0 1.63045L1.63045 0L8.54404 6.91358L1.63045 13.8272L0 12.1967Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetEmail;
