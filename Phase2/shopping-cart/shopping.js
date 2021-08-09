//make an item object with constructor (name,price)
//make array of items
//put array into table and total prices
var Item = /** @class */ (function () {
    function Item(name, price) {
        this.name = name;
        this.price = price;
    }
    Item.prototype.dis = function () {
        console.log("name is " + this.name);
        console.log("price is " + this.price);
    };
    return Item;
}());
function addToCart(name, price) {
    var item = new Item(name, price);
    console.log(item.dis());
    var cart = JSON.parse(localStorage.getItem("cart") || "[]");
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
    document.getElementById("size").innerHTML = "" + cart.length;
}
function displayCart() {
    var cartArr = JSON.parse(localStorage.getItem("cart"));
    var tableContent = "";
    var startTable = "<table border=1><tr><th>Item</th><th>Price</th></tr>";
    var total = 0;
    cartArr.forEach(function (cartItem) {
        tableContent = tableContent + "<tr><td>" + cartItem.name + "</td><td>" + cartItem.price + "</td></tr>";
        total += cartItem.price;
    });
    var endTable = "</table>";
    tableContent = startTable + tableContent + endTable + "Total price: $" + total;
    document.getElementById("main").innerHTML = tableContent;
}
