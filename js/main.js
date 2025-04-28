const canvas = document.getElementById("dartboard");
const ctx = canvas.getContext("2d");
const colors = {
    outerBull: "#009900",
    innerBull: "#ff0000",
    black: "#000000",
    white: "#cccccc",
    yellow: "#eeeebb",
    green: "#009900",
    red: "#ff0000",
    buttonBg: "#555",
    buttonFg: "#eee"
};

let runningScore = 301;
var boardRadius, centerX, centerY, button1, button2;

function init() {
    canvas.addEventListener("click", handleHit);
    canvas.addEventListener("mousemove", handleMove);
    canvas.addEventListener("touchend", handleHit);
    button1=new Button(10+bdx/2,canvas.height-bdy/2-10,"Undo",handleUndo);
    button2=new Button(canvas.width-bdx/2-10,canvas.height-bdy/2-10,"OK",handleOk);
    main();
}
function main() {
    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;
    ctx.clearRect(0,0,canvas.width,canvas.height);
    boardRadius = Math.min(window.innerWidth, window.innerHeight) * 0.45;
    centerX = window.innerWidth/2;
    centerY = window.innerHeight/2;
    button1.x=10+bdx/2;
    button1.y=canvas.height-bdy/2-10;
    button2.x=canvas.width-bdx/2-10;
    button2.y=canvas.height-bdy/2-10;
    ctx.font = "bold 24px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    drawDartboard();
    drawScoreboard();
    buttons.forEach( button => button.draw() )
    drawHits();
    drawDebug();
    requestAnimationFrame(main);
}
