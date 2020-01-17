(() => {
	console.log ('hello from JS!');


	let toggleButton = document.querySelector(".switch-text"),
		myHeading = document.querySelector('h1'),
		//svgImg = document.querySelector("#badge");
		allSVG = document.querySelectorAll(".svg");


// this function should change the heading text 
	function changeText () {
		myHeading.textContent ="what is up? I am script!";
	}

	function logSVG() {
		console.log(this.id);
	}
		//things a user can do to make stuff happen on the page
	toggleButton.addEventListener("click", changeText);

	//svgImg.addEventListener("click", logSVG);
	//svgImg2.addEventListener("click", logSVG);

	allSVGs.forEach(iteam => iteam.addEventListener("click", logSVG));

	})();