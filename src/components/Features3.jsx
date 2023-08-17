import { motion } from 'framer-motion'

import aws from '../assets/images/aws.webp'
import lambda from '../assets/images/lambda.webp'
import apiGateway from '../assets/images/api-gateway.webp'
import cognito from '../assets/images/cognito.webp'
import dynamodb from '../assets/images/dynamodb.webp'
import amplify from '../assets/images/amplify.webp'
import { CheckArrowIcon } from '../assets/icons/CheckArrowIcon'

export const Features3 = () => {
  return (
    <section className="w-full bg-customDarkBg2 mt-12 sm:mt-20 mb-10 lg:my-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="w-11/12 xl:w-10/12 2xl:w-[1280px] mx-auto md:pl-4 xl:pr-16 xl:pl-16">
          <div className="w-full xl:w-2/3 mb-12 lg:mb-0">
            <span className="custom-block-subtitle">
              ☁️ Scale from zero to infinity
            </span>
            <h2 className="mt-6 mb-8 text-4xl lg:text-5xl custom-block-big-title">
              Backed by <span className="gradient-text">AWS Serverless</span>
            </h2>
            <p className="mb-10 text-customGrayText leading-loose">
              Code Genie leverages the power of AWS to provide infinitely
              scalable applications.
            </p>
          </div>
          <div className="w-full mb-12 lg:mb-0 flex justify-between">
            <div className="w-2/3 md:w-1/2 lg:w-1/3">
              <ul className="mb-6 text-white w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset">
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>AWS</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Lambda</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>API Gateway</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Cognito</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>DynamoDB</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Amplify</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>CDK</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Scale to zero (pay $0 when idle)</span>
                </li>
              </ul>
            </div>
            <div className="w-2/3 mx-auto flex-wrap justify-end flex items-center md:items-start">
              <div className="-mt-6 w-1/3 md:w-1/3 lg:w-1/4 px-2 lg:px-0">
                <div className="mb-4 py-3 pl-3 pr-2 rounded">
                  <img
                    src={apiGateway}
                    alt="api gateway"
                    className="w-full max-w-[120px] mx-auto"
                  />
                </div>
                <div className="py-3 pl-3 pr-2 rounded ">
                  <img
                    src={lambda}
                    alt="lambda"
                    className="w-full max-w-[120px] mx-auto"
                  />
                </div>
              </div>
              <div className="w-1/3 md:w-1/3 lg:w-1/4 lg:mt-20  pt-12 lg:pt-0 px-2">
                <div className="mb-4 py-3 pl-3 pr-2 rounded-lg ">
                  <img
                    src={aws}
                    alt="aws"
                    className="w-full max-w-[120px] mx-auto"
                  />
                </div>
                <div className="py-3 pl-3 pr-2 rounded-lg ">
                  <img
                    src={cognito}
                    alt="cognito"
                    className="w-full max-w-[120px] mx-auto"
                  />
                </div>
              </div>
              <div className="-mt-6 w-1/3 md:w-1/3 lg:w-1/4 px-2 lg:px-0">
                <div className="mb-4 py-3 pl-3 pr-2 rounded">
                  <img
                    src={dynamodb}
                    alt="dynamodb"
                    className="w-full max-w-[120px] mx-auto"
                  />
                </div>
                <div className="py-3 pl-3 pr-2 rounded ">
                  <img
                    src={amplify}
                    alt="amplify"
                    className="w-full max-w-[120px] mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
