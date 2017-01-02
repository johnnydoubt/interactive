window.onload = function(){  //chargement de la page
	let canvas = document.getElementById("canvas"); // Récupération du canvas
	let ctx = canvas.getContext("2d"); // indiquer le contexte, ici 2D.

	//Faire en sorte que le canvas occupe toute la page
	let W = window.innerWidth, H = window.innerHeight;
	canvas.width = W;
	canvas.height = H;

	let effects = []; // création d'un tableau d'effets
	let mouse = {}; // création d'un objet mouse

	// On commence par créer le nombre d'effets
	let effect_count = 80;
	for(let i = 0; i < effect_count; i++) // incrémentation du nombre d'effets
	{
		effects.push(new particle());
	}


	canvas.addEventListener('mousemove', track_mouse, false); // on définit un évenement pour le suivi de la souris.

	function track_mouse(e) // on créer une fonction track_mouse
	{

		mouse.x = e.pageX; // récupère les cordonnées de la souris pour x
		mouse.y = e.pageY; // récupère les cordonnées de la souris pour y
	}

	function particle() // on créer une fonction particle
	{
		// la vitesse, la durée de vie , la position et les couleurs

		this.speed = {x: -2.5+Math.random()*35, y: -15+Math.random()*10}; // la vitesse et le déplaçement de l'effet, pour x on peut modifier la valeur (entre -2.5 et 2.5) ainsi que pour y (entre 15 et -5)

		if(mouse.x && mouse.y)
		{
			this.location = {x: mouse.x, y: mouse.y}; // les coordonnées de la souris
		}
		else
		{
			this.location = {x: W/2, y: H/2}; // l'effet se situe au centre et suivent alors la souris.
		}

		this.radius = 15+Math.random()*20; // la taille du rayon que l'on peut modifier (entre 10 et 30)

		this.life = 20+Math.random()*10; // la durée de vie de la flamme qu'on peut modifier (entre 20 et 30)
		this.remaining_life = this.life; // le reste de sa durée de vie

		this.r = Math.round(Math.random()*255); // les couleurs
		this.g = Math.round(Math.random()*255);
		this.b = Math.round(Math.random()*255);
	}

	function draw()
	{

		ctx.globalCompositeOperation = "source-over"; // pioche parmi un ensemble de valeurs qui vont créer des effets(source-over, source-in, source-out, source-atop)
		ctx.fillStyle = "black"; // le fond du canvas
		ctx.fillRect(0, 0, W, H); // la position et la taille
		ctx.globalCompositeOperation = "lighter"; // l'effet de lumière(lighter, darker, copy, xor)

		for(let i = 0; i < effects.length; i++){ // incrémentation des effets.

			let e = effects[i];


			ctx.beginPath();
			e.opacity = Math.round(e.remaining_life/e.life*65)/100 // changement de l'opacité en fonction de la durée de vie de l'effet, l'opacité atteint 0 a la fin de vie de l'effet
			let gradient = ctx.createRadialGradient(e.location.x, e.location.y, 0, e.location.x, e.location.y, e.radius); // On crée un objet, un dégradé radial avec ses arguments, ici  tout les arguments sont assignés a la position de la souris.

			// Pour définir et effectuer les transitions de couleur au sein de notre dégradé, on utilise la méthode addColorStop
			// Cette méthode va nous permettre de définir ce qu’on appelle des « couleurs stop », c’est-à-dire des transitions de couleurs.

			gradient.addColorStop(0.3, "rgba("+e.r+", "+e.g+", "+e.b+", "+e.opacity+")"); // La méthode addColorStop() va prendre deux arguments : la position où démarre la couleur stop (entre 0 et 1) et la couleur.
			gradient.addColorStop(0.5, "rgba("+e.r+", "+e.g+", "+e.b+", "+e.opacity+")");
			gradient.addColorStop(1, "rgba("+e.r+", "+e.g+", "+e.b+", 15)");
			ctx.fillStyle = gradient;
			ctx.arc(e.location.x, e.location.y, e.radius, Math.PI*2, false);
			ctx.fill();

			// le déplaçement des effets

			e.remaining_life--; // ici on décrémente la durée de vie restante de l'effet
      e.radius--; // on décrémente la taille du rayon.
			e.location.x += e.speed.x; // la position des effets et leurs position pour x
			e.location.y += e.speed.y; // la position des effets et leurs position pour y

			// une condition if afin de créer les effets
			if(e.remaining_life < 0 || e.radius < 0)
			{
				// ici on a une nouvelle particule qui remplace la dernière qui disparu, dû a la décrémentation.
				effects[i] = new particle();
			}
		}
	}

	setInterval(draw, 33); // Enfin, on appelle la fonction de manière répétée, avec un certain délai fixé entre chaque appel.
}
