

document.addEventListener("click", toggleDropdown);

function toggleDropdown(event) {
		var dropdown = document.getElementById("dDown");
        
    if (event.target.classList.contains('toggler')){
	    dropdown.classList.toggle('show');
    } else {
      dropdown.classList.remove('show');
    }
}