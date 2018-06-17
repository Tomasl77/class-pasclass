/*$('.cercle').click(function(){
	$('.cc').not(this).toggleClass('vide');
  $(".full, .vide").toggleClass('vide full');
});*/

$("#ccolor").click(function() {
	$(".cc").removeClass("full")
	$(".cc").addClass("vide");
});

$("#again").click(function() {
	$(".cc").removeClass("vide");
	$(".cc").addClass("full");
});

$(".cercle").click(function() {
  $(this).toggleClass("vide full");
});

/*$(".carre").click(function(){
	$(this).toggleClass("vide full");

});*/
/*$(".carre").click(function(){

if ($(this).hasClass("row1") ) $(".row1").toggleClass('vide full');
   else if ( $(this).hasClass('row2') )   $(".row2").toggleClass('vide full');
   else if ( $(this).hasClass('row3') )   $(".row3").toggleClass('vide full');
   else if ( $(this).hasClass('row4') )   $(".row4").toggleClass('vide full');
   else if ( $(this).hasClass('row5') )   $(".row5").toggleClass('vide full');});
*/
$(".losange").click(function(){
	 $(".row3, .col3").toggleClass('vide full');
});


$(".carre").click(function(){

if ($(this).hasClass("row1") ) $(".row1").toggleClass('vide full');
   else if ( $(this).hasClass('row2') )   $(".row2").toggleClass('vide full');
   else if ( $(this).hasClass('row3') )   $(".row3").toggleClass('vide full');
   else if ( $(this).hasClass('row4') )   $(".row4").toggleClass('vide full');
   else if ( $(this).hasClass('row5') )   $(".row5").toggleClass('vide full');});