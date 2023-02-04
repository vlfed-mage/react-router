const Services = () => {

    const url = 'http://localhost:5000/api';

    return {
        getData: async (name, id = '') => {
            const data = await fetch(`${url}/${name}/${id}`);

            if (!data.ok) {
                throw new Error('Something get terrible wrong')
            }

            return await data.json();
        },
        setData: async (name, payload) => {
            const response = await fetch(`${url}/${name}`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                throw new Error('Something get terrible wrong')
            }

            return await response.json();
        }
    };
};

export default Services;