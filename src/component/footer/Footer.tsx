import React from 'react';
import { footerConst } from "../../config/config";
import './footer.css'
export default function Footer() {
    return (
        <footer className="footer">
            <h1 className="footer__title">
                IT - профессионалы <br/> для вашего <br/> бизнеса
            </h1>

            <div className="footer__nav">
                <label className="footer__nav-item">главная</label>
                <label className="footer__nav-item">услуги</label>
                <label className="footer__nav-item">о нас</label>
                <label className="footer__nav-item">вопросы</label>
            </div>

            <div className="footer__socials">
                {footerConst.map((item, i) => (
                    <div key={i} className="footer__social-icon">
                        <img src={item.img} alt="" />
                    </div>
                ))}
            </div>
        </footer>
    );
}