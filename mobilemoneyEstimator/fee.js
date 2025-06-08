// estimateTransactionFee calculates the mobile money transaction fee and the total amount to be debited.
function estimateTransactionFee(amountToSend) {
  // Calculate 1.5% fee, and apply min (10) and max (70) limits
  const rawFee = amountToSend * 0.015;
  const fee = Math.min(Math.max(rawFee, 10), 70);

  // Calculate total debited amount
  const total = amountToSend + fee;

  // Display the result 
  console.log(`Sending KES ${Math.round(amountToSend)}:`);
  console.log(`Calculated Transaction Fee: KES ${Math.round(fee)}`);
  console.log(`Total amount to be debited: KES ${Math.round(total)}`);
  console.log("\nSend Money Securely!");
}

// Prompt user for input
const input = prompt("Unatuma Ngapi? (KES):");
const amountToSend = Number(input); // Convert to number

// Validate and compute
if (!isNaN(amountToSend) && amountToSend > 0) {
  estimateTransactionFee(amountToSend);
} else {
  console.log("Please enter a valid amount.");
}
