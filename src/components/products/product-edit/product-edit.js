import React from 'react';
import { useState } from 'react';

import Services from '../../../services';

const ProductEdit = () => {
    const { setData } = Services(),

    [form, setForm] = useState({
        id: '',
        name: '',
        price: '',
        description: ''
    }),

    updateFields = (target) => {
        const { name, value } = target;
        setForm({
            ...form,
            [name]: name === 'price'
                ? isNaN(parseInt(value)) ? '' : parseInt(value)
                : value
        })
    },

    onCreateProduct = async () => {
        try {
            const createdProduct = await setData(form)
            console.log(createdProduct);
        } catch (error) {
            console.warn(error);
        }
    }

    if (!form) {
        return <span>Loading</span>
    }

    const fields = ['id', 'name', 'price'],
    mapFields = fields.map((field) => {
        return (
            <input
                key={ field }
                type='text'
                name={ field }
                placeholder={ field.charAt(0).toUpperCase() + field.slice(1) }
                className='product-edit-input'
                onChange={ ({ target }) => updateFields(target) }
                value={ form ? form[field] : '' }
            />
        );
    });

    return (
        <>
            { JSON.stringify(form) }
            <form className='product-edit'>
                { mapFields }
                <textarea
                    name='description'
                    placeholder='Description'
                    className='product-edit-input product-edit-textarea'
                    onChange={ ({ target }) => updateFields(target) }
                    value={ form ? form.description: '' }
                />
                <button
                    type='button'
                    className='product-edit-button'
                    onClick={ onCreateProduct } >
                    Create new product
                </button>
            </form>
        </>
    );
};

export default ProductEdit;