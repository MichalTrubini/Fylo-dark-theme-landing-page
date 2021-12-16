//EMAIL VALIDATION

(function () {
    let submitButton = document.querySelector('button');
    
        submitButton.addEventListener('click', function(){
            let input = document.querySelector('input');
            let errorMessage = document.querySelector('.error-message');
          
            if(!input.validity.valid) {
                errorMessage.classList.add('error-message-visible');
            } 
            
            input.addEventListener('input',function(){
                if(input.validity.valid) {
                    errorMessage.classList.remove('error-message-visible');
                }
            });
        })      
})();

//prevent the browser from showing default error bubble / hint

document.addEventListener('invalid', (function(){
    return function(e) {
      e.preventDefault();
    };
  })(), true);