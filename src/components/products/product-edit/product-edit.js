import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Services from '../../../services';

const ProductEdit = () => {
    const { setData } = Services(),
    navigate = useNavigate(),

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

    onProductCreate = async () => {
        try {
            const { id } = await setData('products', form)
            navigate(`/admin/${ id }`)
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

    // {
    //     "id": "spice-dog",
    //     "name": "Spice Dog",
    //     "description": "Prepare the spice, it's very nice.",
    //     "price": 799
    // }

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
                    onClick={ onProductCreate } >
                    Create new product
                </button>
            </form>
        </>
    );
};

export default ProductEdit;