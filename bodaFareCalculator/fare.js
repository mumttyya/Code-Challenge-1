// This function calculates the total boda boda fare based on trip distance
function calculateBodaFare(distanceInKm) {
  // Define fixed and variable charges
  const baseFare = 50; // Flat base fare
  const chargePerKm = 15; // Cost per kilometer

  // Calculate distance-based charge and total fare
  const distanceCharge = distanceInKm * chargePerKm;
  const totalFare = baseFare + distanceCharge;

  // Output the fare breakdown to the console
  console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
  console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
  console.log(`Mpaka Uko: KES ${distanceCharge}`);
  console.log(`Total: KES ${totalFare}`);
  console.log("\nPanda Pikipiki!");
}

// Prompt the user to input distance in kilometers
const input = prompt("Unafika wapi Mkubwa? Kilometer ngapi?:");
const distanceInKm = Number(input); // Convert input to number

// Validate input and calculate fare
if (!isNaN(distanceInKm) && distanceInKm > 0) {
  calculateBodaFare(distanceInKm);
} else {
  // Handle invalid input
  console.log("Please enter a valid distance.");
}
