import React from 'react';

const Product = () => {
  const MESProducts = [
    {
      id: 1,
      name: 'MES Product 1',
      title1: 'Subheading 1',
      title2: 'Subheading 2',
      content1: 'Content 1',
      content2: 'Content 2',
      img1: 'Image 1 URL',
      img2: 'Image 2 URL'
    },
    {
      id: 2,
      name: 'MES Product 2',
      title1: 'Subheading 1',
      title2: 'Subheading 2',
      content1: 'Content 1',
      content2: 'Content 2',
      img1: 'Image 1 URL',
      img2: 'Image 2 URL'
    },
    // Add more MES products as needed
  ];

  const AIProducts = [
    {
      id: 1,
      name: 'AI Solution 1',
      title1: 'Subheading 1',
      title2: 'Subheading 2',
      content1: 'Content 1',
      content2: 'Content 2',
      img1: 'Image 1 URL',
      img2: 'Image 2 URL'
    },
    {
      id: 2,
      name: 'AI Solution 2',
      title1: 'Subheading 1',
      title2: 'Subheading 2',
      content1: 'Content 1',
      content2: 'Content 2',
      img1: 'Image 1 URL',
      img2: 'Image 2 URL'
    },
    // Add more AI solutions as needed
  ];

  // Function to render each product's details in table format
  const renderProductTable = (products) => (
    <table>
      <tbody>
        {products.map(product => (
          <tr key={product.id}>
            <td>
              <img src={product.img1} alt={`${product.name} Image 1`} style={{ maxWidth: '100px', maxHeight: '100px' }} />
              <img src={product.img2} alt={`${product.name} Image 2`} style={{ maxWidth: '100px', maxHeight: '100px' }} />
            </td>
            <td>
              <table>
                <tbody>
                  <tr><td>{product.title1}</td></tr>
                  <tr><td>{product.content1}</td></tr>
                  <tr><td>{product.title2}</td></tr>
                  <tr><td>{product.content2}</td></tr>
                </tbody>
              </table>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <div className="product-list-container">
      <h1 style={{ textDecoration: 'underline' }}>제품소개</h1>
      <div className="product-table">
        <div>
          <h2>MES</h2>
          {renderProductTable(MESProducts)}
        </div>
        <div>
          <h2>AI Solutions</h2>
          {renderProductTable(AIProducts)}
        </div>
      </div>
    </div>
  );
};

export default Product;