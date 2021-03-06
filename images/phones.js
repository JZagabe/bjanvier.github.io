$(document).ready(function() {
	$("#nav_list a").click(
		function() {
			var fileName = "json_items/" + $(this).attr("title") + ".json"; //taking items from the json's folder
			$.getJSON(fileName, function(data) {
				$.each(data, function() {
					$.each(this, function(key, value) {
						$("table").text("");
						//Appending json parameters to html
						$("main").append(
							"<h1>" + value.name + "</h1>" + 
							"<img src='" + value.image + "'>" +
							"<h2>:" + value.year + "<br>: $" + value.price+ "</h2>" + 
							"<p>" + value.brand + "</p>" +
							"<p>" + value.features + "</p>" 
						);
					});
				}); 
			});
		}
	); // end click
}); // end ready