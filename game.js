const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "white";
ctx.beginPath();
ctx.arc(400, 300, 10, 0, Math.PI * 2);
ctx.fill();