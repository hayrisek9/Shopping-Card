const card = document.getElementsByClassName("card");
const btnAdd = document.getElementsByClassName("btn-info");
const btnCart= document.querySelector("btn-cart") ;
const cartList = document.querySelector(".shopping-cart-list");
 
class Shopping{
    constructor(image, title, price) {
        this.image=image;
        this.title=title;
        this.price=price;
    }
}

class UI{
    addToCart(shopping){
const listItem= document.createElement("div");
listItem.classList="list-item"
listItem.innerHTML= `<div class="row align-items-center text-white-50">
<div class="col-md-3">
  <img src="https://cdn.shopify.com/s/files/1/2416/0913/products/bose-ecouteur-bose-sans-fil-ecouteurs-bose-sport-earbuds-15657988194413_530x.jpg?v=1599938685" alt="product" class="img-fluid">
</div>
<div class="col-md-5">
  <div class="title">Ecuteur</div>

</div>
<div class="col-md-2">
<div class="price">£17</div>
</div>
<div class="col-md-2">
<button class="btn btn-delete"><i class="fas fa-trash-alt text-danger"></i></button>
</div>

</div> ` 
    }
}


for(let i=0; i<card.length; i++){
    btnAdd[i].addEventListener("click", function(e){
let title = card[i].getElementsByClassName("card-title")[0].textContent;
let price = card[i].getElementsByClassName("price")[0].textContent;
let image = card[i].getElementsByClassName("image")[0].textContent;

let shopping = new Shopping(title,price,image);
let ui = UI();
ui.addToCart(shopping);
e.preventDefault();

    })
}
function cartToggle(){
    btnCart.addEventListener("click",function(){
        cartList.classList.toggle("d-none");
    })
}
cartToggle();