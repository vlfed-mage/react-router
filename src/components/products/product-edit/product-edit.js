import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Services from '../../../services';

const ProductEdit = () => {
    const { updateData, getData } = Services(),
    { id } = useParams(),
    navigate = useNavigate(),

    [form, setForm] = useState(null);
    useEffect(() => {
        setForm({
            id: '',
            name: '',
            price: '',
            description: ''
        });

        if (id) {
            getData('products', id)
                .then((data) => setForm(data))
                .catch((error) => navigate('/admin', { replace: true }))
        }

    }, [])

    const updateFields = (target) => {
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
            const createdProduct = await updateData('products', form, 'POST');
            navigate(`/admin/${ createdProduct.id }`)
        } catch (error) {
            console.warn(error);
        }
    },

    onProductEdit = async () => {
        try {
            await updateData('products', form, 'PUT')
            alert(`Updated ${ form.name }`)
            navigate('/admin')
        } catch (error) {
            console.warn(error);
        }
    };

    if (!form) {
        return <span>Loading...</span>
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
    //     "id": "wild-water",
    //     "name": "Wild Water",
    //     "description": "Spring water, wild and watery.",
    //     "price": 299
    // },

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
                    Create
                </button>
                <button
                    type='button'
                    className='product-edit-button'
                    onClick={ onProductEdit } >
                    Edit
                </button>
            </form>
        </>
    );
};

export default ProductEdit;