(() => {
	console.log ('hello from JS!');


	let toggleButton = document.querySelector(".switch-text"),
		myHeading = document.querySelector('h1'),
		svgImg = document.querySelector("#badge");


// this function should log the ID for each SVG 
	function changeText () {
		myHeading.textContent ="what is up? I am script!";
		}

		toggleButton.addEventListener("click", changeText);
		svgImg.addEventListener("mouseover", logSVG);


	})();