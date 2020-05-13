import React, { useEffect } from 'react';

const ProductDetailPage = (props) => {
  useEffect(() => {
    props.fetchProductById();
  }, []);
  return <div>PRODUCT PAGE</div>;
};

export default ProductDetailPage;
