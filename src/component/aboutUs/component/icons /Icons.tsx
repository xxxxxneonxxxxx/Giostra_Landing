import React from "react";
import icons from './img/icons.svg'
import {motion} from 'framer-motion';
import bgIcons from './img/bgIcons.svg';
import './icons.css'
export default function Icons(){
    return (
        <motion.div className="about-us__icons"
             style={{
                 backgroundImage: `url(${bgIcons})`
             }}
             whileInView={{
                 backgroundPosition: ['0% 0%','100% 0%','100% 0%','100% 100%','100% 100%','0% 100%','0% 100%','0% 0%','0% 0%'],
                 opacity: 1,
             }}
             transition={{
                 duration: 6,
                 ease: 'easeInOut',
                 repeat: Infinity,
             }}
             viewport={{ once: true, amount: 0.3 }}
        >

            <motion.label
                className={'about-us__icons-text'}
                whileInView={{
                    x: [0,70,70,0,0],
                    y: [0,0,445,445,0],
                    opacity: 1,
                }}
                transition={{
                    duration: 6,
                    ease: 'easeInOut',
                    repeat: Infinity,
                }}
                viewport={{ once: true, amount: 0.3 }}
            >
                Что под капотом?
            </motion.label>
            <motion.img
                src={icons}
                whileInView={{
                    x: [0,-200,-200,-200,-200,0,0,0,0],
                    y: [0,0,0,-140,-140,-140,-140,0,0],
                    opacity: 1,
                }}
                transition={{
                    duration: 6,
                    ease: 'easeInOut',
                    repeat: Infinity,
                }}
                viewport={{ once: true, amount: 0.3 }}
            />
        </motion.div>
    )
}