/* eslint-disable */
if (typeof UI === "undefined") {
    window.UI = {};
}

Class(UI, "List")
    .inherits(Widget)
    .includes(BubblingSupport)({
    HTML:
        '<article>\
			<button class="list_button list_button-left">\
				<span>\
					<svg width="12px" height="12px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\
						<g id="angle-left" stroke="none" stroke-width="1" fill="#FFF" fill-rule="evenodd">\
							<path d="M0.544787501,10.7253983 L11.0727559,0.528584817 C11.8004244,-0.176194939 12.9770796,-0.176194939 13.6970069,0.528584817 L15.4465075,2.2230553 C16.1741759,2.92783505 16.1741759,4.06747891 15.4465075,4.76476101 L7.99177694,12 L15.4542487,19.2277413 C16.1819171,19.9325211 16.1819171,21.0721649 15.4542487,21.769447 L13.7047481,23.4714152 C12.9770796,24.1761949 11.8004244,24.1761949 11.0804971,23.4714152 L0.552528654,13.2746017 C-0.182880906,12.5698219 -0.182880906,11.4301781 0.544787501,10.7253983 Z"></path>\
						</g>\
					</svg>\
				</span>\
			</button>\
			<button class="list_button list_button-right">\
				<span>\
					<svg width="12px" height="12px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\
						<g id="angle-right" stroke="none" stroke-width="1" fill="#FFF" fill-rule="evenodd">\
							<path d="M15.4549488,13.2746017 L4.92188422,23.4714152 C4.19386358,24.1761949 3.01663871,24.1761949 2.29636297,23.4714152 L0.54601548,21.7769447 C-0.18200516,21.0721649 -0.18200516,19.9325211 0.54601548,19.235239 L8.01209949,12.0074977 L0.54601548,4.77975633 C-0.18200516,4.07497657 -0.18200516,2.93533271 0.54601548,2.23805061 L2.28861807,0.528584817 C3.01663871,-0.176194939 4.19386358,-0.176194939 4.91413932,0.528584817 L15.4472039,10.7253983 C16.1829694,11.4301781 16.1829694,12.5698219 15.4549488,13.2746017 Z"></path>\
						</g>\
					</svg>\
				</span>\
			</button>\
			<figure class="cards"></figure>\
			<div class="title">{TITLE}</div>\
		</article>',
    ELEMENT_CLASS: "ui-list",
    animationDuration: 300,
    swipeThreshold: {
        x: 30,
        y: 100
    },
    prototype: {
        init: function init(config) {
            Widget.prototype.init.call(this, config);

            var list = this;

            this.$cards = this.element.find(".cards");
            this.$title = this.element.find(".title");

            this.$title.text(this.title);

            this.items.forEach(function(item) {
                list.$cards.append(
                    '<div class="card"><img src="' + item + '" /></div>'
                );
            });

            this.element
                .find("button.list_button-right")
                .click(list._showNext.bind(list));

            this.element
                .find("button.list_button-left")
                .click(list._showPrevious.bind(list));

            // START SWIPPING

            // Private variables for each element
            var originalCoord = { x: 0, y: 0 };
            var finalCoord = { x: 0, y: 0 };

            // Screen touched, store the original coordinate
            function touchStart(event) {
                //console.log('Starting swipe gesture...')
                originalCoord.x = event.targetTouches[0].pageX;
                originalCoord.y = event.targetTouches[0].pageY;
            }

            // Store coordinates as finger is swiping
            function touchMove(event) {
                // event.preventDefault();
                finalCoord.x = event.targetTouches[0].pageX; // Updated X,Y coordinates
                finalCoord.y = event.targetTouches[0].pageY;
            }

            // Done Swiping
            // Swipe should only be on X axis, ignore if swipe on Y axis
            // Calculate if the swipe was left or right
            function touchEnd(event) {
                //console.log('Ending swipe gesture...')
                var changeY = originalCoord.y - finalCoord.y;
                if (
                    changeY < UI.List.swipeThreshold.y &&
                    changeY > UI.List.swipeThreshold.y * -1
                ) {
                    var changeX = originalCoord.x - finalCoord.x;

                    if (changeX > UI.List.swipeThreshold.x) {
                        list._showNext();
                    }
                    if (changeX < UI.List.swipeThreshold.x * -1) {
                        list._showPrevious();
                    }
                }
            }

            // Swipe was started
            function touchStart(event) {
                //console.log('Starting swipe gesture...')
                originalCoord.x = event.targetTouches[0].pageX;
                originalCoord.y = event.targetTouches[0].pageY;

                finalCoord.x = originalCoord.x;
                finalCoord.y = originalCoord.y;
            }

            // Swipe was canceled
            function touchCancel(event) {
                //console.log('Canceling swipe gesture...')
            }

            list.$cards[0].addEventListener("touchstart", touchStart, false);
            list.$cards[0].addEventListener("touchmove", touchMove, false);
            list.$cards[0].addEventListener("touchend", touchEnd, false);
            list.$cards[0].addEventListener("touchcancel", touchCancel, false);

            // END SWIPPING

            return this;
        },
        _showNext: function _showNext() {
            var list = this;
            var $topMostCard = list.$cards.find(".card").last();

            $topMostCard.prependTo(list.$cards).addClass("removing");

            setTimeout(function() {
                $topMostCard.removeClass("removing");
            }, UI.List.animationDuration);
        },
        _showPrevious: function _showPrevious() {
            var list = this;
            var $bottomMostCard = list.$cards.find(".card").first();

            $bottomMostCard.appendTo(list.$cards).addClass("adding");

            setTimeout(function() {
                $bottomMostCard.removeClass("adding");
            }, UI.List.animationDuration);
        }
    }
});
