window.onload = function() {
    var $container = $('#container-products');
    var animateCategories = false;
    var selector = '';

    $container.isotope({
        itemSelector : '.item',
    });

    // filter items when filter link is clicked
    $('#container-categories > div').click(function(){
        $('#container-categories > div > div').removeClass('active_subcategory');
        $(this).find("div").addClass('active_subcategory');
        selector = $(this).attr('data-filter');
        showProducts(selector);
        //var groupCategory = (selector == '*') ? 'all' : selector.replace(".", "");
        //$(".fancybox[cat*="+groupCategory+"]").attr('rel', groupCategory);
        return false;
    });

    function showProducts(selector) {
        $container.show();
        $container.isotope({ filter: selector });
    }

    $(".item").click(function() {
        var $target = $(this);
        $target.find("div:eq(1)").animate({
            "margin-top": "-18px"
        }, 500, function() {
            $target.find("div:eq(1) > p").show("slow");
        });
    });

    /*$('.fancybox').fancybox({
		maxWidth	: 800,
		fitToView	: true,
		autoSize	: true,
		closeClick	: false,
		openEffect	: 'elastic',
		closeEffect	: 'elastic',
        loop        : true,
        arrows : true
	});*/
}