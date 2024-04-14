import {useRef ,useEffect} from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';
import Cardproect from './Cardprogict'
function Progect({darkMode}) {
  const projectRef = useRef(null);
 
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div ref={projectRef} className=' w-full h-auto   flex flex-col items-center justify-start  pt-3 pb-7 md:pt-14 '>

     <div className=' py-8 mb-6 md:mb-12 w-full h-8 md:py-12  text-center flex justify-center items-center md:h-10' ><p className={`${darkMode? 'text-primaryblue border-primaryblue border-2' : 'text-ligtyalow border-ligtyalow '} w-[42%] lg:w-[30%] py-2 border-2  rounded-xl md:py-3 md:text-2xl lg:text-3xl md:font-bold`}>projects</p> </div>    
      <Cardproect />
    </div>
  )
}

export default Progect
