import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import ProductCard from '../../Components/PorductCards/ProductCard';
import { db } from '../../Firebase/Firebase-config';

const Products = () => {

    const [product, setProduct] = useState([]);

    const productCollectionRef = collection(db, "ProductCollection");

    useEffect(() => {

        const getProducts = async () => {
            const data = await getDocs(productCollectionRef);
            setProduct(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }

        getProducts();
    }, []);

    return (
        <div>
            <div className="relative navbar-center w-1/3 lg:w-1/3 md:mb-0 md:w-1/4 mx-auto">
                <input type="search" className="mt-1 w-full pl-10 pr-2 h-10 py-1 rounded-lg border border-gray-600 focus:border-gray-700 focus:outline-none focus:shadow-inner leading-none" placeholder="Search Your Product" />

                <svg className="h-6 w-6 mt-3 text-gray-300 ml-2 mt-Link stroke-current absolute top-0 left-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </div>
            <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
                {
                    product.map((pro, i) =>
                        <ProductCard
                            key={i}
                            product={pro}
                        />
                    )
                }
            </div>
        </div>
    );
};

export default Products;