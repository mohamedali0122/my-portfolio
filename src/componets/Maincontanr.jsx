import {useState} from 'react'
import Lottie from 'react-lottie';

import manimg from '../animaition/mancomputer.json'
import mandarkmode from'../animaition/ligthmodeman.json'
import logoimg from '../images/logoweb.png'
import menuimg from "../images/menu.png"
import closeimg from "../images/erroex.png"
import about_me from "../images/about-me.png"
import my_serves from "../images/services.png"
import my_project from "../images/project.png"
import contact_us from "../images/contact-us.png"
import darkmoodimg from '../images/darkmodimg.png'
import lightmodeimg from '../images/lightmodeimg.png'

 function Maincontanr({darkMode,handelDarkMode, scrollToproject, scrollToAbout, scrollToServices, scrollToContact }) {

 
  const[clickmenu ,setclickmenu] = useState(false)

  function handelclickmenu(){
    setclickmenu(!clickmenu)
  }


  const defaultmanimg = {
    loop: true,
    autoplay: true,
    animationData: manimg, 
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice' 
    }
  };

  const defaultdarkmanimg = {
    loop: true,
    autoplay: true,
    animationData: mandarkmode, 
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice' 
    }
  };

  return (
    <div className='bg-[url(./images/mainimg.jpg)] bg-cover bg-no-repeat flex-col w-full h-[55vh] md:h-[65vh]  xl:h-[80vh]'>
      <div className=' w-full h-1/5 flex  justify-between lg:h-1/5'>

        <div className='  flex justify-around gap-8 lg:w-full' >

         <h1 className=' pl-4 w-44 md:w-56 relative  lg:p-6 text-3xl md:text-4xl font-bold text-ligtyalow md:p-8 lg:my-auto xl:text-6xl'><img className=' w-full ' src={logoimg} alt="" /></h1>

         <div className= 'max-lg:hidden lg:border-[3px] lg:border-ligtyalow lg:rounded-lg lg:w-[75%] lg:h-14  lg:my-auto '>
            <ul className=' lg:flex  lg:justify-evenly  md:text-white lg:font-bold lg:text-xl lg:mt-3'>
              <li onClick={scrollToAbout}    className='lg:hover:text-ligtyalow lg:hover:text-3xl lg:cursor-pointer' >About</li>
              <li onClick={scrollToServices} className='lg:hover:text-ligtyalow lg:hover:text-3xl lg:cursor-pointer'>Services</li>
              <li onClick={scrollToproject} className='lg:hover:text-ligtyalow lg:hover:text-3xl lg:cursor-pointer '> Projects</li>
              <li onClick={scrollToContact} className='lg:hover:text-ligtyalow lg:hover:text-3xl lg:cursor-pointer '>Contact us</li>
            </ul>  
        </div >
        <div className='max-lg:hidden lg:w-[15%] lg:flex lg:items-center lg:justify-center'>
         {darkMode ? <img onClick={handelDarkMode} src={lightmodeimg} alt="" className=' lg:w-[45%]  xl:w-[35%] cursor-pointer' />
         :
          <img onClick={handelDarkMode} src={darkmoodimg} alt="" className=' lg:w-[45%] xl:w-[35%] cursor-pointer'/>
         } 

        </div>

        </div>

      
         
         <div className='relative w-[50%] md:w-[25%] z-50 lg:hidden ml-4  ' >
          {clickmenu?
           <div className='absolute right-0 w-48 h-36 bg-ligtyalow  rounded-bl-[100px] rounded-b-[40px] opacity-80 transform transition-all duration-500 '>
            <img onClick={handelclickmenu} className='w-12 absolute right-1 p-1 cursor-pointer ' src={closeimg} alt="meunimg" />
            <img onClick={scrollToAbout}    className='w-9 absolute top-2 left-2 cursor-pointer hover:shadow-lg  hover:w-11 rounded-full' src={about_me} alt="about" />
            <img onClick={scrollToServices} className='w-10 mt-1 absolute top-14 left-4 cursor-pointer hover:shadow-lg hover:w-12 rounded-full' src={my_serves} alt=" serves" />
            <img onClick={scrollToproject}  className='w-10 absolute bottom-2 left-16 cursor-pointer hover:shadow-lg hover:w-12 rounded-full' src={my_project} alt="project" />
            <img onClick={scrollToContact}  className='w-10 absolute bottom-2 left-32 cursor-pointer hover:shadow-lg hover:w-12 rounded-xl' src={contact_us} alt=" contact" />
          </div> :
          <div className=' relative p-5 w-full h-full flex items-center justify-evenly md:justify-between'>
           <img onClick={handelclickmenu} className='order-2 absolute right-4 w-[20%] md:w-[30%]  cursor-pointer transform transition-all duration-500 hover:scale-125' src={menuimg} alt="" />
           {darkMode?

            <img onClick={handelDarkMode} src={lightmodeimg} alt="" className='lg:hidden  w-[25%] md:w-[35%] cursor-pointer'/>
           :
           <img onClick={handelDarkMode} src={darkmoodimg} alt="" className='lg:hidden  w-[25%] md:w-[40%] cursor-pointer'/>
           }
          </div>
          
         }
         </div>
         
      </div>

        <div className='flex flex-col gap-[5%] sm:gap-[8%] w-full h-3/4 mt-1 md:gap-[10%] md:mt-0 lg:gap-[2%] lg:flex lg:flex-row '>

        <div className=' md:hidden mb-4 w-full h-1/2 flex justify-center items-center   lg:h-full lg:w-1/2 lg:order-2'>
          {darkMode ?
            <Lottie
             options={defaultdarkmanimg}
              height={230} 
              width={230}  />  
              
              :
              <Lottie
              options={defaultmanimg}
               height={230} 
               width={230}  />  
          }
       </div>
         
       <div className='hidden lg:hidden md:mb-4 md:w-full md:h-1/2 md:flex md:justify-center md:items-center   lg:h-full lg:w-1/2 lg:order-2'>
       {darkMode ?(
            <Lottie
             options={defaultdarkmanimg}
              height={340} 
              width={340}  />  
              
              ):(
              <Lottie
              options={defaultmanimg}
               height={340} 
               width={340}  /> ) 
          }
       </div>

       <div className='hidden lg:mb-4  lg:flex lg:justify-center lg:items-center   lg:h-full lg:w-1/2 lg:order-2'>
       {darkMode ?(
            <Lottie
             options={defaultdarkmanimg}
              height={420} 
              width={420}  />  
              
              ):(
              <Lottie
              options={defaultmanimg}
               height={420} 
               width={420}  /> ) 
          }
       </div>
         <div  className=' w-full h-1/2 flex justify-center items-center lg:justify-end lg:h-full lg:w-1/2 lg:order-1'> 
          <h3  className=' w-5/6 sm:w-9/12 text-xl sm:text-2xl text-center font-serif text-white md:text-3xl lg:w-[90%] lg:ml-4 lg:text-4xl lg:leading-normal xl:text-5xl  xl:leading-normal'>&lt;<span className='text-ligtyalow'>Hello,</span> I am a web developer and graphic designer/&gt;</h3>
        </div>
       </div>

        </div>

  )
}

export default Maincontanr;