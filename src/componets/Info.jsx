import {useEffect} from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';
import Lottie from 'react-lottie'
import manphone from '../animaition/manphoneinfo.json'
import emailimg from '../images/email.png'
import phoneimg from '../images/phone-call.png'
import addresimg from '../images/address.png'
import faecbook from '../images/facebook (1).png'
import instgram from '../images/instagram.png'
import telegram from '../images/telegram.png'


function Info({darkMode}) {
    const defaultmanphone = {
        loop: true,
        autoplay: true,
        animationData: manphone,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        },
        speed: 2.5       };
 
        useEffect(() => {
          Aos.init({ duration: 2000 });
        }, []);
  return (
       
    <div className={` w-full h-[65vh] pb-9 md:h-[80vh] lg:h-[90vh] xl:h-[100vh] pt-3 md:pt-20 ${darkMode ? 'bg-secondblue' : 'bg-primaryblue'}`}>
     <div className='w-full h-full md:h-[90%] md:w-[90%] md:border-4 md:border-ligtyalow md:mx-auto md:rounded-xl '>
      <div className='text-ligtyalow w-full text-center text-2xl font-bold p-5 h-[10%]'>information</div>

         <div data-aos="fade-down" className=' w-full h-[40%] flex flex-col justify-center items-center pt-4 pl-2 gap-3  order-1
                           md:flex md:flex-row md:justify-center md:items-center md:h-1/2'>
          <div className=' flex flex-row items-center  justify-start h-[35%] w-full gap-x-2 
                            md:w-[40%] md:h-full md:justify-center '>
            <img className='w-[7%] md:w-[20%] xl:w-[14%] ' src={emailimg} alt="" />
            <p className='w-1/2 text-white text-lg cursor-pointer hover:text-xl hover:text-ligtyalow'>@mohamedalhelo909</p>
          </div>
          <div className=' flex flex-row items-center  justify-start h-[35%] w-full gap-x-5 md:w-[35%] md:h-full md:justify-center'>
            <img className='w-[7%] md:w-[20%] xl:w-[14%] ' src={phoneimg} alt="" />
            <p className='w-1/2 text-white text-lg cursor-pointer hover:text-ligtyalow hover:text-xl z-10 '>07807361267</p>
          </div><div className=' flex flex-row items-center  justify-start h-[35%] w-full gap-x-5 md:w-[35%] md:h-full md:justify-center'>
            <img className='w-[7%] md:w-[20%] xl:w-[14%] ' src={addresimg} alt="" />
            <p className='w-1/2 text-white text-lg cursor-pointer hover:text-xl hover:text-ligtyalow'> Najaf, Iraq</p>
          </div>
                   
        </div>
       
        <div className='w-full h-[40%] flex items-center order-2  md:h-[[40%]'>
          <div className='md:hidden w-[60%] h-[90%] bg-gray rounded-tr-xl rounded-br-xl flex  items-center justify-start'>
          <Lottie
          options={defaultmanphone}
          height={180} 
          width={180} 
        />
          </div>

          <div className='hidden lg:hidden md:w-[60%] md:mx-auto md:h-[60%] md:bg-gray md:rounded-xl  md:flex md:items-end md:justify-center'>
          <Lottie
          options={defaultmanphone}
          height={280} 
          width={280} 
        />
          </div>

          <div className=' hidden max-md:hidden lg:w-[50%] lg:mx-auto lg:h-[60%] lg:bg-gray lg:rounded-xl  lg:flex lg:items-end lg:justify-center'>
          <Lottie
          options={defaultmanphone}
          height={300} 
          width={300} 
        />
          </div>
        </div>



      <div className='md:hidden  flex flex-row items-end justify-center  w-full h-[10%] gap-10 '>
            <a className='w-[6%]' href="https://www.facebook.com/profile.php?id=100011355972777&mibextid=JRoKGi"  target='blank'><img className=' w-full cursor-pointer ' src={faecbook} alt="" /></a>
            <a className='w-[6%]' href="https://www.instagram.com/mo__it?igsh=OHNheTQwY2Z4azky"  target='blank'><img className=' w-full cursor-pointer ' src={instgram} alt="" /></a>
            <a className='w-[6%]' href="https://t.me/moa_it"  target='blank'><img className=' w-full cursor-pointer ' src={telegram} alt="" /></a>
    </div>

   </div>
    
   <div className='hidden  md:flex md:flex-row md:items-end md:justify-center  md:w-full md:h-[10%] md:gap-10 '>
            <a className='md:w-[4%] lg:w-[3%] ' href="https://www.facebook.com/profile.php?id=100011355972777&mibextid=JRoKGi"  target='blank'><img className='w-full cursor-pointer' src={faecbook} alt="" /></a>
            <a className='md:w-[4%] lg:w-[3%]' href="https://www.instagram.com/mo__it?igsh=OHNheTQwY2Z4azky"  target='blank'><img className=' ' src={instgram} alt="w-full cursor-pointer" /></a>
            <a className='md:w-[4%] lg:w-[3%]' href="https://t.me/moa_it"  target='blank'><img className=' ' src={telegram} alt="w-full cursor-pointer" /></a>
    </div>

    </div>
  )
}

export default Info
