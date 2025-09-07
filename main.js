var productName = document.getElementById("productName");
var productPrice = document.getElementById("productPrice");
var productCategory = document.getElementById("productCategory");
var cardsContainer = document.querySelector(".cards");
var addProduct = document.getElementById("addBtn");
var productImg = document.getElementById("productImg");




var dataPro;

if(localStorage.product != null){
    dataPro = JSON.parse(localStorage.product);
    showData();
     
}else{
    dataPro = [];
}
 

 addBtn.onclick = function addProduct(){
    if (productImg.files.length === 0) {
        alert("Please select an image");
        return;
    }
     var imgURL = URL.createObjectURL(productImg.files[0]);
    var newProduct = {
          productName: productName.value,
          productPrice: productPrice.value,
         productCategory: productCategory.value,
         productImg: imgURL
    }
    dataPro.push(newProduct);
    localStorage.setItem("product", JSON.stringify(dataPro));
    clearInputs();
    showData();
    
    }
      
     

function showData(){
     if (dataPro.length === 0) {
        document.querySelector(".cards").style.display = "none";
        return;
    }
    document.querySelector(".cards").style.display = "flex";

    var card ='';
    for(var i = 0; i < dataPro.length; i++){
        card += `
          <div class="card">
        <div class="card-body">
           <img src="${dataPro[i].productImg}" alt="img">
           <h2>Product Name: ${dataPro[i].productName}</h2>
          <h3 >Product Price: ${dataPro[i].productPrice}</h3>
          <h4>Product Category: ${dataPro[i].productCategory}</h4>
          <a href="#" class="btn btn-primary">Update</a>
          <a href="#" class="btn btn-primary">Delete</a>
        </div>
      </div>
        `;
    }
   document.querySelector(".cards").innerHTML = card;
    
   
}
 

function clearInputs(){
   productName.value = null;
   productPrice.value = null;
    productCategory.value = null;
    productImg.value = null;
}
 
