export class Person {
  constructor(birth, planet) {
    this.birth = birth
    this.planet = planet;
  }

  convertAge() {
    //returns years difference
    let today = new Date();
    let birthDate = new Date(this.birth);
    let months =  (today.getMonth() - birthDate.getMonth()) / 12;
    let ageDiff = Math.round(((today.getFullYear() - birthDate.getFullYear()) + months));
    let userAgeInSec = this.yearInSec() * ageDiff;

    return ageDiff;
  }

  yearInSec() {
    //return year in seconds
    const minsInSec = 60,
     hrInSec = minsInSec * minsInSec,
     dayInSec = hrInSec* 24,
     yrInSec = 365 * dayInSec;

    return yrInSec;
  }

  planetYear() {
    //return planet year
    let planetAge = 0;
    let earthAge = this.convertAge();
    console.log(earthAge);
    const mercury = 1 / 0.24;
    const venus = 1 / 0.62;
    const mars = 1 / 1.88;
    console.log(mars*earthAge);
    const jupiter = 1 / 11.86;

    if(this.planet === "mercury") {
       planetAge = (earthAge * mercury).toFixed(2);
       return parseFloat(planetAge);
    } else if(this.planet === "venus") {
      planetAge = (earthAge * venus).toFixed(2);
      return parseFloat(planetAge);
    } else if(this.planet === "mars") {
      planetAge = (earthAge * mars).toFixed(2);
      return parseFloat(planetAge);
    } else if(this.planet === "jupiter") {
      planetAge = (earthAge * jupiter).toFixed(2);
      return parseFloat(planetAge);
    } else {
      return earthAge;
    }
  }

}
