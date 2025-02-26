import React from 'react';
import ProductList from '@/components/product/ProductList';
import { HomeContainer } from '@/styles/pages/homeStyles';

const HomePage = () => {
  return (
    <HomeContainer>
      <ProductList />
    </HomeContainer>
  );
};

export default HomePage;

