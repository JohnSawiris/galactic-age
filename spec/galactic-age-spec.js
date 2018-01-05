import { Person } from './../js/galactic-age.js';
describe('Person', function() {
  it('should retrun the user\'s age', function() {
    var user = new Person(20);
    expect(user.covertAge()).toEqual(20);
  });
});
