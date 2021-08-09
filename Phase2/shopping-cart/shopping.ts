//make an item object with constructor (name,price)
//make array of items
//put array into table and total prices

class Item{
    public name:string;
    public price:number;
    constructor(name:string,price:number){
        this.name = name;
        this.price = price;
    }
    dis(): void {
        console.log("name is "+this.name);
        console.log("price is "+this.price);
    }
}

function addToCart(name:string, price:number){
    let item = new Item(name,price);
    console.log(item.dis());
    let cart:Array<Item> = JSON.parse(localStorage.getItem("cart") || "[]");
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
    document.getElementById("size").innerHTML=""+cart.length;
}

function displayCart(){
    let cartArr = JSON.parse(localStorage.getItem("cart"));
    var tableContent="";
    var startTable ="<table border=1><tr><th>Item</th><th>Price</th></tr>";

    var total:number = 0;
    cartArr.forEach(cartItem=>{
        tableContent =tableContent+"<tr><td>"+cartItem.name+"</td><td>"+cartItem.price+"</td></tr>";
        total += cartItem.price;
    })

    var endTable="</table>";
    tableContent = startTable+tableContent+endTable+"Total price: $"+total;
    document.getElementById("main").innerHTML=tableContent;
}