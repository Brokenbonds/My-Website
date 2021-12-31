function validateForm() {
    let a = document.forms["myForm"]["Name"].value;
    let b = document.forms ["myForm"]["Email"].value;
    let c = document.forms ["myForm"]["Phone"].value;

    if(a==""){
        let FnameReturn = "please fill in your name";
        document.getElementById("NameError").innerHTML = FnameReturn.fontcolor("48BBBB");
        
    }

     if(b==""){
        let LnameReturn = "please fill in your email"
        document.getElementById("EmailError").innerHTML = LnameReturn.fontcolor("48BBBB");
        
    }
 

    if(c==""){
        let LnameReturn = "please fill in your phone number"
        document.getElementById("PhoneError").innerHTML = LnameReturn.fontcolor("48BBBB");
        
    }

    if(a=="" || b=="" || c==""){
        return false;
    }
}

function openForm(){
    document.getElementById("myFormcontainer").style.display = "block";
}

function closeForm(){
    document.getElementById("myFormcontainer").style.display = "none";
}

$("#slideshow > div:gt(0)").hide();

setInterval(function(){
    $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
}, 6000);