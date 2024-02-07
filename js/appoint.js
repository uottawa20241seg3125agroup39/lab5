/* global $, jQuery, bootstrap */
$(document).ready(function() {
    $('#appointment-btn').on('click', function() {
        console.log('Appointment button clicked...');
    })
    $('#appoint-submit').on('click', function() {
        console.log('Appointment form submitted...');
    });
    // $('.modal').modal();
    console.log('Appointment Form Initialized...');
});