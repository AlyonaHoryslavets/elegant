$( function() {
    $( "#dialog" ).dialog({
        autoOpen: false,
        show: {
            effect: "blind",
            duration: 1000
        },
        hide: {
            effect: "explode",
            duration: 500
        }
    });

    $( "#opener" ).on( "click", function() {
        $( "#dialog" ).dialog( "open" );
    });
} );
$(document).mouseup(function (e){
    var modalctr = $("body");
    var modal = $(".ui-dialog");
    if (!modal.is(e.target) && modal.has(e.target).length === 0){
        modal.hide();
    }
});
$( function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        navText: [ '', ' ' ],

        responsive:{
            0:{
                items:1
            },

            1000:{
                items:1
            }
        }
    });
});





