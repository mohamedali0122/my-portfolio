import {useState , useRef,useEffect} from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';
import Lottie from 'react-lottie'
import emailmassganme from '../animaition/emailmassge.json'
function Contactus({darkMode}) {
   
    const contactRef = useRef(null);
  
    const [inputname, setInputname] = useState('');
    const [inputemail, setInputemail] = useState('');
    const [inputmassge, setInputmassge] = useState('');

    const handleChangename = (e) => {
        setInputname(e.target.value);
      };
      const handleChangeemail = (e) => {
        setInputemail(e.target.value);
      };
      const handleChangemassge = (e) => {
        setInputmassge(e.target.value);
      };

    const handlename = () => {
    setInputname(" "); 
  };
  const handleemail = () => {
    setInputemail(" "); 
  };const handlmassge = () => {
    setInputmassge(" "); 
  };
    const defaultmassgeimg = {
         loop: true,
         autoplay: true,
         animationData: emailmassganme,
         rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      }; 
    
      useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);
  return (
   <div ref={contactRef} className={`flex flex-col justify-center items-center w-full h-[70vh]  md:h-[70vh] lg:h-[65vh] xl:h-[84vh]  md:mt-20 ${darkMode ?'bg-darkbg '  : 'bg-secondblue'}  py-10`}>
  <div className={`${darkMode ? 'bg-white shadow-[0px_1px_20px_14px_#00000024]': 'bg-bluewhite'}  w-4/5 h-[95%] md:h-[80%]  lg:h-[90%] xl:h-[90%] rounded-3xl py-3 lg:w-[70%]`}>

    <div className='w-full h-[10%] flex justify-center items-center text-xl text-primaryblue font-bold md:text-2xl xl:text-3xl xl:pb-8 xl:pt-4  '>Contact us</div>

    <div className='w-full h-[90%] md:flex md:flex-row md:w-full'>
      <div className=' md:hidden w-full h-[45%] flex justify-center items-center pt-4'>
        <Lottie options={defaultmassgeimg} height={150} width={150} />
      </div>
      <div className='hidden md:flex md:justify-center md:items-center md:pt-4 md:w-[50%] md:h-full md:order-2'>
        <Lottie options={defaultmassgeimg} height={250} width={250} />
      </div>

      <div className='w-full h-[55%] md:w-[50%] md:h-full md:order-1'>

        <div data-aos="fade-right" className='w-full h-[80%] flex flex-col justify-center items-center gap-5 py-4 xl:gap-10'>
          <input  type="text" value={inputname} onClick={handlename} onChange={handleChangename} placeholder='name..' className="placeholder:text-primaryblue placeholder:pl-4 w-4/5 md:w-4/6 h-7 md:h-9 rounded-lg xl:w-[90%] xl:h-14 bg-gray" />
          <input type="text" value={inputemail} onClick={handleemail} onChange={handleChangeemail} placeholder='Email..' className="placeholder:text-primaryblue placeholder:pl-4 w-4/5 md:w-4/6 h-7 md:h-9 rounded-lg xl:w-[90%] xl:h-14 bg-gray" />
          <input type="text" value={inputmassge} onClick={handlmassge} onChange={handleChangemassge} placeholder='Massege...' className="placeholder:text-primaryblue placeholder:pl-4 w-4/5 md:w-4/6 h-14 md:h-20 rounded-lg xl:w-[90%] xl:h-28 bg-gray" />
        </div>

        <div className='w-full h-[20%] flex items-center justify-center'>
          <button className='w-4/12 md:w-2/6 h-9 md:h-12 xl:w-[45%] xl:h-12 xl:text-2xl text-primaryblue font-mono text-sm md:text-lg cursor-pointer rounded-lg border-2 border-primaryblue hover:border-none hover:bg-primaryblue hover:text-bluewhite'>submint</button>
        </div>

      </div>

    </div>

  </div>
</div>

  )
}

export default Contactus
