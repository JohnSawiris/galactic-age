export class Person {
  constructor(birth) {
    this.birth = birth;
  }

  covertAge() {
    let today = new Date();
    let birthDate = new Date(this.birth);
    let months =  (today.getMonth() - birthDate.getMonth()) / 12;
    let ageDiff = parseFloat(((today.getFullYear() - birthDate.getFullYear()) + months).toFixed(1));
    let userAgeInSec = this.yearInSec() * ageDiff;

    return ageDiff;
  }

  yearInSec() {
    const minsInSec = 60,
     hrInSec = minsInSec * minsInSec,
     dayInSec = hrInSec* 24,
     yrInSec = 365 * dayInSec;

    return yrInSec;
  }
}
