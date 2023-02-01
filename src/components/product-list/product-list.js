import React, { useEffect, useState } from 'react';

import Services from "../../services";

const ProductList = () => {
    const { getProducts } = Services();
    const [ products, setProducts ] = useState(null);

    useEffect(() => {
        getProducts()
            .then((data) => setProducts(data))
    }, [])

    if (!products) {
        return <span>loading...</span>
    }

    const productList = products.map((product) => {
        const { name, id } = product;
        return (
            <li key={ id }>
                { name }
            </li>
        )
    });

    return (
        <ul className='products-list'>{ productList }</ul>
    )
};

export default ProductList;