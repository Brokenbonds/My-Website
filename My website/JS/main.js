/*function validateForm() {
   
    let form = document.querySelector('.contact_form')
    let name = document.forms["myForm"]["Name"].value;
    let email = document.forms ["myForm"]["Email"].value;
    let msg = document.forms ["myForm"]["Phone"].value;

    if(name==""){
        let FnameReturn = "please fill in your name";
        document.getElementById("NameError").innerHTML = FnameReturn.fontcolor("48BBBB");
        
    }

     if(email==""){
        let LnameReturn = "please fill in your email"
        document.getElementById("EmailError").innerHTML = LnameReturn.fontcolor("48BBBB");
        
    }
 

    if(msg==""){
        let LnameReturn = "please fill in your phone number"
        document.getElementById("PhoneError").innerHTML = LnameReturn.fontcolor("48BBBB");
        
    }

    if(name=="" || email=="" || msg==""){
        return false;
    }
}*/

function openForm(){
    document.getElementById("myFormcontainer").style.display = "block";
}

function closeForm(){
    document.getElementById("myFormcontainer").style.display = "none";
}





//this is the slide
$("#slideshow > div:gt(0)").hide();

setInterval(function(){
    $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
}, 6000);