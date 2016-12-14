
var canvas = document.querySelector("#myCanvas");
    var context = canvas.getContext("2d");

    var canvasPos = getPosition(canvas);
    var mouseX = 0;
    var mouseY = 0;

    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;

    canvas.addEventListener("mousemove", setMousePosition, false);

    function setMousePosition(e) {
      mouseX = e.clientX - canvasPos.x;
      mouseY = e.clientY - canvasPos.y;

      context.clearRect(0, 0, canvas.width, canvas.height);

      context.beginPath();
      context.arc(mouseX, mouseY, 50, 0, 2 * Math.PI, true);
      context.fillStyle = "#FF6A6A";
      context.fill();
    }

    function update() {
      context.clearRect(0, 0, canvas.width, canvas.height);

      context.beginPath();
      context.arc(mouseX, mouseY, 5, 0, 2 * Math.PI, true);
      context.fillStyle = "#FF6A6A";
      context.fill();

      requestAnimationFrame(update);
    }
    update();

    // deal with the page getting resized or scrolled
    window.addEventListener("scroll", updatePosition, false);
    window.addEventListener("resize", updatePosition, false);

    function updatePosition() {
      canvasPos = getPosition(canvas);
    }

	// Helper function to get an element's exact position
	function getPosition(el) {
	  var xPos = 0;
	  var yPos = 0;

	  while (el) {
		if (el.tagName == "BODY") {
		  // deal with browser quirks with body/window/document and page scroll
		  var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
		  var yScroll = el.scrollTop || document.documentElement.scrollTop;

		  xPos += (el.offsetLeft - xScroll + el.clientLeft);
		  yPos += (el.offsetTop - yScroll + el.clientTop);
		} else {
		  // for all other non-BODY elements
		  xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
		  yPos += (el.offsetTop - el.scrollTop + el.clientTop);
		}

		el = el.offsetParent;
	  }
	  return {
		x: xPos,
		y: yPos
	  };
	}
