import React from "react";
import icons from '../img/icons.svg'
import {motion} from 'framer-motion';
import './icons.css'
export default function Icons(){
    return (
        <div
            className="about-us__icons"
        >
            <motion.label
                className={'about-us__icons-text'}
                whileInView={{
                    x: [0,0,100,420,420,100,100,0,-300,-300,0],
                    y: [0,-100,0,0,460,460,600,460,460,0,0],
                    opacity: 1,
                }}
                transition={{
                    duration: 18,
                    ease: 'easeOut',
                    repeat: Infinity,
                }}
                viewport={{ once: true, amount: 0.3 }}
            >
                Что под капотом?
            </motion.label>
            <motion.img
                src={icons}
                whileInView={{
                    x: [0,-150,-150,0,0],
                    y: [0,0,-90,-90,0],
                    opacity: 1,
                }}
                transition={{
                    duration: 18,
                    ease: 'easeIn',
                    repeat: Infinity,
                }}
                viewport={{ once: true, amount: 0.3 }}
            />
        </div>
    )
}