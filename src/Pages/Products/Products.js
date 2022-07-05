import React from 'react';
import useParts from '../Shared/Hooks/useParts';
import Product from './Product';

const Products = () => {
    const[products,setProducts]= useParts([])
    return (
        <div className=" grid  lg:grid-cols-3 gap-2  justify-items-center " >
            {
                products.map(product=> <Product
                product ={product}
                ></Product>)
            }
        </div>
    );
};

export default Products;