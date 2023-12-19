'use client'

import React, {useState} from 'react'
import Button from './button/Button'
import {AnimatePresence, motion} from 'framer-motion'
import NavLinks from './nav/NavLinks';

const variants = {
	open: {
		width: 450,
		height: 560,
		top: '-25px',
		right: '-25px',
		transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
	},

	closed: {
		width: 100,
		height: 40,
		top: '0px',
		right: '0px',
		transition: { duration: 0.75,delay:0.35, ease: [0.76, 0, 0.24, 1] },
	},
};

const Navbar = () => {
  const [IsActive, setIsActive] = useState(false)

  return (
		<div className='fixed right-[50px] top-[50px]'>
			<motion.div
				variants={variants}
				initial='closed'
				animate={IsActive ? 'open' : 'closed'}
				className='relative w-[480px] h-[650px] bg-[#c9fd74] rounded-3xl'
			>
        <AnimatePresence>
          {IsActive && <NavLinks />}
        </AnimatePresence>
				
			</motion.div>
			<Button IsActive={IsActive} setIsActive={setIsActive} />
		</div>
	);
}

export default Navbar