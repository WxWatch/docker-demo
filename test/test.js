var request = require('supertest')
var app = require('../index.js')

describe('GET /', function() {
    it('repsond with Hello Docker Hub CI', function(done) {
        request(app)
            .get('/')
            .expect('Hello Docker Hub CI', done);
    });
});