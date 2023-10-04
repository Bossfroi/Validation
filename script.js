   //nag set ako ng var at kinuha ko ang mga id sa forms
   var form = document.getElementById("form"); 
   var username = document.getElementById("name");
   var email = document.getElementById("email");
   var password = document.getElementById("password");
   var pass2 = document.getElementById("pass2");

   form.addEventListener("submit", (e) => {
       e.preventDefault();
       valid();
   });
   //nag set ako ng error para sa messege na tinarget ko sa class
   var setError = (element, message) => {
       var validation = element.parentElement;
       var errorElement = validation.querySelector(".validators");

       errorElement.textContent = innerHTML = message;
       validation.classList.add("error");
       validation.classList.remove("success");
   };

   var setSuccess = (element) => {  //nag set ako ng success para sa pag valid ng error same lang pero magkabaliktad ang validation.
       var validation = element.parentElement;
       var errorElement = validation.querySelector(".validators");

       errorElement.textContent = innerHTML = "";
       validation.classList.add("success");
       validation.classList.remove("error");
   };


    //para sa email nmn ginaya ko kay sir ang character validation nito para sa regular expression na
   var isValidEmail = (email) => { // ginamit dito ay parang isang pattern para sa pag-validate ng mga email address.
       var emailscharacters =
           /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
       return emailscharacters.test(String(email).toLowerCase());
   };

    //nag set ako nito para i retrieve ang mga values at i trim ito para gagawing kong validation ng input of fields
   var valid = () => {
       var usernameValue = username.value.trim();
       var emailValue = email.value.trim();
       var passwordValue = password.value.trim();
       var pass2Value = pass2.value.trim();

       switch (true) {   // Validate the username
           case usernameValue.length < 4:
               setError(username, "Username is 4 characters required");
               break;
           default:
               setSuccess(username);
               break;
       }

       switch (true) {   // Validate the emailvalue
           case emailValue === "":
               setError(email, "Email is required");
               break;
           case !isValidEmail(emailValue):
               setError(email, "Provide a valid email address");
               break;
           default:
               setSuccess(email);
               break;
       }
       switch (true) {   // Validate the passvaluee
           case passwordValue === "":
               setError(password, "Password is required");
               break;
           case passwordValue.length < 8:
               setError(password, "Password must be at least 8 characters");
               break;
           default:
               setSuccess(password);
               break;
       }
       switch (true) {    // Validate the 2ndpass
           case pass2Value === "": 
               setError(pass2, "Please confirm your password");
               break;
           case pass2Value !== passwordValue: 
               setError(pass2, "Passwords don't match");
               break;
           default:
               setSuccess(pass2);
               break;
       }

       // Check if all fields are successful, then show the success message
       if (username.parentElement.classList.contains("success") &&
           email.parentElement.classList.contains("success") &&
           password.parentElement.classList.contains("success") &&
           pass2.parentElement.classList.contains("success")) {
           alert("Successfully stored");
       }
   };   //nag set ako ng var at kinuha ko ang mga id sa forms
        var form = document.getElementById("form"); 
        var username = document.getElementById("name");
        var email = document.getElementById("email");
        var password = document.getElementById("password");
        var pass2 = document.getElementById("pass2");

        form.addEventListener("submit", (e) => {
            e.preventDefault();
            valid();
        });
        //nag set ako ng error para sa messege na tinarget ko sa class
        var setError = (element, message) => {
            var validation = element.parentElement;
            var errorElement = validation.querySelector(".validators");

            errorElement.textContent = innerHTML = message;
            validation.classList.add("error");
            validation.classList.remove("success");
        };
    
        var setSuccess = (element) => {  //nag set ako ng success para sa pag valid ng error same lang pero magkabaliktad ang validation.
            var validation = element.parentElement;
            var errorElement = validation.querySelector(".validators");

            errorElement.textContent = innerHTML = "";
            validation.classList.add("success");
            validation.classList.remove("error");
        };


         //para sa email nmn ginaya ko kay sir ang character validation nito para sa regular expression na
        var isValidEmail = (email) => { // ginamit dito ay parang isang pattern para sa pag-validate ng mga email address.
            var emailscharacters =
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return emailscharacters.test(String(email).toLowerCase());
        };
    
         //nag set ako nito para i retrieve ang mga values at i trim ito para gagawing kong validation ng input of fields
        var valid = () => {
            var usernameValue = username.value.trim();
            var emailValue = email.value.trim();
            var passwordValue = password.value.trim();
            var pass2Value = pass2.value.trim();

            switch (true) {   // Validate the username
                case usernameValue.length < 4:
                    setError(username, "Username is 4 characters required");
                    break;
                default:
                    setSuccess(username);
                    break;
            }

            switch (true) {   // Validate the emailvalue
                case emailValue === "":
                    setError(email, "Email is required");
                    break;
                case !isValidEmail(emailValue):
                    setError(email, "Provide a valid email address");
                    break;
                default:
                    setSuccess(email);
                    break;
            }
            switch (true) {   // Validate the passvaluee
                case passwordValue === "":
                    setError(password, "Password is required");
                    break;
                case passwordValue.length < 8:
                    setError(password, "Password must be at least 8 characters");
                    break;
                default:
                    setSuccess(password);
                    break;
            }
            switch (true) {    // Validate the 2ndpass
                case pass2Value === "": 
                    setError(pass2, "Please confirm your password");
                    break;
                case pass2Value !== passwordValue: 
                    setError(pass2, "Passwords don't match");
                    break;
                default:
                    setSuccess(pass2);
                    break;
            }

            // Check if all fields are successful, then show the success message
            if (username.parentElement.classList.contains("success") &&
                email.parentElement.classList.contains("success") &&
                password.parentElement.classList.contains("success") &&
                pass2.parentElement.classList.contains("success")) {
                alert("Successfully stored");
            }
        };