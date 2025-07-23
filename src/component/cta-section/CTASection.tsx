import React from 'react'
import strelka from '../../config/img/strelka.svg'
import bgCTA from './img/bgCTA.svg'
import './ctaSection.css'

export default function CTASection() {
    return (
        <section className="cta-section">
            <img src={bgCTA} alt="" className="cta-section__background" />
            <div className="cta-section__content">
                <h2 className="cta-section__title">
                    Получить результат<br />возможно уже сегодня!
                </h2>

                <p className="cta-section__description">
                    Наши эксперты готовы разработать стратегии, которые приведут к результатам в<br />
                    вашем бизнесе уже сегодня. Закажите бесплатную консультацию и начните<br />
                    достигать целей уже сегодня!
                </p>

                <button className="cta-section__button">
                    Заказать консультацию <img src={strelka} alt="→" />
                </button>
            </div>
        </section>
    )
}