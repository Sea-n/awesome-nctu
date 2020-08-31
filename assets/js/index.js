document.addEventListener('keyup', (e) => {
	if (e.key == 'Escape') {
		ts('#modal').modal('hide');
	}
});

function showImg(e) {
	console.log(e);
	var src = e.src || e.target.src;
	document.getElementById('img-container-inner').src = src;
	ts('#modal').modal('show');
}
