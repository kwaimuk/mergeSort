/* jshint esversion: 6 */
const chai = require('chai');
const expect = chai.expect;

const mergeSort = require('../mergeSort.js');

describe('mergeSort',() => {
  // it('should be a function', () =>{
  //   expect(mergeSort).to.be.a('function');
  // });

/*  it('should do a simple sort of an array of a lenth of 1',() => {
expect(mergeSort([0])).to.deep.equal([0]);
  });


  it('should do a simple sort of an array of a lenth of 2',() => {
  expect(mergeSort([3,2,4])).to.deep.equal([3,2,4]);
    });*/


  it('should do a simple sort of an array of a lenth of 5',() => {
  expect(mergeSort([3,2,4,1,8,])).to.deep.equal([1,2,3,4,8]);
    });

/*  it('should do a simple sort of an array of a lenth of 5 with duplicate numbers',() => {
  expect(mergeSort([7,7,0,-7,8])).to.deep.equal([-7,0,7,7,8]);
    });
*/
});