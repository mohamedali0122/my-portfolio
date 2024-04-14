import {React} from 'react'
import githubimg from "../images/github.png"
import netlifyimg from '../images/netlify.png'
import tecnowebimg from '../images/tecnowebimg.png'
import todowebimg from '../images/todowebimg.png'
import menuwebimg from '../images/menuwebimg.png'
import pokmonimg from '../images/pokemonwebimg.png'
function progcard(darkMode) {
  return (
   <div className=' h-full w-full  flex flex-wrap gap-9  md:flex md:flex-row md:justify-start md:flex-wrap '> 
 
     <div  data-aos="fade-right" className={` bg-secondblue mx-auto  w-[80%] h-44 rounded-xl flex md:w-[40%] md:h-60 ${darkMode? 'border-4 border-primaryblue shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]':'' }`} >
                
             <div className=' w-[50%] h-full flex-col justify-center text-white'>
              <h3 className='h-[30%] w-full text-center pt-3  text-lg font-bold text-ligtyalow'> project 1 </h3>
            
             <div className='e w-full h-[10%] flex justify-center items-center gap-2'>
                 <div className="bg-ligtyalow w-2 h-2 rounded-full"></div>
                 <div className="bg-ligtyalow w-2 h-2 rounded-full "></div>
                 <div className="bg-ligtyalow w-2 h-2 rounded-full "></div> 
             </div>
             <div className=' w-full h-[30%] '>
               <p className='text-center  w-full h-full pt-3 text-sm lg:text-lg'>Online store website</p>
             </div>
             <div className=' w-full h-[30%] flex items-center justify-around'>
               <a href="https://github.com/mohamedali0122/techno-store" target='blank'  > <div className="bg-bluewhite w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:w-12 hover:h-12 hover:bg-ligtyalow"><img className='w-4/5 ' src={githubimg}alt=""/></div></a> 
                <div className="bg-bluewhite w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:w-12 hover:h-12 hover:bg-ligtyalow"><img className='w-4/5 ' src={netlifyimg} alt="" /> </div>
             </div>
            </div>

            <div className=' w-[50%] h-full'>
            <img className='w-full h-full rounded-br-xl rounded-tr-xl' src={tecnowebimg} alt="" />

            </div>
            </div>

            <div  data-aos="fade-down" className={` bg-secondblue mx-auto  w-[80%] h-44 rounded-xl flex md:w-[40%] md:h-60 ${darkMode? 'border-4 border-primaryblue shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]':'' }`} >
                
                <div className=' w-[50%] h-full flex-col justify-center text-white'>
                 <h3 className='h-[30%] w-full text-center pt-3  text-lg font-bold text-ligtyalow'> project 2 </h3>
               
                <div className='e w-full h-[10%] flex justify-center items-center gap-2'>
                    <div className="bg-ligtyalow w-2 h-2 rounded-full"></div>
                    <div className="bg-ligtyalow w-2 h-2 rounded-full "></div>
                    <div className="bg-ligtyalow w-2 h-2 rounded-full "></div> 
                </div>
                <div className=' w-full h-[30%] '>
                  <p className='text-center  w-full h-full pt-3 text-sm lg:text-lg '>Information site about Pokemon</p>
                </div>
                <div className=' w-full h-[30%] flex items-center justify-around'>
                <a href="https://github.com/mohamedali0122/JS-Pokemon_API_Project" target='blank'><div className="bg-bluewhite w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:w-12 hover:h-12 hover:bg-ligtyalow"><img className='w-4/5 ' src={githubimg}alt=""/></div></a>
                   <div className="bg-bluewhite w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:w-12 hover:h-12 hover:bg-ligtyalow"><img className='w-4/5 ' src={netlifyimg} alt="" /> </div>
                </div>
               </div>
   
               <div className='w-[50%] h-full'>
                <img src={pokmonimg} alt="" className="w-full h-full rounded-br-xl rounded-tr-xl" />
               </div>
   
               </div>

            
               <div  data-aos="fade-right" className={` bg-secondblue mx-auto  w-[80%] h-44 rounded-xl flex md:w-[40%] md:h-60 ${darkMode? 'border-4 border-primaryblue shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]':'' }`} >
                
                <div className=' w-[50%] h-full flex-col justify-center text-white'>
                 <h3 className='h-[30%] w-full text-center pt-3  text-lg font-bold text-ligtyalow'> project 3 </h3>
               
                <div className='e w-full h-[10%] flex justify-center items-center gap-2'>
                    <div className="bg-ligtyalow w-2 h-2 rounded-full"></div>
                    <div className="bg-ligtyalow w-2 h-2 rounded-full "></div>
                    <div className="bg-ligtyalow w-2 h-2 rounded-full "></div> 
                </div>
                <div className=' w-full h-[30%] '>
                  <p className='text-center  w-full h-full pt-3 text-sm lg:text-lg'>Todo list</p>
                </div>
                <div className=' w-full h-[30%] flex items-center justify-around'>
                   <a href="https://github.com/mohamedali0122/react-todo-starting-point" target='blank'><div className="bg-bluewhite w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:w-12 hover:h-12 hover:bg-ligtyalow"><img className='w-4/5 ' src={githubimg}alt=""/></div></a>
                   <div className="bg-bluewhite w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:w-12 hover:h-12 hover:bg-ligtyalow"><img className='w-4/5 ' src={netlifyimg} alt=""></img> </div>
                </div>
               </div>
   
               <div className=' w-[50%] h-full'>
                <img className='w-full h-full rounded-br-xl rounded-tr-xl' src={todowebimg} alt="" />
               </div>
   
               </div>



            <div  data-aos="fade-down" className={` bg-secondblue mx-auto  w-[80%] h-44 rounded-xl flex md:w-[40%] md:h-60 ${darkMode? 'border-4 border-primaryblue shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]':'' }`} >
                
             <div className=' w-[50%] h-full flex-col justify-center text-white'>
              <h3 className='h-[30%] w-full text-center pt-3  text-lg font-bold text-ligtyalow'> project 4 </h3>
            
             <div className='e w-full h-[10%] flex justify-center items-center gap-2'>
                 <div className="bg-ligtyalow w-2 h-2 rounded-full"></div>
                 <div className="bg-ligtyalow w-2 h-2 rounded-full "></div>
                 <div className="bg-ligtyalow w-2 h-2 rounded-full "></div> 
             </div>
             <div className=' w-full h-[30%] '>
               <p className='text-center  w-full h-full pt-3 text-sm lg:text-lg'>Online menu website</p>
             </div>
             <div className=' w-full h-[30%] flex items-center justify-around'>
             <a href="https://github.com/mohamedali0122/online-menu" target='blank'><div className="bg-bluewhite w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:w-12 hover:h-12 hover:bg-ligtyalow"><img className='w-4/5 ' src={githubimg}alt=""/></div></a>
                <div className="bg-bluewhite w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:w-12 hover:h-12 hover:bg-ligtyalow"><img className='w-4/5 ' src={netlifyimg} alt="" /> </div>
             </div>
            </div>

            <div className=' w-[50%] h-full'>
              <img src={menuwebimg} alt="" className="w-full h-full rounded-br-xl rounded-tr-xl" />
            </div>

            </div>  

            
        </div>   
  )
}

export default progcard
