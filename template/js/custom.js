
jQuery(document).ready(function($) {

    "use strict";

    $('.scroltop').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: 0
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    var offset = 250;
    var duration = 300;
    var ttop= ' <a href="#" class="back-to-top"> <i class="fa fa-angle-up"></i></a> ';
    $('body').append(ttop);
    $(window).scroll(function () {
          if( window.pageYOffset > 250){
              $('.main-header ').addClass('fixed-top');
            $('body').css('padding-top',$('.main-header ').height()+'px');
        }else{
            $('body').css('padding-top','0');
            $('.main-header ').removeClass('fixed-top');
        } 
        if ($(this).scrollTop() > offset) {
            $(".back-to-top").fadeIn(duration);
        } else {

            $(".back-to-top").fadeOut(duration);
        }
    });
    $(".back-to-top").click(function (event) {
        event.preventDefault();
        $("html, body").animate({ 
            scrollTop: 0
        }, duration);
        return false;
    })


    // Home Slider

    $('#slider').flexslider({
        animation: "slide",
		rtl:window.isRtl
    }); 

    // Select Box Replacements

    $('select').selectBox({ 
        mobile: true,
        menuSpeed: 'fast'
    });

    // Accordions

    $( ".accordion" ).accordion({
        heightStyle: "content",
        collapsible: true
    });

    // Area Range

    $( "#area-range" ).slider({
        range: true,
        min: 0,
        max: 1000,
        values: [ 500, 800 ],
        slide: function( event, ui ) {
            $( "#area" ).val( ui.values[ 0 ] + " - " + ui.values[ 1 ] );
        }
    });
    $( "#area" ).val( $( "#area-range" ).slider( "values", 0 ) + " - " + $( "#area-range" ).slider( "values", 1 ) );

    // Price Range

    $( "#price-range" ).slider({
        range: true,
        min: 10000,
        max: 100000,
        values: [ 30000, 50000 ],
        slide: function( event, ui ) {
            $( "#price" ).val( ui.values[ 0 ] + " - " + ui.values[ 1 ] );
        }
    }); 
    $( "#price" ).val( $( "#price-range" ).slider( "values", 0 ) + " - " + $( "#price-range" ).slider( "values", 1 ) );

    // Checkbox Replacements
  if( jQuery().iCheck && $('input.checkbox').length > 0 ){
    $('input.checkbox').iCheck({ 
        checkboxClass: 'icheckbox_square-green',
        radioClass: 'iradio_square-green',
        increaseArea: '20%'
    });
  }
    

    // Gallery Grid
 if($('.grid') && $('.grid').length > 0){
    $('.grid').masonry({
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        percentPosition: true,
        gutter: 0
    }); 
 } 
    
 
    // Counter
if( $('.counter span') &&  $('.counter span').length > 0){ 
    $(function() { 
        var value; 
        $('.counter span').appear();
        $(document.body).on('appear', '.counter span', function(e, $affected) {
            $affected.each(function() {
                value = $(this).data('fact');
                $(this).animateNumbers( value, false, 1000, "easeOutBounce" );
            });
        });
    });
    $('.animated').appear();
}

});
 
  $(function(){
    
     
    var el = $(".social-sidebar");
    
    
     
    var tTop = parseInt(el.css('top'));
     
    $(window).scroll(function() {
   clearTimeout( $.data( this, "scrollCheck" ) );
      $.data( this, "scrollCheck", setTimeout(function() {
          if($(window).scrollTop() > tTop ){
           el.animate({
              top : $('.main-header ').height() + 5 +"px" 
            }, 150);
         }else{
           el.animate({
              top : tTop +"px"
            }, 150);
         }
      }, 100) );
    });
  });


      