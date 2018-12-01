/* eslint-disable indent */
import moment from 'moment';

const currentDay = moment().format('YYYY-MM-DD');
const deliveredDay = moment().add(5, 'days').format('YYYY-MM-DD');

export default {
    currentDay,
    deliveredDay,

    createParcel: {
        createParcelDetails: {
            id: 123456,
            title: 'Package #1',
            weight: 2,
            from: 'Abuja',
            name: 'John Doe',
            digit: 1234456677,
            address: 'Lagos',
            status: 'In transit',
            price: 5000,
            createdAt: currentDay,
            deliveredAt: deliveredDay,
        },

        invalidParcelDetails: {
            id: 67576,
            from: 'Port Harcourt',
            name: 'John Doe',
            digit: 1234456677,
            address: 'Lagos',
            status: 'In transit',
            price: 2000,
            createdAt: currentDay,
            deliveredAt: deliveredDay,
        },
    },
};
