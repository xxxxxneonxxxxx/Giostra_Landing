import React from "react";
import bg1 from './img/bg1.svg'
import bg3 from './img/bg3.jpg'
import imgAboutAs from './img/imgAboutAs.svg'
import Icons from "./component/icons /Icons";
import InfoBlock from "./component/infoBlock/InfoBlock";
import './aboutUs.css'
export default function AboutUs() {
    return (
        <section id={'adoutUs'}className="about-us">
            <label className={'title'}>О нас</label>
            <div className={'about-us__content'}>
                <div
                    className=" about-us__block--main"
                    style={{
                        backgroundImage: `url(${bg1})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                >
                    <img className="about-us__image" alt="" src={imgAboutAs} />
                    <label className="about-us__title">Giostra это мы</label>
                    <p className="about-us__text">
                        В далёкой стране, где горы касаются небес, а реки несут свои воды сквозь тысячелетия, жил юноша по имени Эйнар.
                    </p>
                    <button className="about-us__button">Перейти</button>
                </div>

                <div className="about-us__double">
                    <InfoBlock />
                    <div
                        className="about-us__block"
                        style={{
                            backgroundImage: `url(${bg3})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}
                    >
                    </div>
                </div>
                <Icons/>
            </div>
        </section>
    );
}