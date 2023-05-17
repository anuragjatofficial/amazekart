let cartarray = JSON.parse(localStorage.getItem("cartdata"));

let product = document.getElementById("products");
// function for products
let only_prod = document.getElementById("only_prod");
products(cartarray);
// if(cartarray==[]){
//     product.innerHTML = `<div id="null">
//     <h2>Your Amazekart is empty</h2>
//     <a href="./products.html"><button>Go back to products page</button></a>
//     <img src="https://m.media-amazon.com/images/G/31/cart/empty/kettle-desaturated._CB424694257_.svg" alt="Cart is empty">
// </div>`;
// }
function products(data){
    console.log(data);
    if(data === null || data.length === 0){
        product.innerHTML = `<div id="null">
        <h2>Your Amazekart is empty</h2>
        <a href="./products.html"><button>Go back to products page</button></a>
        <img src="https://m.media-amazon.com/images/G/31/cart/empty/kettle-desaturated._CB424694257_.svg" alt="Cart is empty">
    </div>`;
    }
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
        let removebtn = document.createElement("button");

        let ratecount = document.createElement("span");
        let span = document.createElement("span");
        let imgdiv = document.createElement("div");
        let textdiv = document.createElement("div");
        let btndiv = document.createElement("div");
        

        // some attributes & id's
        span.setAttribute("id","greenrate")
        ratecount.setAttribute("id","rate");
        removebtn.setAttribute("id","delete");
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
        addbtn.innerText = " ⚡ Buy Now";
        removebtn.innerText = "Remove from cart";

        // functionality part of add button

        removebtn.addEventListener("click",()=>{
            // product.innerHTML = null;
            cartarray = cartarray.filter((ele)=>{
                return ele.id !== data[i].id;
            });
            localStorage.setItem("cartdata",JSON.stringify(cartarray));
            products(cartarray);
        });
        addbtn.addEventListener("click",()=>{
            localStorage.setItem("buy",JSON.stringify(data[i]));
            window.location.replace("./checkout.html")
        });
        textdiv.append(title,description,category,price,span,btndiv)
        imgdiv.append(image);
        btndiv.append(addbtn,removebtn)
        span.append(rating,ratecount);
        product.append(imgdiv,textdiv);
    }
    
}