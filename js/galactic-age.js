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
    let today = new Date(),
        birthDate = new Date(this.birth),
        months =  (today.getMonth() - birthDate.getMonth()) / 12,
        ageDiff = parseFloat(((today.getFullYear() - birthDate.getFullYear()) + months)),
        userAgeInSec = this.yearInSec() * ageDiff;

    return parseFloat(ageDiff.toFixed(2));
  }

  //return year in seconds
  yearInSec() {
    const minsInSec = 60,
     hrInSec = minsInSec * minsInSec,
     dayInSec = hrInSec* 24,
     yrInSec = 365 * dayInSec;

    return yrInSec;
  }

  //return planet year
  planetYear() {
    let planetAge = this.convertAge(),
        planet = this.planet;

    if(planet === "mercury") {
       planetAge = (planetAge * this.mercury);
    } else if(planet === "venus") {
      planetAge = (planetAge * this.venus);
    } else if(planet === "mars") {
      planetAge = (planetAge * this.mars);
    } else if(planet === "jupiter") {
      planetAge = (planetAge * this.jupiter);
    } else {
      parseFloat(planetAge);
    }
    return parseFloat(planetAge.toFixed(2));
  }

  // checks life expectancy on chosen planet
  checkMortality(age, agePlanet) {
    let lifeExpectancy = 0;
    if(age > agePlanet) {
      return 'you\'re dead';
    } else {
      lifeExpectancy = agePlanet - age;
      return parseFloat(lifeExpectancy.toFixed(2));
    }
  }

  //life expectancy according to 2014 average 71.5 yrs
  lifeExpectancy() {
    const earthAvg = 71.5,
          mercuryAvg = earthAvg * this.mercury,
          venusAvg = earthAvg * this.venus,
          marsAvg = earthAvg * this.mars,
          jupiterAvg = earthAvg * this.jupiter;

    let planet = this.planet,
        ageOnPlanet = this.planetYear();

    if(planet === "mercury") {
      return this.checkMortality(ageOnPlanet, mercuryAvg);
    } else if(planet === "venus") {
      return this.checkMortality(ageOnPlanet, venusAvg);
    } else if(planet === "mars") {
      return this.checkMortality(ageOnPlanet,  marsAvg);
    } else if(planet === "jupiter") {
      return this.checkMortality(ageOnPlanet, jupiterAvg);
    } else {
      return this.checkMortality(ageOnPlanet, earthAvg);
    }
  }
}//Class ends
