function random(range){
  return Math.floor(Math.random()*range);
}
let oldCursor = {x:0, y:0};
let svg;
let cursor = {x:0, y:0};
let i=0;
function onMouseMove(e){
  var e = e || window.event;

  if (e.pageX || e.pageY){
    cursor.x = e.pageX;
    cursor.y = e.pageY;
  }
};
function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function drawCircle() {
  if (Math.abs(cursor.x - oldCursor.x) > 1 || Math.abs(cursor.y - oldCursor.y) > 1){
    svg.circle(random(1600),random(1600), random(2) + 2, {fill: 'white', stroke: 'white','stroke-width':random(1)+1});
    i++;
  }
  if (i > 250) {
    $('circle').first().remove();
    i-=1;
  }
  oldCursor.x = cursor.x;
  oldCursor.y = cursor.y;
};
$(document).ready(function() {
  $('#svg').svg();
  svg = $('#svg').svg('get');
  setInterval ('drawCircle()', 10);
  document.onmousemove = onMouseMove;
});
