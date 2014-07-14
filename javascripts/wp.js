Event.observe(window, "load", pageInit);

function pageInit() {
	// for each of the links under contstruction, set up an event
	$A($("navigation").getElementsByTagName("a")).each( function(link) {
		var strLocation = document.location.toString();
		if (strLocation == link.href) Element.addClassName(link.parentNode, "selected");
	});
}

