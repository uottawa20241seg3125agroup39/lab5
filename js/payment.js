$(document).ready(function(){

    $('#submitPayment').click(payment_placeOrderButton);


    console.log('payment modal loaded...');
})



function payment_placeOrderButton(){
    console.log('Place Order button clicked...');
    let form=$('#paymentForm');
    form.addClass('was-validated');
    // form.validate();
    // form.submit();
}