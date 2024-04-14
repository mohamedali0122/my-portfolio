import {useRef ,useEffect} from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';
import myimg from "../images/myimge.jpg"
function About() {
  const aboutRef = useRef(null);
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    
    <div  ref={aboutRef} className=' flex flex-col justify-center items-center mt-20 h-[60vh] md:mt-26 lg:h-[70vh] '>

         <div className='bg-secondblue w-[80%] h-[85%] rounded-xl flex-col md:w-[55%] md:h-[85%] '>

         <div className=' flex justify-center w-full h-[13%] md:h-[20%] mb-5'><img className=' rounded-full border-4 -mt-20 border-ligtyalow ' src={myimg} alt="myimg" />
         </div> 

         <div className=' border-b-2 border-white  pb-3 flex flex-col items-center justify-center space-y-[15%] w-[68%] ml-auto mr-auto h-[35%] relative md:w-[85%] md:space-y-10'>
            <h1 data-aos="fade-down" className='absolute top-0 -mt-2 font-bold text-ligtyalow text-xl md:text-2xl xl:text-3xl md:mb-4'>About Me</h1>

            <div className='w-full text-sm sm:text-lg  text-center space-y-[4%] after: xl:flex  xl:space-x-[3%] md:w-[100%] xl:space-y-0 xl:items-center xl:justify-center xl:h-[50%]'> 
           <h3 data-aos="fade-down" className=' text-white  md:text-xl xl:w-[55%] lg:text-2xl xl:text-2xl'><span className='font-bold text-ligtyalow'>Name:</span> Muhammad Ali Al-Hilo</h3>
           <h3 data-aos="fade-down" className='  text-white md:w-full md:text-xl xl:w-[45%] lg:text-2xl xl:text-2xl'><span className='font-bold text-ligtyalow'>Birthday:</span>  17 July 2001</h3></div>
          
         </div>
           <div className=' h-[42%]   w-[90%] flex  items-center text-center  ml-auto mr-auto text-white '>
            <p data-aos="fade-up" className='text-sm sm:text-lg py-8  h-auto leading- font-serif md:text-xl lg:text-2xl'>I have a Bachelor's degree in Information Technology and Computer Science, and I work in the fields of graphic design and website programming</p>
           </div>
         </div>
    </div>
  )
}

export default About
