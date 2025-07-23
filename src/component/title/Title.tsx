import React from "react";
import title from './img/title.svg';
import titleSectionFeatureImg from './img/title-section__feature-img.svg';
import './title.css'
import { numberOfSpecialists, sloganTitle } from '../../config/config';
import stackBg from './img/stack.svg';

export default function Title() {
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
                            maxHeight: '366px',
                            maxWidth: '388px',
                        }}>
                            <img src={stackBg}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}