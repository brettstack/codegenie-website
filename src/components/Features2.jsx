import { motion } from 'framer-motion'

import typescript from '../assets/images/typescript.webp'
import react from '../assets/images/react.webp'
import nextjs from '../assets/images/nextjs.webp'
import nodejs from '../assets/images/nodejs.webp'
import express from '../assets/images/express.webp'
import antDesign from '../assets/images/ant-design.webp'
import { CheckArrowIcon } from '../assets/icons/CheckArrowIcon'

export const Features2 = () => (
  <section className="w-full bg-customDarkBg2 mt-12 sm:mt-20 mb-10 lg:my-20">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="w-11/12 xl:w-10/12 2xl:w-[1280px] mx-auto md:pl-4 xl:pr-16 xl:pl-16">
        <div className="w-full flex justify-end mb-8">
          <div className="w-full xl:w-2/3 lg:mb-0">
            <span className="custom-block-subtitle">
              🧑‍💻 Superb Developer Experience
            </span>
            <h2 className="mt-6 mb-8 text-4xl md:text-5xl custom-block-big-title">
              <span className="gradient-text">Technology</span> that devs know
              and love
            </h2>
            <p className="text-customGrayText leading-loose text-justify">
              Code Genie generates source code written in languages and
              frameworks that are consistently voted by developers as their
              tools of choice. Projects are architected in a way to make
              swapping out individual tools as simple as possible, and we're
              constantly working on additional generation options to enable
              engineers to choose their own stack.
            </p>
          </div>
        </div>
        <div className="w-full mb-12 lg:mb-0 flex justify-between">
          <div className="w-2/3 flex-wrap flex items-center">
            <div className="w-1/3 px-2 lg:px-0 -mt-10">
              <div className="mb-4 rounded">
                <img
                  src={typescript.src}
                  alt="Typescript"
                  className="w-full max-w-[120px] mx-auto"
                />
              </div>
              <div className="rounded ">
                <img
                  src={react.src}
                  alt="React"
                  className="w-full max-w-[120px] mx-auto"
                />
              </div>
            </div>
            <div className="w-1/3  pt-12 lg:pt-0 px-2">
              <div className="rounded-lg ">
                <img
                  src={nextjs.src}
                  alt="Next.js"
                  className="w-full max-w-[120px] mx-auto"
                />
              </div>
              <div className=" rounded-lg ">
                <img
                  src={nodejs.src}
                  alt="Node.js"
                  className="w-full max-w-[120px] mx-auto"
                />
              </div>
            </div>
            <div className="w-1/3 px-2 lg:px-0 -mt-10">
              <div className="rounded">
                <img
                  src={express.src}
                  alt="Express"
                  className="w-full max-w-[120px] mx-auto"
                />
              </div>
              <div className="rounded mt-5">
                <img
                  src={antDesign.src}
                  alt="Ant Design"
                  className="w-full max-w-[120px] mx-auto"
                />
              </div>
            </div>
          </div>
          <div className="w-1/3">
            <div className="w-full flex justify-end md:pr-8">
              <ul className="mb-6 text-white">
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <a
                    href="https://www.typescriptlang.org/"
                    target="_blank"
                    rel="noopener"
                  >
                    TypeScript
                  </a>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <a href="https://react.dev/" target="_blank" rel="noopener">
                    React
                  </a>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <a href="https://nextjs.org/" target="_blank" rel="noopener">
                    Next.js
                  </a>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <a href="https://nodejs.org/" target="_blank" rel="noopener">
                    Node.js
                  </a>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <a
                    href="https://expressjs.com/"
                    target="_blank"
                    rel="noopener"
                  >
                    Express
                  </a>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <a href="https://ant.design/" target="_blank" rel="noopener">
                    Ant Design
                  </a>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <a
                    href="https://github.com/features/actions"
                    target="_blank"
                    rel="noopener"
                  >
                    GitHub Actions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
)
