import { Person } from './../js/galactic-age.js';
describe('Person', function() {

  it('should take in birthdate and return age in seconds', function() {
    let user = new Person("11-18-1989");
    expect(user.covertAge()).toEqual(25.2);
  });
});
