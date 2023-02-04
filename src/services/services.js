const Services = () => {

    const bodyUrl = 'http://localhost:5000/api';

    return {
        getItem: async (name, id) => {
            const response = await fetch(`${ bodyUrl }/${ name }/${ id }`);

            if (!response.ok) {
                throw new Error('Something get terrible wrong in getItem')
            }

            return await response.json();
        },

        getCollection: async (name) => {
            const response = await fetch(`${ bodyUrl }/${ name }`);

            if (!response.ok) {
                throw new Error('Something get terrible wrong in getCollection')
            }

            return await response.json();
        },

        updateData: async (name, payload, method) => {
            const url = `${ bodyUrl }/${ name }/${ method === 'POST' ? '' : payload.id }`;
            const response = await fetch( url,{
                method: method,
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                throw new Error('Something get terrible wrong in updateData')
            }

            return await response.json();
        },

        deleteData: async (name, id) => {
            const url = `${ bodyUrl }/${ name }/${ id }`;
            const response = await fetch( url,{
                method: 'DELETE'
            });

            if (!response.ok) {
                throw new Error('Something get terrible wrong im deleteData');
            }

            return await response.json();
        }
    };
};

export default Services;