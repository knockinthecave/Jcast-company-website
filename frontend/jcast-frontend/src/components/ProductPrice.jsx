import React from 'react';

// img

import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

const ProductPrice = () => {
     const PriceTags = [
          {
               id: 1,
               name: 'example1',
               img: 'Image 1 URL'
          },
          {
               id: 2,
               name: 'example2',
               img: 'Image 2 URL'
          },
     ];

     return (
          <React.Fragment>
               <CssBaseline />
               <Container maxWidth="lg">
                    <section id="product-price">
                         <div className="product-price-container">
                              <h2 className="product-price-head-title">제품단가</h2>
                              {PriceTags.map((tag, key) => (
                                   <div key={key} className="product-price-item" style={{ marginBottom: '20px' }}>
                                        <img src={tag.img} alt={tag.name} />
                                   </div>
                              ))}
                         </div>
                    </section>
               </Container>
          </React.Fragment>
     );
};

export default ProductPrice;