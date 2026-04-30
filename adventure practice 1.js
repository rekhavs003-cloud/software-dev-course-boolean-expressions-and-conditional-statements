
let hasSword = false;
let hasMap = false;

console.log("Welcome to the Adventure!");
let choice1 = prompt("You see a dark cave. Do you enter? (yes or no)");

if (choice1 === "yes") {
    console.log("You walk inside and find a shiny Sword!");
    hasSword = true; 
} else {
    console.log("You stay outside. A traveler gives you a Map.");
    hasMap = true;
}


let choice2 = prompt("A dragon appears! Do you 'fight' or 'run'?");


if (choice2 === "fight" && hasSword === true) {
    console.log("You use your sword to win! Victory!");

} else if (choice2 === "run" || hasMap === true) {
    console.log("You safely escaped using your map or your fast legs.");

} else if (choice2 === "fight" && !hasSword) {
    console.log("You have no weapon! The dragon wins. Game Over.");
}