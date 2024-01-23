import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { BiSearch } from "react-icons/bi";

type Props = {};


// ... (Your imports and type definitions)

const Hero: FC<Props> = (props) => {
    return (
      <div className="w-full flex items-center">
        <div className="relative top-20 sm:top-0 md:flex md:h-700 md:w-700 lg:h-600 lg:w-600 sm:h-50vh sm:w-50vh hero_animation">
          <div className="w-full md:w-40% flex min-h-screen items-center justify-end sm:w-full sm:pt-70 md:pt-0 z-10">
            <Image
              src={require("../../../public/assests/banner-img-1.png")}
              alt=""
              className="object-contain max-w-[90%] w-[90%] sm:max-w-[85%] h-auto z-10"
            />
          </div>
          <div className="w-full md:w-60% flex flex-col items-center justify-center md:items-start text-center md:text-left mt-150px px-4">
            <h2 className="dark:text-white text-[#000000c7] text-30px md:text-70px font-[600] font-Josefin py-2 md:leading-75px">
              Improve Your Online Learning Experience Better Instantly
            </h2>
            <br />
            <p className="dark:text-[#edfff4] text-[#000000ac] font-Josefin font-[600] text-18px sm:w-full md:w-[78%]">
              We have 40+ Online courses & 500k+ online registered students. Find your desired courses from them.
            </p>
            <br />
            <br />
            <div className="w-full md:w-[90%] h-50px bg-transparent relative">
              {/* <input
                type="search"
                placeholder="Search Course...."
                className="bg-transparent border dark:border-none dark:bg-[#575757] dark:placeholder-text-[#ffff ffdd] rounded-[5px] p-2 w-full h-full outline-none text-[#0000004e] dark:text-[#ffffffe6] text-20px font-[500] font-Josefin"
              /> */}
              {/* <div className="absolute flex items-center justify-center w-50px cursor-pointer h-50px right-0 top-0 bg-[#39c1f3] rounded-r-[5px]">
                <BiSearch className="text-white" size={30} />
              </div> */}
            </div>
            <br />
            <br />
            <div className="w-full md:w-[90%] flex items-center">
              <Image src={require("../../../public/assests/client-1.jpg")} alt="" className="rounded-full" />
              <Image src={require("../../../public/assests/client-2.jpg")} alt="" className="rounded-full ml-[-20px]" />
              <Image src={require("../../../public/assests/client-3.jpg")} alt="" className="rounded-full ml-[-20px]" />
              <p className="font-Josefin dark:text-[#edfff4] text-[#000000b3] md:pl-3 text-18px font-[600]">
                500K+ People already trusted us.
                <Link href="/courses" className="dark:text-[#46e256] text-[crimson]">
                  View Courses
                </Link>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Hero;
  