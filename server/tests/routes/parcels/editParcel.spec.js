/* eslint-disable indent */
import request from 'supertest';
import { expect } from 'chai';
import app from '../../../lib/app';


describe('Parcel Routes: Edit parcel details', () => {
    it('should cancel and change parecl status', (done) => {
        request(app)
            .put('/api/v1/parcels/ouDZ2lRvjB1o/cancel')
            .set('Accept', 'application/json')
            .send({ status: 'Canceled' })
            .end((err, res) => {
                expect(res.statusCode).to.equal(200);
                expect(res.body).to.be.a('object');

            done();
            });
    });
});
