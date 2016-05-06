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
    $('.countdown .days').text(remaining.days);
    $('.countdown .hours').text(remaining.hours);
    $('.countdown .minutes').text(remaining.minutes);
    $('.countdown .seconds').text(remaining.seconds);
}

function initialRender() {
    render();
    
    $('.countdown').css({
        opacity: 1,
    });
}

setInterval(render, 1000);
initialRender();
