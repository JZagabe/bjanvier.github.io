"use strict";
$(document).ready(function() {
    var total = 0;
    
    // add image swap and click handler to each image in table
    $("table img").each(function() {
        var oldURL = $(this).attr("src"); // gets the src attribute
        var newURL = $(this).attr("id"); // gets the id attribute
        
        // preload rollover image
        var rolloverImage = new Image();
        rolloverImage.src = newURL;
        
        // set up event handlers
        $(this).hover(
            function() {
                $(this).attr("src", newURL); // sets the src attribute
            },
            function() {
                $(this).attr("src", oldURL); // sets the src attribute
            }
        ); // end hover

        $(this).click(function(evt) {
            // get text from textarea
            var order  = $("#order").html();
            if (order == undefined) {
            	order = "";
            }
            
            // add selection to text and total
            if (oldURL == "images/iPhone8-foreverCheaper.jpg") {
                total = total + 799.99;
                order = order + '<option value="iPhone8-foreverCheaper">- iPhone 8: $195 </option>';//values to display in box
            }
             else if (oldURL == "images/acerPC-foreverCheaper.jpg") {
                total = total + 249.99;
                order = order + '<option value="acerPC-foreverCheaper">-Acer chromebook: $249.99 </option>';
            }
             else if (oldURL == "images/alcatelPlus-foreverCheaper.jpg") {
                total = total + 501.05;
                order = order + '<option value="images/alcatelPlus-foreverCheaper">- Alcatel Plus: $501.05 </option>';
            } 
            else if (oldURL == "images/alcatel-foreverCheaper.jpg") {
                total = total + 99.99;
                order = order + '<option value="alcatel-foreverCheaper">- Alcatel one: $99.99 </option>';
            } 
            else if (oldURL == "images/Amazon-foreverCheaper.jpg") {
                total = total + 128.99;
                order = order + '<option value="Amazon-foreverCheaper">- Amazon: $128.99 </option>';
            } 
            else if (oldURL == "images/HTCone-foreverCheaper1.jpg") {
                total = total + 336.99;
                order = order + '<option value="HTCone-foreverCheaper1">- HTC one: $336.99 </option>';
            }
            else if (oldURL == "images/HP-MobileforeverCheaper.jpg") {
                total = total + 499.99;
                order = order + '<option value="HP-MobileforeverCheaper">-HP one: $499.99 </option>';
            } 
            else if (oldURL == "images/LG-foreverCheaper.jpg") {
                total = total + 599.99;
                order = order + '<option value="LG-foreverCheaper">-LG G3: $599.99 </option>';
            } 
            else if (oldURL == "images/acer-foreverCheaper.jpg") {
                total = total + 1749.99;
                order = order + '<option value="acer-foreverCheaper">-Acer: $1,749.99 </option>';
            }
             else if (oldURL == "images/Allview-foreverCheaper.jpg") {
                total = total + 189.99;
                order = order + '<option value="Allview-foreverCheaper">Allview: $149.99</option>';
            }
             else if (oldURL == "images/motorola-foreverCheaper1.jpg") {
                total = total + 224.99;
                order = order + '<option value="motorola-foreverCheaper1">-Motorola G plus: $224.99 </option>';
            } 
            else if (oldURL == "images/blackberyy-foreverCheaper1.jpg") {
                total = total + 579.99;
                order = order + '<option value="blackberyy-foreverCheaper">-Blackberry: $579.99 </option>';
            }
            else if (oldURL == "images/hplaptop-foreverCheaper.jpg") {
                total = total + 619.19;
                order = order + '<option value="hplaptop-foreverCheaper">-HP Envy: $619.19 </option>';
            } 
            else if (oldURL == "images/intexblack-and-white-foreverCheaper1.jpg") {
                total = total + 345.90;
                order = order + '<option value="intexblack-and-white-foreverCheaper1">-Intex: $345.90</option>';
            }
             else if (oldURL == "images/nokiaedge-foreverCheaper.jpg") {
                total = total + 19999.99;
                order = order + '<option value="nokiaedge-foreverCheaper">- Nokia Edge: $19,999,99</option>';
            } 
            else if (oldURL == "images/panasonic-toughpad-foreverCheaper.jpg") {
                total = total + 2568.48;
                order = order + '<option value="panasonic-toughpad-foreverCheaper">- Panasonic toughpad: $2,568.48</option>';
            }
            else if (oldURL == "images/panasoniclaptop1-foreverCheaper.jpg") {
                total = total + 499.00
                order = order + '<option value="panasoniclaptop1-foreverCheaper">-Panasonic toughbook: $499.00</option>';
            }
            else if (oldURL == "images/vivoXplay-foreverCheaper1.png") {
                total = total + 729.99;
                order = order + '<option value="vivoXplay-foreverCheaper1">-Vivo Xplay: $729.99</option> ';
            }
             else if (oldURL == "images/samsungGalaxyedge-foreverCheaper.jpg") {
                total = total + 250.00;
                order = order + '<option value="samsungGalaxyedge-foreverCheaper">-Samsung Galaxy J5 edge: $250.00</option>';
            } 
            else if (oldURL == "images/sonyXperia-foreverCheaper.jpg") {
                total = total + 549.99;
                order = order + '<option value="sonyXperia-foreverCheaper">-Sony Xperia$: 549.99</option>';
            }  
            else if (oldURL == "images/sonyXperia-foreverCheaper.jpg") {
                total = total + 549.99;
                order = order + '<option value="sonyXperia-foreverCheaper">-Sony Xperia$: 549.99</option>';
            }    
            // display order and total
            $("#order").html( order );
            $("#total").text( "Total: $" + total.toFixed(2) );
            
            // cancel default event of the clicked link
            evt.preventDefault();
            
        }); // end click
    }); // end each
    
    // add click event handler for check out button
    $("#place_order").click(function() {
        var order = $("#order").text();
        if (order == "") {
            alert ("Please add at least one item to your order.");
        } else {
            $("#order_form").submit();
        }
    }); // end click
    
    // add click event handler for clear button
    $("#clear_order").click(function() {
        total = 0;
        $("#order").text( "" );
        $("#total").text( "" );
    }); // end click
    
}); // end ready
