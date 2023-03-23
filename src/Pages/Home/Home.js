import React from 'react';
import HeroSection from '../HeroSection/HeroSection';
import LocateViaMap from '../LocateViaMap/LocateViaMap';
import ProductCategory from '../ProductCategory/ProductCategory';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <HeroSection />
            <ProductCategory />
            <Products />
            <LocateViaMap />
        </div>
    );
};

export default Home;