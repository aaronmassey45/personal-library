/*
*
*
*       FILL IN EACH FUNCTIONAL TEST BELOW COMPLETELY
*       -----[Keep the tests in the same order!]-----
*
*/

const chaiHttp = require('chai-http');
const chai = require('chai');
const assert = chai.assert;
const server = require('../index');
const { populateBooks } = require('./seed-data');

chai.use(chaiHttp);

beforeEach(populateBooks);

describe('Functional Tests', function() {
  /*
  * ----[EXAMPLE TEST]----
  * Each test should completely test the response of the API end-point including response status code!
  */
  it('#example Test GET /api/books', function(done) {
    chai
      .request(server)
      .get('/api/books')
      .end(function(err, res) {
        assert.equal(res.status, 200);
        assert.isArray(res.body, 'response should be an array');
        assert.property(
          res.body[0],
          'commentcount',
          'Books in array should contain commentcount'
        );
        assert.property(
          res.body[0],
          'title',
          'Books in array should contain title'
        );
        assert.property(
          res.body[0],
          '_id',
          'Books in array should contain _id'
        );
        done();
      });
  });
  /*
  * ----[END of EXAMPLE TEST]----
  */

  // describe('Routing tests', function() {
  //   describe('POST /api/books with title => create book object/expect book object', function() {
  //     it('Test POST /api/books with title', function(done) {
  //       //done();
  //     });

  //     it('Test POST /api/books with no title given', function(done) {
  //       //done();
  //     });
  //   });

  //   describe('GET /api/books => array of books', function() {
  //     it('Test GET /api/books', function(done) {
  //       //done();
  //     });
  //   });

  //   describe('GET /api/books/[id] => book object with [id]', function() {
  //     it('Test GET /api/books/[id] with id not in db', function(done) {
  //       //done();
  //     });

  //     it('Test GET /api/books/[id] with valid id in db', function(done) {
  //       //done();
  //     });
  //   });

  //   describe('POST /api/books/[id] => add comment/expect book object with id', function() {
  //     it('Test POST /api/books/[id] with comment', function(done) {
  //       //done();
  //     });
  //   });
  // });
});