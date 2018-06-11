/* eslint-disable */

var $cards = $(".cards");
var animationSpeed = 200;

$("button[data-next]").click(function() {
    var $topMostCard = $cards.find(".card").last();

    $topMostCard.prependTo($cards).addClass("removing");

    setTimeout(function() {
        $topMostCard.removeClass("removing");
    }, animationSpeed);
});

$("button[data-prev]").click(function() {
    var $bottomMostCard = $cards.find(".card").first();

    $bottomMostCard.appendTo($cards).addClass("adding");

    setTimeout(function() {
        $bottomMostCard.removeClass("adding");
    }, animationSpeed);
});
