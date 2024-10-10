const bdx=100, bdy=50;
var buttons=[];
class Button {
    constructor(x,y,label,callback) {
        this.x=x;
        this.y=y;
        this.label=label;
        this.callback=callback;
        buttons.push(this);
    }
    draw() {
        ctx.beginPath();
        ctx.fillStyle=colors.buttonBg;
        ctx.fillRect(this.x-bdx/2,this.y-bdy/2,bdx,bdy);
        ctx.fill();
        ctx.beginPath();
        ctx.fillStyle=colors.buttonFg;
        ctx.fillText(this.label,this.x,this.y);
    }
    hit() {
        this.callback();
    }
    over(x,y) {
        return x>this.x-bdx/2 && x<this.x+bdx/2 && y>this.y-bdy/2 && y<this.y+bdy/2;
    }
}