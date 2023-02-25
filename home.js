// slider
let sliderarr = [
    "https://m.media-amazon.com/images/I/619rl+QqjwL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61x-Ik4m6pL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61mWRsVO4oL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/71jhnI7aVJL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/613-gA49v1L._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/71DmP8NHXlL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61gPOiG6YiL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/71LbHsact9L._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/81cP1IAxf-L._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/619rl+QqjwL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61l4i7aoY2L._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/8160RuRhSUL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/81aKds7BOeL._SX3000_.jpg"
    ];
    let sliderImg = document.getElementById("sliderImg");
    let left = document.getElementById("left");
    let right = document.getElementById("right")
    let line = 0;
    left.addEventListener("click",()=>{
            sliderImg.setAttribute("src",sliderarr[line]);
            console.log(sliderarr[line]);
            line--;
            if(sliderarr[line]===undefined){
                line = sliderarr.length-1;
            }
    });
    right.addEventListener("click",()=>{
        sliderImg.setAttribute("src",sliderarr[line]);
        console.log(sliderarr[line]);
        line++;
        if(sliderarr[line]===undefined){
            line = 0;
        }
    });
    let filter = document.getElementById("category");

    filter.addEventListener("change",()=>{
        window.location.replace("./products.html");
    });
    /*
    // let & get part
    
    let mydata = [];
    let filter = document.getElementById("category");
    // fetching data 
    
    fetch("https://63f4b6953f99f5855db5af35.mockapi.io/produ")
    .then((res)=>{
        return res.json();
    })
    .then((data=>{
        mydata = data; 
        products(data); //calling data
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
    
            addbtn.addEventListener("click",()=>{
                cartarray.push(data[i]);
                localStorage.setItem("cartdata",JSON.stringify(cartarray));
                // product.innerHTML = null;
            });
            textdiv.append(title,description,category,price,span,addbtn)
            imgdiv.append(image);
            span.append(rating,ratecount);
            product.append(imgdiv,textdiv);
        }
        
    } */