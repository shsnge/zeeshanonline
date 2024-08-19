import Image from "next/image"



function Project() {
    return (
        <div className="w-[100%]  bg-[#121212] pt[2rem] pb-[2rem] md:pt-[4rem]" id="project">
            <p className="text-white text-[28px] sm:text[33-px] md:text-[45px] font-bold uppercase text-center pt-20 " data-aos="zoom-in-down">
                pro <span className="text-yellow-400">ject</span>
            </p>
            <div className="md:w-[80%] mx-auto pt-[2rem] pb-[2rem] md:p-5 px-5  ">

                <div className=" grid grid-cols-1 md:grid-cols-3 gap-5 ">

                    <div className=" w-full h-[350px] md:w-[300px]   md:h-[300px]  relative " data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine" >

                        <Image src="/p1.png" alt="img" fill className="object-cover h-full w-full  relative" data-aos="fade-right"
                            data-aos-anchor="#example-anchor"
                            data-aos-offset="500"
                            data-aos-duration="500" />

                    </div>
                    <div className=" w-full h-[350px] md:w-[300px]   md:h-[300px]  relative " data-aos="fade-up  "
                        data-aos-anchor-placement="center-bottom">

                        <Image src="/p3.png" alt="img" fill className="object-cover h-full w-full  relative" />

                    </div>
                    <div className="w-full h-[350px]  md:w-[300px]   md:h-[300px]  relative "
                        data-aos="fade-left"
                        data-aos-anchor="#example-anchor"
                        data-aos-offset="500"
                        data-aos-duration="500">

                        <Image src="/p2.png" alt="img" fill className="object-cover h-full w-full  relative" />

                    </div>
                </div>








            </div>

        </div>
    )
}

export default Project
