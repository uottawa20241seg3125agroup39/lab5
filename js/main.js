// noinspection SpellCheckingInspection

$('#document').ready(function() {
  rickroll_empty_href();
  console.log('Initialized...');
});

function rickroll_empty_href() {
  // console.log($('a[href=""], a[href=undefined], a[href="#"]'));
  $('a[href=""], a[href=undefined], a[href="#"]').each(function() {
    this.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    // console.log(a);
    // console.log($(a));
    $(this).attr('title','Try to click?').attr('target','_blank');
  })
  console.log('Rickroll set')
}