(() => {
		console.log ('hello from JS!');


		let toggleButton = document.querySelector(".switch-text");
			myHeading = document.querySelector('h1');

		function changeText () {
			myHeading.textContent ="what is up? I am script!";
		}

		toggleButton.addEventListener("click", changeText);


	})();