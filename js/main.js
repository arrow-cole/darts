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

function init() {
    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;
    canvas.addEventListener("click", handleHit);
    canvas.addEventListener("mousemove", handleMove);
    canvas.addEventListener("touchend", handleHit);
    new Button(10+bdx/2,canvas.height-bdy/2-10,"Undo",handleUndo);
    new Button(canvas.width-bdx/2-10,canvas.height-bdy/2-10,"OK",handleOk);
    main();
}
function main() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
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
