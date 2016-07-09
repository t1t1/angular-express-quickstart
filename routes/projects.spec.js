var app = require("../app.js");
var supertest = require("supertest");
var request = supertest(app);

describe('Projects Test', () => {
    describe('GET /projects', () => {
        it('shoud return project list', function(done) {
            request.get("/projects").expect(200, {
                data: [{id:1, name: "work2"}]
            }, done); // move done()
        });
    });
});