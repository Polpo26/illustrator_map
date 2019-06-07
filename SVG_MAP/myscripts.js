var regions=[
    {
        "region_name": "Charleston County West",
        "region_code": "Charleston_County_West",
        "properties": 100
    },
    {
        "region_name": "Johns Island",
        "region_code": "Johns_Island",
        "properties": 200
    },
    {
        "region_name": "West Ashley",
        "region_code": "West_Ashley",
        "properties": 300
    },
    {
        "region_name": "Historic Charleston",
        "region_code": "Historic_Charleston",
        "properties": 400
    },
   
    {
        "region_name": "North Charleston",
        "region_code": "North_Charleston",
        "properties": 500
    },
    
    {
        "region_name": "Charleston County West",
        "region_code": "Charleston_County_West",
        "properties": 100
    },
    
    
    {
        "region_name": "Folly Island",
        "region_code": "Folly_Island",
        "properties": 200
    },
    {
        "region_name": "Morris Island",
        "region_code": "Morris_Island",
        "properties": 200
    },
    {
        "region_name": "James Island",
        "region_code": "James_Island",
        "properties": 200
    },
    {
        "region_name": "Dorchester County",
        "region_code": "Dorchester_County",
        "properties": 300
    },
    {
        "region_name": "Wadmalaw Island",
        "region_code": "Wadmalaw_Island",
        "properties": 400
    },
    {
        "region_name": "Charleston County West",
        "region_code": "Charleston_County_West",
        "properties": 100
    },
    {
        "region_name": "Grey 3",
        "region_code": "Grey_3",
        "properties": 200
    },
    {
        "region_name": "Grey 2",
        "region_code": "Grey_2",
        "properties": 300
    },
    {
        "region_name": "Grey 1",
        "region_code": "Grey_1",
        "properties": 400
    },
    {
        "region_name": "Seabrook Island",
        "region_code": "Seabrook_Island",
        "properties": 100
    },
    {
        "region_name": "Kiawah Island",
        "region_code": "Kiawah_Island",
        "properties": 200
    },
    {
        "region_name": "Hanahan",
        "region_code": "Hanahan",
        "properties": 300
    },
    {
        "region_name": "Berkeley County",
        "region_code": "Berkeley_County",
        "properties": 400
    },
    {
        "region_name": "Seabrook Island",
        "region_code": "Seabrook_Island",
        "properties": 100
    },
    {
        "region_name": "Mt. Pleasant",
        "region_code": "Mt_Pleasant",
        "properties": 200
    },
    {
        "region_name": "Grey_Est",
        "region_code": "Grey_Est",
        "properties": 300
    },
    {
        "region_name": "Seabrook Island",
        "region_code": "Seabrook_Island",
        "properties": 100
    },
    {
        "region_name": "Sullivan Island",
        "region_code": "Sullivan_Island",
        "properties": 200
    },
    {
        "region_name": "Isle Of Palms",
        "region_code": "Isle_Of_Palms",
        "properties": 300
    },
];


var temp_array= regions.map(function(item){
    return item.properties;
});
var highest_value = Math.max.apply(Math, temp_array);

$(function() {

    for(i = 0; i < regions.length; i++) {

        $('#'+ regions[i].region_code)
        .css({'fill': 'rgba(11, 104, 170,' + regions[i].properties/highest_value +')'})
        .data('region', regions[i]);
    }

    $('.map g').mouseover(function (e) {
        var region_data=$(this).data('region');
        $('<div class="info_panel">'+
            region_data.region_name + '<br>' +
          	'Properties: ' + region_data.properties.toLocaleString("en-UK") +
          	'</div>'
         )
        .appendTo('body');
    })
    .mouseleave(function () {
        $('.info_panel').remove();
    })
    .mousemove(function(e) {
        var mouseX = e.pageX, //X coordinates of mouse
            mouseY = e.pageY; //Y coordinates of mouse

        $('.info_panel').css({
            top: mouseY-50,
            left: mouseX - ($('.info_panel').width()/2)
        });
    });

});

function Charleston_County_West() {
  window.open("https://www.google.com", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
};
function Johns_Island() {
  window.open("https://www.wikipedia.org/", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
};
function West_Ashley() {
  window.open("https://www.w3.org/", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
};
function Historic_Charleston() {
  window.open("https://jquery.com/", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
};
function North_Charleston() {
  window.open("https://www.javascript.com/", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
};


function James_Island() {
  window.open("https://www.w3.org/", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
};
function Folly_Island() {
  window.open("https://www.w3.org/", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
};
function Morris_Island() {
  window.open("https://www.w3.org/", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
};
function Dorchester_County() {
  window.open("https://jquery.com/", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
};
function Wadmalaw_Island() {
  window.open("https://www.javascript.com/", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
};



function Grey_3() {
  window.open("https://www.google.com", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
};
function Grey_2() {
  window.open("https://www.wikipedia.org/", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
};
function Grey_1() {
  window.open("https://www.w3.org/", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
};
function Seabrook_Island() {
  window.open("https://jquery.com/", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
};
function Kiawah_Island() {
  window.open("https://www.javascript.com/", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
};


function Hanahan() {
  window.open("https://www.google.com", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
};
function Berkeley_County() {
  window.open("https://www.wikipedia.org/", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
};
function Mt_Pleasant() {
  window.open("https://www.w3.org/", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
};
function Grey_Est() {
  window.open("https://jquery.com/", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
};
function Sullivan_Island() {
  window.open("https://www.javascript.com/", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
};
function Isle_Of_Palms() {
  window.open("https://www.javascript.com/", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
};
