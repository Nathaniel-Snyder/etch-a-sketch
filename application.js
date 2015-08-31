$(document).ready(function() {
	for (x = 0; x < 15; x++) {
		for (i = 0; i < 15; i++) {
			$("#grid").append('<div class="cell"></div>')};
			if (i = 15) {
					$("#grid").append("</br>")};
			};

	$("#Reset").click(function(){
		$('.cell').css('background-color', 'white');
	});

	$("#Go").click(function(){
	$("p").empty();
	var rows = prompt("How many rows do you want?");
	var columns = prompt("How many columns do you want?")
	for (x = 0; x < rows; x++) {
		for (i = 0; i < columns; i++) {
			$("#grid").append('<div class="cell"></div>')};
			if (i = columns) {
					$("#grid").append("</br>")};
			};

});
});

$(document).on({
    mouseenter: function () {
        $(this).css('background-color', 'blue');
    },
    mouseleave: function () {
 		$(this).css('background-color', 'black');       
    }
}, ".cell");



