import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import './css/CodeOfConduct.css';

const CodeOfConduct = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <section id="ethical-management">
          <h2 className="main-title">윤리경영소개</h2>
          <h2 className="section-title">윤리경영이란?</h2>
          <p className="section-description">
            기업의 법적, 경제적 책임 수행은 물론이고, 사회 통념적으로 기대되는 윤리적 책임의 수행까지 기본적 의무로 인정하고
            기업윤리 준수를 행동원칙으로 삼는 경영입니다. 이는 기업의 이해관계자로부터 지속적인 신뢰와 자율성을 보장 받기
            위한 전체조건입니다.
          </p>
        </section>
        <section id="ethics-code">
          <div className="ethics-code-box">
            <h2 className="main-title">윤리강령</h2>

            <div className="ethics-section">
              <h3 className="section-title">제 1장 고객에 대한 책임</h3>
              <ul className="ethics-list">
                <li>1. 정직과 신뢰 : 모든 고객에게 정직하고 신뢰할 수 있는 정보를 제공하며, 고객과의 약속을 준수합니다.</li>
                <li>2. 고객 만족 : 고객의 요구와 기대를 충족시키기 위해 최선을 다하며, 고객 피드백을 적극 반영합니다.</li>
                <li>3. 개인 정보 보호 : 고객의 개인 정보를 철저히 보호하고, 관련 법규를 준수합니다.</li>
              </ul>
            </div>

            <div className="ethics-section">
              <h3 className="section-title">제 2장 직원에 대한 책임</h3>
              <ul className="ethics-list">
                <li>1. 공정한 대우 : 모든 직원에게 공정하고 평등하게 대우하며, 차별이나 괴롭힘을 금지합니다.</li>
                <li>2. 안전한 근무 환경 : 안전하고 건강한 근무 환경을 제공하고, 사고 예방을 위해 노력합니다.</li>
                <li>3. 직원 개발 : 직원의 성장과 발전을 지원하며, 필요한 교육과 훈련을 제공합니다.</li>
              </ul>
            </div>

            <div className="ethics-section">
              <h3 className="section-title">제 3장 주주와 이해 관계자에 대한 책임</h3>
              <ul className="ethics-list">
                <li>1. 투명한 경영 : 경영의 투명성을 유지하고, 주주와 이해 관계자에게 정확한 정보를 제공합니다.</li>
                <li>2. 지속 가능성 : 장기적인 지속 가능성을 고려하여 경영 활동을 수행합니다.</li>
                <li>3. 윤리적 의사 결정 : 모든 의사 결정 과정에서 윤리적 기준을 준수합니다.</li>
              </ul>
            </div>

            <div className="ethics-section">
              <h3 className="section-title">제 4장 사회에 대한 책임</h3>
              <ul className="ethics-list">
                <li>1. 사회적 기여 : 지역 사회에 긍정적인 영향을 미치기 위해 노력하며, 사회 공헌 활동에 적극 참여합니다.</li>
                <li>2. 환경 보호 : 환경 보호를 위해 노력하며, 자원을 효율적으로 사용하고 폐기물을 최소화합니다.</li>
                <li>3. 법규 준수 : 모든 법규와 규정을 준수하며, 불법적인 행위를 하지 않습니다.</li>
              </ul>
            </div>

            <div className="ethics-section">
              <h3 className="section-title">제 5장 회사 자산 보호</h3>
              <ul className="ethics-list">
                <li>1. 자산 보호 : 회사의 자산을 보호하고, 개인적인 목적으로 사용하지 않습니다.</li>
                <li>2. 정보 보안 : 회사의 기밀 정보를 보호하고, 무단 유출을 금지합니다.</li>
                <li>3. 비윤리적 행위 금지 : 뇌물, 부정행위, 이해 상충 등을 금지합니다.</li>
              </ul>
            </div>

            <div className="ethics-section">
              <h3 className="section-title">제 6장 윤리적 문제 제기</h3>
              <ul className="ethics-list">
                <li>1. 문제 보고 : 윤리적 문제나 위반 사항이 발생했을 경우 이를 즉시 보고합니다.</li>
                <li>2. 보복 금지 : 윤리적 문제를 보고한 직원에게 불이익을 주지 않습니다.</li>
                <li>3. 조사 협조 : 모든 윤리적 문제에 대한 조사에 적극 협조합니다.</li>
              </ul>
            </div>
          </div>
        </section>
      </Container>
    </React.Fragment>
  );
};

export default CodeOfConduct;
