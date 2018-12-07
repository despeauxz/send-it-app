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

            done();
            });
    });

    it('should get parcel by given slug', (done) => {
        request(app)
            .get('/api/v1/parcels/ouDZ2lRvjB1o')
            .end((err, res) => {
                expect(res.statusCode).to.equal(200);
                expect(res.body).to.be.a('object');
                expect(res.body).to.include.keys('data');

            done();
            });
    });

    it('should return errors for invalid slug', (done) => {
        request(app)
            .get('/api/v1/parcels/ouDZ2lRvss1o')
            .end((err, res) => {
                expect(res.statusCode).to.equal(404);
                expect(res.body).to.include.keys('error');
                expect(res.body.error).to.equal('Could not fetch parcel data by given Slug');

            done();
            });
    });
});
