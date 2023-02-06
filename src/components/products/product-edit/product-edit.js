import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Services from '../../../services';

const ProductEdit = ({ isEdit }) => {
    const { deleteData, updateData, getItem} = Services(),
    { id } = useParams(),
    navigate = useNavigate(),

    [form, setForm] = useState(null);

    useEffect(() => {
        if (!isEdit) {
            setForm({
                id: '',
                name: '',
                price: '',
                description: ''
            });
            return;
        }

        getItem('products', id)
            .then((data) => setForm(data))
            .catch((error) => navigate('/admin', { replace: true }))

    }, [id])

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
        updateData('products', form, 'POST')
            .catch((error) => console.warn(error));
    },

    onProductEdit = async () => {
        updateData('products', form, 'PUT')
            .catch((error) => console.warn(error))
    },

    onProductDelete = async () => {
        if (!window.confirm(`Delete ${ form.name }?`)) {
            return;
        }

        deleteData('products', form.id)
            .catch((error) => console.warn(error));

        navigate('/admin');
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
                { !isEdit && (
                    <button
                        type='button'
                        className='product-edit-button'
                        onClick={ onProductCreate } >
                        Create
                    </button>
                ) }
                { isEdit && (
                    <>
                        <button
                            type='button'
                            className='product-edit-button'
                            onClick={ onProductEdit } >
                            Edit
                        </button>
                        <button
                            type='button'
                            className='product-edit-button'
                            onClick={ onProductDelete } >
                            Delete
                        </button>
                    </>
                ) }
            </form>
        </>
    );
};

export default ProductEdit;
