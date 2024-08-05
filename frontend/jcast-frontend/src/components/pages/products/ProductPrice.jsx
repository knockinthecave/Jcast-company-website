import React from 'react';

// img
import MonthlyPrice from './img/monthly-price.png';
import QuarterlyPrice from './img/quarterly-price.png';
import YearlyPrice from './img/yearly-price.png';

import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import './css/ProductPrice.css';

const ProductPrice = () => {
     const PriceTags = [
          {
               id: 1,
               name: '월 기준',
               img: MonthlyPrice
          },
          {
               id: 2,
               name: '6개월 기준',
               img: QuarterlyPrice
          },
          {
               id: 3,
               name: '연 기준',
               img: YearlyPrice
          },
     ];

     return (
          <React.Fragment>
               <CssBaseline />
               <Container maxWidth="lg">
                    <section id="product-price">
                         <div className="product-price-container">
                              <h2 className="product-price-head-title">제품단가</h2>
                              {PriceTags.map((tag) => (
                                   <div key={tag.id} className="product-price-item" style={{ marginBottom: '20px' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                                             <h2 className="product-price-name">- {tag.name}</h2>
                                        </div>
                                        <div className="product-price-images">
                                             <img src={tag.img} alt="Price Tag" style={{ width: '110%', height: 'auto',  paddingBottom: '30px' }} />
                                        </div>
                                   </div>
                              ))}
                              <h4 style={{ marginTop: '20px', marginBottom: '20px' }}>※ 그 외 시스템 및 솔루션에 관해서는 문의 바랍니다.</h4>
                         </div>
                    </section>
               </Container>
          </React.Fragment>
     );
};

export default ProductPrice;