const Services = () => {

    const url = 'api/products';

    const _getData = async () => {
        const data = await fetch(url);

        if (!data.ok) {
            throw new Error('Something get terrible wrong')
        }

        return data.json();
    };

    return {
        getProducts: () => _getData()
    };
};

export default Services;