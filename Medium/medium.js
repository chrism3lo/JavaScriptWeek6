//MEDIUM: Write a function that would allow you to do this:
//var sharePizza = cutPizzaSlices(8);
//console.log(sharePizza(2));
// prints "Each person gets 4.00 slices of pizza"
//console.log(sharePizza(3));
// prints "Each person gets 2.67 slices of pizza"




const input = process.argv[2];
const input2 = process.argv[3];
function sharePizza(people){
    
    function pizzaSlices(a){
        return  a / people;
    }
    return pizzaSlices(input2);
}
console.log(`You invited ${input} people to the pizza party and we a total of  ${input2} pizza slices so each person will get a total of ${sharePizza(input)} slices.`);