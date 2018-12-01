/* eslint-disable indent */
import request from 'supertest';
import { expect } from 'chai';
import app from '../../../lib/app';

describe('Parcel Routes:', () => {
    it('should get all parcels', (done) => {
        request(app)
            .get('/api/v1/parcels')
            .end((err, res) => {
                expect(res.statusCode).to.equal(200);
                expect(res.body.data).to.be.a('array');

                if (err) return done(err);
            done();
            });
    });

    it('should get parcel by given ID', (done) => {
        request(app)
            .get('/api/v1/parcels/123456')
            .end((err, res) => {
                expect(res.statusCode).to.equal(200);
                expect(res.body).to.be.a('object');
                expect(res.body).to.include.keys('data');

                if (err) return done(err);
            done();
            });
    });

    it('should return errors for invalid ID', (done) => {
        request(app)
            .get('/api/v1/parcels/126789')
            .end((err, res) => {
                expect(res.statusCode).to.equal(404);
                expect(res.body).to.include.keys('error');
                expect(res.body.error).to.equal('Could not fetch parcel data by given ID');

                if (err) return done(err);
            done();
            });
    });
});
