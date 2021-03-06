//constante pour stocket la position de la souris
const app = { mouse: { x:0, y:0 }};

//au mouvement de la souris récupère x et y du curseur
document.addEventListener('mousemove', function(event){
  app.mouse.x = event.pageX;
  app.mouse.y = event.pageY;
});
// au chargement de la fenêtre dessine les particules
window.onload = function() {
     //crétation du canvas
     var canvas = document.createElement("canvas"),
     c = canvas.getContext("2d"),
     //variable stockage et itération particules
     particles = {},
     particleIndex = 0,
     particleNum = 30;
     //définition taille canvas
     canvas.width  = window.innerWidth;
     canvas.height = window.innerHeight;
     //ajout du canvas au dom
     document.body.appendChild(canvas);
     c.fillStyle = "black";
     c.fillRect (0, 0, canvas.width, canvas.height);
     //function de création de particule
     function Particle() {
       this.x = app.mouse.x;
       this.y = app.mouse.y;
       this.vx = Math.random() * 10 - 5;
       this.vy = Math.random() * 10 - 5;
       this.gravity = 0.3;
       particleIndex++;
       particles[particleIndex] = this;
       this.id = particleIndex;
       this.life = 0;
       this.maxLife = Math.random() * 30 + 50;
       this.color = "hsla("+parseInt(Math.random()*360, 10)+" ,100%,50%, 0.2)";
     }
     //function de dessin des particules
     Particle.prototype.draw = function () {
       this.x += this.vx;
       this.y += this.vy;        if (Math.random() < 0.1) {
         this.vx = Math.random() * 10 - 5;
         this.vy = Math.random() * 10 - 5;
       }
       //Durée de vie particule
       this.life++;
       if (this.life >= this.maxLife){
         delete particles[this.id];
      }        c.fillStyle = this.color
       c.fillRect (this.x, this.y, 10, 10);      };
       //appel function drawParticule
       setInterval (function() {
       c.globalCompositeOperation = "source-over";
       c.fillStyle = "rgba(0,0,0,0.5)";
       c.fillRect ( 0, 0, canvas.width, canvas.height);
       for (var i = 0; i < particleNum; i++){
         new Particle();        }
       c.globalCompositeOperation = "lighter";
       for(var i in particles){
       particles[i].draw();}}, 30);

 };
