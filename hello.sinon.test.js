import sinon from 'sinon';
import {expect} from 'chai';

test('console.error is mocked using sinon', () => {

	let stub = sinon.stub(console, 'error');

	console.error("hejdav");
	
	expect(stub.calledOnce).to.equal(true);
	expect(stub.calledWithExactly('hejdav')).to.equal(true);
	expect(stub.alwaysCalledWithMatch('hej')).to.equal(true);
	expect(stub.alwaysCalledWithMatch('')).to.equal(true);
	
	console.error.restore();
});
