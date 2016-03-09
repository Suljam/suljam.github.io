(function() {
  (function($) {
    $(function() {
      $('#scroller').simplyScroll({
        frameRate: 60
      });
    });
  })(jQuery);

  $(document).ready(function() {
    jQuery(window).scroll(function() {
      var threshold;
      threshold = 700;
      if (jQuery(window).scrollTop() >= 830) {
        $('.logo').addClass('active');
      } else {
        $('.logo').removeClass('active');
      }
    });
  });

  $('.showmenu').click(function() {
    $('.menus').addClass('show');
  });

  $('.menulink').click(function() {
    $('.menus').removeClass('show');
  });

}).call(this);
