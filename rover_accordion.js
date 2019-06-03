function toggleDisplay1() {
    var y = document.getElementById("accordion_rover1");
    y.style.display ="block";
    var x = document.getElementById("accordion_rover_txt1");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  
  document.getElementById("accordion_rover1").addEventListener("click", toggleDisplay1);
  document.getElementById("circle1").addEventListener("click", toggleDisplay1);


  function toggleDisplay2() {
    var y = document.getElementById("accordion_rover2");
    y.style.display ="block";
    var x = document.getElementById("accordion_rover_txt2");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  
  document.getElementById("accordion_rover2").addEventListener("click", toggleDisplay2);
  document.getElementById("circle2").addEventListener("click", toggleDisplay2);


  function toggleDisplay3() {
    var y = document.getElementById("accordion_rover3");
    y.style.display ="block";
    var x = document.getElementById("accordion_rover_txt3");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  
  document.getElementById("accordion_rover3").addEventListener("click", toggleDisplay3);
  document.getElementById("circle3").addEventListener("click", toggleDisplay3);
