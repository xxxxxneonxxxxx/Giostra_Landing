import React,{useRef,useState,useEffect} from "react";
import { services } from "../../config/constType";
import strelkaActiv from './img/strelkaWhite.svg'
import strelkaInActiv from './img/strelkaInvisible.svg'
import flowerActiv1 from './img/item1bg.svg'
import flowerActiv2 from './img/item3bg.svg'

import strelka from '../../config/img/strelka.svg'
import './services.css'
import {motion,useAnimation} from "framer-motion";

export default function Services() {
    const activImgSmall=useRef([
        useAnimation(),
        useAnimation(),
        useAnimation(),
        useAnimation()
    ]).current;
    const activImgBig=useRef([
        useAnimation(),
        useAnimation(),
        useAnimation(),
        useAnimation()
    ]).current;
    const [activ, setActiv] = useState<number|null>(null);

    return (
        <section id={"service"} className="services-section">
            <label className="title">Наши услуги</label>
            <div  className="services-section__cards">
                {services.map((item, index) => (
                    <motion.div
                        key={index}
                        className="services-section__card"
                        onMouseEnter={() => {
                            setActiv(index)
                            activImgBig[index].start({
                                y:[-250,40,0,20,10],
                                transition:{
                                    duration:0.6,
                                    ease:"easeInOut",
                                }
                            })
                            activImgSmall[index].start({
                                x:[250,-20,40,-10,10,0],
                                transition:{
                                    duration:1,
                                    ease:"easeInOut",
                                }
                            })
                        }}
                        onMouseLeave={() => {
                            setActiv(null)
                            activImgBig[index].start({
                                y:-250,
                                transition:{
                                    duration:0.3,
                                    ease:"linear",
                                }
                            })
                        }}
                        animate={{
                            flex: activ === null
                                ? '0 0 calc(25% - 16px)'
                                : activ === index
                                    ? '0 0 calc(40% - 16px)'
                                    : '0 0 calc(20% - 16px)',
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
                            transition: { duration: 0.4, ease: 'easeInOut' }
                        }}
                    >
                        <button className={activ === index ? "services-section__arrow-button" : "services-section__arrow-button-inv"}>
                            <img src={activ===index?strelkaActiv:strelkaInActiv}/>
                        </button>

                        <div className="services-section__content">
                            <div>
                                <label
                                    style={{
                                        fontSize:`${activ===3?'20px':''}`,
                                    }}
                                    className="services-section__name">{item.name}</label>
                                <p className="services-section__description">{item.description}</p>
                            </div>
                            <button className="services-section__action-button">
                                Оставить заявку <img src={strelka}/>
                            </button>
                            <motion.img
                                src={flowerActiv1}
                                className={'services-section__content-img'}
                                style={{
                                    display:`${activ === index?'flex':'none'}`,
                                }}
                                initial={{
                                    y:-250
                                }}
                                animate={activImgBig[index]}
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
                                animate={activImgSmall[index]}
                            />
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}