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

  it('should take in birthdate and planet, in this case venus return 45.16', function() {
    let user = new Person("11-18-1989", "venus");
    expect(user.planetYear()).toEqual(45.16);
  });

  it('should take in birthdate and planet, in this case mars return 14.89', function() {
    let user = new Person("11-18-1989", "mars");
    expect(user.planetYear()).toEqual(14.89);
  });

  it('should take in birthdate and planet, in this case jupiter return 2.36', function() {
    let user = new Person("11-18-1989", "jupiter");
    expect(user.planetYear()).toEqual(2.36);
  });
});
