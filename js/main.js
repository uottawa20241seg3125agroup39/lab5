// noinspection SpellCheckingInspection

$('#document').ready(function() {
  rickroll_empty_href();
  set_popup_a();
  load_appt_form();
  load_payment_form();
  console.log('Initialized...');
});

function rickroll_empty_href() {
  // console.log($('a[href=""], a[href=undefined], a[href="#"]'));
  $('a[href=""], a[href=undefined], a[href="#"]').each(function() {
    this.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    // console.log(a);
    // console.log($(a));
    $(this).attr('title','Try to click?');
  })
  console.log('Rickroll set')
}

function set_popup_a(){
    $('a').each(function() {
        $(this).attr('target', '_blank');
    })
    console.log('Popup set')
}

function load_appt_form(){
  $('#appt-modal').ready(function() {
    $.ajax({
        url:'appointment.html',
        type:'GET',
        dataType:'html',
        success:function(data){
            let code=$(data).find('#modal-appointment');
            $('#appt-modal').html(code);
            console.log('Appointment Form Loaded');
        },
        error:function(){
          $('#appt-modal').html('<div class="alert alert-danger" role="alert">Error loading appointment form. Refresh your page or contact the IT.</div>');
            console.log('Error loading Appointment Form');
        },
        complete:function(){
        $('.appt-btn').each(function() {
          // $(this).ready(function() {
            // $(this).data('toggle','modal').data('target','#appt-modal');
            // console.log($(this).data())
            $(this).attr('data-toggle','modal').attr('data-target','#appt-modal');
            // $(this).html('test')
          // })
        })
          console.log('Appointment button set')
      },
    })
  })
}

function load_payment_form(){
  $('#payment-modal').ready(function() {
    $.ajax({
        url:'payment.html',
        type:'GET',
        dataType:'html',
        success:function(data){
            let code=$(data).find('#modal-payment');
            $('#payment-modal').html(code);
            console.log('Payment Form Loaded');
        },
        error:function(){
          $('#payment-modal').html('<div class="alert alert-danger" role="alert">Error loading payment form. Refresh your page or contact the IT.</div>');
            console.log('Error loading Payment Form');
        },
        complete:function(){
          $('#payment-modal-not-load-warning').remove();
        },
    })
  })
}

function global_goPayment(){
    $('#appt-modal').modal('hide');
    $('#payment-modal').modal('show');
    console.log('Go Payment Modal');
}

function global_paymentGoBack(){
    $('#payment-modal').modal('hide');
    $('#appt-modal').modal('show');
    console.log('Go Appointment Modal');
}