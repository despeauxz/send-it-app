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
        address: 'Lagos',
        status: 'Delivered',
        price: 3000,
        createdAt: moment().format('dddd, MMMM Do YYYY, h:mm:ss a'),
        deliveredAt: moment().add(5, 'days').format('dddd, MMMM Do YYYY, h:mm:ss a'),
    },
];

export default parcels;
