import { Person } from './../js/galactic-age.js';

describe('Person', function() {

  it('should take in birthdate and return age in seconds', function() {
    let user = new Person("11-18-1989");
    expect(user.convertAge()).toEqual(28);
  });

  it('should take in birthdate and planet, in this case mercury return 116.67', function() {
    let user = new Person("11-18-1989", "mercury");
    expect(user.planetYear()).toEqual(116.67);
  });

  
});
