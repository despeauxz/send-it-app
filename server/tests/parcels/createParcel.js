import request from 'supertest';
import moment from 'moment';
import { expect } from 'chai';
import app from '../../lib/app';

const parcel = {
    id: 123456,
    title: 'Package #1',
    weight: 2,
    from: 'Abuja',
    receiver: {
        name: 'Malik Godwin',
        digit: 1234456677,
        address: 'Lagos',
    },
    status: 'Delivered',
    createdAt: moment().format('dddd, MMMM Do YYYY, h:mm:ss a'),
    deliveredAt: moment().add(5, 'days').format('dddd, MMMM Do YYYY, h:mm:ss a'),
};

describe('Parcel Routes: Add new parcels', () => {
    it('should add a new parcel', (done) => {
        request(app)
            .post('/api/v1/parcels')
            .send(parcel)
            .end((err, res) => {
                expect(res.statusCode).to.equal(201);
                expect(res.body.data).to.include.keys('id');
                expect(res.body.data.title).to.equal('Package #1');

                if (err) return done(err);
            done();
            });
    });
});
