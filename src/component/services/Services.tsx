import React,{useRef,useState} from "react";
import { services } from "../../config/config";
import strelkaActiv from './img/strelkaWhite.svg'
import strelkaInActiv from './img/strelkaInvisible.svg'
import strelka from '../../config/img/strelka.svg'
import activBg from './img/item1bg.svg'
import './services.css'
import {motion,useAnimation} from "framer-motion";

export default function Services() {
    const activDiv=useRef([
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
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                    }}
                                onMouseEnter={()=>{
                                    setActiv(index);
                                    activDiv[index].start({
                                        width: ['25%','40%'],
                                        backgroundImage: `url(${activBg})`,
                                        transition:{
                                            duration:1,
                                            ease:"linear",
                                        }
                                    })

                                }}
                                onMouseLeave={()=>{
                                    setActiv(null);
                                    activDiv[index].start({
                                        backgroundImage:`url(${services[index].bg})`,
                                        width: '25%',
                                        transition:{
                                            duration:1,
                                            ease:"linear",
                                        }
                                    })
                                }}
                                animate={activDiv[index]}
                    >
                        <button className={activ === index ? "services-section__arrow-button" : "services-section__arrow-button-inv"}>                            <img src={activ===index?strelkaActiv:strelkaInActiv}/>
                        </button>

                        <div className="services-section__content">
                            <h2 className="services-section__name">{item.name}</h2>
                            <p className="services-section__description">{item.description}</p>
                            <button className="services-section__action-button">
                                Оставить заявку <img src={strelka}/>
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}