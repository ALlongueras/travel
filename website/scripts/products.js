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
        return false;
    });

    function showProducts(selector) {
        $container.show();
        $container.isotope({ filter: selector });
    }

    $(".item").click(function() {
        var $target = $(this);
        var is_visible = $target.find("div:eq(1) > p").is(":visible");
        
        $(".item").each(function() {
            var $targeteach = $(this);
            $targeteach.find("div:eq(1)").animate({
                "margin-top": "14px"
            }, 500, function() {
                $targeteach.find("div:eq(1) > p").hide("slow");
            });
        });
        
        if(!is_visible) {
            var marginTop = ($target.find("div:eq(1)").css("margin-top") == "-18px") ? "14px" : "-18px";
            $target.find("div:eq(1)").animate({
                "margin-top": marginTop
            }, 500, function() {
                $target.find("div:eq(1) > p").show("slow");
            });
        }
    });

}