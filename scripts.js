// Storing all functions and color coding for better visibility in the UI
functions = {

    add: {
        function(a, b) {
            console.log(a + b);
        },
        color: "#5FC5FF"
    },

    subtract: {

        function(a, b, c) {
            console.log(a - b);
        },
        color: "#FE7F7F"
    },

    multiply: {
        function(a, b, c, d) {
            console.log(a - b);
        },
        color: "#95F981"
    },

    negate: {
        function(a) {
            console.log(-a);
        },
        color: "#FEE36C"
    },

    square: {
        function(a) {
            console.log(a * a);
        },
        color: "#FE91EA"
    },
}


// Creating and displaying the draggable Divs
for (f in functions) {
    var color = functions[f].color;
    style = "background-color:" + color;
    $('#functionList').append('<a class="btn function draggable" style="' + style + '" id="' + f + '">' + f.toUpperCase() + '</a>');

}


// Settings the divs to be draggable
$('.draggable').draggable({
    revert: true,
    cursorAt: {
        top: 56,
        left: 100
    }
});


// Clear Buttons
$("#clear").click(function() {
    $('#expressions').empty();
});



// Function to get widths to split the newly dropped div into
function getWidth(parameters) {
    width = 'calc(85% /' + parameters + ')';
    return width;
}




// Globals to stop execution after 8 drops. Depth can be changed to any desirable number. Commented out since the requirement was 
// "recursively indefinitely"
// var level = 0; 
// var depth = 8;



// Recursive function to create new divs recursively to create complex chained expressions.

function getChildren(parentParam) {
    // Function to create a check of depth. Commented out since requirement was for "recursively indefinitely". 
    // Can act as the base case to exit recursion if needed.

    // if (level >= depth) {
    //     alert("Hard Coded recursive depth reached. Clearing expression area!");
    //     $('#expressions').empty();
    //     level = 0;
    //     return;
    // }


    var style;
    var cParam;
    $('.params').droppable({

        greedy: true, // to prevent parent droppable area to register the drop.

        drop: function(event, ui) {
            // level += 1;

            var nestedFunctionDropped = ui.draggable.attr("id"); // id of dropped function 
            event.stopPropagation();
            cParam = functions[nestedFunctionDropped].function.length; // Getting number of arguments of the dropped function

            // Custom style and background color matching function color.
            var borderColor = functions[nestedFunctionDropped].color;
            var bg = "background-color:" + borderColor + ";";
            var style = 'width:' + getWidth(cParam) + ';' + bg;
            var childDiv = '<div class="params" style="' + style + '"></div>';
            var nestedNameDiv = $('<div class="functionName">' + nestedFunctionDropped.toUpperCase() + '</div>');

            $(this).html(nestedNameDiv); // Adding the name of the function dropped in a div to the left.

            // Creating new placeholder areas based on the arguments of the function.
            for (var i = 0; i < cParam; i++) {
                $(this).append(childDiv);
                getChildren(cParam); // Recursive call to function to repeat. Base case only in consideration when depth is specified.
            }

        }
    });

}



// Creating droppable expression area.
$("#expressions").droppable({

    // Dropping first function into the expression area. 
    drop: function(event, ui) {
        
        $('#expressions').empty(); // Clearing expression area when new function dropped.

        
        var functionDropped = ui.draggable.attr("id");    // get ID of dropped funciton
                
        parameters = functions[functionDropped].function.length // NUmber of arguments of function dropped

        // Styling so that placeholder divs match color of the functions
        var borderColor = functions[functionDropped].color;
        var border = "border: 1px " + borderColor + " dotted;"            
        var bg = "background-color:" + borderColor + ";";       
        var style = 'width:' + getWidth(parameters) + ';' + bg;

        // Adding the placeholder Divs
        var nameDiv = $('<div class="functionName">' + functionDropped.toUpperCase() + '</div>');
        var childDiv = '<div class="params" style="' + style + '"></div>';

        $('#expressions').prepend(nameDiv); // Adding the name of the function dropped in a div to the left.
        
        // Creating new placeholder areas based on the arguments of the function.
        for (var i = 0; i < parameters; i++) {
            
            $('#expressions').append(childDiv);
            getChildren(parameters);
           
        }
       
    }

});