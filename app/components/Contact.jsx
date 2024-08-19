
import { MapPinHouse, PhoneCall, Mail } from "lucide-react"

function Contaact() {
    return (

        <div id="footer" className="w-[100%] h-[100%] bg-[#121212] pt[2rem] pb-[2rem] md:pt-[4rem] md:pb-[6rem]" >

            <div className="   md:w-[80%] pt-[2rem] pb-[2rem] grid  md:grid-cols-3 gap-5 md:gap-0   mx-auto">


                <div className="hidden text-white md:flex  items-center gap-5 " data-aos="fade-right">
                    <div className=" bg-yellow-400 h-[80px] w-[80px] rounded-full flex justify-center items-center">
                        <MapPinHouse size={48} color="#000000" className="hover:rotate-180 transition-all duration-300" />
                    </div>
                    <div>
                        <h1 className="text-lg font-semibold uppercase">Add<span className="text-yellow-400">ress</span></h1>
                        <p>Y 272 housing colony</p>
                        <p>nankana sahib</p>
                    </div>

                </div>



                <div className="text-white hidden  md:flex  items-center  gap-5" data-aos="fade-up  "
                        data-aos-anchor-placement="center-bottom">
                    <div className=" bg-yellow-400 h-[80px] w-[80px] rounded-full flex justify-center items-center">
                        <PhoneCall size={48} color="#000000" className="hover:rotate-180 transition-all duration-300" />
                    </div>
                    <div>
                        <h1 className="text-lg font-semibold uppercase">Ph<span className="text-yellow-400">one</span></h1>
                        <p>+92 301 4870303</p>
                        <p>+92 313 4098664</p>
                    </div>

                </div>

                <div className=" hidden  md:flex  items-center gap-5 text-white " data-aos="fade-left ">
                    <div className=" bg-yellow-400 h-[80px] w-[80px] rounded-full flex justify-center items-center">
                        <Mail size={48} color="#000000" className="hover:rotate-180 transition-all duration-300" />
                    </div>
                    <div>
                        <h1 className="text-lg font-semibold uppercase">Send Us <span className="text-yellow-400">Email</span></h1>
                        
                        <p>shanibahe@gmail.com</p>
                        <p>zeshanabduljabbar@gmail.com</p>
                    </div>

                </div>


                {/* mobile................................................ */}



                <div className=" flex  flex-col md:hidden   gap-5  " data-aos="fade-left ">
                    

                    <div className="flex gap-2  px-2">
                        <div className=" ">
                            <PhoneCall size={40} color="rgb(250 204 21)" className="hover:rotate-180 transition-all duration-300" />
                        </div>


                        <div className=" ">
                            <p className="text-sm">+92 301 4870303</p>
                            <p className="text-sm">+92 313 4098664</p>
                        </div>


                    </div>

                </div>




                



                <div className=" flex  flex-col md:hidden  -5  " data-aos="fade-left ">
                   

                    <div className="flex gap-2 p-2">
                        <div className="">
                            <MapPinHouse size={40} color="rgb(250 204 21)" className="hover:rotate-180 transition-all duration-300" />
                        </div>


                        <div className=" ">
                        <p>Y 272 housing colony</p>
                        <p>nankana sahib</p>
                        </div>


                    </div>

                </div>

                <div className=" flex  flex-col md:hidden   gap-5  " data-aos="fade-left ">
                   

                   <div className="flex gap-2 px-2">
                       <div className="">
                           <Mail size={40} color="rgb(250 204 21)" className="hover:rotate-180 transition-all duration-300" />
                       </div>


                       <div className=" ">
                          
                           <p className="text-sm">shanibahe@gmail.com</p>
                           <p className="text-sm">zeshanabduljabbar@gmail.com</p>
                       </div>


                   </div>

               </div>



            </div>

        </div>





    )
}

export default Contaact
