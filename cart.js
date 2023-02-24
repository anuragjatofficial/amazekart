let cartarray = JSON.parse(localStorage.getItem("cartdata"));

let product = document.getElementById("products");
// function for products
let only_prod = document.getElementById("only_prod");
products(cartarray);

function products(data){
    if(data === null){
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
        addbtn.innerText = " ⚡ Buy Now";

        // functionality part of add button

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