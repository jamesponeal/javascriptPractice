describe('square', function(){

  it('returns the square of a number', function() {
    expect(square(3)).toEqual(9);
  });

  it('returns the square of a number', function() {
    expect(square(-10)).toEqual(100);
  });

});


describe('splitSquareSum', function(){

  it('returns the sum of the squares of the digits of a number', function(){
    expect(splitSquareSum(68)).toEqual(100);
  })

  it('returns the sum of the squares of the digits of a number', function(){
    expect(splitSquareSum(2)).toEqual(4);
  })

});


describe('isHappy', function() {

  it('returns true when passed a happy number', function() {
    expect(isHappy(1)).toEqual(true);
  });

  it('returns true when passed a happy number', function() {
    expect(isHappy(68)).toEqual(true);
  });

  it('returns true when passed a happy number', function() {
    expect(isHappy(907)).toEqual(true);
  });

  it('returns false when passed an unhappy number', function() {
    expect(isHappy(2)).toEqual(false);
  });

  it('returns false when passed an unhappy number', function() {
    expect(isHappy(999)).toEqual(false);
  });

});