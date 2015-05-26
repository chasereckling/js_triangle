var triangle = function(side1, side2, side3) {

  if (side1 === side2 && side1 === side3 && side2 === side3) {
    return "It is an equalateral triangle";
  } else if (side1 === side2 && side3 <= side1 + side2 || side1 === side3 && side2 <= side1 + side3 || side2 === side3 && side1 <= side2 + side3) {
    return "It is an isoscles triangle";
  } else if (side1 !== side2 && side1 !== side3 && side2 !== side3 && side2 <= side1 + side3 || side2 === side3 && side1 <= side2 + side) {
    return 'It is a scalene triangle';
  } else {
    return "It is not a triangle";
 }
};

$(document).ready(function() {
  $("form#triangle_form").submit(function(event) {
    var side1 = parseInt($("input#side1").val());
    var side2 = parseInt($("input#side2").val());
    var side3 = parseInt($("input#side3").val());
    var result = triangle(side1, side2, side3);
    
    $(".result").text(result);
     event.preventDefault();

  });
});
