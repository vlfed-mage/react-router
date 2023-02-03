import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import Services from '../../../services';

const ProductDetails = () => {
    const { getData } = Services(),
    { id } = useParams(),
    [ product, setProduct ] = useState(null),

    navigate = useNavigate();

    useEffect(() => {
        getData(id)
            .then((data) => setProduct(data))
            .catch((error) => {
                console.warn(error);
                navigate('/', { replace: true, state: { id } });
            })
    },[id])

    if (!product) {
        return <span>Loading...</span>
    }

    const { name, price, description } = product;

    return (
        <div className='product' >
            <div className='product-title'>
                <img
                    className='product-icon'
                    src={ require(`../../../images/products/${ id }.svg`) }
                    alt={ name } />
                <div>
                    <h1 className='product-name'>{ name }</h1>
                    <p className='product-price'>{`$${ price / 100 }`}</p>
                </div>
            </div>
            <div className='product-description'>
                <p>{ description }</p>
                <button
                    type='button'
                    className='product-button'
                    onClick={ () => navigate(-1) } >
                    Go back
                </button>
            </div>
        </div>
    );
};

export default ProductDetails;