console.log("Your index.js file is loaded correctly!");
$(".myStory").on("click", function(){
    console.log("you clicked on my hero image ");
});
$( window ).on( "load", function() {
$(".heroimage.hero").fadeIn(3000).delay("slow");
$(".myStory").fadeIn(3000).delay("slow");
$("#button4").fadeIn(3000).delay("slow");
});
