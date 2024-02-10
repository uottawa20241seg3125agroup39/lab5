// noinspection SpellCheckingInspection

$('#document').ready(function() {
  rickroll_empty_href();
  set_popup_a();
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