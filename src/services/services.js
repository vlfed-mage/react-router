import { useLocation } from "react-router-dom";

const Services = () => {

    const url = 'http://localhost:5000/api';
    const { pathname } = useLocation();

    const _getData = async (id = '') => {
        const data = await fetch(`${url}${pathname.replace('/admin', '/products')}`);

        if (!data.ok) {
            throw new Error('Something get terrible wrong')
        }

        return data.json();
    },

    getItem = async (id) => {
        return await _getData(id);
    },

    getCollection = async () => {
        return await _getData();
    };

    return {
        getData: (id) => {
            return id
                ? getItem(id)
                : getCollection();
        },
    };
};

export default Services;