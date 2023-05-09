var canvas;
var ctx;

function start(){
    var canvas = document.getElementById("chartCanvas");
    var ctx = canvas.getContext("2d");

var fruitData = [
    {name: "Apple", quantity: 20},
    {name: "Orange", quantity: 10},
    {name: "Banana", quantity: 15},
    {name: "Kiwi", quantity: 5},
    {name: "Blueberry", quantity: 5},
    {name: "Grapes", quantity: 10}
  ];
  
  
  // Set up the chart parameters
  var chartWidth = canvas.width - 100; // Leave space for labels
  var chartHeight = canvas.height - 100; // Leave space for labels
  var barWidth = chartWidth / fruitData.length;
  var maxValue = Math.max.apply(Math, fruitData.map(function(fruit) { return fruit.quantity; }));
  var chartBottom = canvas.height - 50;
  
  // Draw the bars
  ctx.fillStyle = "lightgray";
  ctx.fillRect(50, 50, chartWidth, chartHeight);
  
  for (var i = 0; i < fruitData.length; i++) {
    var fruit = fruitData[i];
    var barHeight = fruit.quantity / maxValue * chartHeight;
    var barLeft = 50 + i * barWidth;
    var barTop = chartBottom - barHeight;
    var barColor = getFruitColor(fruit.name);
  
    ctx.fillStyle = barColor;
    ctx.fillRect(barLeft, barTop, barWidth, barHeight);
  
    // Draw the fruit name below the bar
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.fillText(fruit.name, barLeft + barWidth / 2, chartBottom + 20);
  }
  
  // Draw the axis labels and title
  ctx.fillStyle = "black";
  ctx.textAlign = "center";
  ctx.fillText("Fruit Sales Quantity", canvas.width / 2, 30);
  ctx.textAlign = "right";
  ctx.fillText("0", 40, chartBottom);
  ctx.fillText(maxValue, 40, 50);
  ctx.fillText("Fruit Type", chartWidth / 2 + 50, canvas.height - 10);
  
  // Helper function to get the color for a fruit
  function getFruitColor(fruitName) {
    switch (fruitName.toLowerCase()) {
      case "apple":
        return "red";
      case "orange":
        return "orange";
      case "banana":
        return "yellow";
      case "kiwi":
        return "green";
      case "blueberry":
        return "blue";
      case "grapes":
        return "purple";
      default:
        return "gray";
    }
  }
}
document.addEventListener('DOMContentLoaded', start);
  