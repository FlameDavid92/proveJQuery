function test() {
    $('p').text('Ciao sono il testo sostitutivo');
}

/*
$(document).ready(function () {
    alert("Document Ready");
    $('#main').html('Ciao sono Davide Document');

    test();
    console.log($('p').text());
});*/


/*Forma nuova del document ready.*/

$(function(){
    /*$('#mydiv').css({'background-color':'green'});*/
    $('div.bordered').animate({'width':'1080px', 'background-color':'red'}, 5000);
    $('div.bordered').animate({'width':'200px', 'background-color':'green'}, 5000, function(){
        alert("Animazione terminata!");
        $(this).hide(4000);
    });
}); 


$(window).on('load', function () {
    /*alert("Window OnLoad");*/
    $('#main').html('Ciao sono Davide Window');
});

/*jQuery no conflict*/
//var $davide = jQuery.noConflict();
