(function($) {
    
    function navbarControl() {
        $('.navbar').on('click', '.nav-toggle a', function(e) {
            var $this = $(this),
                $parent = $this.parent();
            $parent.toggleClass('open');
            if ($parent.hasClass('open')) {
                $this.parents('.navbar').find('.nav').addClass('show');
            } else {
                $this.parents('.navbar').find('.nav').removeClass('show');
            }
            e.preventDefault();
        });
        $('#header').fixedsticky();
        $(window).on('load resize', function() {
          var navHeight = $('body').css('height', '100%').height();
          $('#header').height(navHeight);
          $('body').css('height', 'auto');
        });
    }

    function beforeLoad() {
        navbarControl();
    }

    function onReady() {
      FastClick.attach('#header');
    }

    $(onReady);
    beforeLoad();
})(jQuery);
