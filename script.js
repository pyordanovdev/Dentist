$(document).ready(function(){

    $('.js--wp-1').waypoint(function(direction){
        $('.js--wp-1').addClass('animated fadeInLeft');
    },{
        offset:'250px;'
    }); 
    $('.js--wp-2').waypoint(function(direction){
        $('.js--wp-2').addClass('animated fadeInRight');
    },{
        offset:'250px;'
    }); 
    $('.js--wp-3').waypoint(function(direction){
        $('.js--wp-3').addClass('animated fadeIn');
    },{
        offset:'250px;'
    }); 
                  
});