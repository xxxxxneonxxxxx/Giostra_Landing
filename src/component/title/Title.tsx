import React from "react";
import title from './img/title.svg';
import titleSectionFeatureImg from './img/title-section__feature-img.svg';
import './title.css'
import { numberOfSpecialists, sloganTitle, stack } from '../../../../saitkiril/src/config/config';

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
                        <div className="title-section__feature">
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
                        <div className="title-section__stack-list">
                            {stack.map((item:{name: string; rotate: number; top: number; left: number; }, index:number) => (
                                <div key={index} className="title-section__stack-item">
                                    <p style={{
                                        position: "absolute",
                                        transform:`rotate(${item.rotate}deg)`,
                                        top: `${item.top}px`,
                                        left: `${item.left}px`,
                                    }}>{item.name}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}