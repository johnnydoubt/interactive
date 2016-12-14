function random(range){
  return Math.floor(Math.random()*range);
}
let oldCursor = {x:0, y:0};
let svg;
let cursor = {x:0, y:0};
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
