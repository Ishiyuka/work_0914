$(function(){
  $('td').hide();
  $('#123').on(`click`, function(){
    $(this).next('td').slideToggle();
    });
    $('#1').on(`click`, function(){
      $(this).next('td').slideToggle();
      });
      $('#2').on(`click`, function(){
        $(this).next('td').slideToggle();
        }); 
        $('#3').on(`click`, function(){
          $(this).next('td').slideToggle();
          });     
});