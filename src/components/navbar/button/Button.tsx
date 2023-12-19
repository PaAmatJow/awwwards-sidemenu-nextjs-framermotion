import React, {Dispatch, SetStateAction} from 'react'
import {motion} from 'framer-motion'
import styles from './style.module.scss';

type ButtonProps = {
	IsActive: boolean;
	setIsActive: Dispatch<SetStateAction<boolean>>;
};



const Button = ({IsActive, setIsActive}: ButtonProps) => {

  return (
		<div
			onClick={() => {
				setIsActive(!IsActive);
			}}
			className={styles.button}
		>
			<motion.div
				animate={{ top: IsActive ? '-100%' : '0' }}
				transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
				className={styles.slider}
			>
				<div className={styles.el}>
					<PerspectiveText label='Menu' />
				</div>

				<div className={styles.el}>
					<PerspectiveText label='Close' />
				</div>
			</motion.div>
		</div>
	);
}

	

export default Button

type Text = {
  label: string;
}

const PerspectiveText = ({label}: Text) => {
  return (
		<div className={styles.perspectiveText}>
			<p >
				{label}
			</p>
			<p >
				{label}
			</p>
		</div>
	);
}