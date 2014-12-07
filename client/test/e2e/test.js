var assert = require("assert");
var should = require("should");
var $ = require("jquery");
var tos_samples = require('tos_samples');

describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    })
  })
});



describe("TOS", function(){
    describe('#reformat()', function(){
        // check each sample tos
        for(var i in tos_samples){
            var tos_set = tos_samples[i];            
            it(tos_set.name + ' - return extending TOS HTML', function(done){
                expect(tos_set.html).should.equal(tos_set.result);
                done();
            })
        }
    });
});