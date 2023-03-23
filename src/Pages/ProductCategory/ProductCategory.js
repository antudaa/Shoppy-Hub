import React from 'react';

const ProductCategory = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="2xl:mx-auto 2xl:container py-12 px-4 sm:px-6 xl:px-20 2xl:px-0 w-full">
                <div className="flex flex-col jusitfy-center items-center space-y-10">
                    <div className="flex flex-col justify-center items-center ">
                        <h1 className="text-3xl xl:text-4xl font-semibold leading-7 xl:leading-9 ">Shop By Category</h1>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-4 w-full">
                        <div className="relative group flex justify-center items-center h-full w-full">
                            <img className="object-center object-cover h-full w-full" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=80" alt="Nike Shoes" />
                            <button className="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">NIKE</button>
                            <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
                        </div>

                        <div className="flex flex-col space-y-4 md:space-y-8 mt-4 md:mt-0">
                            <div className="relative group flex justify-center items-center h-full w-full">
                                <img className="object-center object-cover h-full w-full" src="https://5.imimg.com/data5/SELLER/Default/2021/9/CL/FC/TY/9581609/dfbba22b-78bb-45d9-b51b-2540da84f533-1000x1000.jpg" alt="Adidas Shoes" />
                                <button className="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">Adidas</button>
                                <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
                            </div>
                            <div className="relative group flex justify-center items-center h-full w-full">
                                <img className="object-center object-cover h-full w-full" src="https://sneakernews.com/wp-content/uploads/2022/10/Warner-Brothers-FILA-Semi-Pro-Release-Date-1.jpg?w=1140" alt="Fila Shoes" />
                                <button className="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">FILA</button>
                                <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
                            </div>
                        </div>

                        <div className="relative group justify-center items-center h-full w-full hidden lg:flex">
                            <img className="object-center object-cover h-full w-full" src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/190296/10/fnd/AUS/fmt/png/First-Mile-TAZON-Modern-SL-Running-Shoes-Men" alt="Puma Shoes" />
                            <button className="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">PUMA</button>
                            <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
                        </div>
                        <div className="relative group flex justify-center items-center h-full w-full mt-4 md:hidden md:mt-8 lg:hidden">
                            <img className="object-center object-cover h-full w-full hidden md:block" src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/190296/10/fnd/AUS/fmt/png/First-Mile-TAZON-Modern-SL-Running-Shoes-Men" alt="Puma Shoes" />
                            <img className="object-center object-cover h-full w-full md:hidden" src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/190296/10/fnd/AUS/fmt/png/First-Mile-TAZON-Modern-SL-Running-Shoes-Men" alt="olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-2" />
                            <button className="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">PUMA</button>
                            <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
                        </div>
                    </div>
                    <div className="relative group hidden md:flex justify-center items-center h-full w-full mt-4 md:mt-8 lg:hidden">
                        <img className="object-center object-cover h-full w-full hidden md:block" src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/190296/10/fnd/AUS/fmt/png/First-Mile-TAZON-Modern-SL-Running-Shoes-Men" alt="Puma Shoes" />
                        <img className="object-center object-cover h-full w-full sm:hidden" src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/190296/10/fnd/AUS/fmt/png/First-Mile-TAZON-Modern-SL-Running-Shoes-Men" alt="Puma Shoes" />
                        <button className="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">PUMA</button>
                        <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCategory;