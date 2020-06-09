$("form").submit(function(e) {

    e.preventDefault();



});

/*$(document).ready(function() {
    $("button").click(function() {
        $("#myform").remove();
    });
});*/

//$('body').html($('<div>', {class: 'box'}));

/*$(document).ready(function() {
    var newDiv = $('<div>'); // definition of the new element
    $('article').prepend(newDiv); // insert the new element before the <li> tag
});*/

$(document).ready(function() {
   // var newDiv = $('<div>');
    for (var i = 0; i < 5; i++) {
        var newDiv = $('<div class="box">');
        $('article').prepend(newDiv);
    }
});