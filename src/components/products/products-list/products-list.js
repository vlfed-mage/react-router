import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";

import Services from '../../../services';

import ProductCard from '../product-card'

const ProductsList = () => {
    const { getData } = Services();
    const [ products, setProducts ] = useState(null);

    const location = useLocation();

    useEffect(() => {
        console.log(location);
        const { state, pathname } = location;
        if (state) {
            console.warn(`Nothing found for ${pathname}${ state.id }` )
        }

        getData()
            .then((data) => setProducts(data))
    }, [])

    if (!products) {
        return <span>loading...</span>
    }

    const productList = products.map((product) => {
        return (
            <li key={ product.id }>
                <ProductCard product={ product } />
            </li>
        )
    });

    return (
        <ul className='products-list'>{ productList }</ul>
    )
};

export default ProductsList;