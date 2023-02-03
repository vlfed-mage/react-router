import React from 'react';

const ProductEdit = () => {
    return (
        <form className='product-edit'>
            <input
                type='text'
                name='id'
                placeholder='ID'
                className='product-edit-input'
            />
            <input
                type='text'
                name='name'
                placeholder='Name'
                className='product-edit-input'
            />
            <input
                type='text'
                name='price'
                placeholder='Price'
                className='product-edit-input'
            />
            <textarea
                name='description'
                placeholder='Description'
                className='product-edit-input product-edit-textarea'
            />
        </form>
    );
};

export default ProductEdit;