(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = exports.Person = function () {
  //class constructor
  function Person(birth, planet) {
    _classCallCheck(this, Person);

    this.birth = birth;
    this.planet = planet;
    this.mercury = 1 / 0.24;
    this.venus = 1 / 0.62;
    this.mars = 1 / 1.88;
    this.jupiter = 1 / 11.86;
  }

  //returns years difference


  _createClass(Person, [{
    key: "convertAge",
    value: function convertAge() {
      var today = new Date(),
          birthDate = new Date(this.birth),
          months = (today.getMonth() - birthDate.getMonth()) / 12,
          ageDiff = parseFloat(today.getFullYear() - birthDate.getFullYear() + months),
          userAgeInSec = this.yearInSec() * ageDiff;

      return ageDiff.toFixed(2);
    }

    //return year in seconds

  }, {
    key: "yearInSec",
    value: function yearInSec() {
      var minsInSec = 60,
          hrInSec = minsInSec * minsInSec,
          dayInSec = hrInSec * 24,
          yrInSec = 365 * dayInSec;

      return yrInSec;
    }
  }, {
    key: "planetYear",
    value: function planetYear() {
      //return planet year
      var planetAge = this.convertAge(),
          planet = this.planet;

      if (planet === "mercury") {
        planetAge = (planetAge * this.mercury).toFixed(2);
      } else if (planet === "venus") {
        planetAge = (planetAge * this.venus).toFixed(2);
      } else if (planet === "mars") {
        planetAge = (planetAge * this.mars).toFixed(2);
      } else if (planet === "jupiter") {
        planetAge = (planetAge * this.jupiter).toFixed(2);
      } else {
        return parseFloat(planetAge).toFixed(2);
      }
      return parseFloat(planetAge);
    }

    //life expectancy according to 2014 average 71.5 yrs

  }, {
    key: "lifeExpectancy",
    value: function lifeExpectancy() {
      var earthAvg = 71.5,
          mercuryAvg = earthAvg * this.mercury,
          venusAvg = earthAvg * this.venus,
          marsAvg = earthAvg * this.mars,
          jupiterAvg = earthAvg * this.jupiter;

      var planet = this.planet,
          ageOnPlanet = this.planetYear(),
          lifeExpectancy = 0;

      if (planet === "mercury") {
        if (ageOnPlanet > mercuryAvg) {
          return 'you\'re dead';
        } else {
          lifeExpectancy = mercuryAvg - ageOnPlanet;
        }
      } else if (planet === "venus") {
        if (ageOnPlanet > venusAvg) {
          return 'you\'re dead';
        } else {
          lifeExpectancy = venusAvg - ageOnPlanet;
        }
      } else if (planet === "mars") {
        if (ageOnPlanet > marsAvg) {
          return 'you\'re dead';
        } else {
          lifeExpectancy = marsAvg - ageOnPlanet;
        }
      } else if (planet === "jupiter") {
        if (ageOnPlanet > jupiterAvg) {
          return 'you\'re dead';
        } else {
          lifeExpectancy = jupiterAvg - ageOnPlanet;
        }
      } else {
        if (ageOnPlanet > earthAvg) {
          return 'you\'re dead';
        } else {
          lifeExpectancy = earthAvg - ageOnPlanet;
        }
      }

      return parseFloat(lifeExpectancy.toFixed(2));
    }
  }]);

  return Person;
}(); //Class ends

},{}],2:[function(require,module,exports){
'use strict';

var _galacticAge = require('./../js/galactic-age.js');

$(document).ready(function () {
  $('#result').hide();
  $('#age').submit(function (event) {
    event.preventDefault();
    var age = $('#user-age').val().toLowerCase(),
        planet = $('#planet').val().toLowerCase(),
        user = new _galacticAge.Person(age, planet);

    $('#result').fadeIn(100, function () {
      $(this).text('\n        You\'re ' + user.planetYear() + ' years old on ' + user.planet + ', and life expectancy on this planet is ' + user.lifeExpectancy() + ' years\n      ');
    });
  });
});

},{"./../js/galactic-age.js":1}]},{},[2]);
