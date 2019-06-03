function toggleDisplay1() {
    var y = document.getElementById("accordion1");
    y.style.display ="block";
    var x = document.getElementById("accordion_txt1");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  
  document.getElementById("accordion1").addEventListener("click", toggleDisplay1);
  
  
  function toggleDisplay2() {
    var y = document.getElementById("accordion2");
    y.style.display ="block";
    var x = document.getElementById("accordion_txt2");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  
  document.getElementById("accordion2").addEventListener("click", toggleDisplay2);
  
  
  function toggleDisplay3() {
    var y = document.getElementById("accordion3");
    y.style.display ="block";
    var x = document.getElementById("accordion_txt3");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  
  document.getElementById("accordion3").addEventListener("click", toggleDisplay3);

  var txtStrings = ['We are going to Mars...', 'Come with us?'];

        textSequence(0);
        function textSequence(i) {

            if (txtStrings.length > i) {
                setTimeout(function() {
                    document.getElementById("intro_txt").innerHTML = txtStrings[i];
                    textSequence(++i);
                }, 4000); // 1 second (in milliseconds)

            } else if (txtStrings.length == i) { // Loop
                textSequence(0);
            }

        }