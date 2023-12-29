var header = document.getElementById("button-div");
var btns = header.getElementsByClassName("button-custom");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    // Remove "active" class from all buttons
    for (var j = 0; j < btns.length; j++) {
      btns[j].classList.remove("active");
    }
    
    // Add "active" class to the clicked button
    this.classList.add("active");
  });
}
