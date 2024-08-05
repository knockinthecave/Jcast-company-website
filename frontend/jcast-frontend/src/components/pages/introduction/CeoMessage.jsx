import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import './css/CeoMessage.css';

const CeoMessage = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md" className="ceo-greeting-container">
        <h2 className="ceo-greeting-title">CEO 인사말</h2>
        <p className="ceo-greeting-text">
          안녕하세요, 제이캐스트 네트워크의 CEO 어재홍입니다.
        </p>
        <p className="ceo-greeting-text">
          저희 회사는 혁신적인 솔루션을 제공하며 고객의 성공을 위해 최선을 다하고 있습니다.
        </p>
        <p className="ceo-greeting-text">
          항상 고객의 목소리에 귀 기울이며, 최고의 서비스를 제공하기 위해 노력하겠습니다.
        </p>
        <p className="ceo-greeting-text">
          안녕하세요, 제이캐스트 네트워크의 CEO 어재홍입니다.
        </p>
        <p className="ceo-greeting-text">
          감사합니다.
        </p>
      </Container>
    </React.Fragment>
  );
};

export default CeoMessage;
