import React from 'react';
import { footerConst } from "../../config/constType";
import './footer.css'
import {Link} from "react-router-dom";
export default function Footer() {
    return (
        <footer className="footer">
            <h1 className="footer__title">
                IT - профессионалы <br/> для вашего <br/> бизнеса
            </h1>

            <div className="footer__nav">
                <Link to={'/#title'} className="footer__nav-item">главная</Link>
                <Link to={'/#service'} className="footer__nav-item">услуги</Link>
                <Link to={'/#adoutUs'} className="footer__nav-item">о нас</Link>
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