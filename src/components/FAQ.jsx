import { useState } from 'react'
import { motion } from 'framer-motion'

const FAQData = [
  {
    question: 'Am I locked into Code Genie?',
    answer:
      'No! Code Genie generates a foundation for you. What you do from there is totally up to you and your engineering team!',
  },
  {
    question: 'Am I locked into AWS?',
    answer: (
      <>
        No! While it may take some effort from your engineering team to move to
        a different platform, we've done our best to make that as painless as
        possible. For example, you can easily host the web app on another
        provider such as{' '}
        <a href="https://www.netlify.com" target="_blank" rel="noopener">
          Netlify
        </a>
        . The API layer is written in{' '}
        <a href="https://expressjs.com/" target="_blank" rel="noopener">
          Express
        </a>
        , making it highly portable. Unfortunately,{' '}
        <a
          href="https://aws.amazon.com/dynamodb/"
          target="_blank"
          rel="noopener"
        >
          DynamoDB
        </a>{' '}
        is a bit more challenging, and would a database migration (e.g. see this
        article on how you would{' '}
        <a
          href="https://www.mongodb.com/blog/post/migrating-your-data-from-dynamodb-to-mongodb-atlas"
          target="_blank"
          rel="noopener"
        >
          migrate from DynamoDB to MongoDB
        </a>
        ) and updating some controller logic.
      </>
    ),
  },
  {
    question: 'Do I need to pay Code Genie a monthly fee?',
    answer:
      'No! The generated application is intended to be deployed to your own AWS account. We simply help you get started with a low cost solution ($0 when not in use!) that scales with you.',
  },
]

export const FAQ = () => (
  <section className="relative pt-16 pb-16 bg-blueGray-50 overflow-hidden">
    <div className="absolute -top-10" id="FAQ" />
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="relative z-10 container px-2 sm:px-8 lg:px-4 mx-auto w-11/12 sm:w-full">
        <div className="md:max-w-4xl mx-auto">
          <p className="mb-7 custom-block-subtitle text-center">
            Have any questions?
          </p>
          <h2 className="mb-16 custom-block-big-title text-center">
            Frequently Asked Questions
          </h2>
          <div className="mb-11 flex flex-wrap -m-1">
            {FAQData.map((item, index) => (
              <div className="w-full p-1" key={index}>
                <FAQBox
                  title={item.question}
                  content={item.answer}
                  key={`${item.question}-${item.answer}`}
                  defaultOpen={index === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  </section>
)

const FAQBox = ({ defaultOpen, title, content }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div
      className="pt-2 sm:pt-6 pb-2 px-3 sm:px-8  rounded-3xl bg-customDarkBg3 custom-border-gray-darker mb-4 relative hover:bg-customDarkBg3Hover cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex flex-col p-2  justify-center items-start">
        <h3 className=" custom-content-title pt-3 sm:pt-0 pr-8 sm:pr-0">
          {title}
        </h3>
        <p
          className={`text-customGrayText pt-4 transition-all duration-300 overflow-hidden ${
            isOpen ? 'max-h-96' : 'max-h-0'
          }`}
        >
          {content}
        </p>
      </div>
      <div className="absolute top-6 right-4 sm:top-8 sm:right-8">
        <svg
          width="28px"
          height="30px"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-all duration-500  ${
            isOpen ? 'rotate-[180deg]' : 'rotate-[270deg]'
          }`}
        >
          <path
            d="M4.16732 12.5L10.0007 6.66667L15.834 12.5"
            stroke="#4F46E5"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </div>
    </div>
  )
}
