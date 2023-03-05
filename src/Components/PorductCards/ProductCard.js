import React from 'react';

const ProductCard = ({ product }) => {
    return (
        <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <section className="mx-auto w-fit">
                <div className="w-72 h-fit group">
                    <div className="relative rounded-xl overflow-hidden">
                        <img className="h-72 w-72 rounded-xl object-cover" src={product?.img} alt="" />
                        <div className="absolute h-full w-full bg-black/20 flex flex-col gap-6 items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <button className="bg-black text-white py-2 px-5">Add to cart</button>
                            <button className="bg-black text-white py-2 px-5">Details</button>
                        </div>
                    </div>
                    <div className='px-4 pb-4'>
                        <h2 className="mt-3 text-xl text-black capitalize">{product?.brandName}</h2>
                        <h3 className='mt-3 text-xl text-black capitalize'>{product?.name}</h3>
                        <p className="text-xl mt-2 ml-1 text-black inline-block mr-6">${product?.offerPrice}</p>
                        <del className="text-red-700 text-lg">${product?.price}</del>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProductCard;
