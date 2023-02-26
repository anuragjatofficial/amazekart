let adminform = document.getElementById("myform");
let arr = JSON.parse(localStorage.getItem("products")) || [];
let obj = {};
adminform.addEventListener("submit",(ele)=>{
    ele.preventDefault();
    let name = document.getElementById("name");
    obj["title"] = name.value;
    let price = document.getElementById("price");
    obj["price"] = price.value;
    let description = document.getElementById("description");
    obj["description"] = description.value;
    let category = document.getElementById("category");
    obj["category"] = category.value;
    let image = document.getElementById("image");
    obj["image"] = image.value;
    obj["rating"] = {};
    let rate = document.getElementById("rate");
    obj.rating["rate"] = rate.value;
    let count = document.getElementById("count");
    obj.rating["count"] = count.value;
    let id = document.getElementById("ids");
    obj["id"] = id.value;
    arr.push(obj);
    localStorage.setItem("products",JSON.stringify(arr));
});




// <!-- 
// {
//     "title": "Xiaomi 12 Pro",
//     "price": 24999,
//     "description": "Opera Muave, 8GB RAM, 256GB Storage) | Snapdragon 8 Gen 1 | 50+50+50MP Flagship Cameras (OIS) | 10bit 2K+ Curved AMOLED Display | Sound",
//     "category": "mobiles",
//     "image": "https://m.media-amazon.com/images/I/71lYm08fIZL._SL1500_.jpg",
//     "rating": {
//       "rate": 3.6,
//       "count": 2131
//     },
//     "id": "40"
//   } -->