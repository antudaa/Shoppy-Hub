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