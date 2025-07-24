import React,{useRef,useState} from "react";
import { services } from "../../config/config";
import strelkaActiv from './img/strelkaWhite.svg'
import strelkaInActiv from './img/strelkaInvisible.svg'
import flowerActiv1 from './img/item1bg.svg'
import flowerActiv2 from './img/item3bg.svg'

import strelka from '../../config/img/strelka.svg'
import './services.css'
import {motion,useAnimation} from "framer-motion";

export default function Services() {
    const activDiv=useRef([
        useAnimation(),
        useAnimation(),
        useAnimation(),
        useAnimation()
    ]).current;
    const activImg=useRef([
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
                    <motion.div key={index}
                                className="services-section__card"
                                style={{
                                    backgroundImage: `url(${item.bg})`,
                                    backgroundSize: "90%",
                                    backgroundPosition: `${index===0?'calc(0% - 100px) 50%':(index===3?'calc(100% + 100px) 50%':'50% 50%')}`,
                                    backgroundRepeat: "no-repeat"
                                }}
                                onMouseEnter={()=>{
                                    setActiv(index);
                                    activDiv[index].start({
                                        width: '40%',
                                        backgroundImage: `url(${flowerActiv2})`,
                                        backgroundSize: "25%",
                                        backgroundPosition:['150% 40%','80% 40%'],
                                        backgroundColor:"#A3A7E3",
                                        transition:{
                                            duration:0.2,
                                            ease:"easeInOut",
                                        }
                                    })
                                    activDiv[index].start({
                                        width: '40%',
                                        backgroundImage: `url(${flowerActiv2})`,
                                        backgroundSize: "25%",
                                        transition:{
                                            duration:0,
                                            ease:"linear",
                                        }
                                    })
                                    activImg[index].start({
                                        y:[-250,40,0,20,10],
                                        transition:{
                                            duration:0.6,
                                            ease:"easeInOut",
                                        }
                                    })

                                }}

                                onMouseLeave={()=>{
                                    setActiv(null);
                                    activDiv[index].start({
                                        width: '25%',
                                        backgroundSize: "90%",
                                        backgroundPosition: `${index===0?'calc(0% - 100px) 50%':(index===3?'calc(100% + 100px) 50%':['50% 100%','50% 50%'])}`,
                                        backgroundImage: `url(${services[index].bg})`,
                                        backgroundColor:"#88A7D4",
                                        transition:{
                                            duration:0.3,
                                            ease:"easeOut",
                                        }
                                    })
                                    activImg[index].start({
                                        y:-250,
                                        transition:{
                                            duration:0.3,
                                            ease:"linear",
                                        }
                                    })
                                }}
                                animate={activDiv[index]}
                    >
                        <button className={activ === index ? "services-section__arrow-button" : "services-section__arrow-button-inv"}>                            <img src={activ===index?strelkaActiv:strelkaInActiv}/>
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
                            <motion.img src={flowerActiv1} className={'services-section__content-img'}
                            style={{
                                display:`${activ === index?'flex':'none'}`,
                            }}
                                        initial={{
                                            y:-250
                                        }}
                                        animate={activImg[index]}
                            />
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}