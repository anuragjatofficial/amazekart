let mydata = [];
let filter = document.getElementById("category");
let prot = JSON.parse(localStorage.getItem("products"));
console.log(prot);
// fetching data 
fetch("https://63f4b6953f99f5855db5af35.mockapi.io/produ")
.then((res)=>{
    return res.json();
})
.then((data=>{
    if (prot === null){
        mydata = data; 
        products(data);
    }
    else{
        let sata = prot.concat(data);
         mydata = sata; 
         products(sata); 
        console.log(sata);
    }
    //calling data
}))
.catch(()=>{
    console.error("failed to load api");
});
let cartarray = JSON.parse(localStorage.getItem("cartdata")) || [];
// working on filter fucntionality
filter.addEventListener("change",()=>{
    let filtered = mydata.filter((ele)=>{
        if(filter.value===""){
            return true;
        }
        else if(filter.value=== ele.category){
            return true;
        }
    });
    products(filtered);
});

// function for products
let only_prod = document.getElementById("only_prod");
let count = document.getElementById("count");
let counter = JSON.parse(localStorage.getItem("counter"))|| 0;
function products(data){
    only_prod.innerHTML = null;
    for(let i = 0;i<data.length;i++){
        let product = document.createElement("div");
        let image = document.createElement("img");
        let title = document.createElement("h2");
        let description = document.createElement("p");
        let id = document.createElement("h3");
        let category = document.createElement("h3");
        let price = document.createElement("h3");
        let rating = document.createElement("button");
        let addbtn = document.createElement("button");
        let ratecount = document.createElement("span");
        let span = document.createElement("span");
        let imgdiv = document.createElement("div");
        let textdiv = document.createElement("div");


        // some attributes & id's
        span.setAttribute("id","greenrate")
        ratecount.setAttribute("id","rate");
        rating.setAttribute("class","smallbtn")
        image.setAttribute("src",data[i].image);
        textdiv.setAttribute("class","textdiv")
        // changing ineertext 

        title.innerText = data[i].title;
        description.innerText = data[i].description;
        id.textContent = data[i].id;
        category.textContent = `Category - ${data[i].category}`;
        price.textContent = `₹ ${data[i].price}`;
        rating.innerHTML = `${data[i].rating.rate} ★`;
        ratecount.innerHTML = `(${data[i].rating.count})`;
        only_prod.append(product);
        addbtn.innerText = " 🛒 ADD TO CART ";

        // functionality part of add button

        if(cartdata = []){
            counter = 0;
            localStorage.setItem("counter",JSON.stringify(counter));
        }

        addbtn.addEventListener("click",()=>{
            
            if(checkdup(data[i])){
                addbtn.innerText = " Already in 🛒CART ";
                alert("product already in cart");
            }
            else{
                cartarray.push(data[i]);
                localStorage.setItem("cartdata",JSON.stringify(cartarray));
                addbtn.innerText = " Already in 🛒CART ";
                alert("Product Added to cart");
                counter++;
                localStorage.setItem("counter",JSON.stringify(counter));
            }
            // product.innerHTML = null;
            if(counter!==0){
                count.innerText = counter;
            }
        });
        
        textdiv.append(title,description,category,price,span,addbtn)
        imgdiv.append(image);
        span.append(rating,ratecount);
        product.append(imgdiv,textdiv);
    }
    
}
if(counter!==0){
    count.innerText = counter;
}
function checkdup(prod){
    for(let i = 0;i<cartarray.length;i++){
        if(prod.id === cartarray[i].id){
            return true;
        }
    }
    return false;
}