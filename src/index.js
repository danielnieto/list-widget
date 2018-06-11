/* eslint-disable */

var $cards = $(".cards");
var animationSpeed = 300;

$("button[data-next]").click(function() {
    var $topMostCard = $cards.find(".card").last();
    $topMostCard.addClass("removing");

    setTimeout(function() {
        $topMostCard.prependTo($cards).removeClass("removing");
    }, animationSpeed);
});
