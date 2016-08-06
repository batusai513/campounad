'use strict';

(function(){
  $('.js-modal-evento').magnificPopup({
    type: 'inline',
    items: {
      src: '#modal-suscripcion'
    }
  });

  $('.js-open-menu').on('click', function(e){
    e.preventDefault();
    var $sidebar = $('.js-sidebar');
    var $el = $(this);
    $sidebar.toggleClass('is-active');
    $el.toggleClass('is-active');
  });

})();
