const Services = () => {

    const url = 'api/products';

    const _getData = async (id = '') => {
        const data = await fetch(`${url}/${id}`);

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