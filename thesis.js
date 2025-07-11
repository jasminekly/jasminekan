// mouseover links

$(document).ready(function(){
  $("#project1").mouseover(function(){
    $("#project1").css("background-color", "black");
    $("#1text").css("color", "white");
  });
  $("#project1").mouseout(function(){
    $("#project1").css("background-color", "white");
    $("#1text").css("color", "black");
  });
});

$(document).ready(function(){
  $("#project2").mouseover(function(){
    $("#project2").css("background-color", "black");
    $("#2text").css("color", "white");
  });
  $("#project2").mouseout(function(){
    $("#project2").css("background-color", "white");
    $("#2text").css("color", "black");
  });
});

$(document).ready(function(){
  $("#project3").mouseover(function(){
    $("#project3").css("background-color", "black");
    $("#3text").css("color", "white");
  });
  $("#project3").mouseout(function(){
    $("#project3").css("background-color", "white");
    $("#3text").css("color", "black");
  });
});

$(document).ready(function(){
  $("#project4").mouseover(function(){
    $("#project4").css("background-color", "black");
    $("#4text").css("color", "white");
  });
  $("#project4").mouseout(function(){
    $("#project4").css("background-color", "white");
    $("#4text").css("color", "black");
  });
});

$(document).ready(function(){
  $("#project5").mouseover(function(){
    $("#project5").css("background-color", "black");
    $("#5text").css("color", "white");
  });
  $("#project5").mouseout(function(){
    $("#project5").css("background-color", "white");
    $("#5text").css("color", "black");
  });
});

$(document).ready(function(){
  $("#project6").mouseover(function(){
    $("#project6").css("background-color", "black");
    $("#6text").css("color", "white");
  });
  $("#project6").mouseout(function(){
    $("#project6").css("background-color", "white");
    $("#6text").css("color", "black");
  });
});

$(document).ready(function(){
  $("#project7").mouseover(function(){
    $("#project7").css("background-color", "black");
    $("#7text").css("color", "white");
  });
  $("#project7").mouseout(function(){
    $("#project7").css("background-color", "white");
    $("#7text").css("color", "black");
  });
});

$(document).ready(function(){
  $("#project8").mouseover(function(){
    $("#project8").css("background-color", "black");
    $("#8text").css("color", "white");
  });
  $("#project8").mouseout(function(){
    $("#project8").css("background-color", "white");
    $("#8text").css("color", "black");
  });
});

$(document).ready(function(){
  $("#project9").mouseover(function(){
    $("#project9").css("background-color", "black");
    $("#9text").css("color", "white");
  });
  $("#project9").mouseout(function(){
    $("#project9").css("background-color", "white");
    $("#9text").css("color", "black");
  });
});

$(document).ready(function(){
  $("#project10").mouseover(function(){
    $("#project10").css("background-color", "black");
    $("#10text").css("color", "white");
  });
  $("#project10").mouseout(function(){
    $("#project10").css("background-color", "white");
    $("#10text").css("color", "black");
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
  $("#print").mouseover(function(){
    $("#print").css("background-color", "#FF6FF9");
    $("#print").css("border-color", "#FF6FF9");
    $(".printtext").css("color", "white");
    $(".printflower").css("color", "white");
  });
  $("#print").mouseout(function(){
    $("#print").css("background-color", "white");
    $(".printtext").css("color", "black");
    $("#print").css("border-color", "black");
    $(".printflower").css("color", "black");
  });
});

$(document).ready(function(){
  $("#web").mouseover(function(){
    $("#web").css("background-color", "#30B900");
    $("#web").css("border-color", "#30B900");
    $(".webtext").css("color", "white");
    $(".webflower").css("color", "white");
  });
  $("#web").mouseout(function(){
    $("#web").css("background-color", "white");
    $("#web").css("border-color", "black");
    $(".webtext").css("color", "black");
    $(".webflower").css("color", "black");
  });
});

$(document).ready(function(){
  $("#fibre").mouseover(function(){
    $("#fibre").css("background-color", "#FFCA0E");
    $("#fibre").css("border-color", "#FFCA0E");
    $(".fibretext").css("color", "white");
    $(".fibreflower").css("color", "white");
  });
  $("#fibre").mouseout(function(){
    $("#fibre").css("background-color", "white");
    $("#fibre").css("border-color", "black");
    $(".fibretext").css("color", "black");
    $(".fibreflower").css("color", "black");
  });
});

// video

$(document).ready(function(){
  $(".video").mouseover(function(){
    $(this).get(0).pause();
  });
  $(".video").mouseout(function(){
    $(this).get(0).play();
  });
});


// individual spreads

$(".draggable").draggable();

$('.draggable').mousedown(function(){
    $('.front').removeClass('front');
    $(this).addClass('front');
});

