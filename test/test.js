var supertest = require("supertest");
var expect = require("chai").expect;
var should = require("should");

// This agent refers to PORT where program is runninng.

var server = supertest.agent("http://localhost:9090");

// UNIT test begin

describe("REST-API unit test",function(){
	
	it("Test home status",function(done){

    // calling home page api
    server
    .get("/")
    .expect("Content-type",/json/)
    .expect(200) // THis is HTTP response
    .end(function(err,res){
      // HTTP status should be 200
      res.status.should.equal(200);
      res.body.Message.should.equal("Server status is RUNNING !!!");
      done();
  });
});

//------- TO RUN THIS TEST PLEASE EDIT THE 'cartList.length expexcted result' BASED ON DATA SIZE ON YOUR DATABASE
	it("Test get method in api cart",function(done){

    // calling cart api
    server
    .get("/cart")
    .expect("Content-type",/json/)
    .expect(200) // THis is HTTP response
    .end(function(err,res){
      // HTTP status should be 200
      res.status.should.equal(200);      
      expect(res.body.cartList.length).to.equal(3);
      done();
  });
});

	it("Test post method in api cart",function(done){

    // calling cart api
    server
    .post("/cart")
    .send({
    	"name":"jam tangan",
    	"size":"L",
    	"color":"biru",
    	"price":350000,
    	"discount":"15%"
    })
    .expect("Content-type",/json/)
    .expect(200) // THis is HTTP response
    .end(function(err,res){
      // HTTP status should be 200
      res.status.should.equal(200);      
      res.body.Message.should.equal("Data Added Successfully");
      done();
  });
});

//------- TO RUN THIS TEST PLEASE EDIT THE 'ID' VALUE BASED ON ID WHICH EXIST ON YOUR DATABASE
    // it("Test delete method in api cart",function(done){
    // calling cart api
//     server
//     .delete("/cart")
//     .send({
//     	"id":"22"
//     })
//     .expect("Content-type",/json/)
//     .expect(200) // THis is HTTP response
//     .end(function(err,res){
//       // HTTP status should be 200
//       res.status.should.equal(200);      
//       res.body.Message.should.equal("Delete data with id 22");
//       done();
//   });
// });

    it("Test delete branch condition method in api cart",function(done){

    // calling cart api
    server
    .delete("/cart")
    .send({
    	"id":"122"
    })
    .expect("Content-type",/json/)
    .expect(200) // THis is HTTP response
    .end(function(err,res){
      // HTTP status should be 200
      res.status.should.equal(200);      
      res.body.Message.should.equal("Data not found");
      done();
  });
});


});