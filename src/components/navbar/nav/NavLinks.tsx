import React from 'react'
import { Links, footerLinks } from './data'
import Link from 'next/link';
import { motion } from 'framer-motion';

const perspective = {
	initial: {
		opacity: 0,
		rotateX: 90,
		translateY: 80,
		translateX: -20,
	},

	enter: (index: number) => ({
		opacity: 1,
		transition: {
			duration: 0.65,
			opacity: { duration: 0.35 },
			delay: 0.5 + index * 0.1,
			ease: [0.215, 0.63, 0.355, 1],
		},
		rotateX: 0,
		translateY: 0,
		translateX: 0,
	}),

	exit: {
		opacity: 0,
		transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
	},
};

const slideIn = {
	initial: {
		opacity: 0,
		y: 20
	},

	enter: (index: number) => ({
		opacity: 1,
    y: 0,
		transition: {
			duration: 0.5,
			delay: 0.75 + index * 0.1,
			ease: [0.215, 0.63, 0.355, 1],
		},
	}),

	exit: {
		opacity: 0,
		transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
	},
};

const NavLinks = () => {
  return (
    <div className='h-full pt-[100px] pr-[40px] pl-[50px] pb-[40px] flex flex-col justify-between'>
      <div className="flex flex-col gap-[10px]">
        {Links.map((link, index) => {
          const {title, href} = link;
          return (
            <div key={index} className="perspective-[120px] perspective-origin-bottom">
              <motion.div custom={index} variants={perspective} animate='enter' exit='exit' initial='initial' className=''>
                <Link href={href} className='text-[40px] hover:bg-black hover:text-[#c9fd74] px-4 py-2 rounded-3xl transition-all duration-200'>
                  {title}
                </Link>
              </motion.div>
            </div>
					);
        })}
      </div>

      <div className="flex flex-wrap ">
        {footerLinks.map((footer, index) => {
          const{title,href} = footer;
          return (
						<motion.a
							key={`f_${index}`}
							href={href}
							custom={index}
							variants={slideIn}
							animate='enter'
							exit='exit'
							initial='initial'
							className='w-[50%] hover:font-bold transition-all duration-200'
						>
							{title}
						</motion.a>
					);
        })}
      </div>
    </div>
  )
}

export default NavLinks