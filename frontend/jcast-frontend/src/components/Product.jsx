import React from 'react';

// img
import RubberFlow from '../assets/img/product/rubber_molding_process_flow.png';
import RubberCapture from '../assets/img/product/rubber_molding_process_capture.png';
import PowderCoatingFlow from '../assets/img/product/powder_coating_process_flow.png';
import PowderCoatingCapture from '../assets/img/product/powder_coating_process_capture.png';
import AgedMeatFlow from '../assets/img/product/aged_meat_management_flow.png';
import AgedMeatCapture from '../assets/img/product/aged_meat_management_capture.png';
import InjectionProcessFlow from '../assets/img/product/injection_process_judgement_flow.png';
import InjectionProcessCapture from '../assets/img/product/injection_process_judgement_capture.png';
import Jmes from '../assets/img/product/mes-diagram.png';
import DataCollectProgramImg from '../assets/img/product/data-collect-program.png';
import DashboardProgramImg from '../assets/img/product/dashboard.png';
//
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

const Product = () => {
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
       img: Jmes
     },
     //Add more MES products as needed
  ];

  const AIProducts = [
    {
      id: 1,
      name: '고무성형공정의 양불판단 AI 솔루션',
      title1: '- 고무성형공정의 흐름도 소개',
      title2: '- 제이캐스트 AI 솔루션 활용 및 기대효과',
      content1: '고무성형 공정의 주요 공정에서 공정 데이터를 받아 데이터베이스에 실시간으로 저장 및 데이터 관리서비스 제공 및 저장된 고무성형 공정데이터 기반으로 제이캐스트에서 제공하고 있는 AI모델로 공정데이터와 가장 잘 맞는 최적의 모델을 도출하여 데이터 가공 후 AI모델 생성',
      content2: 'KPI 성과지표에 따른 고무성형공정의 불량 예측정확도는 96.5%의 결과를 도출하였으며 불량 손실률은 1.28%에서 0.98%로 솔루션 활용 전 대비 23.4%의 불량개선 완료 생산조건과 작업조건에 대한 데이터를 정형화시켜 AI알고리즘을 적용하여 최적의 생산조건을 찾아 불량률을 최소화 현황판에서 실시간으로 양불판정을 하여 공정의 작업자가 불량발생시 현장의 빠른 대처가 가능',
      img1: RubberFlow,
      img2: RubberCapture
    },
    {
      id: 2,
      name: '분체도장 공정의 양불판단 AI 솔루션',
      title1: '- 분체도장 공정의 양불판단 AI 솔루션 주요 내용',
      title2: '- 제이캐스트 AI솔루션 활용 및 기대효과',
      content1: '분체도장 공정의 세척공정부터 경화공정까지의 모든 데이터를 Modbus를 이용하여 실시간으로 데이터베이스에 저장 및 관리하며 실시간으로 저장된 데이터는 AI학습모델에 맞춰 데이터 가공 후 분체도장에 가장 적합한 학습모델 도출, 수집한 데이터를 활용하여 공정의 현황을 모니터링 하며 AI알고리즘을 통해 분체도장 공정의 실시간 양불판정을 작업자에게 알림',
      content2: 'KPI 성과지표에 따른 분체도장 공정의 불량 예측정확도는 98.7%의 결과를 도출하였으며 불량률 절감은 1.67%에서 1.0%로 솔루션 활용 전 대비 67%의 불량률 절감 개선 완료, 분체도장 공정에서 오작업이나 불량감소 등 품질개선 생산활동에 대한 실시간 추적 및 관리 시스템 적용분체도장 공정의 실시간 데이터 수집으로 제품의 이상상태 파악 및 모니터링 시스템을 구축하여 현장의 신속한 대처가 가능',
      img1: PowderCoatingFlow,
      img2: PowderCoatingCapture
    },
    {
      id: 3,
      name: 'AI기반의 축산 육제품 품질향상을 위한 숙성육 제조관리 시스템',
      title1: '- AI기반 숙성육 관리시스템 주요 내용',
      title2: '- 제이캐스트 AI솔루션 활용 및 기대효과',
      content1: '축산물이력제의 외부 API를 통해 육제품의 바코드를 읽어 제품정보를 데이터베이스에 저장 및 관리하고 원료육공정의 입고, 숙성, 보관, 소분, 포장, 출고 등 각 공정마다 데이터를 실시간으로 수집하며 숙성고의 온도,바람,습도,숙성방식(dry/wet Aging), 기간 숙성육의 부위, 맛, 색상 등을 이용하여 가장 최적의 숙성고의 레시피 도출',
      content2: 'AI기반 숙성육 관리시스템을 적용한 다양한 고부가가치 숙성 육제품화 및 숙성방식, 숙성기간에 따른 원료육 부위별 숙성육제품화(소고기 8종/돼지고기6종), 기존 원료육 대비(육우 3등급) 맛의 수준을 한우 1~2등급, 가격 수준 또한 원료육대비 2~2.5배 이상의 가치를 향상, AI기반 숙성육 관리시스템은 기존 시설 그대로 이용하면서 부분변경만으로 가능하기 때문에 Smart HACCP 설비 도입 기준 최대 약 50%이상의 구축 비용 절감, 대형마트에서 판매할 경우 소비자들에게 제품의 신뢰성을 가질 수 있도록 기존 이력체계가 아닌 다양한 정보(맛, 제조이력, 건강정보)를 소비자들에게 제공',
      img1: AgedMeatFlow,
      img2: AgedMeatCapture
    },
    {
      id: 4,
      name: '사출 공정의 양불판단 AI 솔루션',
      title1: '- 사출공정의 AI솔루션 주요 내용',
      title2: '- 제이캐스트 AI솔루션 활용 및 기대효과',
      content1: '사출성형 공정의 PLC장비를 이용하여 사출성형 데이터를 실시간으로 수집하여 데이터베이스에 저장 및 관리하고 사출성형 공정의 품질공정에서 AI솔루션을 도입하여 사출성형 조건, 외관성형품질 유형, 기능검사 유형 데이터를 추가로 수집하며 사출기로부터 75종의 데이터를 수집하여 AI학습모델에 필요한 데이터를 정제 가공하여 사출공정에 맞는 AI학습모델을 선정하여 도출',
      content2: 'KPI 성과지표에 따른 사출성형 공정의 시간당 생산량(증가)는 1,800개에서 2,160개로 20%의 생산량 증가의 결과를 도출하였으며 완제품 불량률 감소는 1000ppm에서 800ppm으로 감소하였으며 사출성형공정의 단시간 내 품질 Root Cause를 실시간 파악하여 공정현장에서의 실시간 빠른 대응 가능하고 전체 Item단위의 실시간 품질 불량 추적 검측하고 불량 발생 전 불량 예측으로 인한 사전 대응으로 품질 비용 절감',
      img1: InjectionProcessFlow,
      img2: InjectionProcessCapture
    }
    // Add more AI solutions as needed
  ];

  const DataCollectProgram = [
    {
      id: 1,
      title: '데이터 수집 프로그램',
      content1: '실시간 데이터 수집 프로그램으로 복잡한 산업 환경에서도 빠르고 정확하게 기계 및 장비 데이터를 수집, 분석하여 생산성을 극대화하고 운영 효율성을 향상시킬 수 있습니다. 수집한 데이터를 기반으로 실시간 모니터링과 고급 분석 기능을 통해 예측 정비 및 공정 최적화가 가능해지며, 이는 비용절감과 함께 제품 품질의 일관성을 보장합니다.',
      img: DataCollectProgramImg
    }
  ];

  const DashboardProgram = [
    {
      id: 1,
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
        <h2 className = "product-category">AI 솔루션</h2>
        {AIProducts.map((product) => (
          <div key={product.id} className="product-item" style={{ marginBottom: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h2 className="product-name">{product.id}. {product.name}</h2>
            </div>
            <div className="product-images">
              <img src={product.img1} alt="Process Flow" style={{ width: '48%', height: 'auto' }} />
              <img src={product.img2} alt="Process Capture" style={{ width: '48%', height: 'auto' }} />
            </div>
            <div className='product-info'>              
              <h3 className='product-title'>{product.title1}</h3>
              <p className='product-content'>{product.content1}</p>
              <h3 className='product-title'>{product.title2}</h3>
              <p className='product-content'>{product.content2}</p>
            </div>
          </div>
        ))}
        <h2 className="product-category">MES</h2>
        {MESProducts.map((product) => (
          <div key={product.id} className="product-item" style={{ marginBottom: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h2 className="product-name">{product.id}. {product.name}</h2>
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
        <h2 className = "product-category">데이터 수집 프로그램</h2>
        {DataCollectProgram.map((product) => (
          <div key={product.id} className="product-item" style={{ marginBottom: '20px' }}>
            <div className="product-images">
              <img src={product.img} alt="DataCollectProgram" style={{ justifyContent: 'center', width: '100%', height: 'auto' }} />
            </div>
            <div className='product-info'>              
              <h3 className='product-title'>{product.title1}</h3>
              <p className='product-content'>{product.content1}</p>
            </div>
          </div>
        ))}
        <h2 className = "product-category">Dashboard 프로그램</h2>
        {DashboardProgram.map((product) => (
          <div key={product.id} className="product-item" style={{ marginBottom: '20px' }}>
            <div className="product-images">
              <img src={product.img} alt="DataCollectProgram" style={{ justifyContent: 'center', width: '100%', height: 'auto' }} />
            </div>
            <div className='product-info'>              
              <h3 className='product-title'>{product.title1}</h3>
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

export default Product;