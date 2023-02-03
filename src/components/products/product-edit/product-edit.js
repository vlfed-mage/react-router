import React from 'react';
import { useState } from 'react';

const ProductEdit = () => {
    const [form, setForm] = useState({
        id: '',
        name: '',
        price: '',
        description: ''
    });

    const updateFields = (target) => {
        const { name, value } = target;
        setForm({
            ...form,
            [name]: name === 'price'
                ? isNaN(parseInt(value)) ? '' : parseInt(value)
                : value
        })
    }

    const fields = ['id', 'name', 'price'];
    const mapFields = fields.map((field) => {
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
            </form>
        </>
    );
};

export default ProductEdit;