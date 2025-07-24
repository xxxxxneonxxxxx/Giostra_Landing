import React from "react";
import icons from '../img/icons.svg'
import {motion} from 'framer-motion';
import './icons.css'
export default function Icons(){
    return (
        <div
            className="about-us__icons"
        >
            <motion.img
                src={icons}
                animate={{
                    x: ['0%','-40%','-40%',"0%","0%"],
                    y: ['0%','0%','-20%','-20%',"0%"],
                    opacity: 1,
                }}
                transition={{
                    duration: 10,
                    ease: 'easeOut',
                    repeat: Infinity,

                }}


            />
        </div>
    )
}