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
        for(let i = 0;i<cxdata.length;i++){
            // console.log(details[0]=="admin@amazecart.in");
            if (details[0]=="admin@amazecart.in" && details[details.length-1]=="Noida@123"){
                window.location.replace("./admin.html");
                break;
            }
            else if((details[0]===cxdata[i].cxemail || details[i]==cxdata[i].cxnumber) && details[details.length-1]===cxdata[i].cxpassword){
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
// (2) ['anurag.1101140@gmail.com', 'fghffth']
// 0
// : 
// "anurag.1101140@gmail.com"
// 1
// : 
// "fghffth"
// length
// : 
// 2
// [[Prototype]]
// : 
// Array(0)

// console.log(cxdata);
// cxemail
// : 
// "anurag.1101140@gmail.com"
// cxname
// : 
// "Anurag Choudhary"
// cxnumber
// : 
// "9874561230"
// cxpassword
// : 
// "hjj@afdff"