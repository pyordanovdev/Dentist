$(document).ready(function(){

    $('.js--wp-1').waypoint(function(direction){
        $('.js--wp-1').addClass('animated fadeInLeft');
    },{
        offset:'450px;'
    }); 
    $('.js--wp-2').waypoint(function(direction){
        $('.js--wp-2').addClass('animated fadeInRight');
    },{
        offset:'450px;'
    }); 
    $('.js--wp-3').waypoint(function(direction){
        $('.js--wp-3').addClass('animated fadeIn');
    },{
        offset:'250px;'
    }); 
    
    /* Navigation scroll */
    $(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
    /* For sticky nav */
    $('.section-services').waypoint(function(direction){
        if(direction=="down"){
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        } 
    }, {
        offset:'100px;'
    });
    
    
    /* Mobile NAVIGATION */
    $('.js--nav-icon').click(function(){
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        nav.slideToggle();
        
    });
    
    $('.btn-dropdown').click(function(){
        var nav1 = $('.dropdown-nav');
        var icon1 = $('.btn-dropdown i');
        nav1.slideToggle();
        if(icon1.hasClass('ion-arrow-down-b')){
            icon1.addClass('ion-arrow-up-b');
            icon1.removeClass('ion-arrow-down-b');
        }
        else{
            icon1.removeClass('ion-arrow-up-b');
            icon1.addClass('ion-arrow-down-b');
        }
    });
    
    $(window).resize(function(){

    var nav = $('.js--main-nav');

    var icon = $('.js--nav-icon i');

    if ($(window).width() > 833){

    nav.css("display", "block");

    icon.addClass('ion-close-round');

    icon.removeClass('ion-navicon-round');

    } else {

    nav.css("display", "none");

    icon.addClass('ion-navicon-round');

    icon.removeClass('ion-close-round');

    }

    });
    
    /* FOR MOBILE RESIZE ISSUE IF OCCUR ! */
    

});