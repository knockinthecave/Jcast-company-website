import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

// img
import DashboardProgramImg from './img/dashboard.png';
//

import './css/Dashboard.css';

const Dashboard = () => {
  const DashboardProgram = [
    {
      id: 1,
      name: 'Dashboard',
      title: 'Dashboard 프로그램',
      content1: '복잡한 데이터를 쉽게 이해할 수 있는 시각적 형태로 변환하여, 실시간으로 생산 과정과 결과를 모니터링하고 이를 통해 전략적인 인사이트를 제공합니다. 모든 관련 데이터를 중앙 집중화하여 정보에 신속하게 접근하고, 생산성을 높이며, 더 빠르고 정확한 결정을 내릴 수 있도록 지원합니다.',
      img: DashboardProgramImg
    }
  ]


  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
      <section id="product">
      <div className="product-list-container">
        {DashboardProgram.map((product) => (
          <div key={product.id} className="product-item" style={{ marginBottom: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h2 className="product-name">{product.name}</h2>
            </div>
            <div className="product-images">
              <img src={product.img} alt="DataCollectProgram" style={{ justifyContent: 'center', width: '100%', height: 'auto' }} />
            </div>
            <div className='product-info'>              
              <p className='product-content'>{product.content1}</p>
            </div>
          </div>
        ))}
      </div>    
      </section>
      </Container>
    </React.Fragment>
    
  );
};

export default Dashboard;