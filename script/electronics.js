$(document).ready(function() {
	$("#nav_list a").click(
		function() {
			var fileName = "json_items/" + $(this).attr("title") + ".json";//accessing the json_files subfolder from the in speakers folder
			$.getJSON(fileName, function(data) {
				$.each(data, function() {
					$.each(this, function(key, value) {
						//this code below allows to only display one speaker on the screen
						$("main").text("");
						//adding the parameters values on the html files(the exact same way they're written in JSON files)
						$("main").append(
							"<h1><b>" + value.name + "</b></h1>" + 
						"<h1 src='" + value.year + "'/h1>" +
						"<h2>$" + value.price + "<br>" + value.brand + "</h2>" + 
						"<img src='" + value.image + "'>" +
						"<p>" + value.features + "</p>"  
						);
						$('img').css({"width":"100%",});
						$('li').css({"width":"100%", 'border':'red 12px'});
						$('p').css({"background-color":"darkblue","color":"white",'border-radius':'25px 10px 10px'});
					});
				}); 
			});
		}
	); // end click
}); // end ready
