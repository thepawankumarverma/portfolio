import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/PawanKumarVerma.jpg"
import { motion } from "framer-motion"

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay }
  }
})

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35  flex  items-center ">

      <div className="flex flex-wrap items-center justify-center w-[100vw] ">

           <div className=" lg:p-8  flex flex-col ">


          <div >
            <motion.img 
              src={profilePic} 
              alt="Pawan Kumar Verma" 
              initial={{x: 100, opacity: 0}}
              animate={{x: 0, opacity: 1}} 
              transition={{duration: 1, delay: 1.4}}
              width={200}
               className=" h-48  md:h-72  w-fit  overflow-hidden rounded-full"
           
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start whitespace-nowrap">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-4xl md:text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Pawan Kumar Verma
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible" 
              className="my-2 max-w-xl py-6 font-light tracking-tighter whitespace-normal"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>

     

      </div>
    </div>
  )
}

export default Hero