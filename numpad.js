$(function() {
    var container = $(".numpad");
    var inputCount = 4;

    // Generate the input boxes
    // Generates the input container
    container.append("<div class='inputBoxes'></div>");
    var inputBoxes = $(".inputBoxes");

    // Generates the boxes
    for(var i = 1; i < inputCount + 1; i++){
      inputBoxes.append("<input type='password' maxlength=1 id='" + i + "' />");
    }

    container.append("<div class='numbers'></div>")
    var numbers = $(".numbers");
    // Generate the numbers
    for(var i = 1; i <= 9; i++){
      numbers.append("<button class='number' type='button' name='" + i + "' onclick='addNumber(this)'><span class='pin_font'>" + i + "</span></button>");
    }

    // Generate last row

    // Delete button
    numbers.append('<button class="number" type="button" name="del" onclick="deleteAll()"><span class="pin_font"><i class="fa fa-times" aria-hidden="true"></i></span></button>');
    // Zero
    numbers.append('<button class="number" type="button" name="0" onclick="addNumber(this)"><span class="pin_font">0</span></button>')
    // Backspace
    numbers.append('<button class="number" type="button" name="clear" onclick="removeNumber(this)"><span class="pin_font"><i class="fa fa-angle-double-left" aria-hidden="true"></i></span></button>');
    // Sum
    //numbers.append('<button class="number" type="button" name="SUM" onclick="sum()"><span class="pin_font">SUM</span></button>');
});

moveOnMax = function (field, nextFieldID) {
  if (field.value != '') {
      document.getElementById(nextFieldID).focus();
  }
}

addNumber = function (field) {
  if (!$("#1").val()){
    $("#1").val(field.name).addClass("dot");
  } else if (!$("#2").val()){
    $("#2").val(field.name).addClass("dot");
  } else if (!$("#3").val()){
    $("#3").val(field.name).addClass("dot");
  } else if (!$("#4").val()){
    $("#4").val(field.name).addClass("dot");
  }
}

deleteAll = function() {
  $("#1").val('').removeClass("dot");
  $("#2").val('').removeClass("dot");
  $("#3").val('').removeClass("dot");
  $("#4").val('').removeClass("dot");
}

removeNumber = function() {
  if ($('#4').val()) {
    $("#4").val('').removeClass("dot");
  } else if ($('#3').val()) {
    $("#3").val('').removeClass("dot");
  } else if ($('#2').val()) {
    $("#2").val('').removeClass("dot");
  } else if ($('#1').val()) {
    $("#1").val('').removeClass("dot");
  }
}

$(document).keyup(function (e) {
  if (e.keyCode == 8) {
    removeNumber();
  }
});

sum = function() {
  console.log($("#1").val() + $("#2").val() + $("#3").val() + $("#4").val());
}
