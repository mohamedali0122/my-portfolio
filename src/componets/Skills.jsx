import {useEffect} from 'react'
import htmlimg from '../images/html-5.png'
import cssimg from '../images/css-3.png'
import javaimg from '../images/java-script.png'
import reactimg from '../images/science.png'
import photoshopimg from '../images/photoshop.png'
import tailwindimg from '../images/icons8-tailwindcss-96.png'
import canvaimg from '../images/icons8-canva-144.png'
import figmaimg from '../images/figma.png'
import Aos from 'aos';
import 'aos/dist/aos.css';

function Skills({darkMode}) {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className=' w-full h-[60vh] flex justify-center mt-3'>
      <div  className='bg-bluewhite w-[80%] h-[90%] sm:h-4/5 rounded-xl flex flex-col items-center md:w-[55%] '>

          <h2 className={`${darkMode ? 'bg-primaryblue text-bluewhite': 'bg-ligtyalow text-primaryblue'} font-bold rounded-3xl pt-1 -mt-5  text-lg text-center  lg:text-2xl xl:text-3xl w-[40%] h-[10%] md:h-[9%] lg:h-[11%] xl:h-[14%] `} >SKILLS</h2>
           
          <div className=' w-full  h-full flex items-center justify-center flex-wrap gap-[5%] sm:gap-2 py-3  md:gap-[5%] md:p-[5%] lg:gap-[8%] xl:gap-[10%] md:py-7 '>
            <div  data-aos="zoom-in-down" className="bg-primaryblue flex justify-center items-center rounded-full w-[4.5rem] sm:w-[5.5rem] h-[4.5rem] sm:h-[5.5rem] md:w-24 md:h-24  "><img className='w-[78%] ' src={htmlimg} alt="" /></div>
            <div  data-aos="zoom-in-down" className="bg-primaryblue flex justify-center items-center rounded-full w-[4.5rem] sm:w-[5.5rem] h-[4.5rem] sm:h-[5.5rem] md:w-24 md:h-24 "><img className='w-[78%] ' src={cssimg} alt="" /></div>
            <div  data-aos="zoom-in-down" className="bg-primaryblue flex justify-center items-center rounded-full w-[4.5rem] sm:w-[5.5rem] h-[4.5rem] sm:h-[5.5rem] md:w-24 md:h-24 "><img className='w-[70%] mt-1 ml-[3.5px]' src={javaimg} alt="" /></div>
            <div  data-aos="zoom-in-down" className="bg-primaryblue flex justify-center items-center rounded-full w-[4.5rem] sm:w-[5.5rem] h-[4.5rem] sm:h-[5.5rem] md:w-24 md:h-24 "><img className='w-[84%] ' src={reactimg} alt="" /></div>
            <div  data-aos="zoom-in-down" className="bg-primaryblue flex justify-center items-center rounded-full w-[4.5rem] sm:w-[5.5rem] h-[4.5rem] sm:h-[5.5rem] md:w-24 md:h-24"><img className='w-[74%] ' src={tailwindimg} alt="" /></div>
            <div  data-aos="zoom-in-down" className="bg-primaryblue flex justify-center items-center rounded-full w-[4.5rem] sm:w-[5.5rem] h-[4.5rem] sm:h-[5.5rem] md:w-24 md:h-24"><img className='w-[70%] 'src={figmaimg} alt="" /></div>
            <div  data-aos="zoom-in-down" className="bg-primaryblue flex justify-center items-center rounded-full w-[4.5rem] sm:w-[5.5rem] h-[4.5rem] sm:h-[5.5rem] md:w-24 md:h-24"><img className='w-[63%] mr-[2.5] 'src={photoshopimg} alt="" /></div>
            <div  data-aos="zoom-in-down" className="bg-primaryblue flex justify-center items-center rounded-full w-[4.5rem] sm:w-[5.5rem] h-[4.5rem] sm:h-[5.5rem] md:w-24 md:h-24"><img className='w-[75%] ' src={canvaimg} alt="" /></div>
          </div>

      </div>
    </div>
  )
}

export default Skills
