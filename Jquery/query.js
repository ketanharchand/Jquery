
$(document).ready(function(){
    $("#hide").click(function(){
      $("p").hide();
    });
    $("#show").click(function(){
      $("p").show();
    });
     $("#button").click(function(){
      $("p").toggle();
    });
      $("#btn2").click(function(){
      $("p").css("background-color","red");
    });
     $("#btn3").click(function(){
      $("p").css("background-color","blue");
    });
  });
  