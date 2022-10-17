
function randomInt(n) {
    return Math.floor(Math.random() * n);
};


function rgb(r, g, b) {
    return "rgb(" + r + "," + g + "," + b + ")";
};


function hsl(h, s, l) {
    return "hsl(" + h + "," + s + "%," + l + "%)";
};


function distance(a, b) {
    let dx = a.x - b.x;
    let dy = a.y - b.y;
    return Math.sqrt(dx * dx + dy * dy);
};


window.requestAnimFrame = (function () {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (/* function */ callback, /* DOMElement */ element) {
            window.setTimeout(callback, 1000 / 60);
        };
})();



const PARAMS = {
    DEBUG: true,
    SCALE: 3,
    BITWIDTH: 16
};
