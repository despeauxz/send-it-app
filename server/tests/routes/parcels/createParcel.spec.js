/* eslint-disable no-undef */
/* eslint-disable consistent-return */
/* eslint-disable indent */
import request from 'supertest';
import { expect } from 'chai';
import mockData from '../../utils/mockData';
import app from '../../../lib/app';

const { createParcelDetails, invalidParcelDetails } = mockData.createParcel;


describe('Parcel Routes: Add new parcels', () => {
    it('should add a new parcel', (done) => {
        request(app)
            .post('/api/v1/parcels')
            .set('Accept', 'application/json')
            .send({ ...createParcelDetails })
            .end((err, res) => {
                expect(res.statusCode).to.equal(201);
                expect(res.body).to.be.a('object');

                if (err) return done(err);
            done();
            });
    });

    it('should check for some required params', (done) => {
        request(app)
            .post('/api/v1/parcels')
            .set('Accept', 'application/json')
            .send({ ...createParcelDetails })
            .end((err, res) => {
                expect(res.statusCode).to.equal(201);
                expect(res.body.data).to.include.keys('title');
                expect(res.body.data).to.include.keys('weight');
                expect(res.body.data).to.include.keys('name');
                expect(res.body.data).to.include.keys('digit');
                expect(res.body.data).to.include.keys('address');


                if (err) return done(err);
            done();
            });
    });

    it('should return errors for invalid fields', (done) => {
        request(app)
            .post('/api/v1/parcels')
            .set('Accept', 'application/json')
            .send({ ...invalidParcelDetails })
            .end((err, res) => {
                expect(res.statusCode).to.equal(400);
                expect(res.body).to.be.a('object');
                expect(res.body).to.include.keys('errors');

                if (err) return done(err);
            done();
            });
    });

    it('should return error of missing title field', (done) => {
        request(app)
            .post('/api/v1/parcels')
            .set('Accept', 'application/json')
            .send({ ...invalidParcelDetails })
            .end((err, res) => {
                expect(res.statusCode).to.equal(400);
                expect(res.body.errors).to.include.keys('title');
            done();    
            });
    });
});
