// Function to calculate water bill
function calculateWaterBill(litresUsed) {
    const rateTier1 = 15.73;
    const rateTier2 = 22.38;
    const rateTier3 = 31.77;
    const rateTier4 = 69.76;
    const tier1Threshold = 6000;
    const tier2Threshold = 10500;
    const tier3Threshold = 35000;
    
    
    let totalCost = 0;
    


if (litresUsed <= tier1Threshold) {
    totalCost = litresUsed / 1000 * rateTier1;
} else if (litresUsed <= tier2Threshold) {
    totalCost = (tier1Threshold / 1000 * rateTier1) + ((litresUsed - tier1Threshold) / 1000 * rateTier2);
} else if (litresUsed <= tier3Threshold){
    totalCost = (tier1Threshold / 1000 * rateTier1) + (tier2Threshold / 1000 * rateTier2) + ((litresUsed - tier2Threshold) / 1000 * rateTier3);
}
  else{
    totalCost = (tier1Threshold / 1000 * rateTier1) + (tier2Threshold / 1000 * rateTier2) + (tier3Threshold / 1000 * rateTier3)+((litresUsed - tier3Threshold) / 1000 * rateTier4);
}
return totalCost.toFixed(2);
}


// Function to handle form submission
function handleFormSubmission(event) {
    event.preventDefault();
    
    const litresUsed = parseFloat(document.getElementById("litresUsed").value);
    const totalAmount = calculateWaterBill(litresUsed);
    
    document.getElementById("result").innerText = `Total amount to pay: R${totalAmount}`;
}

// Add event listener to the form
document.getElementById("waterBillForm").addEventListener("submit", handleFormSubmission);

