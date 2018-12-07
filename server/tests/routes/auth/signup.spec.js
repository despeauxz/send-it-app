/* eslint-disable no-undef */
/* eslint-disable consistent-return */
/* eslint-disable indent */
import request from 'supertest';
import { expect } from 'chai';
import app from '../../../lib/app';
import mockData from '../../utils/mockData';

const { validUserDetails, invalidUserDetails } = mockData.signup;

describe('Signup Routes', () => {
    it('should register a new user and return user data + token', (done) => {
        request.agent(app)
            .post('/api/v1/auth/signup')
            .send({ ...validUserDetails })
            .end((err, res) => {
                expect(res.statusCode).to.equal(201);
                expect(res.body).to.be.an('object');
                expect(res.body).to.include.keys('token');
                expect(res.body.user.email).to.equal('jane@example.com');

            done();
            });
    });

    it('should return validation errors for invalid fields', (done) => {
        request.agent(app)
            .post('/api/v1/auth/signup')
            .send({ ...invalidUserDetails })
            .end((err, res) => {
                expect(res.statusCode).to.equal(400);
                expect(res.body).to.be.an('object');
                expect(res.body.errors.lastname.msg).to.equal('Last name field is required');
                expect(res.body.errors.email.msg).to.equal('Please fill in a valid email');
                expect(res.body.errors.passwordConfirm.msg).to.equal('Passwords don\'t match');

            done();
            });
    });
});
