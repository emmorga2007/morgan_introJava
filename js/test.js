(()=> {
// this is a moduel pattern, also called life
const mySpan= document.querySelector('main span'),
	theSVG= document.querySelector('.svg-image');

function toggleSelected() {
//we want to add an indication to the uder that icon has been selected.

///debugger;
this.classList.toggle('selected')

}

//set up our triggers here
mySpan.addEventListener('click', toggleSelected);
// element ur working with . what you want to do with the element ('what happens', any name for funtction)
theSVG.addEventListener('click', toggleSelected);
})();