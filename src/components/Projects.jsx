import { useEffect, useState } from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import {
  BiDesktop,
  BiLeftArrow,
  BiMobile,
  BiPhone,
  BiRightArrow,
} from "react-icons/bi";
import { CgCross, CgDesktop } from "react-icons/cg";
import { FcCancel, FcEmptyFilter, FcEmptyTrash } from "react-icons/fc";
import { GiCancel } from "react-icons/gi";
import { TiCancel, TiCancelOutline } from "react-icons/ti";
import { ImCancelCircle } from "react-icons/im";

const Projects = () => {
  const [imageView, setImageView] = useState(false);
  const [androidView, setAndroidView] = useState([]);
  const [webView, setWebView] = useState([]);

const ImageView = () => {
    const [currArray, setCurrArray] = useState(webView);
    const [currIdx, setcurrIdx] = useState(0);
    const [move, setMove] = useState(false);
    useEffect(() => {
      move ? setCurrArray(androidView) : setCurrArray(webView);
      setcurrIdx(0);
    }, [move]);
    return (
      <div className="fixed   top-0 left-0 w-screen h-screen bg-black/20 backdrop-blur-sm  z-20 overflow-y-auto">
        <div
          className=" m-5  rounded-full absolute bg-black/60 right-0 z-20 cursor-pointer text-2xl "
          onClick={() => setImageView(false)}
        >
          <ImCancelCircle></ImCancelCircle>
        </div>
        <div className="  flex flex-col  justify-center items-center w-[100%] h-[100%]  gap-5 mt-3">
          <motion.div
            className="  rounded-full  bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]  flex  w-48 h-20  text-2xl relative z-10"
            initial={{ opacity: 0, x: "-20vw" }}
            animate={{ x: 0, opacity: 100 }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
          >
            <motion.div
              className="w-1/2 border-[1px] h-full rounded-full  absolute top-0 cursor-pointer"
              animate={{ x: move ? "100%" : "0px" }}
              transition={{ duration: 0.1, ease: "easeInOut" }}
            ></motion.div>
            <div
              className="  flex justify-center items-center w-1/2 cursor-pointer"
              onClick={() => {
                setMove(false);
              }}
            >
              {" "}
              <CgDesktop></CgDesktop>
            </div>
            {androidView.length > 0 ? (
              <div
                className="  flex justify-center items-center w-1/2 cursor-pointer"
                onClick={() => {
                  setMove(true);
                }}
              >
                {" "}
                <BiMobile></BiMobile>
              </div>
            ) : (
              <div className="  flex justify-center items-center w-1/2 opacity-20 cursor-not-allowed ">
                {" "}
                <BiMobile></BiMobile>
              </div>
            )}
          </motion.div>
          <div className="flex  h-[80%] w-[100%] justify-between gap-5 items-center">
            <div
              className="p-5 m-5 border-[1px] rounded-full absolute bg-black/60 left-0 z-20 cursor-pointer"
              onClick={() => {
                if (currIdx - 1 >= 0) setcurrIdx(currIdx - 1);
              }}
            >
              <BiLeftArrow></BiLeftArrow>
            </div>
            <motion.div
              className=" rounded-lg flex justify-center items-center w-[100%]"
              initial={{ opacity: 0, x: "-40vw" }}
              animate={{ x: 0, opacity: 100 }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
            >
              <img src={currArray[currIdx]} className={`md:h-[80vh] `}></img>
            </motion.div>
            <div
              className="p-5 m-5 border-[1px] rounded-full absolute right-0 bg-black/60 cursor-pointer"
              onClick={() => {
                if (currArray.length > currIdx + 1) {
                  setcurrIdx(currIdx + 1);
                }
              }}
            >
              <BiRightArrow></BiRightArrow>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      {imageView && <ImageView></ImageView>}
      <div>
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="mb-8 flex flex-wrap lg:justify-center items-center"
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <img
                src={project.webImages[0]}
                alt={project.title}
                height={250}
                width={250}
                className="mb-6 rounded"
                onClick={() => {
                  setImageView(true);
                  setAndroidView(project.androidImages);
                  setWebView(project.webImages);
                }}
              />
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
