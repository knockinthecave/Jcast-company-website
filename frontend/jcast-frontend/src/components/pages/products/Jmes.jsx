import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import './css/Jmes.css';

// img
import JmesImg from './img/mes-diagram.png';

const Jmes = () => {
  const MESProducts = [
    {
      id: 1,
      name: 'JMES',
      title1: '- 시스템 확장성',
      title2: '- 맞춤 제작',
      title3: '- 연동성',
      content1: '실시간 표출되는 데이터수집으로 불량 발생 제품 추적과 원인을 실시간 파악하여 최소 비용과 시간으로 문제 해결 할 수 있게 됩니다. 이로 인한 지속적인 시스템 업그레이드로 보다 효율적인 고객 맞춤형 제품을 생산 할 수 있습니다.',
      content2: '생산 현장의 정확한 데이터를 사용함으로 생산되는 제품이 고객 맞춤형 제품이 되어 고객의 만족도를 높이게 됩니다. 또한 맞춤형 제품의 품질향상으로 각종 제품심사 결과의 만족도 상승하게 됩니다.',
      content3: 'MES의 강점인 실시간 데이터 수집으로 제품 생산 불량으로 발생된 결과를 분석, 설비관리에 연동시켜 설비를 관리할 경우 비용을 절감 할 수 있게 됩니다. 또한 스마트로드모니터, 바코드, 버니어 캘리퍼스 등의 센서와 연동하여 검사기록, 불량관리를 효율적으로 할 수 있습니다.',
      img: JmesImg,
    },
  ];

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <section id="mes">
          {MESProducts.map((product) => (
            <div key={product.id} className="product-item" style={{ marginBottom: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h2 className="product-name">{product.name}</h2>
              </div>
              <div className="product-images">
                <img src={product.img} alt="MES Diagram" style={{ width: '100%', height: 'auto' }} />
              </div>
              <div className='product-info'>
                <h3 className='product-title'>{product.title1}</h3>
                <p className='product-content'>{product.content1}</p>
                <h3 className='product-title'>{product.title2}</h3>
                <p className='product-content'>{product.content2}</p>
                <h3 className='product-title'>{product.title3}</h3>
                <p className='product-content'>{product.content3}</p>
              </div>
            </div>
          ))}
        </section>
      </Container>
    </React.Fragment>
  );
};

export default Jmes;
