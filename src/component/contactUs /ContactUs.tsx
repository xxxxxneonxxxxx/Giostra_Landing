import React, { useState } from "react";
import contact from './img/contact.svg';
import './contactUs.css';
import {useScroll} from '../../config/hooks/hookLocate'
export default function ContactUs() {
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        phone: '',
        message: ''
    });

    const [errors, setErrors] = useState({
        name: '',
        company: '',
        phone: '',
        email:''
    });
    const validate = () => {
        const newErrors: typeof errors = {
            name: '',
            company: '',
            phone: '',
            email:''
        };
        if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = '1';
        if (!formData.name.trim()) newErrors.name = '1';
        if (!formData.company.trim()) newErrors.company = '1';
        if (!/^\d{10,}$/.test(formData.phone.replace(/\D/g, ''))) newErrors.phone = '1';

        setErrors(newErrors);
        return Object.values(newErrors).every(e => !e);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
        }
    };

    return (
        <section id={'contactUs'} className="contact">
            <div className="contact__form-block">
                <h2 className="contact__title">Свяжитесь с нами</h2>
                <form className="contact__form" onSubmit={handleSubmit}>
                    <input
                        style={{
                            border: errors.name?"2px solid red" : "none",
                        }}
                        type="text"
                        name="name"
                        placeholder="Имя"
                        className="contact__input"
                        value={formData.name}
                        onChange={handleChange}
                    />

                    <div className="contact__input-row">
                        <input
                            style={{
                                border: errors.company?"2px solid red" : "none",
                            }}
                            type="text"
                            name="company"
                            placeholder="Компания"
                            className="contact__input contact__input--half"
                            value={formData.company}
                            onChange={handleChange}
                        />
                        <input
                            style={{
                                border: errors.email?"2px solid red" : "none",
                            }}
                            type="email"
                            name="email"
                            placeholder="Эл. почта"
                            className="contact__input contact__input--half"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>

                    <input
                        style={{
                            border: errors.phone?"2px solid red" : "none",
                        }}
                        type="tel"
                        name="phone"
                        placeholder="Телефон"
                        className="contact__input"
                        value={formData.phone}
                        onChange={handleChange}
                    />

                    <textarea
                        name="message"
                        placeholder="Сообщение"
                        className="contact__textarea"
                        value={formData.message}
                        onChange={handleChange}
                    ></textarea>

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