import { Person } from './../js/galactic-age.js';

$(document).ready(function() {
  $('#result').hide();
  $('#age').submit(function(event) {
    event.preventDefault();
    let age = $('#user-age').val().toLowerCase(),
        planet = $('#planet').val().toLowerCase(),
        user = new Person(age, planet);

    $('#result').fadeIn(100, function() {
      $(this).text(`
        You're ${user.planetYear()} years old on ${user.planet}, and life expectancy on this planet is ${user.lifeExpectancy()} years
      `);
    });
  });
});
