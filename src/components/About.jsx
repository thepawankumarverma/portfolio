import { SiAboutdotme } from "react-icons/si"
import aboutImg from "../assets/about.jpg"
import { ABOUT_TEXT } from "../constants"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const About = () => {
const text = "_me_"; // आप यहाँ अपना text डाल सकते हैं
  const [show, setShow] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (index < text.length) {
        setShow(prev => prev + text[index]);
        setIndex(prev => prev + 1);
      } else {
        // पूरा text टाइप हो चुका है - थोड़ा रुककर फिर से शुरू करें
        setTimeout(() => {
          setShow('');
          setIndex(0);
        }, 2000); // 1 सेकंड का delay फिर से शुरू करने से पहले
      }
    }, 150); // हर letter के बीच delay

    return () => clearTimeout(timeout);
  }, [index, text]);

  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl"
      >
        About
        <span className="text-neutral-500"> Me</span>
      </motion.h2>
      <div className="flex flex-wrap">
        <motion.div 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition= {{ duration: 1.5 }}  
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center text-9xl">
            {show}
          </div>
        </motion.div>
        <motion.div 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}  
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6">
              {ABOUT_TEXT}
            </p>
          </div>
        </motion.div>
      </div>

    </div>
  )
}

export default About