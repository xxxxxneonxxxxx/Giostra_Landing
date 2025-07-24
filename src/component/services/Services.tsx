import React,{useRef} from "react";
import { services } from "../../config/config";
import strelka from "../../config/img/strelka.svg";
import './services.css'

export default function Services() {


    return (
        <section className="services-section">
            <label className="title">Наши услуги</label>
            <div  className="services-section__cards">
                <div className="services-section__card services-section__card--highlighted"
                     style={{
                         backgroundImage: `url(${services[0].bg})`,
                         backgroundSize: 'cover',
                         backgroundPosition: 'center'
                     }}
                >
                    <button className="services-section__arrow-button"
                            style={{backgroundImage: `url(${services[0].strelka})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                    </button>

                    <div className="services-section__content">
                        <h2 className="services-section__name">{services[0].name}</h2>
                        <p className="services-section__description">{services[0].description}</p>
                        <button className="services-section__action-button">
                            Оставить заявку <img src={strelka} alt="→" />
                        </button>
                    </div>
                </div>

                {services.slice(1).map((item, index) => (
                    <div key={index} className="services-section__card" style={{
                        backgroundImage: `url(${item.bg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}>
                        <button className="services-section__arrow-button-inv">
                            <img src={item.strelka}/>
                        </button>

                        <div className="services-section__content">
                            <h2 className="services-section__name">{item.name}</h2>
                            <p className="services-section__description">{item.description}</p>
                            <button className="services-section__action-button">
                                Оставить заявку <img src={strelka}/>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}