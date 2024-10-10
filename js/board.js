const boardRadius = 250;
const centerX = window.innerWidth/2;
const centerY = window.innerHeight/2;
const numbers = [20, 1, 18, 4, 13, 6, 10, 15, 2, 17, 3, 19, 7, 16, 8, 11, 14, 9, 12, 5];

function drawCircle(x, y, radius, color) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}
function drawSegment(startAngle, endAngle, color) {
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, boardRadius * 1, startAngle, endAngle);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}
function drawRing(innerRadius, outerRadius, startAngle, endAngle, color) {
    ctx.beginPath();
    ctx.arc(centerX, centerY, outerRadius, startAngle, endAngle);
    ctx.arc(centerX, centerY, innerRadius, endAngle, startAngle, true);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}
function drawDartboard() {
    // Black frame for numbers
    drawCircle(centerX, centerY, boardRadius * 1.2, colors.black);
    let angle = -Math.PI / 2 + Math.PI / 20;  // Aligned with the 20 sector
    const angleIncrement = Math.PI / 10;  // 36 degrees per sector
    // Draw 20 segments
    for (let i = 0; i < 20; i++) {
        let startAngle = angle;
        let endAngle = angle + angleIncrement;
        let color = i % 2 === 0 ? colors.black : colors.yellow;
        drawSegment(startAngle, endAngle, color);
        angle += angleIncrement;
    }
    // Triple ring
    angle = -Math.PI / 2 + Math.PI / 20;
    for (let i = 0; i < 20; i++) {
        let startAngle = angle;
        let endAngle = angle + angleIncrement;
        let color = i % 2 === 0 ? colors.green : colors.red;
        drawRing(boardRadius * 0.55, boardRadius * 0.63, startAngle, endAngle, color);
        angle += angleIncrement;
    }
    // Double ring
    angle = -Math.PI / 2 + Math.PI / 20;
    for (let i = 0; i < 20; i++) {
        let startAngle = angle;
        let endAngle = angle + angleIncrement;
        let color = i % 2 === 0 ? colors.green : colors.red;
        drawRing(boardRadius * 0.92, boardRadius * 1.0, startAngle, endAngle, color);
        angle += angleIncrement;
    }
    // Outer bullseye
    drawCircle(centerX, centerY, boardRadius * 0.13, colors.outerBull);
    // Inner bullseye
    drawCircle(centerX, centerY, boardRadius * 0.06, colors.innerBull);
    // Numbers on the black frame
    ctx.fillStyle = colors.white;
    angle = -Math.PI / 2;
    for (let i = 0; i < 20; i++) {
        let x = centerX + Math.cos(angle) * boardRadius * 1.1;
        let y = centerY + Math.sin(angle) * boardRadius * 1.1;
        ctx.fillText(numbers[i], x, y);
        angle += angleIncrement;
    }
}
