import React from "react";
import { casesInfo } from "../../../../saitkiril/src/config/config";
import './cases.css';

export default function Cases() {
    return (
        <section className="cases">
            <h1 className="cases__title">Кейсы</h1>

            <div className="cases__list">
                <div
                    className={`cases__list__one`}
                    style={{
                        backgroundImage: casesInfo[0].bg,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <div className="case__content">
                        <label className="case__name">{casesInfo[0].name}</label>
                        <label className="case__description">{casesInfo[0].description}</label>
                    </div>
                </div>
                <div className="cases__list_two">
                    <div
                        className={`cases__list_two_top`}
                        style={{
                            backgroundColor: casesInfo[1].bg,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        <div className="case__content">
                            <label className="case__name">{casesInfo[1].name}</label>
                            <label className="case__description">{casesInfo[1].description}</label>

                        </div>
                    </div>
                    <div
                        className={`cases__list_two_bottom`}
                        style={{
                            backgroundColor: casesInfo[2].bg,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        <div className="case__content">
                            <label className="case__name">{casesInfo[2].name}</label>
                            <label className="case__description">{casesInfo[2].description}</label>
                        </div>
                    </div>
                </div>
                <div
                    className={`cases__list__four`}
                    style={{
                        backgroundColor: casesInfo[3].bg,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <div className="case__content">
                        <label className="case__name">{casesInfo[3].name}</label>
                        <label className="case__description">{casesInfo[3].description}</label>
                    </div>
                </div>
            </div>
        </section>
    );
}