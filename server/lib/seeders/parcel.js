/* eslint-disable indent */
import moment from 'moment';

const parcels = [
    {
        id: 123456,
        title: 'Package #1',
        weight: 2,
        from: 'Abuja',
        name: 'John Doe',
        digit: 1234456677,
        status: 'Delivered',
        address: 'Lagos',
        price: 3000,
        createdAt: moment().format('dddd, MMMM Do YYYY, h:mm:ss a'),
        deliveredAt: moment().add(5, 'days').format('dddd, MMMM Do YYYY, h:mm:ss a'),
    },
    {
        id: 123457,
        title: 'Package #2',
        weight: 1,
        from: 'Calabar',
        name: 'Jane Doe',
        digit: 1234456677,
        status: 'In transit',
        address: 'Anambra',
        price: 1500,
        createdAt: moment().format('dddd, MMMM Do YYYY, h:mm:ss a'),
        deliveredAt: moment().add(5, 'days').format('dddd, MMMM Do YYYY, h:mm:ss a'),
    },
];

export default parcels;
