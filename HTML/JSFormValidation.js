function ageChange(e){
    let ageInput = document.getElementById("q_age");
    let errorHolder = document.getElementById("errors-holder");
    let button = document.getElementsByTagName("button")[0];

    errorHolder.innerHTML='';
    button.disabled = false;
    let age = parseInt(ageInput.value);
    if(age < 5){
           errorHolder.innerHTML="You need to be atleast 5 years old to participate";
           button.disabled=true;
    }
    e.preventDefault();
    return false;

}

function handleSubmit(e){
 let ageInput = document.getElementById("q_age");
 let resHolder = document.getElementById("result-holder");
 let errorHolder = document.getElementById("errors-holder");
 const ownPhoneCheck = document.querySelector('#q_owns_phone');

 let age = parseInt(ageInput.value);
 let ownPhone = ownPhoneCheck.checked;

 resHolder.innerHTML="";
 errorHolder.innerHTML="";

 if(age == 0){
        errorHolder.innerHTML="Please choose age";
        e.preventDefault();
        return false;
 }   

 if(ownPhone){
        if(age<13){
               resHolder.innerHTML="You are too young to have a phone";
        }
        else{
               resHolder.innerHTML="Use your phone in moderation";
        }
 }
 else{
        if(age<13){
               resHolder.innerHTML="You will get a phone soon";
        }
        else{
               resHolder.innerHTML="You should get a phone";
        }
 }
    e.preventDefault();
    return false;

}