import React from "react";
import './header.css';
import img from './img/avatar.svg'

export default function Header() {
    const [indefication, setIndefication] = React.useState(true);
    return (
        <header className="header">
            <label className="header__logo">Giostra</label>
            <div className="header__menu">
                <nav className="header__nav">
                    <label className="header__link">Услуги</label>
                    <label className="header__link">Портфолио</label>
                    <label className="header__link">О нас</label>
                    <label className="header__link">Контакты</label>
                </nav>
                <div className="header__auth">
                    {indefication ? (
                        <img className="header__avatar" src={img} alt="аватар" />
                    ) : (
                        <button className="header__login-btn">Войти</button>
                    )}
                </div>
            </div>
        </header>
    );
}