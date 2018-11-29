/* eslint-disable indent */
import request from 'supertest';
import { expect } from 'chai';
import app from '../../../lib/app';


describe('Parcel Routes: Edit parcel details', () => {
    it('should cancel and change parecl status', (done) => {
        request(app)
            .put('/api/v1/parcels/123456/cancel')
            .set('Accept', 'application/json')
            .send({ status: 'Canceled' })
            .end((err, res) => {
                expect(res.statusCode).to.equal(200);
                expect(res.body).to.be.a('object');

                if (err) return done(err);
            done();
            });
    });

    it('should return errors for invalid parcel ID', (done) => {
        request(app)
            .put('/api/v1/parcels/125678/cancel')
            .set('Accept', 'application/json')
            .send({ status: 'Canceled' })
            .end((err, res) => {
                expect(res.statusCode).to.equal(404);
                expect(res.body).to.be.a('object');
                expect(res.body).to.include.keys('error');

                if (err) return done(err);
            done();
            });
    });
});
