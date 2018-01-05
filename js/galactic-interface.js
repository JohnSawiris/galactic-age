import { Person } from './../js/galactic-age.js';

$(document).ready(function() {
  $('#result').hide();
  $('#age').submit(function(event) {
    event.preventDefault();
    let age = $('#user-age').val();
    let planet = $('#planet').val();
    let user = new Person(age, planet);

    $('#result').fadeIn(100, function() {
      $(this).text(`You're ${user.planetYear()} years old on ${user.planet}`);
    });
  });
});
