import React from "react";
import './css/Footer.css';

const Footer = () => {
    return (
        <React.Fragment>
            <footer id="footer" role="contentinfo">
              <div className="footer__inner">
                <div className="footer__content">
                  <p className="footer__company-name"><strong>(주)제이캐스트</strong></p>
                  <p className="footer__address">사업자등록번호 : 114-86-47332 | 대표 : 어재홍</p>
                  <p className="footer__address">14056 경기도 안양시 동안구 벌말로 123 평촌스마트베이 A동 1105호</p>
                </div>
              </div>
            </footer>
        </React.Fragment>
    );
};

export default Footer;
