let cart = [];
let total = 0;

function addToCart(name, price){

    cart.push({
        name:name,
        price:price
    });

    total += price;

    updateCart();
}

function updateCart(){

    const cartItems =
        document.getElementById("cartItems");

    cartItems.innerHTML = "";

    cart.forEach((item,index)=>{

        const li =
            document.createElement("li");

        li.innerHTML =
            `${item.name}
             - ₹${item.price}

            <button
            onclick="removeItem(${index})">

            Remove

            </button>`;

        cartItems.appendChild(li);
    });

    document.getElementById(
        "totalPrice"
    ).innerText = total;
}

function removeItem(index){

    total -= cart[index].price;

    cart.splice(index,1);

    updateCart();
}

function checkout(){

    if(cart.length===0){

        alert("Cart is Empty");

    }
    else{

        alert(
        "Order Placed Successfully!"
        );

        cart=[];
        total=0;

        updateCart();
    }
}
