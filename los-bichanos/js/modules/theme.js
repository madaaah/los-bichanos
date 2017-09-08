(function($){

    $(document).ready( function(){

        // cart support class
        if($('.caixa-cupom').length){
            $('.caixa-cupom').parents('tr').addClass('cupom-wrapper');
        }

        if($('#calculoFrete').length){
            $('#calculoFrete').parents('tr').addClass('frete-wrapper');
        }

        $("#owl-demo").owlCarousel({
          items: 1,
          loop:false,
          autoPlay : 5000,
          stopOnHover : false,
          singleItem: true,
        });

        // start slick on banner home
        if($.fn.jquery != '1.6.2'){
            $('#home-slider').slick({
              slidesToShow: 1,
              slidesToScroll: 1,
              fade: true,
              dots: true,
              arrows: false,
              autoplay: true,
              autoplaySpeed: 5000
            });
        }

    });

    // 	gifts list fix
    if($(".page-lista, .page-print_lista").length){
        $(".lista-produtos").wrapAll("<div class='wrap-gifts'></div>");
    }

    // modal login
    $('.modal-login').click(function(event) {
      event.preventDefault();
      $('tray-login').show();
    });

    $("img.lazy").lazyload({
        threshold : 200
    });

    // modal login
    $('.modal-login').click(function(event) {
      event.preventDefault();
      $('tray-login').show();
    });

})(jQuery);
/*
// menu mobile
(function(){
    var btnMenu = document.getElementsByClassName('trigger-menu')[0];
    var btnClose = document.getElementsByClassName('close-menu')[0];
    var html = document.getElementsByTagName('html')[0];
    var backdropMobile = document.getElementsByClassName('menu-mobile-backdrop')[0];

    btnMenu.addEventListener('touchstart', function(){
        html.classList.add('menu-open');
    });

    html.addEventListener('touchstart', function(e){
        if(e.target == backdropMobile){
            this.className = this.className.replace(new RegExp('(^|\\b)' + 'menu-open'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }

        if(e.target == btnClose){
            this.className = this.className.replace(new RegExp('(^|\\b)' + 'menu-open'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
    });
})();*/
