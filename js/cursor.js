const app = { mouse: { x:0, y:0 }};

document.addEventListener('mousemove', function(event){
  app.mouse.x = event.pageX;
  app.mouse.y = event.pageY;
});
