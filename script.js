var initial1 = document.getElementById("initial1");
var initial2 = document.getElementById("initial2");

const rainbowColors = [
    '#ffa600', // Orange
    '#f8e538', // Yellow
    '#43833d', // Green
    '#3d83a9', // Blue
    '#2f92fa', // Light Blue
    '#b22eff', // Purple
    '#d23b83', // Magenta
    '#ff2e63', // Pink
    '#f51616'  // Red
];
var currentColorIndex = 4

function getRandomColor() {
    if (currentColorIndex >= 8) {
        currentColorIndex = 0
    } else {
        currentColorIndex = currentColorIndex + 1;
    }
    return rainbowColors[currentColorIndex];
}

function handleMouseOver() {
    var randomColor = getRandomColor();
    document.documentElement.style.setProperty('--acc', randomColor);
}

initial1.addEventListener('mouseover', handleMouseOver);
initial2.addEventListener('mouseover', handleMouseOver);