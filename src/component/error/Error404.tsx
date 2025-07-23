import React from "react";
import bg from './img/bg.svg';
import left from './img/left.svg';
import right from './img/right.svg';
import './errore404.css';

export default function Errore404() {
    const reloadPage = () => window.location.reload();

    return (
        <section className="error" >
            <img src={bg} alt="" className="error__bg" />

            <div className="error__code">
                <img src={left} alt="4" className="error__digit" />
                <img src={right} alt="4" className="error__digit" />
            </div>

            <p className="error__subtitle">Ой, что-то пошло не так</p>

            <button className="error__button" onClick={reloadPage}>
                Перезагрузить страницу
            </button>
        </section>
    );
}