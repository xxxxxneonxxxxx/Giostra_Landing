import React from "react";
import contact from './img/contact.svg';
import './contactUs.css';
import InputMask from "react-input-mask";

export default function ContactUs() {


    return (
        <section className="contact">
            <div className="contact__form-block">
                <h2 className="contact__title">Свяжитесь с нами</h2>
                <form className="contact__form">
                    <input type="text" placeholder="Имя" className="contact__input" />

                    <div className="contact__input-row">
                        <input type="text" placeholder="Компания" className="contact__input contact__input--half" />
                        <input type="email" placeholder="Эл. почта" className="contact__input contact__input--half" />
                    </div>

                    <InputMask
                        mask="+7 (999) 999-99-99"
                        placeholder="+7 (___) ___-__-__"
                        className="contact__input"
                    >
                        {(inputProps: any) => <input {...inputProps} type="tel" />}
                    </InputMask>
                    <textarea placeholder="Сообщение" className="contact__textarea"></textarea>

                    <button type="submit" className="contact__button">
                        Начать свой проект →
                    </button>
                </form>
            </div>

            <div className="contact__image-block">
                <img src={contact} alt="Contact Illustration" className="contact__image" />
            </div>
        </section>
    );
}