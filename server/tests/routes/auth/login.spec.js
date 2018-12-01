/* eslint-disable no-undef */
/* eslint-disable consistent-return */
/* eslint-disable indent */
import request from 'supertest';
import { expect } from 'chai';
import app from '../../../lib/app';
import mockData from '../../utils/mockData';

const { existingUser, nonExistingUser } = mockData.login;

describe('Login Routes', () => {
    it('should sign in a user into the app and returns user + token', (done) => {
        request.agent(app)
            .post('/api/v1/auth/login')
            .send({ ...existingUser })
            .end((err, res) => {
                expect(res.statusCode).to.equal(200);
                expect(res.body).to.be.an('object');
                expect(res.body).to.include.keys('token');
                expect(res.body.user.email).to.equal('email@gmail.com');

                if (err) return done(err);
            done();
            });
    });

    it('should not sign in a user that does not exist', (done) => {
        request.agent(app)
            .post('/api/v1/auth/login')
            .send({ ...nonExistingUser })
            .end((err, res) => {
                expect(res.statusCode).to.equal(401);
                expect(res.body).to.be.an('object');
                expect(res.body.error).to.equal('Invalid Credentials');

                if (err) return done(err);
            done();
            });
    });

    it('should not sign in an user existing user with a wrong password', (done) => {
        request.agent(app)
            .post('/api/v1/auth/login')
            .send({ ...nonExistingUser, password: 'password' })
            .end((err, res) => {
                expect(res.statusCode).to.equal(401);
                expect(res.body).to.be.an('object');
                expect(res.body.error).to.equal('Invalid Credentials');

                if (err) return done(err);
            done();
            });
    });
});
