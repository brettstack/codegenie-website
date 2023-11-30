import { useState } from 'react'
import { motion } from 'framer-motion'

import { InvitationModal } from './InvitationModal'
// import generatedAppScreenshot from '../assets/images/generated-app-screenshot.webp'
// import generatedAppScreenshot from '../assets/images/generated-app-screenshot-dark.webp'
import codeGenieIntroVideo from '../assets/videos/code-genie-intro.mp4'
import codeGenieIntroVideoPoster from '../assets/videos/code-genie-intro-poster.jpg'

export const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section
      className="w-screen flex justify-center items-center bg-customDarkBg1 mb-20 xs:mb-40 sm:mb-36 lg:mb-48 xl:mb-60 hero-bg-gradient pb-0"
      id="home"
    >
      <div className="w-11/12 md:w-[800px] xl:w-[900px] flex flex-col justify-center items-center pt-16 md:pt-16 lg:pt-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-customSecondary text-sm sm:text-base mb-6 mt-16 sm:mt-10 font-bold">
            Save months developing new software
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          {/* <div className="gradient-text text-5xl sm:text-6xl lg:text-7xl xl:text-7xl font-bold tracking-wide text-white px-8 sm:px-8 md:px-20 lg:px-4">
          <span className="inline md:hidden">No-code</span>
          <span className="hidden md:inline">No-code/Low-code</span>
        </div>
        <div className="mt-2 sm:mt-2 text-4xl sm:text-6xl lg:text-7xl xl:text-7xl font-bold tracking-wide text-white px-8 sm:px-20 md:px-24 lg:px-24">
          for developers
        </div> */}
          <div className="text-3xl sm:text-4xl lg:text-5xl xl:text-7xl mt-4 font-bold tracking-wide text-white">
            <h1>
              Full Stack <span className="gradient-text">App Generator</span>
            </h1>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="text-customGrayText text-sm lg:text-base xl:text-lg sm:text-base mt-10 md:px-36">
            <p>
              Download source code based on your data model or idea, then deploy
              to your AWS account in minutes.
            </p>
            {/* <p>
              Code Genie uses generative AI to design a data model and write
              source code based on your idea. Download the source code for your
              full stack application and deploy to AWS in minutes.
            </p> */}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="flex flex-col gap-2 sm:flex-row mt-14 mb-14 justify-center">
            <div
              className="custom-button-colored w-64 sm:w-52 h-12 mr-0 sm:mr-4 lg:mr-6 mb-2 sm:mb-0"
              onClick={() => setIsModalOpen(true)}
            >
              Get Started
            </div>
            {/* <div
              className="w-64 sm:w-52 h-12 rounded-xl font-bold text-white border border-solid  flex justify-center items-center cursor-pointer bg-customDarkBg2 hover:bg-customDarkBg3 border-customPrimary transition"
              onClick={() => setIsModalOpen(true)}
            >
              Live demo
            </div> */}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10, zIndex: 20 }}
          animate={{ opacity: 1, y: 0, zIndex: 20 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="relative w-screen justify-center flex">
            <video
              controls
              poster={codeGenieIntroVideoPoster.src}
              className="w-screen md:w-4/5 xl:w-[1200px] mx-auto absolute z-10 rounded-xl custom-border-gray hero-dashboard-border-gradient lg:top-6 xl:top-0"
            >
              <source src={codeGenieIntroVideo} type="video/mp4" />
            </video>
          </div>
          {/* <div className="relative w-screen justify-center hidden md:flex">
            <img
              src={generatedAppScreenshot.src}
              alt="123"
              className="w-screen md:w-4/5 xl:w-[1200px] mx-auto absolute z-10 rounded-xl custom-border-gray hero-dashboard-border-gradient lg:top-6 xl:top-0"
              // scale-150 md:scale-100
            />
          </div> */}
        </motion.div>
        <div className="relative w-screen flex justify-center">
          <div className="custom-shape-divider-bottom-1665343298 mt-4 sm:mt-16 md:mt-32 lg:mt-52 xl:mt-80 block">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className=" bg-customDarkBg2"
            >
              <path
                d="M1200 0L0 0 598.97 114.72 1200 0z"
                className="shape-fill custom-bg-dark1"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <InvitationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      )}
    </section>
  )
}
