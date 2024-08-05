import React from "react";
import office from "./img/office.png";
import './css/Intro.css';

const Intro = () => {

    const introTexts = [
        "㈜제이캐스트는 다양한 분야의  AI솔루션 과 MES솔루션을 보유하고 있는 전문업체이며",
        "많은 경험과 사례를 토대로 고객사의 니즈에 맞춰 솔루션을 개발 / 적용 활용할 수 있습니다.",
        "",
        "고객의 핵심업무를 파악하여 사용자의 편리성을 제공하고, AI솔루션을 통해 생산공정의 양불판단,", 
        "문제발생 공정 탐지 등의 서비스를 이용하여 생산성 향상 및 제품의 품질을 높이고",
        "고객사의 신뢰를 향상시켜 사업확장에 기여 할 수 있습니다.",
    ];
    return (
        <section id="intro">
            <div className="intro__inner">
                <div className="intro__image-container">
                    <img className="intro__blur-image" src={office} alt="jcast office" />
                    <div className="intro__text-overlay">
                      {introTexts.map((text, index) => (
                        <React.Fragment key={index}>
                          {text}<br />
                        </React.Fragment>
                      ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Intro;
