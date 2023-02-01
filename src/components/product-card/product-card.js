import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const { name, id, price } = product;

    return (
        <Link to={ id } className='product-card' >
            <img
                className='product-card-icon'
                src={ require(`../../images/products/${ id }.svg`) }
                alt={ name } />
            <div>
                <h2 className='product-card-name'>{ name }</h2>
                <p className='product-card-price'>{ `$${ price  / 100}` }</p>
            </div>
        </Link>
    );
};

export default ProductCard;