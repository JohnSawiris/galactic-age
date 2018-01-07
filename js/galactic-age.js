export class Person {
  //class constructor
  constructor(birth, planet) {
    this.birth = birth;
    this.planet = planet;
    this.mercury = 1 / 0.24;
    this.venus = 1 / 0.62;
    this.mars = 1 / 1.88;
    this.jupiter = 1 / 11.86;
  }

  //returns years difference
  convertAge() {
    let today = new Date();
    let birthDate = new Date(this.birth);
    let months =  (today.getMonth() - birthDate.getMonth()) / 12;
    let ageDiff = parseFloat(((today.getFullYear() - birthDate.getFullYear()) + months));
    let userAgeInSec = this.yearInSec() * ageDiff;

    return ageDiff.toFixed(2);
  }

  //return year in seconds
  yearInSec() {
    const minsInSec = 60,
     hrInSec = minsInSec * minsInSec,
     dayInSec = hrInSec* 24,
     yrInSec = 365 * dayInSec;

    return yrInSec;
  }

  planetYear() {
    //return planet year
    let planetAge = this.convertAge();
    let planet = this.planet;

    if(planet === "mercury") {
       planetAge = (planetAge * this.mercury).toFixed(2);
    } else if(planet === "venus") {
      planetAge = (planetAge * this.venus).toFixed(2);
    } else if(planet === "mars") {
      planetAge = (planetAge * this.mars).toFixed(2);
    } else if(planet === "jupiter") {
      planetAge = (planetAge * this.jupiter).toFixed(2);
    } else {
      return parseFloat(planetAge).toFixed(2);
    }
    return parseFloat(planetAge);
  }

  //life expectancy according to 2014 average 71.5 yrs
  lifeExpectancy() {
    const earthAvg = 71.5;
    const mercuryAvg = earthAvg * this.mercury;
    const venusAvg = earthAvg * this.venus;
    const marsAvg = earthAvg * this.mars;
    const jupiterAvg = earthAvg * this.jupiter;

    console.log(mercuryAvg.toFixed(2));

    let planet = this.planet;
    let ageOnPlanet = this.planetYear();
    let lifeExpectancy = 0;

    console.log(ageOnPlanet);

    if(planet === "mercury") {
      if(ageOnPlanet > mercuryAvg) {
        return 'you\'re dead';
      } else {
        lifeExpectancy = mercuryAvg - ageOnPlanet;
      }
    } else if(planet === "venus") {
      if(ageOnPlanet > venusAvg) {
        return 'you\'re dead';
      } else {
        lifeExpectancy = venusAvg - ageOnPlanet;
      }
    } else if(planet === "mars") {
      if(ageOnPlanet > marsAvg) {
        return 'you\'re dead';
      } else {
        lifeExpectancy = marsAvg - ageOnPlanet;
      }
    } else if(planet === "jupiter") {
      if(ageOnPlanet > jupiterAvg) {
        return 'you\'re dead';
      } else {
        lifeExpectancy = jupiterAvg - ageOnPlanet;
      }
    } else {
      if(ageOnPlanet > earthAvg) {
        return 'you\'re dead';
      } else {
        lifeExpectancy = earthAvg - ageOnPlanet;
      }
    }

    console.log(lifeExpectancy);
    return parseFloat(lifeExpectancy.toFixed(2));
  }

}//Class ends
