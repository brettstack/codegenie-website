// import { FacebookIcon } from '../assets/icons/FacebookIcon'
// import { InstagramIcon } from "../assets/icons/InstagramIcon";
import { CodeGenieLogo } from '../assets/logos/CodeGenieLogo'
import { TwitterIcon } from '../assets/icons/TwitterIcon'

const footerData = [
  {
    title: 'Products',
    items: ['Services', 'About Us', 'News and Stories', 'Roadmap'],
  },
  {
    title: 'Important Links',
    items: [
      'Organization Team',
      'Our Journeys',
      'Pricing Plans',
      'Roadmap',
      'Terms & Conditions',
      'Privacy Policy',
    ],
  },
  {
    title: 'Company',
    items: ['About Us', 'Jobs', 'Press', 'Contact Us'],
  },
]

export const Footer = () => {
  return (
    <footer>
      <div className="py-5 bg-customDarkBg1 radius-for-skewed ">
        <div className="container mx-auto px-4 w-4/5 md:w-11/12 lg:w-10/12 xl:w-4/5 2xl:w-2/3">
          <div className="flex flex-wrap">
            <div className="w-full flex justify-center  mb-5">
              <div className="flex justify-center lg:justify-start items-center grow basis-0">
                <div className="text-white mr-2 text-6xl">
                  <CodeGenieLogo />
                </div>
                <div className="text-white font-['Inter'] font-bold text-xl">
                  Code Genie
                </div>
              </div>
              <div>
                <a
                  className="inline-block w-10  h-10 mr-2 p-2 bg-customDarkBg2 custom-border-gray  hover:bg-gray-700 rounded-xl"
                  href="https://twitter.com/AWSbrett"
                  target="_blank"
                  rel="noopener"
                >
                  <TwitterIcon />
                </a>
              </div>
            </div>
          </div>
          <p className="lg:text-center text-sm text-gray-400 border-t border-[rgb(255,255,255,0.2)] pt-2 hidden lg:block">
            &copy; 2023. Code Genie.
          </p>
        </div>
      </div>
    </footer>
  )
}
