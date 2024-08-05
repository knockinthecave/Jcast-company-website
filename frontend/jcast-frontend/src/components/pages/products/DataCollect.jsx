import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

// img
import DataCollectProgramImg from './img/data-collect-program.png';
//

import './css/DataCollect.css';


const DataCollect = () => {
  const DataCollectProgram = [
    {
      id: 1,
      name: '데이터 수집 프로그램',
      title: '데이터 수집 프로그램',
      content1: '실시간 데이터 수집 프로그램으로 복잡한 산업 환경에서도 빠르고 정확하게 기계 및 장비 데이터를 수집, 분석하여 생산성을 극대화하고 운영 효율성을 향상시킬 수 있습니다. 수집한 데이터를 기반으로 실시간 모니터링과 고급 분석 기능을 통해 예측 정비 및 공정 최적화가 가능해지며, 이는 비용절감과 함께 제품 품질의 일관성을 보장합니다.',
      img: DataCollectProgramImg
    }
  ];

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
      <section id="product">
      <div className="product-list-container">
        {DataCollectProgram.map((product) => (
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

export default DataCollect;