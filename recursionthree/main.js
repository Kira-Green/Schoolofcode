function setup() {
    createCanvas(700, 700);
    strokeWeight(4);
    drawFract(0, 0, height, width, 3);
}

function draw() {
    // drawFract(0, 0, height, width, 5);
}

function drawFract(x, y, w, h, depth) {
    // strokeWeight(depth * 5);
    // stroke(mouseX, mouseY, 50);
    ellipse(x, y, w, h);
    var shouldFillInSquare = random(0, 1) > 0.7;
    if (shouldFillInSquare) {
        fill(random(0, 255), random(0, 255), random(0, 255));
    } else {
        fill(255, 255, 255);
    }
    if (depth > 0) {
        let xSplit = random(0.1, 0.9);
        let ySplit = random(0.1, 0.9);
        // var xSplit = mouseX / width;
        // var ySplit = mouseY / height;

        drawFract(x, y, w * xSplit, h * ySplit, depth - 1);
        drawFract(x + w * xSplit, y, w - w * xSplit, h * ySplit, depth - 1);
        drawFract(x, y + h * ySplit, w * xSplit, h - h * ySplit, depth - 1);
        drawFract(
            x + w * xSplit,
            y + h * ySplit,
            w - w * xSplit,
            h - h * ySplit,
            depth - 1
        );
    }
}