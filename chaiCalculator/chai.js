// This function calculates the required ingredients to make Kenyan Chai
function calculateChaiIngredients(numberOfCups) {
  // Define ingredient quantities per cup
  const water = 200 * numberOfCups; // 200 ml of water per cup
  const milk = 50 * numberOfCups; // 50 ml of milk per cup
  const teaLeaves = 1 * numberOfCups; // 1 tablespoon of tea leaves per cup
  const sugar = 2 * numberOfCups; // 2 teaspoons of sugar per cup

  // Output the results to the console
  console.log(`To make ${numberOfCups} cups of Kenyan Chai, you will need:`);
  console.log(`Water: ${water} ml`);
  console.log(`Milk: ${milk} ml`);
  console.log(`Tea Leaves (Majani): ${teaLeaves} tablespoons`);
  console.log(`Sugar (Sukari): ${sugar} teaspoons`);
  console.log("\nEnjoy your Chai Bora!");
}

// Prompt the user to input number of cups
const input = prompt("Karibu! How many cups of Chai Bora would you like to make?");
const numberOfCups = Number(input); // Convert input to number

// Validate input and call the function
if (!isNaN(numberOfCups) && numberOfCups > 0) {
  calculateChaiIngredients(numberOfCups);
} else {
  // Handle invalid input
  console.log("Please enter a valid number.");
}
