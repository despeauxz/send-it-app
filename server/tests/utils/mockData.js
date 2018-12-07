/* eslint-disable indent */
import moment from 'moment';

const currentDay = moment().format('YYYY-MM-DD');
const deliveredDay = moment().add(5, 'days').format('YYYY-MM-DD');

export default {
    currentDay,
    deliveredDay,

    createParcel: {
        createParcelDetails: {
            id: 1,
            title: 'Package #1',
            weight: 2,
            from: 'Abuja',
            name: 'John Doe',
            digit: 1234456677,
            address: 'Lagos',
            createdAt: currentDay,
            deliveredAt: deliveredDay,
        },

        invalidParcelDetails: {
            id: 6,
            from: 'Port Harcourt',
            name: 'John Doe',
            digit: 1234456677,
            address: 'Lagos',
            status: 'In transit',
            createdAt: currentDay,
        },
    },

    login: {
        existingUser: {
            email: 'email@gmail.com',
            password: 'despeauxz',
        },
        nonExistingUser: {
            email: 'email@gmail.com',
            password: 'password',
        },
    },

    signup: {
        validUserDetails: {
            firstname: 'Jane',
            lastname: 'Doe',
            username: 'Jane',
            email: 'jane@example.com',
            contactAddress: 'Lagos',
            phoneNo: 45678888,
            zipcode: 124567,
            password: 'password',
            passwordConfirm: 'password',
        },
        invalidUserDetails: {
            firstname: 'james',
            username: 'vent',
            email: 'james.com',
            contactAddress: 'Lagos',
            phoneNo: 677899765,
            zipcode: 124567,
            password: 'password',
            passwordConfirm: 'pass',
        },
    },
};
