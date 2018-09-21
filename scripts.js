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
            console.log(a*a);
        },
        color: "#FE91EA"
    }


}



for (f in functions) {
    //$('#functionList').append('<div class="col-md-3 function" id="' + f + '">' + f + '</div>');
    var color = functions[f].color;
    style="background-color:"+color;
    $('#functionList').append('<a class="btn function draggable" style="'+style+'" id="' + f + '">' + f.toUpperCase() + '</a>');

}



$('.draggable').draggable({
    revert: true,
    cursorAt: {
        top: 56,
        left: 100
    }
});

$("#clear").click(function() {
    $('#expressions').empty();
});




function getWidth(parameters) {

    width = 'calc(85% /' + parameters + ')';


    // var a = $('.params').parent().width();
    // console.log(a)
    return width;
}

var level = 0;

function getChildren(parentParam) {

    if (level > 8) {
        alert("Hard Coded recursive depth reach, clearing screen");
        $('#expressions').empty();
        level = 0;
        return;
    }
    console.log("---LEVEL->" + level);
    var style;
    // var childDiv = '<div class="params" style="'+style+'"></div>';
    // var childDiv = '<div class="params"></div>';
    // console.log(childDiv);
    var cParam;
    // console.log("1_"+cParam);
    $('.params').droppable({
        greedy: true,

        drop: function(event, ui) {
            level += 1;
            // console.log("test");
            var nestedFunctionDropped = ui.draggable.attr("id");
            // console.log(nestedFunctionDropped);
            
            event.stopPropagation();
            // console.log($(this));
            // $(this).empty();
            
            cParam = functions[nestedFunctionDropped].function.length;
            // console.log("2_"+cParam)
            // console.log("Parameters: " + parameters);
            var borderColor =  functions[nestedFunctionDropped].color;
            // var border ="border: 1px "+borderColor+ " dotted;"
            var bg="background-color:"+borderColor+";";
            // var textColor = "color:"+borderColor
            var nestedNameDiv = $('<div class="functionName">' + nestedFunctionDropped.toUpperCase() + '</div>');
            // var style = 'width:' + getWidth(cParam) + ';border: 1px '+borderColor+ ' dotted;'
            var style = 'width:' + getWidth(cParam) + ';'+ bg;
            console.log("---LEVEL->" + level + '--' + style);
            var childDiv = '<div class="params" style="' + style + '"></div>';
            // console.log()
            $(this).html(nestedNameDiv);
            for (var i = 0; i < cParam; i++) {
                // console.log("in loop")
                $(this).append(childDiv);
                // $(this).append()

                getChildren(cParam);
            }

        }

        // parameters = functions[func].length


    });
    // childWidth = getWidth(cParam);
    // $('.params').width(childWidth);

    // var childWidth = getWidth(parentParam);
    //     $('.params').width(childWidth);
    // console.log("3_"+cParam)
    // return cParam;
}

// 
$("#expressions").droppable({

    drop: function(event, ui) {
        // level+=1;
        $('#expressions').html('');
        id = event.target.id;

        var functionDropped = ui.draggable.attr("id");

        // console.log("DROOPPED! " + functionDropped);
        
        // var childDiv = '<div class="params"></div>';
        // var nchildDiv = $('<div class="params"></div>');
        var childParam;
        // console.log("4_"+childParam)


        $
        // console.log(functions[draggableId](5,7));
        parameters = functions[functionDropped].function.length
        
        var borderColor =  functions[functionDropped].color;
        var border ="border: 1px "+borderColor+ " dotted;"
        // var textColor = "color:"+borderColor
        // console.log(border);
        var bg="background-color:"+borderColor+";";
        var nameDiv = $('<div class="functionName">' + functionDropped.toUpperCase() + '</div>');
        // console.log(nameDiv)
        // var style = 'width:' + getWidth(parameters) + ';border: 1px '+borderColor+ ' dotted;'
        var style = 'width:' + getWidth(parameters) + ';'+ bg;

        console.log(style);
        var childDiv = '<div class="params" style="' + style + '"></div>';
        $('#expressions').prepend(nameDiv);
        // console.log("Parameters: " + parameters);
        for (var i = 0; i < parameters; i++) {
            // $('#expressions').append('<div class="params" style="min-width=' + 100 / parameters + '%"></div>');

            $('#expressions').append(childDiv);
            getChildren(parameters);
            // console.log(console.log("5_"+childParam));





        }
        // console.log(childParam);
        // childWidth = getWidth(parameters);
        // $('.params').width(childWidth);

    }

});