/* eslint-disable indent */
import { expect } from 'chai';
import notEmpty from '../../lib/helpers/notEmpty';

describe('notEmpty', () => {
    it('should throw an error if empty', (done) => {
        expect(() => notEmpty('', 'string field cannot be left blank')).to.throw('string field cannot be left blank');

    done();
    });

    it('should rteurn true when vaue is not empty', (done) => {
        const check = notEmpty('berry', 'string field cannot be left blank');

        expect(check).to.equal(true);
    done();
    });
});