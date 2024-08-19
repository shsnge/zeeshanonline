import { TypeAnimation } from 'react-type-animation';



function TextAnimation() {
  return (
    <TypeAnimation
    sequence={[
      // Same substring at the start will only be typed out once, initially
      'Web Developer',
      1500, // wait 1s before replacing "Mice" with "Hamsters"
      'Programmer',
      1500,
      'Designer',
      1500,
      ' Coder',
      1500
    ]}
    
    speed={50}
    className='text-[1.5rem] md:text-[3rem] text-[#55e6e5] font-bold uppercase'
    repeat={Infinity}
  />
  )
}

export default TextAnimation
