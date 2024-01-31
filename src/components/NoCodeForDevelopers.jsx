import { motion } from 'framer-motion'

export const NoCodeForDevelopers = () => {
  return (
    <section className="w-screen flex justify-center bg-customDarkBg2 relative">
      <div className="absolute -top-16" id="pricing" />
      <div className="bg-customDarkBg2  2xl:w-[1150px] lg:w-[1050px]  md:w-4/5 ">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <span className="custom-block-subtitle">
              <span className='text-5xl'>🧞</span> Like No Code, but for Developers
              </span>
              <h2 className="mt-6 mb-6 text-4xl lg:text-5xl font-bold font-heading pb-1 text-white">
                Faster than <span className="gradient-text">No Code</span>, and
                without the limitations
              </h2>
              <p className="mb-6 text-customGrayText text-justify">
                Code Genie is able to do in minutes what takes days or weeks
                with No Code platforms (and months with traditional software
                development). Additionally, you're not locked into a No Code
                vendor's inherent limitations and costly licensing fees, since
                you own the source code.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
