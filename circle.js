class Circle {
    constructor(game, x, y, radius) {
        Object.assign(this, { game, x, y, radius });
    };

    update() {
      
    };

    

    draw(ctx) {
        if (window) {
            ctx.beginPath();
            ctx.stroke();
            ctx.closePath();
        }
    };
   

};
