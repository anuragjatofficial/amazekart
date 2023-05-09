let cxdata = JSON.parse(localStorage.getItem("cxdet"));
let hello;
let myform = document.querySelector("form");
let details = [];
let wrong = document.getElementById("wrong");
myform.addEventListener("submit",(event)=>{
    event.preventDefault();
    let username = document.getElementById("username");
     details.push(username.value);
    username.value = null;
    let label = document.getElementById("email");
    document.getElementById("continue").innerText = "Sign in"
    label.innerText = "Password";
    document.getElementById("username").setAttribute("type","password");
    let password = document.getElementById("username");
    details.push(password.value);
    if(details.length === 4){
        details.pop();
    console.log(details);
        if(cxdata === null){
            alert("no account found")
            wrong.innerHTML =` 
                    <div id="rong">
                       <img src="./images/warn.png" alt="">
                       <div>
                           <h4>There was a problem</h4>
                           <p>No users found <a href="./index.html">Retry</a></p>
                       </div>
                    </div>`;
        }
        if (details[0]=="admin@amazecart.in" && details[details.length-1]=="Noida@123"){
            window.location.replace("./admin.html");
        }
        for(let i = 0;i<cxdata.length;i++){
            // console.log(details[0]=="admin@amazecart.in");
            if((details[0]===cxdata[i].cxemail || details[i]==cxdata[i].cxnumber) &&    details[details.length-1]===cxdata[i].cxpassword){
                hello = cxdata[i].cxname;
                localStorage.setItem("name",hello);
                alert("succesfully logeed in");
                window.location.replace("./home.html");
            }
            else{
               wrong.innerHTML =` 
            <div id="rong">
               <img src="./images/warn.png" alt="">
               <div>
                   <h4>There was a problem</h4>
                   <p>No users found <a href="./index.html">Retry</a></p>
               </div>
            </div>`;
            }
        }
    }
});
