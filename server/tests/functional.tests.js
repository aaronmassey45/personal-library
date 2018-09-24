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
  describe('example GET /api/books', function() {
    /*
    * ----[EXAMPLE TEST]----
    * Each test should completely test the response of the API end-point including response status code!
    */
    it('should receive array of books', function(done) {
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
  });

  describe('Routing tests', function() {
    describe('POST /api/books', function() {
      it('should add new book if provided title', function(done) {
        const title = 'Sharknado Facts';

        chai
          .request(server)
          .post('/api/books')
          .send({ title })
          .end(function(err, res) {
            assert.equal(res.status, 200);
            assert.property(
              res.body,
              '_id',
              'Books in array should contain _id'
            );
            assert.property(
              res.body,
              'title',
              'Books in array should contain title'
            );
            assert.equal(
              res.body.title,
              title,
              'The book title should equal the input'
            );
          });
        done();
      });

      it('should not add new book without providing title', function(done) {
        chai
          .request(server)
          .post('/api/books')
          .send({})
          .end(function(err, res) {
            assert.equal(res.status, 400);
            assert.property(res.body, 'error', 'This should cause an error');
            assert.equal(res.body.error, 'no title was provided');
          });
        done();
      });
    });

    describe('GET /api/books', function() {
      it('should receive array of books', function(done) {
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
    });

    // describe('GET /api/books/[id] => book object with [id]', function() {
    //   it('Test GET /api/books/[id] with id not in db', function(done) {
    //     //done();
    //   });

    //   it('Test GET /api/books/[id] with valid id in db', function(done) {
    //     //done();
    //   });
    // });

    // describe('POST /api/books/[id] => add comment/expect book object with id', function() {
    //   it('Test POST /api/books/[id] with comment', function(done) {
    //     //done();
    //   });
    // });
  });
});
