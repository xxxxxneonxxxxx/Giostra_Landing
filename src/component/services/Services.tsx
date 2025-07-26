import React,{useRef,useState,useEffect} from "react";
import { services } from "../../config/constType";
import strelkaActiv from './img/strelkaWhite.svg'
import strelkaInActiv from './img/strelkaInvisible.svg'
import flowerActiv1 from './img/item1bg.svg'
import flowerActiv2 from './img/item3bg.svg'

import strelka from '../../config/img/strelka.svg'
import './services.css'
import {motion} from "framer-motion";

export default function Services() {
    const [activ, setActiv] = useState<number|null>(null);

    return (
        <section id={"service"} className="services-section">
            <label className="title">Наши услуги</label>
            <div  className="services-section__cards">
                {services.map((item, index) => (
                    <motion.div
                        layout
                        key={index}
                        className="services-section__card"
                        onMouseEnter={() => {setActiv(index)}}
                        onMouseLeave={() => {setActiv(null)}}
                        animate={{
                            flex: activ === null
                                ? '0 0 calc(25% - 16px)'
                                : activ === index
                                    ? '0 0 calc(35% - 8px)'
                                    : '0 0 calc(21% - 8px)',
                            backgroundImage: `url(${item.bg})`,
                            backgroundSize: activ === index ? '25%' : '100%',
                            backgroundColor: activ === index ? '#A3A7E3' : '#88A7D4',
                            backgroundPosition:
                            activ !== index?
                                index === 0
                                    ? 'calc(0% - 100px) 50%'
                                    : index === 3
                                        ? 'calc(100% + 100px) 50%'
                                        : '50% 50%'
                            :index === 0
                                    ? 'calc(0% - 500px) 50%'
                                    : index === 3
                                        ? 'calc(100% + 500px) 50%'
                                        : '50% 600px',
                            transition: {
                                flex: {type: "spring",
                                    bounce: 0.5,
                                },

                                duration: 0.4,
                                ease: 'easeInOut' }
                        }}
                    >
                        <button className={activ === index ? "services-section__arrow-button" : "services-section__arrow-button-inv"}
                        >
                            <motion.img
                                src={activ===index?strelkaActiv:strelkaInActiv}

                            />
                        </button>

                        <motion.div
                            animate={activ !== index ? { top: [0,'10px','-10px',0] } : { top:0 }}
                            transition={{ duration: 0.6 }}
                            className="services-section__content"
                        >
                            <div>
                                <label className="services-section__name">{item.name}</label>
                                <p className="services-section__description">{item.description}</p>
                            </div>
                            <button className="services-section__action-button">
                                Оставить заявку <img src={strelka}/>
                            </button>
                            <motion.img
                                src={flowerActiv1}
                                initial={{ y: -200 }}
                                animate={activ === index ? { y: [-250,-240,40,-20,0] } : { y: -250 }}
                                transition={{ duration: 0.5 }}
                                className={'services-section__content-img'}
                                style={{
                                    display:`${activ === index?'flex':'none'}`,
                                }}
                                />
                            <motion.img
                                src={flowerActiv2}
                                className={'services-section__content-img1'}
                                style={{
                                    display:`${activ === index?'flex':'none'}`,
                                }}
                                initial={{
                                    x:-250
                                }}
                                animate={activ === index ? {x:[250,240,-20,10,0],} : { x: 250 }}
                                transition={{ duration: 0.5 }}
                            />
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}