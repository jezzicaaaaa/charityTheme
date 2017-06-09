$( document ).ready(function() {
    $( ".cross" ).hide();
    $( ".menu" ).hide();
    $( ".hamburger" ).click(function() {
        $( ".hamburger" ).hide();
        $( ".menu" ).slideToggle( "fast", function() {
            $( ".cross" ).show();
        });
    });
    $( ".cross" ).click(function() {
        $( ".cross" ).hide();
        $( ".menu" ).slideToggle( "fast", function() {
            $( ".hamburger" ).show();
        });
    });
});