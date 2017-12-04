$(document).ready(function() {
	$("#nav_list a").click(
		function() {
			var fileName = "json_items/" + $(this).attr("title") + ".json"; //taking items from the json's folder
			$.getJSON(fileName, function(data) {
				$.each(data, function() {
					$.each(this, function(key, value) {
						$("main").text("");
						//Appading json parameters to html
						$("main").append(
							"<h1>" + value.name + "</h1>" + 
							"<img src='" + value.image + "'>" +
							"<h2>" + value.year + "<br>$" + value.price + "</h2>" + 
							"<p>" + value.brand + "</p>" +
							"<p>" + value.features + "</p>" 
						);
					});
				}); 
			});
		}
	); // end click
}); // end ready






/*


1. https://www.w3schools.com/w3css/tryw3css_templates_restaurant_modal.htm (baby)

https://www.w3schools.com/w3css/tryw3css_templates_startup.htm(0kay)
https://www.w3schools.com/w3css/tryw3css_templates_startup.htm#team


favorite one below

https://templated.co/clearfigure
https://templated.co/projection



https://templated.co/fetchingly(downloaded already)
https://codepen.io/PageOnline/pen/eBdjl
https://www.w3schools.com/w3css/tryw3css_templates_social.htm#





Your Final Project will be to create a web store which retrieves data from a database.  You will retrieve and display a product list, handle a click on a product, retrieve and display details for the clicked product, and order a quantity of the product.  
If you are in CSC 176, I believe you will be maintaining and updating the database as well (ask Charles though).  If you are not in/have not completed CSC 176, I will soon provide you with a contact in that class who will work with you on this project.
There is plenty to do now to simply get your html, css, and js files started.
You may choose the store type, structure, style, and organization of the website.  
You will be required to have the following: navigation to pages on your site, a form for input of order details, and adequate structure and style to display the content to the user.




*/