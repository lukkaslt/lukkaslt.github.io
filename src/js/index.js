function getContent(fragmentId) {

	let partials = {
		i: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit eos consequatur explicabo accusantium officiis reprehenderit vero perferendis ut, libero molestias corrupti a sit eaque! Accusantium fugiat, ab rerum eaque nesciunt!",
		ii: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic earum obcaecati architecto iure id excepturi, dolore, illo, molestiae ducimus debitis sit reiciendis soluta dolor, laudantium inventore quis impedit at error.",
		iii: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor omnis eligendi, enim aperiam! Necessitatibus sunt deserunt unde iusto quasi ratione ipsa, tempore! Aut voluptatum voluptates reprehenderit eius id qui cupiditate.",
		iv: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique velit laborum illum sit eaque odio, alias minima ea. Repellat aliquid est ipsum, deserunt quibusdam officia nobis sequi sapiente. Voluptates, eligendi.",
	}

	return partials[fragmentId];
};

function removeHashTagFragment(fragment) {
	return fragment.substr( 1 );
};

function navigate() {
	let contentDiv = document.querySelector( '.container' );
	let fragmentId = removeHashTagFragment( location.hash );

	let html = `
		<div class="row">
	    <div class="col">
	      <h2 class="text-center">Capítulo ${ fragmentId.toUpperCase() }</h2>
	      <hr />
				<p class="text-justify">
					${ getContent( fragmentId ) }
				</p>
	    </div>
	  </div>
	`;

	contentDiv.innerHTML = html;
}

!location.hash && ( location.hash = "#i");

navigate();

window.addEventListener('hashchange', navigate);