"use client";
import React, { useState } from "react";
import logo from "../../public/assets/logo.png";
import mobile_logo from "../../public/assets/mobile_logo.png";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";

// Renamed `navbar` to `Navbar`
const Navbar = () => {
    const [nav, setNav] = useState(true);
    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div className="bg-[#023059] fixed h-20 w-full shadow-xl z-[100]">
            <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
                <Image src={logo} alt="/" width={80} />
                <div>
                    <ul className="hidden md:flex">
                        <Link href="/#home">
                            <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
                        </Link>

                        <Link href="/#about">
                            <li className="ml-10 text-sm uppercase hover:border-b">About</li>
                        </Link>

                        <Link href="/#skills">
                            <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
                        </Link>

                        <Link href="/#projects">
                            <li className="ml-10 text-sm uppercase hover:border-b">Projects</li>
                        </Link>

                        <Link href="/#education">
                            <li className="ml-10 text-sm uppercase hover:border-b">Education</li>
                        </Link>
                    </ul>
                    <div onClick={handleNav} className="md:hidden">
                        <AiOutlineMenu size={25} color="#80F2E7" />
                    </div>
                </div>
            </div>

            <div className={!nav ? ' md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
                <div className={!nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#023059] p-10 ease-in duration-500' : "fixed left-[-100%] top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#023059] p-10 ease-in duration-500"}>
                    <div>
                        <div className="flex w-full items-center justify-between">
                            <Image className="w-[75%]" src={mobile_logo} />
                            <div onClick={handleNav} className="rounded-full shadow-lg shadow-gray-900 p-3 cursor-pointer">
                                <AiOutlineClose color="#80F2E7" />
                            </div>
                        </div>
                        <div className="border-b my-4 text-[#80F2E7] border-gray-500 font-bold">
                            <p className="w-[85%] md:w-[90%] py-4">
                                Turning Data into Action: Let&apos;s Begin!{" "}
                            </p>
                        </div>
                    </div>
                    <div className="py-4 flex flex-col">
                        <ul className="uppercase tracking-widest text-[#80F2E7]">
                            <Link href="/#home" onClick={handleNav}>
                                <li className="py-4 text-sm">Home</li>
                            </Link>

                            <Link href="/#about" onClick={handleNav}>
                                <li className="py-4 text-sm">About</li>
                            </Link>

                            <Link href="/#skills" onClick={handleNav}>
                                <li className="py-4 text-sm">Skills</li>
                            </Link>

                            <Link href="/#projects" onClick={handleNav}>
                                <li className="py-4 text-sm">Projects</li>
                            </Link>

                            <Link href="/#education" onClick={handleNav}>
                                <li className="py-4 text-sm">Education</li>
                            </Link>
                        </ul>
                        <div className="pt-20">
                            <p className="uppercase tracking-widest text-[#079DD9]">
                                Lets connect
                            </p>
                            <div className="flex items-center justify-between my-5 w-full sm:w-[80%]">
                                <div className="rounded-full shadow-lg shadow-gray-700 p-3 cursor-pointer hover:scale-105 ease-in duration-500 bg-[#80F2E7]">
                                    <a href="https://www.linkedin.com/in/adam-wagh/" target="_blank">
                                        <FaLinkedinIn color="#033E8C" size={25} />
                                    </a>
                                </div>

                                <div className="rounded-full shadow-lg shadow-gray-700 p-3 cursor-pointer hover:scale-105 ease-in duration-500 bg-[#80F2E7]">
                                    <a href="mailto:adamwagh@gmail.com">
                                        <MdOutlineEmail color="#033E8C" size={25} />
                                    </a>
                                </div>

                                <div className="rounded-full shadow-lg shadow-gray-700 p-3 cursor-pointer hover:scale-105 ease-in duration-500 bg-[#80F2E7]">
                                    <Link href='/assets/documents/AdamWagh_DataResume.pdf' download target="_blank">
                                        <BsPersonLinesFill color="#033E8C" size={25} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar; // Exporting Navbar with an uppercase N