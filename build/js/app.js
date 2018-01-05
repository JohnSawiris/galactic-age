(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = exports.Person = function () {
  function Person(birth, planet) {
    _classCallCheck(this, Person);

    this.birth = birth;
    this.planet = planet;
  }

  _createClass(Person, [{
    key: "convertAge",
    value: function convertAge() {
      //returns years difference
      var today = new Date();
      var birthDate = new Date(this.birth);
      var months = (today.getMonth() - birthDate.getMonth()) / 12;
      var ageDiff = Math.round(today.getFullYear() - birthDate.getFullYear() + months);
      var userAgeInSec = this.yearInSec() * ageDiff;

      return ageDiff;
    }
  }, {
    key: "yearInSec",
    value: function yearInSec() {
      //return year in seconds
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
      var planetAge = 0;
      var earthAge = this.convertAge();
      console.log(earthAge);
      var mercury = 1 / 0.24;
      var venus = 1 / 0.62;
      var mars = 1 / 1.88;
      console.log(mars * earthAge);
      var jupiter = 1 / 11.86;

      if (this.planet === "mercury") {
        planetAge = (earthAge * mercury).toFixed(2);
        return parseFloat(planetAge);
      } else if (this.planet === "venus") {
        planetAge = (earthAge * venus).toFixed(2);
        return parseFloat(planetAge);
      } else if (this.planet === "mars") {
        planetAge = (earthAge * mars).toFixed(2);
        return parseFloat(planetAge);
      } else if (this.planet === "jupiter") {
        planetAge = (earthAge * jupiter).toFixed(2);
        return parseFloat(planetAge);
      } else {
        return earthAge;
      }
    }
  }]);

  return Person;
}();

},{}],2:[function(require,module,exports){
'use strict';

var _galacticAge = require('./../js/galactic-age.js');

$(document).ready(function () {});

},{"./../js/galactic-age.js":1}]},{},[2]);