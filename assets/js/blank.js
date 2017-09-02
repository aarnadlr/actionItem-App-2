// Check off to-dos by clicking
$("ul").on("click", "li", function() {
  $(this).toggleClass("completed")
});

$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(750,function() {
    $(this).remove();
  });
  event.stopPropagation();
});

// SPECIFIC KEY PRESS LISTENER

$("input[type=text]").keypress(function(event) {
  // OBTAIN INPUT VALUE WHEN YOU HIT ENTER
  if (event.which === 13) {
    var todoText = $(this).val();
    $(this).val("");
    //SELECT UL AND APPEND NEW LI
    $("ul").append("<li><span><i class='fa fa-trash-o' aria-hidden='true'></i></span> "+todoText+"</li>")

  }
})
//APPEND = ADD NEW HTML CODE

$(".fa-plus").click(function() {
  $("input[type=text]").fadeToggle()
})