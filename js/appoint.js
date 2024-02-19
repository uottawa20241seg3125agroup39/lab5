/* global $, jQuery, bootstrap */
$(document).ready(function() {
    $('#appointment-btn').on('click', function() {
        console.log('Appointment button clicked...');
    })
    $('#appoint-submit').on('click', function() {
        console.log('Appointment form submitted...');
    });
    $('#appointment-form-body').submit(function (e){
        e.preventDefault();
        appointmentNextButton();
    });
    // $('.modal').modal();
    console.log('Appointment Form Initialized...');
});

function canIUse(func){
    // function definition check code from GPT4
    return typeof  window[func] === 'function'
}

function appointmentNextButton(){
    if (canIUse('global_goPayment')){
        global_goPayment();
        return;
    }
    console.log('Cannot find uplevel function');
}