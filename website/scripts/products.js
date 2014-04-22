window.onload = function () {
    var $container = $('#container-products');
    var animateCategories = false;
    var selector = '';

    $container.isotope({
        itemSelector: '.item',
        resizesContainer: true
    });

    // filter items when filter link is clicked
    $('#container-categories > div').click(function () {
        $('#container-categories > div > div').removeClass('active_subcategory');
        
        $(".item > div").removeClass('active_subcategory');
        $(".item > div > h2").removeClass('active_product');

        $(this).find("div:eq(0)").addClass('active_subcategory');
        selector = $(this).attr('data-filter');
        showProducts(selector);

        $(".item").each(function () {
            var $targeteach = $(this);
            $targeteach.find("div:eq(1)").animate({
                "margin-top": "11px"
            }, 500, function () {
                $targeteach.find("div:eq(1) > p").fadeOut("slow", function () {
                    $container.isotope('reLayout');
                });

            });
        });
        return false;
    });

    function showProducts(selector) {
        $container.show();
        $container.isotope({ filter: selector });
    }

    $(".item").click(function () {
        var $target = $(this);
        var is_visible = $target.find("div:eq(1) > p").is(":visible");
        $(".item > div").removeClass('active_subcategory');
        $(".item > div > h2").removeClass('active_product');

        $(".item").each(function () {
            var $targeteach = $(this);
            $targeteach.find("div:eq(1)").animate({
                "margin-top": "11px"
            }, 500, function () {
                $targeteach.find("div:eq(1) > p").fadeOut("slow", function () {
                    $container.isotope('reLayout');
                });
                
            });
        });

        if (!is_visible) {
            var marginTop = ($target.find("div:eq(1)").css("margin-top") == "-3px") ? "11px" : "-3px";
            $target.find("div:eq(0)").addClass('active_subcategory');
            $target.find("div:eq(1) > h2").addClass('active_product');
            $target.find("div:eq(1)").animate({
                "margin-top": marginTop
            }, 500, function () {
                $target.find("div:eq(1) > p").fadeIn("slow", function () {
                    $container.isotope('reLayout');
                });
            });
        }
    });

}