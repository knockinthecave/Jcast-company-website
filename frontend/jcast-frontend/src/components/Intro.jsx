import React from "react";
import office from "../assets/img/office.png";

const Intro = () => {
    return (
        <section id="intro">
            <div className="intro__inner">
                <h1 className="intro__title">Jcast Networks.</h1>
                <div className="intro__image-container">
                    <img className="intro__blur-image" src={office} alt="jcast office" />
                    <div className="intro__text-overlay">
                        회사소개문구1<br />
                        회사소개문구2<br />
                        회사소개문구3
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Intro;
