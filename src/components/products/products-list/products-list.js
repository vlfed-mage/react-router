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

    const updateParams = ({ target }) => {
        const { name, value } = target,
        currentParams = Object.fromEntries([...searchParams]),
        newParams = { ...currentParams, [name]: value };
        console.log(newParams);
    }

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
        <div className='products-items' >
            <div className='products-list-radios'>
                <span>Sort:</span>
                <label>
                    Name
                    <input
                        type='radio'
                        name='sort'
                        value='name'
                        onChange={ updateParams }
                        defaultChecked={ searchParams.get('sort') === 'name' } />
                </label>
                <label>
                    Price
                    <input
                        type='radio'
                        name='sort'
                        value='price'
                        onChange={ updateParams }
                        defaultChecked={ searchParams.get('sort') === 'price' } />
                </label>
            </div>
            <div className='products-list-radios'>
                <span>Order:</span>
                <label>
                    Ascending
                    <input
                        type='radio'
                        name='order'
                        value='ascending'
                        onChange={ updateParams }
                        defaultChecked={ searchParams.get('order') === 'ascending' } />
                </label>
                <label>
                    Descending
                    <input
                        type='radio'
                        name='order'
                        value='descending'
                        onChange={ updateParams }
                        defaultChecked={ searchParams.get('order') === 'descending' } />
                </label>
            </div>
            <ul className='products-list'>
                { productList }
            </ul>
        </div>
    )
};

export default ProductsList;