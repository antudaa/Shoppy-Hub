import { useEffect, useState } from 'react';
import './App.css';
import { db } from './Firebase/Firebase-config';
import { collection, getDocs } from "firebase/firestore";
import Header from './Components/Shared/Header/Header';
import ProductCard from './Components/PorductCards/ProductCard';
import ProductDetailsCard from './Components/PorductCards/ProductDetailsCard';


function App() {

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
      <Header />
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
      <ProductDetailsCard />
    </div>
  );
}

export default App;
