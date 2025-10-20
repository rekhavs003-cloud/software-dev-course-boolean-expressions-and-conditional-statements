// Simple text-based adventure

let hasSword = false;
let hasCompass = false;

// First choice
let choice1 = "mountains"; // Change this to "village" to try the other path

if (choice1 === "mountains") {
    console.log("You go to the mountains and find a sword!");
    hasSword = true;

    let choice2 = "climb"; // Change to "return" to try other outcome
    if (choice2 === "climb" && hasSword) {
        console.log("You fight a wild beast and survive!");
    } else if (choice2 === "climb") {
        console.log("You get hurt fighting the beast!");
    } else {
        console.log("You safely return to the forest.");
    }

} else if (choice1 === "village") {
    console.log("You go to the village and find a compass!");
    hasCompass = true;

    let choice2 = "market"; // Change to "inn" to try other outcome
    if (choice2 === "market" || hasCompass) {
        console.log("You find supplies easily!");
    } else {
        console.log("You get lost in the market.");
    }

} else {
    console.log("You stay in the forest and nothing happens.");
}
