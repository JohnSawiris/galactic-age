export class Person {
  constructor(birth) {
    this.birth = birth;
  }

  covertAge() {
    let today = new Date();
    let birthDate = new Date(this.birth);
    let months =  (today.getMonth() - birthDate.getMonth()) / 12;
    console.log(`${months} months`);
    let ageDiff = (today.getFullYear() - birthDate.getFullYear()) + months;
    console.log(ageDiff);


    let userAgeInSec = this.yearInSec() * ageDiff;
    return userAgeInSec;
  }

  yearInSec() {
    const minsInSec = 60,
     hrInSec = minsInSec * minsInSec,
     dayInSec = hrInSec* 24,
     yrInSec = 365 * dayInSec;

    return yrInSec;
  }
}
