let cart=[];
let selectedProduct=null;
function addToCart(name,price){
    cart.push({name:name,price:price});
    updateCart();
    alert(name+" added to cart!");
}
function updateCart(){
    document.getElementById("cartCount").textContent=cart.length;
    let items=document.getElementById("cartItems");
    let total=0;
    if(cart.length===0){
        items.innerHTML="<p>Your cart is empty.</p>";
        document.getElementById("cartTotal").textContent="0";
        return;
    }
    items.innerHTML="";
    cart.forEach((item,index)=>{
        total+=item.price;
        items.innerHTML+=`
        <div class="cart-item">
            <div>
                <strong>${item.name}</strong><br>
                ₹${item.price.toLocaleString("en-IN")}
            </div>
            <button onclick="removeFromCart(${index})">Remove</button>
        </div>`;
    });
    document.getElementById("cartTotal").textContent=total.toLocaleString("en-IN");
}
function removeFromCart(index){
    cart.splice(index,1);
    updateCart();
}
function openCart(){
    document.getElementById("cartModal").style.display="flex";
    updateCart();
}
function closeCart(){
    document.getElementById("cartModal").style.display="none";
}
function buyNow(name,price){
    selectedProduct={name:name,price:price};
    document.getElementById("loginModal").style.display="flex";
}
function checkout(){
    if(cart.length===0){
        alert("Your cart is empty!");
        return;
    }
    selectedProduct={
        name:"Cart Items",
        price:cart.reduce((sum,item)=>sum+item.price,0)
    };
    closeCart();
    document.getElementById("loginModal").style.display="flex";
}
function loginUser(){
    let username=document.getElementById("username").value;
    let email=document.getElementById("email").value;
    let phone=document.getElementById("phone").value;
    if(username===""||email===""||phone===""){
        alert("Please fill all details.");
        return;
    }
    document.getElementById("loginModal").style.display="none";
    document.getElementById("addressModal").style.display="flex";
}
function showPayment(){
    let address=document.getElementById("address").value;
    let city=document.getElementById("city").value;
    let state=document.getElementById("state").value;
    let pincode=document.getElementById("pincode").value;
    if(address===""||city===""||state===""||pincode===""){
        alert("Please fill your complete address.");
        return;
    }
    document.getElementById("addressModal").style.display="none";
    document.getElementById("paymentModal").style.display="flex";
}
document.querySelectorAll('input[name="payment"]').forEach(input=>{
    input.addEventListener("change",function(){
        let card=document.getElementById("cardDetails");
        if(this.value==="card"){
            card.style.display="block";
        }else{
            card.style.display="none";
        }
    });
});
function placeOrder(){
    let payment=document.querySelector('input[name="payment"]:checked').value;
    if(payment==="card"){
        let cardInputs=document.querySelectorAll("#cardDetails input");
        for(let input of cardInputs){
            if(input.value===""){
                alert("Please enter card details.");
                return;
            }
        }
    }
    document.getElementById("paymentModal").style.display="none";
    document.getElementById("successModal").style.display="flex";
    cart=[];
    updateCart();
}
function closeLogin(){
    document.getElementById("loginModal").style.display="none";
}
function closeAddress(){
    document.getElementById("addressModal").style.display="none";
}
function closePayment(){
    document.getElementById("paymentModal").style.display="none";
}
function closeSuccess(){
    document.getElementById("successModal").style.display="none";
}
function searchProducts(){
    let search=document.getElementById("searchInput").value.toLowerCase();
    let products=document.querySelectorAll(".product");
    products.forEach(product=>{
        let name=product.dataset.name.toLowerCase();
        if(name.includes(search)){
            product.style.display="block";
        }else{
            product.style.display="none";
        }
    });
}
function filterProducts(category){
    let products=document.querySelectorAll(".product");
    products.forEach(product=>{
        if(category==="all"||product.dataset.category===category){
            product.style.display="block";
        }else{
            product.style.display="none";
        }
    });
}