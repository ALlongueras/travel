var pos = 0;
var count = 1;
var maxItems = 3;
var items = [];

function readProfileItems() {
    return $("#profileItems").val();
}

function createSlide() {
    // This function takes the array of items we have and bults a new ul
    // list based on maxitems and last pos, the result is multiple calls
    // to this function produces output like so:

    //  First pass returns: 1 2 3 4 5 6 7
    // Second pass returns: 8 9 1 2 3 4 5
    //  Third pass returns: 6 7 8 9 1 2 3
    //  Forth pass returns: 4 5 6 7 8 9 1
    // and so forth...

    var elem = $('<ul class="list"></ul>');

    for (i = 1; i <= readProfileItems(); i++) {
        if (pos >= readProfileItems()) {
            pos = 0;
        }

        if (count <= maxItems) {
            count = count + 1;

            $(elem).append(items[pos]);

            pos = pos + 1;
        }
    }

    count = 1;

    return elem;
}

function onBefore(curr, next, opts) {
    // This is our onBefore slide eventm we simple check if the addSlide
    // method is available on the opts object as apperently on the first
    // pass, addSlide is undefined (plugin hasn't yet created the fn);
    if (!opts.addSlide) {
        return;
    }

    // addSlide function is available so generate the next slide and add it
    opts.addSlide(createSlide());
}

//Carrousel Profile Home
$(document).ready(function () {
    // Generate an array of items to use in our cycle
    $(".carrouselProfile li").each(function (i) {
        items[i] = $(this).clone().wrap('<div>').parent().html();
    });

    // Grab the slideshow object
    var $ss = $('.carrouselProfile');

    // Erase the contents out of it, we have the data stored in the array [items]
    $ss.empty();

    // Create new slide and append it to our object, results in 1 2 3 4 5 6 7
    $ss.append(createSlide());

    // Create another new slide and append it to our object, results in 8 9 1 2 3 4 5
    $ss.append(createSlide());

    // start the slideshow (a slideshow can't be started unless there's 2 slides hince why we created two slides above to start with).  The before/onBefore event will add a new slide every cycle of the slideshow.
    $ss.cycle({
        fx: 'scrollUp',
        pause: 2,
        timeout: 2000,
        speed: 3000,
        before: onBefore
    });

    // Generate an array of items to use in our cycle
    $(".profileList2 li").each(function (i) {
        items[i] = $(this).clone().wrap('<div>').parent().html();
    });

    // Grab the slideshow object
    var $ss1 = $('.profileList2');

    // Erase the contents out of it, we have the data stored in the array [items]
    $ss1.empty();

    // Create new slide and append it to our object, results in 1 2 3 4 5 6 7
    $ss1.append(createSlide());

    // Create another new slide and append it to our object, results in 8 9 1 2 3 4 5
    $ss1.append(createSlide());

    // start the slideshow (a slideshow can't be started unless there's 2 slides hince why we created two slides above to start with).  The before/onBefore event will add a new slide every cycle of the slideshow.
    $ss1.cycle({
        fx: 'scrollUp',
        pause: 2,
        timeout: 2000,
        speed: 10000,
        before: onBefore
    });
}); 

