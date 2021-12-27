var form=document.getElementById("form-section");
var firstName=document.getElementById("fname");
var lastName=document.getElementById("lname");
var password=document.getElementById("pwd");
var passwordCheck=document.getElementById("pwd2");
var eMail=document.getElementById("email");
var formControl=document.getElementsByClassName("form-control");


form.addEventListener('submit',(e) =>{
    e.preventDefault();

    checkInput();
});


function checkInput(){
    const firstNameValue=firstName.value.trim();
    const lastNameValue=lastName.value.trim();
    const emailValue=eMail.value.trim();
    const passwordValue=password.value.trim();
    const password2Value=passwordCheck.value.trim();

    if(firstNameValue ===""){

        setErrorFor(firstName,"firstname cannot be blank");
    }else{
        setSuccessFor(firstName);
    }


    if(lastNameValue===""){

        setErrorFor(lastName,"lastname cannot be blank");
    }else{

        setSuccessFor(lastName);
    }

    if(emailValue===""){

        setErrorFor(eMail,"email cannot be blank");

    }else if(!isEmail(emailValue)){

         setErrorFor(eMail,"email is not valid");
    }else{

        setSuccessFor(eMail);
    }


    if(passwordValue===""){

        setErrorFor(password,"password cannot be blank");
    }else{

        setSuccessFor(password);
    }


    if(password2Value===""){

        setErrorFor(passwordCheck,"password cannot be blank");
    }else if(password2Value !== passwordValue){

        setErrorFor(passwordCheck,"password does not match");
    } else{

        setSuccessFor(passwordCheck);
    }

}


 function setErrorFor(input,message){

    const formControl = input.parentElement;
    const span = formControl.querySelector("span");   

     span.innerText=message;

     formControl.className = "form-control error";
 }


 function setSuccessFor(input){
     const formControl =input.parentElement;
     
     formControl.className = "form-control success"
 }


 function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}