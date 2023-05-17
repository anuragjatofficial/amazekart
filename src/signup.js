let cxdetails = document.querySelector("form");
let cx = JSON.parse(localStorage.getItem("cxdet"))||[];
cxdetails.addEventListener("submit",(event)=>{
    event.preventDefault();
    let cxobj = {
    cxname: document.getElementById("name").value,
    cxnumber:  document.getElementById("number").value,
    cxemail: document.getElementById("email").value,
    cxpassword: document.getElementById("password").value, 
    };
    cx.push(cxobj);
    if(cxobj.cxnumber.length !==10){
        alert("mobile no should have 10 digits");
    }
    else if(passwordcheck(cxobj.cxpassword)){
        alert("password should contain a special character");
    }
    else if(cxobj.cxpassword.length<8){
        alert("password should contain atleast 8 letters");
    }
    else{
        alert("Account created succesfully")
        localStorage.setItem("cxdet",JSON.stringify(cx));
        window.location.replace("./index.html");
    }
});


function passwordcheck(str){
    for(let i = 0;i<str.length;i++){
        if(str[i]== "!" || str[i]=="@" || str[i] =="#" || str[i]=="$"||str[i]=="^"||str[i]=="₹" || str[i]=="&" || str[i]=="*" || str[i]=="(" || str[i]==")" || str[i]=="_" || str[i]=="-" || str[i]=="+"|| str[i]=="=" ||str[i]=="."){
            return false;
        }

    }
    return true;
}