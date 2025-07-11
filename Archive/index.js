// mouseover links

$(document).ready(function(){
    $("#ig").mouseover(function(){
      $("#ig").css("background-color", "black");
      $("#igtext").css("color", "white");
    });
    $("#ig").mouseout(function(){
      $("#ig").css("background-color", "white");
      $("#igtext").css("color", "black");
    });
  });
  
  $(document).ready(function(){
    $("#email").mouseover(function(){
      $("#email").css("background-color", "black");
      $("#emailtext").css("color", "white");
    });
    $("#email").mouseout(function(){
      $("#email").css("background-color", "white");
      $("#emailtext").css("color", "black");
    });
  });
  
  $(document).ready(function(){
    $("#fibre").mouseover(function(){
      $("#fibre").css("background-color", "black");
      $(".fibretext").css("color", "white");
      $(".fibreflower").css("color", "white");
    });
    $("#fibre").mouseout(function(){
      $("#fibre").css("background-color", "white");
      $(".fibretext").css("color", "black");
      $(".fibreflower").css("color", "black");
    });
  });
  
  $(document).ready(function(){
    $("#type").mouseover(function(){
      $("#type").css("background-color", "black");
      $(".typetext").css("color", "white");
      $(".typeflower").css("color", "white");
    });
    $("#type").mouseout(function(){
      $("#type").css("background-color", "white");
      $(".typetext").css("color", "black");
      $(".typeflower").css("color", "black");
    });
  });
  
  $(document).ready(function(){
    $("#print").mouseover(function(){
      $("#print").css("background-color", "black");
      $(".printtext").css("color", "white");
      $(".printflower").css("color", "white");
    });
    $("#print").mouseout(function(){
      $("#print").css("background-color", "white");
      $(".printtext").css("color", "black");
      $(".printflower").css("color", "black");
    });
  });
  
  $(document).ready(function(){
    $("#web").mouseover(function(){
      $("#web").css("background-color", "black");
      $(".webtext").css("color", "white");
      $(".webflower").css("color", "white");
    });
    $("#web").mouseout(function(){
      $("#web").css("background-color", "white");
      $(".webtext").css("color", "black");
      $(".webflower").css("color", "black");
    });
  });
  
  $(document).ready(function(){
    $("#fibre").mouseover(function(){
      $("#fibre").css("background-color", "black");
      $(".fibretext").css("color", "white");
      $(".fibreflower").css("color", "white");
    });
    $("#fibre").mouseout(function(){
      $("#fibre").css("background-color", "white");
      $(".fibretext").css("color", "black");
      $(".fibreflower").css("color", "black");
    });
  });
  
  $(document).ready(function(){
    $("#name").mouseover(function(){
      $("#name").css("background-color", "black");
      $("#nametext").css("background", "-webkit-linear-gradient(right, #0E9AFF, #30B900, #FF6FF9, #FFCA0E)");
      $("#nametext").css("-webkit-background-clip", "text");
      $("#nametext").css("-webkit-text-fill-color", "transparent");
    });
    $("#name").mouseout(function(){
      $("#name").css("background-color", "white");
      $("#nametext").css("color", "black");
      $("#nametext").css("background", "none");
      $("#nametext").css("-webkit-background-clip", "border-box");
      $("#nametext").css("-webkit-text-fill-color", "black");
    });
  });
  
  $("#phonename").click(function() {
      $(".row2").toggle();
      $(".row3").toggle();
  });