let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../routes/index");

chai.should();
chai.use(chaiHttp);

describe('Task API', () =>{

  //Get routes
  describe("GET /mahasiswa", () => {
   
    it("it should GET all the mahasiswa", (done) => {
      chai.request(server)
          .get("/mahasiswa")
          .end((err, response) => {
            response.should.have.status(200);
          })
          done();
    })

    it("it should fail GET all the mahasiswa", (done) => {
      chai.request(server)
          .get("/mahasiswa")
          .end((err, response) => {
            response.should.have.status(404);
          })
          done();
    })
  })

})
