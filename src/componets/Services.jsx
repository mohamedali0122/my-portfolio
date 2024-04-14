import {useRef ,useEffect} from 'react'
import Lottie from 'react-lottie'
import Aos from 'aos';
import 'aos/dist/aos.css';
import webanime from '../animaition/mmmm.json'
import designeanime from '../animaition/designanime.json'
function Services({darkMode}) {
  const servicesRef = useRef(null);

  const defaultdesanime = {
    loop: true,
    autoplay: true,
    animationData: designeanime, 
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice' 
    }
  };

  const defaultwebamime = {
    loop: true,
    autoplay: true,
    animationData: webanime, 
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice' 
    }
  };
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div ref={servicesRef} className={`${darkMode ? 'bg-darkbg border-b-2 border-t-2 border-primaryblue' : 'bg-secondblue '} w-full py-10  h-auto  flex flex-col items-center pt-3 lg:pt-10 `} >
     <div className='w-full h-7 mb-10 text-center flex justify-center items-center md:h-10' ><p className={` ${darkMode ? 'text-primaryblue  border-primaryblue' : 'text-ligtyalow  border-ligtyalow'}  w-[35%] border-2  rounded-xl md:py-3 md:text-3xl md:font-bold `}> Services</p> </div>    
        
        <div className=' mb-10 w-[90%] flex flex-col items-center text-center gap-3 md:h-[42%] md:flex md:flex-row md:justify-center md:gap-0 '>

          <div className=' flex items-center justify-center w-full h-full md:pr-5 md:order-2 md:flex md:flex-col md:justify-center md:items-center md:w-[45%] md:h-full lg:pt-10 '>
          <Lottie
             options={defaultwebamime}
             height="90%" width="90%"/>            </div>

        <div   data-aos="fade-right" className='gap-2 flex flex-col justify-center h-1/2      md:w-[55%] md:h-full md:flex md:flex-col md:justify-center md:order-1 md:space-y-6 lg:text-center'>
          <h1 className={`${darkMode? ' text-primaryblue' : 'text-ligtyalow'} w-full text-xl font-bold   md:text-3xl md:w-full`}> Web developer</h1>
        <p  className={`${darkMode? 'text-primaryblue' : 'text-white'} w-full px-2 text-lg    md:text-2xl `}>“Designing and building websites using the best methods to meet your requests and expectations”</p>
        </div>

         </div> 

        <div className=' w-[90%] flex flex-col items-center text-center gap-3 md:h-[42%] md:flex md:flex-row md:justify-center  '>

          <div  className='  flex items-center justify-center w-full h-full md:pr-5 md:order-1 md:flex-col md:justify-center md:items-center md:w-[45%] md:h-full '>
            <Lottie
             options={defaultdesanime}
             height="80%" width="80%"  />       
                   </div>
          

          <div  data-aos="fade-right" className='gap-2 flex flex-col justify-center h-1/2     md:w-[55%] md:h-full md:flex md:flex-col md:justify-center md:order-2 md:space-y-6 lg:text-center'>
           <h1   className={`${darkMode ? 'text-primaryblue' : ''} text-ligtyalow w-full text-xl font-bold   md:text-4xl md:w-full`}> Designer</h1>
           <p   className={`${darkMode? 'text-primaryblue':'text-white '} w-full  text-lg   md:text-2xl `}>“As a graphic designer, I specialize in creating innovative social media designs and distinctive presentation slides”</p>
         </div>

</div> 
      
    </div>
  )
}

export default Services
