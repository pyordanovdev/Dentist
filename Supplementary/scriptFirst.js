$(document).ready(function(){
  $('.first').click(function() {
      $('.box-first').addClass('show animated fadeIn');
      $('.box-second').removeClass('show');
      $('.box-third').removeClass('show');
  });  
    $('.second').click(function() {
      $('.box-second').addClass('show animated fadeIn');
        $('.box-first').removeClass('show');
        $('.box-third').removeClass('show');
  }); 
    $('.third').click(function() {
      $('.box-third').addClass('show animated fadeIn');
        $('.box-second').removeClass('show');
        $('.box-first').removeClass('show');
  }); 
    
});