import { motion, AnimatePresence } from 'framer-motion'

import { CheckArrowIcon } from '../assets/icons/CheckArrowIcon'
import { CloseIcon } from '../assets/icons/CloseIcon'
import { CodeGenieLogo } from '../assets/logos/CodeGenieLogo'

export const InvitationModal = ({ setIsOpen }) => (
  <AnimatePresence>
    <motion.div
      initial={{ opacity: 0, zIndex: 50 }}
      animate={{ opacity: 1, zIndex: 50 }}
      transition={{ duration: 0.1 }}
      exit={{ opacity: 0 }}
    >
      <div
        className="w-full h-full  bg-customDarkBgTransparentDarker fixed top-0 left-0 flex  z-50 justify-center items-center"
        onClick={() => setIsOpen(false)}
      >
        <div
          className="w-full h-screen sm:h-auto sm:w-3/4 md:w-3/5 lg:w-[1000px] xl:w-[1100px] sm:rounded-2xl bg-customDarkBgTransparentLighter custom-border-gray-darker py-12 px-8 sm:px-16 backdrop-blur-xl fixed sm:mb-8 fixed mx-auto z-50"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-start items-center grow basis-0 mb-8 pr-6">
            <div className="text-white mr-2 text-8xl">
              <CodeGenieLogo />
            </div>
            <div className="text-white font-['Inter'] font-bold text-3xl">
              Code Genie
            </div>
          </div>
          <div className="relative text-customGrayText text-center">
            <div className="w-full">
              <p className="mb-6">
                Code Genie is not yet generally available. We're currently
                working closely with partners to kickstart the development of
                their new software projects. If you're interested in developing
                with Code Genie{' '}
                <a href="mailto:brett@halfstack.software?subject=Code Genie Demo">
                  Contact us to schedule a demo
                </a>
                .
              </p>
              <div className="flex justify-center">
                <button
                  className="w-[210px] h-12 custom-button-colored mt-4"
                  onClick={() =>
                    window.open(
                      'mailto:brett@halfstack.software?subject=Code Genie Demo'
                    )
                  }
                >
                  Schedule a demo
                </button>
              </div>
            </div>
            <div className="w-full flex items-center flex-col justify-center sm:pt-0 mt-14 md:mt-20 lg:mt-16">
              {/* <h3 className="mb-7 text-2xl text-white font-bold leading-snug text-center">
                Join 3,953 other developers
              </h3> */}
              <p className="mb-8">
                Or if you'd rather just subscribe to be notified of updates to
                Code Genie, enter your email below.
              </p>
              <form
                action="https://software.us4.list-manage.com/subscribe/post?u=b13787ffc31c5db27758e8484&amp;id=0afafd7ecc&amp;f_id=00ee38e9f0"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                target="_blank"
              >
                <div className="flex flex-wrap -m-2">
                  <div className="w-full sm:w-4/5 p-2 mx-auto">
                    <input
                      className="px-4 py-4 w-full text-gray-500 font-medium text-center placeholder-gray-500 outline-none border bg-gray-300 border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                      id="newsletterInput3-1"
                      type="email"
                      name="EMAIL"
                      placeholder="Your email address"
                    />
                  </div>
                  <div
                    aria-hidden="true"
                    style={{ position: 'absolute', left: '-5000px' }}
                  >
                    <input
                      type="text"
                      name="b_b13787ffc31c5db27758e8484_0afafd7ecc"
                      tabIndex="-1"
                    />
                  </div>
                  <div className="w-full sm:w-4/5 p-2 mt-4 mx-auto flex justify-center">
                    <button
                      className="w-64 sm:w-52 h-12 rounded-xl font-bold text-white border border-solid  flex justify-center items-center cursor-pointer bg-customDarkBg2 hover:bg-customDarkBg3 border-customPrimary transition"
                      type="submit"
                    >
                      Keep me updated!
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div
            className="fixed top-6 right-6 z-50 w-5 h-5 cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            <CloseIcon />
          </div>
        </div>
      </div>
    </motion.div>
  </AnimatePresence>
)
