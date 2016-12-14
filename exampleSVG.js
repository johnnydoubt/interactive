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
    svg.circle(random(2000),random(2000), random(5) + 10, {fill:getRandomColor(), stroke: 'white','stroke-width':random(5)+1});
    i++;
    console.log(i);
  }
  if (i > 100) {
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
