"use client"
import Link from "next/link"
import { Download } from "lucide-react"
import Image from "next/image"
function About() {
    return (
        <div className="md:w-[100%] bg-[#121121]">
            <div className=" pb-[1rem] pt-[1rem] md:pt-[4rem] md:w-[80%] mx-auto" id="about">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[3rem] items-center pt-20   p-5">
                    <div data-aos="flip-left">
                        <h1 className="text-[20px] md:text-[36px]  font-bold text-[#55e5e6] uppercase" data-aos="zoom-in-down">
                            About Me
                        </h1>
                        <h1 className="text-[20px] md:text-[35px] lg:text-[45px] font-bold text-white capitalize mt-5 mb-5">
                            transforming<span className="text-yellow-400">Vision</span>
                        </h1>
                        <div className="mb-[3rem] flex items-center md:space-x-10 space-x-5 ">
                            <span className="w-[20px] md:w-[4rem] h-[5px] bg-slate-400 rounded-sm"></span>
                            <h1 className="w-[80%] text-slate-300 text-[19px] text-justify leading-tight text-[#ffffff92]">
                                I take pride in delivering projects that not only meet the client&apos;s needs but exceed their expectations by implementing cutting-edge solutions. Whether it&apos;s building a scalable application, designing intuitive user interfaces, or optimizing a website for performance and SEO, I bring a strong commitment to quality and attention to detail to every project I work on.
                            </h1>

                        </div>
                        {/* <div className="flex items-center gap-5">
                        <Link
                            download
                            href="/Zeeshan Jabbar.pdf"
                            target="_blank"
                            alt="zeeshan abduljabbar"
                            rel="noopener noreferrer"

                        ><button className="bg-[#55e6e5] hover:bg-yellow-300 px-5 py-2  font-bold items-center flex gap-2">DOWNLOAD CV<Download /> </button></Link>

                    </div> */}
                    </div>

                    <div className=" hidden  md:block md:w-[300px]   md:h-[300px] lg:h-[400px] lg:w-[400px] relative  p-5" data-aos="flip-right">

                        <Image src="/aboutimg.png" alt="img" fill className="object-contain h-full w-full z-[11] relative rounded-full border-2 border-[#55e6e5]" />
                        {/* <div className="h-full w-full bg-[#55e5e6] absolute top-[-2rem] right-[-2rem] z-[10]"></div> */}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About
