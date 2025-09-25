const properties = [
    {
        id: '1',
        img: 'assets/imgs/FeatiredProperties/SeasideSerenityVilla.png',
        title: 'Seaside Serenity Villa',
        subtitle: 'A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood... ',
        price: '$550,000',
        bedrooms: '4',
        bathrooms: '3',
        buildType: 'Villa',
        details: 'Coastal Escapes - Where Waves Beckon'
    },
    {
        id: '2',
        img: 'assets/imgs/FeatiredProperties/MetropolitanHaven.png',
        title: 'Metropolitan Haven',
        subtitle: 'A chic and fully-furnished 2-bedroom apartment with panoramic city views... ',
        price: '$550,000',
        bedrooms: '2',
        bathrooms: '2',
        buildType: 'villa',
        details: 'Urban Oasis - Life in the Heart of the City'
    },
    {
        id: '3',
        img: 'assets/imgs/FeatiredProperties/RusticRetreatCottage.png',
        title: 'Rustic Retreat Cottage',
        subtitle: 'An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community... ',
        price: '$550,000',
        bedrooms: '3',
        bathrooms: '3',
        buildType: 'villa',
        details: "Countryside Charm - Escape to Nature's Embrace"
    },
    {
        id: '4',
        img: 'assets/imgs/FeatiredProperties/villa2.webp',
        title: 'Rustic Retreat Cottage',
        subtitle: 'An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community... ',
        price: '$550,000',
        bedrooms: '3',
        bathrooms: '3',
        buildType: 'villa',
        details: "Countryside Charm - Escape to Nature's Embrace"
    },
    {
        id: '5',
        img: 'assets/imgs/FeatiredProperties/villa3.webp',
        title: 'Rustic Retreat Cottage',
        subtitle: 'An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community... ',
        price: '$550,000',
        bedrooms: '3',
        bathrooms: '3',
        buildType: 'villa',
        details: "Countryside Charm - Escape to Nature's Embrace"
    },
];

export const initializePropertiesStorage = () => {
    if (!localStorage.getItem('properties')) {
        localStorage.setItem('properties', JSON.stringify(properties));
    }
};

export const getPropertiesFromStorage = () => {
    initializePropertiesStorage();
    const data = localStorage.getItem('properties');
    return data ? JSON.parse(data) : [];
};