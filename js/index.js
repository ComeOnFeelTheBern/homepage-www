var deadline = new Date(1463986800000);

function getTimeRemaining() {
    var remaining = {};
    var now = new Date();
    var milliseconds = deadline - now;
    remaining.days = Math.floor(milliseconds / (1000 * 60 * 60 * 24));
    remaining.hours = Math.floor(milliseconds / (1000 * 60 * 60) % 24);
    remaining.minutes = Math.floor(milliseconds / (1000 * 60) % 60);
    remaining.seconds = Math.floor(milliseconds / 1000 % 60);
    return remaining;
}

function render() {
    var remaining = getTimeRemaining();
    var $countdown = $('.countdown');

    $countdown.css({
        opacity: 1,
    });

    $countdown.find('.days').text(remaining.days);
    $countdown.find('.hours').text(remaining.hours);
    $countdown.find('.minutes').text(remaining.minutes);
    $countdown.find('.seconds').text(remaining.seconds);
}

setInterval(render, 1000);
render();
