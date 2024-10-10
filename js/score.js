let hits = [];

function drawHit(x, y) {
    // 3D effect ring at the hit location
    drawCircle(x, y, 10, '#ffcc00');
    ctx.strokeStyle = '#333333';
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.lineWidth = 1;
}
function drawHits() {
    hits.forEach( h => { drawHit(h[0],h[1]); } )
}
function getScore(x, y) {
    const dx = x - centerX;
    const dy = y - centerY;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const angle = Math.atan2(dy, dx);
    const adjustedAngle = (angle + Math.PI/20 + Math.PI/2 + Math.PI*2) % (Math.PI*2);
    if (distance <= boardRadius * 0.06) return 50;  // Inner Bullseye
    if (distance <= boardRadius * 0.13) return 25;  // Outer Bullseye
    const segmentIndex = Math.floor(adjustedAngle / (Math.PI / 10));
    const score = numbers[segmentIndex];
    if (distance <= boardRadius * 0.55) return score;  // Single
    if (distance <= boardRadius * 0.63) return score * 3;  // Triple
    if (distance <= boardRadius * 0.92) return score;  // Single
    if (distance <= boardRadius) return score * 2;  // Double
    return 0;  // Miss
}
function drawScoreboard() {
    ctx.fillStyle = "#000";
    ctx.font = "bold 20px Arial";
    // Show last 3 hits
    hits.forEach((hit, index) => {
        ctx.fillText(hit[2], 20 + index * 30, 20);
    });
    // Show running total
    const totalScore = hits.reduce((acc, hit) => acc + hit[2], 0);
    ctx.fillText(runningScore - totalScore, canvas.width - 40, 20);
}
