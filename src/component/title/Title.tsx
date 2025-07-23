import React,{useState} from "react";
import title from './img/title.svg';
import titleSectionFeatureImg from './img/title-section__feature-img.svg';
import './title.css'
import { numberOfSpecialists, sloganTitle } from '../../config/config';
import stackBg1 from './img/stack1.svg';
import stackBg2 from './img/stack2.svg';
import stackBg3 from './img/stack3.svg';
import stackBg4 from './img/stack4.svg';
import stackBg5 from './img/stack5.svg';
import stackBg6 from './img/stack6.svg';
import stackBg7 from './img/stack7.svg';
import stackBg8 from './img/stack8.svg';
import stackBg9 from './img/stack9.svg';
import stackBg10 from './img/stack10.svg';

import {motion} from 'framer-motion';




export default function Title() {
    const [stacksBg,setStacksBg] = useState<string[]>([stackBg1,stackBg2,stackBg3,stackBg4,stackBg5,stackBg6,stackBg7,stackBg8,stackBg9,stackBg10]);
    return (
        <div className="title-section">
            <div className="title-section__text-block">
                <label className="title-section__main-title">
                    РАЗРАБОТКА<br />
                    ВЕБ - САЙТОВ <br />
                    ПОД ЛЮБЫЕ ЦЕЛИ
                </label>
                <label className="title-section__subtitle">
                    Студия полного цикла разработки веб-приложений под любые цели и бюджет
                </label>
                <div className="title-section__buttons">
                    <button className="button title-section__contact-button">
                        Связаться
                    </button>
                    <label className="title-section__more-link">
                        Узнать больше
                    </label>
                </div>
            </div>

            <div className="title-section__visual-block">
                <img src={title} alt="Title" className="title-section__image" />
                <div className="title-section__visual-block__bottom">
                    <div className="title-section__features">
                        <div className="title-section__feature" style={{    background: "#1E1F26"
                        }}>
                            <label className="title-section__feature-name">
                                {numberOfSpecialists.name}
                            </label>
                            <p className="title-section__feature-description">
                                {numberOfSpecialists.description}
                            </p>
                        </div>
                        <div className="title-section__feature"
                             style={{backgroundImage: `url(${titleSectionFeatureImg})`}}
                        >
                            <label className="title-section__feature-name">
                                {sloganTitle.name}
                            </label>
                            <p className="title-section__feature-description">
                                {sloganTitle.description}
                            </p>
                        </div>
                    </div>

                    <div className="title-section__stack">
                        <label className="title-section__stack-title">ЧТО МЫ<br />УМЕЕМ?</label>
                        <div style={{
                            height: '366px',
                            width: '388px',
                        }}>
                            {stacksBg.map((item, i) => {
                                return (
                                    <motion.div
                                        key={i}
                                        className={'title-section__stack-img'}
                                        initial={{y:-200, opacity: 0 }}
                                        animate={{y:0,opacity:1}}
                                        transition={{ duration: 1, delay: i * 0.3 }}
                                    >
                                        <img src={item} />
                                    </motion.div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}