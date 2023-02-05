import React, { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

import Services from '../../../services';

import ProductCard from '../product-card/product-card'

const ProductsList = () => {
    const { getCollection } = Services(),
    [ searchParams ] = useSearchParams(),
    [ products, setProducts ] = useState(null),

    location = useLocation();

    useEffect(() => {
        const { state, pathname } = location;
        if (state) {
            console.warn(`Nothing found for ${ pathname }${ state.id }` )
        }
        console.log(Object.fromEntries([...searchParams])); // looks like ?sort=name in browser address bar
        getCollection('products')
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
        <ul className='products-list'>
            { productList }
        </ul>
    )
};

export default ProductsList;