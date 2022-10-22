// var xValues = [];
// var yValues = [];
var xValues = [];
var yValues = [];


window.addEventListener('mousemove', function (e) {
    document.getElementById('x-value').textContent = e.x;
    document.getElementById('y-value').textContent = e.y;
});

window.addEventListener('mousedown', function(e) {
    var rect = canvas.getBoundingClientRect();
    var x = (e.clientX - rect.left); // x == the location of the click in the document - the location (relative to the left) of the canvas in the document
    var y = (e.clientY - rect.top); // y == the location of the click in the document - the location (relative to the top) of the canvas in the document
    var pointSize = 10;
    var ctx = document.getElementById("canvas").getContext("2d");
    ctx.fillStyle = "#00000"; // Red color

    //draw dot
    ctx.beginPath(); 
    ctx.arc(x, y, pointSize, 0, Math.PI * 2, true);
    ctx.fill();
    addPoint(x, y); 
});

function addPoint(xVal, yVal) {
    xValues.push(Math.floor(xVal));
    yValues.push(Math.floor(yVal));
    document.getElementById('arrayX').innerHTML = xValues[xValues.length-1];
    document.getElementById('arrayY').innerHTML = yValues[yValues.length-1];
}

function resetCanvas() {
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
}

