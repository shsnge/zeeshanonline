
"use client"

import Image from "next/image"
import { Download } from "lucide-react"
import TextAnimation from "./TextAnimation"
import Link from "next/link"
function HomeScreen() {
    return (
        <div className="   w-full md:w-[80%] md:h-[100vh]  mx-auto flex justify-between font-primary gap-20 flex-col md:flex-row  " id="home">
            <div className=" w-full md:w-1/2 flex flex-col justify-center gap-2 p-5   mt-24">
                <h1 className="text-[1.5rem] md:text-[3rem] font-bold text-white" data-aos="fade-down-right">HI,I&apos;M <span className="text-yellow-300" >ZEESHAN</span></h1>
                <TextAnimation />


                <div className=" md:hidden w-full h-[300px] sm:h-[350px] relative mt-10  bg-slate-100" data-aos="fade-up "
                    data-aos-anchor-placement="center-bottom">

                    <Image src="/user.png" alt="img" fill className=" object-cover z-[11] relative" />


                </div>

                <p className=" text-[#ffffff92] text-justify pt-5" data-aos="fade-right">I&apos;m a passionate web developer with hands-on experience building dynamic and responsive web applications using React, Next.js, and MongoDB. My focus is on creating seamless user experiences with a clean, maintainable codebase, ensuring top-notch performance and scalability.</p>

                <Link
                    download
                    href="/Zeeshan Jabbar.pdf"
                    target="_blank"
                    alt="zeeshan abduljabbar"
                    rel="noopener noreferrer"

                >
                    <button className="bg-yellow-500 hover:bg-yellow-600 px-5 py-2 w-full md:w-[200px]  font-bold items-center flex gap-2 md:mt-10" data-aos="fade-up-right " >DOWNLOAD CV<Download /> </button></Link>
            </div>

            <div className=" hidden md:block md:w-1/2   justify-center    mt-20">

            <div className=" md:w-[300px]   md:h-[300px] lg:h-[400px] lg:w-[400px] relative mt-20 p-5" data-aos="fade-down-left">

                <Image src="/user.png" alt="img" fill className="object-contain h-full w-full z-[11] relative" />
                <div className="h-full w-full bg-[#55e5e6] absolute top-[-2rem] right-[-2rem] z-[10]"></div>
            </div>
            
            </div>
            
        </div>
    )
}

export default HomeScreen
