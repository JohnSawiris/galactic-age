import { Person } from './../js/galactic-age.js';

describe('Person', function() {

  it('should take in birthdate and return age in earth years', function() {
    let user = new Person("11-18-1989");
    expect(user.convertAge()).toEqual('28.17');
  });

  it('should take in birthdate and planet, in this case earth return 28.17', function() {
    let user = new Person("11-18-1989", "earth");
    expect(user.planetYear()).toEqual(28.17);
  });

  it('should take in birthdate and planet, in this case mercury return 116.67', function() {
    let user = new Person("11-18-1989", "mercury");
    expect(user.planetYear()).toEqual(117.38);
  });

  it('should take in birthdate and planet, in this case venus return 45.16', function() {
    let user = new Person("11-18-1989", "venus");
    expect(user.planetYear()).toEqual(45.44);
  });

  it('should take in birthdate and planet, in this case mars return 14.89', function() {
    let user = new Person("11-18-1989", "mars");
    expect(user.planetYear()).toEqual(14.98);
  });

  it('should take in birthdate and planet, in this case jupiter return 2.36', function() {
    let user = new Person("11-18-1989", "jupiter");
    expect(user.planetYear()).toEqual(2.38);
  });

  it('should return 43.33 earth yrs for life expectancy', function() {
    let user = new Person("11-18-1989", "earth");
    expect(user.lifeExpectancy()).toEqual(43.33);
  });
});
