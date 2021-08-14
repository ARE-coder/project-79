var pizza = ["Cheese Pizza","Chicken Pizza", "Pepperoni Pizza","Margherita Pizza ","Double Cheese Margherita Pizza",""];
console.log(pizza);

function show(){
    document.getElementById("display_1").style.display = "block ";
    document.getElementById("display_2").style.display = "block ";
    document.getElementById("display_3").style.display = "block ";
    document.getElementById("display_4").style.display = "block ";
    document.getElementById("display_5").style.display = "block ";
var zero = pizza[0];
console.log(zero);
document.getElementById("display_1").innerHTML = zero ;

var first = pizza[1];
console.log(first);
document.getElementById("display_2").innerHTML = first ;

var second = pizza[2];
console.log(second);
document.getElementById("display_3").innerHTML = second ;

var third= pizza[3];
console.log(third);
document.getElementById("display_4").innerHTML = third ;

var fourth = pizza[4];
console.log(fourth);
document.getElementById("display_5").innerHTML = fourth ; 
   


}
function hide(){
    document.getElementById("display_1").style.display = "none";
    document.getElementById("display_2").style.display = "none";
    document.getElementById("display_3").style.display = "none";
    document.getElementById("display_4").style.display = "none";
    document.getElementById("display_5").style.display = "none";
} 
function add(){
    var are = document.getElementById("in").value;
    console.log(are);
    pizza.push(are);
   
}