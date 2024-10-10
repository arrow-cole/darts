var x,y; // Globals for mouse/touch coords
var debugX=-1,debugY=-1,debugScore=-1;

function getCoords(event) {
    const rect = canvas.getBoundingClientRect();
    if (event.touches) {
        if (event.touches[0]) {
            x = event.touches[0].clientX - rect.left;
            y = event.touches[0].clientY - rect.top;        
        } else {
            return false;
        }
    } else {
        x = event.clientX - rect.left;
        y = event.clientY - rect.top;
    }
    return true;
}
function handleHit(event) {
    if (!getCoords(event)) return;
    let wasbutton=false;
    buttons.forEach( button => {
        if (button.over(x,y)) {
            wasbutton=true;
            button.hit();
        }
    });
    if (!wasbutton) {
        if (hits.length < 3) {
            const score = getScore(x,y);
            hits.push( [x,y,score] );
        }
    }
}
function handleMove(event) {
    if (!getCoords(event)) return;
    debugScore = getScore(x,y);
    debugX=x;
    debugY=y;
}
function drawDebug() {
    if (debugScore!=-1) {
        ctx.beginPath();
        ctx.fillStyle=colors.black;
        ctx.fillText(debugX, 20,40);
        ctx.fillText(debugY, 20,60);
        ctx.fillText(debugScore, 20,80);
        ctx.fill();
    }
}
function handleUndo() {
    hits.pop();
}
function handleOk() {
    const totalScore = hits.reduce((acc, hit) => acc + hit[2], 0);
    runningScore -= totalScore;
    if (runningScore <= 0) runningScore = 301;  // Restart if score reaches 0
    hits = [];
}
