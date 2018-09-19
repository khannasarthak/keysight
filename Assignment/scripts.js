console.log("Connected");

functions = {
    add: function(a, b) {
        console.log(a + b);
    },

    subtract: function(a, b, c) {
        console.log(a - b);
    },

    multiply: function(a, b, c, d) {
        console.log(a - b);
    },

    negate: function(a) {
        console.log(-a);
    },

    square: function(a) {
        console.log(a * a);
    },

    root: function(a) {
        console.log(a * a);
    }


}



for (f in functions) {
    //$('#functionList').append('<div class="col-md-3 function" id="' + f + '">' + f + '</div>');
    $('#functionList').append('<div class="btn btn-outline-primary function draggable" id="' + f + '">' + f.toUpperCase() + '</div>');
}

$('.draggable').draggable({
    revert: true,
    cursorAt: {
        top: -5,
        left: -5
    }
});

$("#clear").click(function() {
    $('#expressions').empty();
});


$("#expressions").droppable({

    drop: function(event, ui) {
        $('#expressions').html('');
        var functionDropped = ui.draggable.attr("id");
        console.log("DROOPPED! " + functionDropped);
        $('#expressions').prepend('<div class="functionName"><p>' + functionDropped.toUpperCase() + '</p></div>');
        // console.log(functions[draggableId](5,7));
        parameters = functions[functionDropped].length
        console.log("Parameters: " + parameters);
        for (var i = 0; i < parameters; i++) {

            // $('#expressions').append('<div class="params" style="min-width=' + 100 / parameters + '%"></div>');
            $('#expressions').append('<div class="params"></div>');
        }
        parameterWidth = String(94 / parameters) + '%';
        console.log(parameterWidth);
        $('.params').width(parameterWidth);

        // $('#output').text();
    }
});

$(document).on("click", ".params", function(event) {
    event.stopPropagation();
    console.log("Clicked!");
    var copylast = $(this).parents()[0].outerHTML;
    console.log(copylast);
    $(this).empty().append(copylast);   
});