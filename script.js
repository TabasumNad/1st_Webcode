// https://makeup-api.herokuapp.com/api/v1/products.json

fetch("https://makeup-api.herokuapp.com/api/v1/products.json")
.then((data)=>{
   // console.log(data);
   return data.json();
}).then((completedata)=>{
// console.log(completedata[2].name);
let data1="";
completedata.map((values)=>{
    data1+=` <div class="card">
    <h4 class="title">${values.brand}</h4>
    <h4 class="title">${values.name}</h4>
    <p class="price"><span>${values.price_sign}</span>${values.price}</p>
    <img  class="img-fluid" src=${values.image_link} alt="img" class="images">
    <p class="category">${values.product_link}</p>
    <p>${values.description}</p>
   </div>`;
});
document.getElementById("cards").innerHTML=data1;

}).catch((err)=>{
    console.log(err);
})
