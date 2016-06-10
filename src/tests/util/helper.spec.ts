
import * as chai from 'chai';
let expect = chai.expect;
import {generateGuid} from '../../util/helper';

describe('Helper Util', function() {
    describe('generateGuid function', () => {

        it('should generate a unique id every time', () => {
            let id1 = generateGuid();
            let id2 = generateGuid();

            expect(id1).not.to.equal(id2);
        });

        it('should generate a unique id that is a string', () => {
            let id1 = generateGuid();
            expect(id1).to.be.a('string');
        });

    });
});