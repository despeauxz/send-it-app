/* eslint-disable indent */
import { expect, assert } from 'chai';
import sinon from 'sinon';
import TrimValues from '../../lib/middlewares/TrimValues';

const req = {
    body: {
        one: '   ball',
        two: 'king   ',
    }
};

const res = {
    json: message => ({ message }),
    status: status => ({
        json: message => ({ status, message }),
    }),
};

const next = sinon.spy();

describe('Trim Values', () => {
    it('should return trimmed values', () => {
        TrimValues.trim(req, res, next);

        expect(req.body).to.deep.equal({
            one: 'ball',
            two: 'king',
        });
        assert(next.called);
    });
});