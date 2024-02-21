import React from "react";
import logo from "../../public/assets/logo.png";
import mobile_logo from "../../public/assets/mobile_logo.png";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
const navbar = () => {
  return (
    <div className="bg-[#023059] fixed h-20 w-full shadow-xl z-[100]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image src={logo} alt="/" width={80} />
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>

            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>

            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>

            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Education
              </li>
            </Link>

            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
          </ul>
          <div className="md:hidden">
            <AiOutlineMenu size={25} color="#80F2E7" />
          </div>
        </div>
      </div>

      <div className="fixed left-0 top-0 w-full h-screen bg-black/70">
        <div className="fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#023059] p-10 ease-in duration-500">
          <div>
            <div className="flex w-full items-center justify-between">
              <Image src={mobile_logo} width={200} />
              <div className="rounded-full shadow-lg shadow-gray-900 p-3 cursor-pointer">
                <AiOutlineClose color="#80F2E7" />
              </div>
            </div>
            <div className="border-b my-4 text-[#80F2E7] border-gray-500 font-bold">
              <p className="w-[85%] md:w-[90%] py-4">
                Turning Data into Action: Let's Begin!{" "}
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase tracking-widest text-[#80F2E7]">
              <Link href="/">
                <li className="py-4 text-sm">Home</li>
              </Link>

              <Link href="/">
                <li className="py-4 text-sm">About</li>
              </Link>

              <Link href="/">
                <li className="py-4 text-sm">Skills</li>
              </Link>

              <Link href="/">
                <li className="py-4 text-sm">Education</li>
              </Link>

              <Link href="/">
                <li className="py-4 text-sm">Projects</li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#079DD9]">
                Lets connect
              </p>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default navbar;
