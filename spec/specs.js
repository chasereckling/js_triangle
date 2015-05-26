describe('triangle', function(){

  it("determine if it is a equalateral triangle", function(){
    expect(triangle(5, 5, 5)).to.equal("It is an equalateral triangle");
  });

  it('determine if it is a isosceles triangle', function(){
    expect(triangle(4, 4, 6)).to.equal("It is an isoscles triangle");
  });

  it('determine if it is not a triangle', function(){
    expect(triangle(2, 2, 8)).to.equal("It is not a triangle");
  });

  it('determine if it is a scalene triangle', function(){
    expect(triangle(2, 4, 6)).to.equal('It is a scalene triangle');
  });

});
