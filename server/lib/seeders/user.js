/* eslint-disable indent */
import moment from 'moment';

const user = [
        {
                id: 1,
                firstname: 'John',
                lastname: 'Doe',
                username: 'Maverick',
                email: 'email@gmail.com',
                contactAddress: 'Lagos',
                phoneNo: 12345566,
                zipcode: 101421,
                password: '$2b$10$Iw9kFywOd.D7hEcIR74Tf.xM.8sZpDxQTEYnkqOCO9Dm.WdUhnKT6',
                createdAt: moment().format('dddd, MMMM Do YYYY, h:mm:ss a'),
        },
        {
                id: 2,
                firstname: 'Jane',
                lastname: 'Doe',
                username: 'Janet J',
                email: 'jane@gmail.com',
                contactAddress: 'Port Harcourt',
                phoneNo: 1234534,
                zipcode: 100421,
                password: '$2b$10$Iw9kFywOd.D7hEcIR74Tf.xM.8sZpDxQTEYnkqOCO9Dm.WdUhnKT6',
                createdAt: moment().format('dddd, MMMM Do YYYY, h:mm:ss a'),
        },
];

export default user;
