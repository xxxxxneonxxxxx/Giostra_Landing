import React from 'react'
import strelka from '../../config/img/strelka.svg'
import bgCTA from './img/bgCTA.svg'
import './ctaSection.css'

export default function CTASection() {
    return (
        <section className="cta-section"
                 style={{
                     backgroundImage: `url(${bgCTA})`,
                 }}
        >
            <div className="cta-section__content">
                <label className="cta-section__title">
                    Получить результат<br />возможно уже сегодня!
                </label>

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