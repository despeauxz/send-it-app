import request from 'supertest';
import { expect } from 'chai';
import app from '../../lib/app';

describe('Parcel Routes: Get all parcels', () => {
    it('should get all parcels', (done) => {
        request(app)
            .get('/api/v1/parcels')
            .end((err, res) => {
                expect(res.statusCode).to.equal(200);
                expect(res.body.data).to.be.a('array');
            done();
            });
    });
});

