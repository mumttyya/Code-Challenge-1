// This function calculates the transaction fee and total debited amount
function estimateTransactionFee(amountToSend) {
  // Calculate 1.5% fee and apply min (KES 10) and max (KES 70) limits
  const fee = Math.min(Math.max(amountToSend * 0.015, 10), 70);

  // Calculate the total amount to be debited from the sender
  const total = amountToSend + fee;

  // Output the transaction details
  console.log(`Sending KES ${amountToSend}:`);
  console.log(`Calculated Transaction Fee: KES ${fee.toFixed(2)}`);
  console.log(`Total amount to be debited: KES ${total.toFixed(2)}`);
  console.log("\nSend Money Securely!");
}

// Prompt the user to input the amount to send
const input =prompt("Unatuma Ngapi? (KES):");
const amountToSend = Number(input); // Convert input to number

// Validate input and estimate the fee
if (!isNaN(amountToSend) && amountToSend > 0) {
  estimateTransactionFee(amountToSend);
} else {
  // Handle invalid input
  console.log("Please enter a valid amount.");
}
