
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

    

    function formValidator(){    
        var  name = document.getElementById('contact-name');
         var message = document.getElementById('contact-message');
         var email = document.getElementById('contact-email');
         
         
         if(isAlphabet(name, "Name field cannot be blank")){
            if(isAlphabet(message, "Message field cannot be blank")){

                         if(emailValidator(email, "Please enter a correct email address")){
                                 return true;
                             }

                     }
                 }
             
         
         
         
         return false;
         
     }
     
     function notEmpty(elem, helperMsg){
         if(elem.value.length == 0){
             alert(helperMsg);
             elem.focus();
             return false;
         }
         return true;
     }
     
     function isAlphabet(elem, helperMsg){
         var alphaExp = /^[a-zA-Z]+$/;
         if(elem.value.match(alphaExp)){
             return true;
         }else{
             alert(helperMsg);
             elem.focus();
             return false;
         }
     }
     
     
     function emailValidator(elem, helperMsg){
         var emailExp = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
         if(elem.value.match(emailExp)){
             return true;
         }else{
             alert(helperMsg);
             elem.focus();
             return false;
         }
     }
     
     document.getElementById("submitContact").addEventListener("click", formValidator);