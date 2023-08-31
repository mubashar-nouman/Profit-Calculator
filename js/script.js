function calculate() {
    // Get references to elements
    const purchasePriceInput = document.getElementById("purchasePrice");
    const salePriceInput = document.getElementById("salePrice");
    const commissionDiv = document.getElementById("commission");
    const percentageDiv = document.getElementById("percentage");
  
    // Get the values from the input fields
    const purchasePrice = parseFloat(purchasePriceInput.value);
    const salePrice = parseFloat(salePriceInput.value);
  
    if (!isNaN(purchasePrice) && !isNaN(salePrice)) {
      // Calculate profit and percentage
      const profit = salePrice - purchasePrice;
      const profitPercentage = (profit / purchasePrice) * 100;
  
      // Display the results in the corresponding divs
      commissionDiv.innerHTML = `Profit ------ ${profit} Rs.`;
      percentageDiv.innerHTML = `Percent  ------ ${profitPercentage.toFixed(2)}%`;
    } else {
      // Display an error message if input values are not valid numbers
      commissionDiv.innerHTML = "Please enter valid numbers for both prices.";
      percentageDiv.innerHTML = "";
    }
  }
  