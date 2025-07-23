import React from "react";
import './header.css';

export default function Header() {
    return (
        <header className="header">
            <h1 className="header__logo">Giostra</h1>
            <div className="header__menu">
                <div className="header__bar"></div>
                <div className="header__bar"></div>
                <div className="header__bar"></div>
            </div>
        </header>
    );
}