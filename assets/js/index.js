document.addEventListener('keyup', (e) => {
	if (e.key == 'Escape') {
		ts('#modal').modal('hide');
	}
});

resize(); // init

function showImg(e) {
	var src = e.src || e.target.src;
	document.getElementById('img-container-inner').src = src;
	ts('#modal').modal('show');
}

function resize() {
	var list1 = document.getElementById("timetable");
	var list2 = document.getElementById("other");
	list1.classList.remove("one", "two", "three");
	list2.classList.remove("one", "two", "three");
	if (window.innerWidth < 576) {
		list1.classList.add("one");
		list2.classList.add("one");
	} else if (window.innerWidth < 992) {
		list1.classList.add("two");
		list2.classList.add("two");
	} else {
		list1.classList.add("three");
		list2.classList.add("three");
	}
}
