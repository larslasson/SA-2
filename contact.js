
    $('.input').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })    
    })

    

    function formValidation() {
        var name = document.getElementById('contact-name');
        var email = document.getElementById('contact-email');
        var message = document.getElementById('contact-message');
        
    
        if (name.value.length == 0) {
            document.getElementById('head').innerText = "* All fields are mandatory *"; 
            name.focus();
            return false;
            }
    
        if (inputAlphabet(name, "* For your name please use letters only *")) {
        if (emailValidation(email, "* Please enter a valid email address ex:  lorem@ipsum.com *")) {
        if (lengthMessage(message, 10, 200)) {
    
        return true;
        }
        }
        }  
        return false;
    }
    
    function inputAlphabet(inputtext, alertMsg) {
        var alphaExp = /^[a-zA-Z]+$/;
        if (inputtext.value.match(alphaExp)) {
        return true;
        } else {
        document.getElementById('p1').innerText = alertMsg; 
        inputtext.focus();
        return false;
        }
        }
    
    function emailValidation(inputtext, alertMsg) {
        var emailExp = /^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;
        if (inputtext.value.match(emailExp)) {
        return true;
        } else {
        document.getElementById('p2').innerText = alertMsg; // This segment displays the validation rule for email.
        inputtext.focus();
        return false;
        }
        }
    
    function lengthMessage(inputtext, min, max) {
        var uInput = inputtext.value;
        if (uInput.length >= min && uInput.length <= max) {
        return true;
        } else {
        document.getElementById('p3').innerText = "* Please enter between " + min + " and " + max + " characters *";
        inputtext.focus();
        return false;
        }
        }
    
    