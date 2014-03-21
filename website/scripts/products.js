window.onload = function() {
    var $container = $('#container-products');
    var animateCategories = false;

    $container.isotope({
        itemSelector : '.item',
    });

    // filter items when filter link is clicked
    $('#container-categories > div').click(function(){
        var selector = $(this).attr('data-filter');
        if(!animateCategories) {
            $('#container-categories > div').animate({
                'height': '25px',
                'margin-left': '0px',
                'margin-right': '0px'
            }, 1000,function() {
                animateCategories = true;
                showProducts(selector);    
            });
        }else {
            showProducts(selector);
        }
        return false;
    });

    function showProducts(selector) {
        $container.show();
        $container.isotope({ filter: selector });
    }

    $('.item').click(function() {
        var product_id = $(this).attr("id");
        $('#container-description-products > div').hide();
        $('.description-product-' + product_id).fadeIn("slow");
    });
}