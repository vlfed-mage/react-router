import { useLocation } from "react-router-dom";

const Services = () => {

    const url = 'http://localhost:5000/api';
    const { pathname } = useLocation();

    return {
        getData: async (id = '') => {
            const data = await fetch(`${url}${pathname.replace('/admin', '/products')}`);

            if (!data.ok) {
                throw new Error('Something get terrible wrong')
            }

            return await data.json();
        },
        setData: async (payload) => {
            const response = await fetch(`${url}/products`, {
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