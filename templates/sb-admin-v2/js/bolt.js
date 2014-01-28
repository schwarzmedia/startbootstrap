$(function() {

    $('#side-menu').metisMenu();

});

/*!
 *
 *  Offcanvas / Copyright (c) David Bushell | http://dbushell.com/
 *
 */
$(function() {

    window.App = (function()
    {

        var _init = false, app = { };

        app.init = function()
        {
            if (_init) {
                return;
            }
            _init = true;

            var nav_open = false,
                $inner = $('#inner-wrap');

            $('button.navbar-toggle').on('click', function()
            {
                if (!nav_open) {
                    //$inner.animate({ left: '70%' }, 500);
                    nav_open = true;
                    console.log('open..');
                    $('html').addClass('js-nav');
                    return false;
                }else{
                  // $inner.animate({ left: '0' }, 500);
                    nav_open = false;
                    console.log('sluit..');
                    $('html').removeClass('js-nav');
                    return false;
				}
            });

            $(document.documentElement).addClass('js-ready');
        };

        return app;

    })();

	window.App.init();
});