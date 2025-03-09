function calculatePaint() {
    // Get input values
    let area = parseFloat(document.getElementById("area").value);
    let dftPrime = parseFloat(document.getElementById("dftPrime").value);
    let vsPrime = parseFloat(document.getElementById("vsPrime").value) / 100; // Convert to fraction
    let lossPrime = parseFloat(document.getElementById("lossPrime").value);
    let dftFinish = parseFloat(document.getElementById("dftFinish").value);
    let vsFinish = parseFloat(document.getElementById("vsFinish").value) / 100; // Convert to fraction
    let lossFinish = parseFloat(document.getElementById("lossFinish").value);
    let bucketSize = parseFloat(document.getElementById("bucketSize").value);
    let densityPrime = parseFloat(document.getElementById("densityPrime").value); // Density for prime
    let densityFinish = parseFloat(document.getElementById("densityFinish").value); // Density for finish
    let thinnerRatioPrime = parseFloat(document.getElementById("thinnerRatioPrime").value);
    let thinnerRatioFinish = parseFloat(document.getElementById("thinnerRatioFinish").value);
    let paintPricePrime = parseFloat(document.getElementById("paintPricePrime").value);
    let paintPriceFinish = parseFloat(document.getElementById("paintPriceFinish").value);
    let thinnerPricePrime = parseFloat(document.getElementById("thinnerPricePrime").value);
    let thinnerPriceFinish = parseFloat(document.getElementById("thinnerPriceFinish").value);

    // Validate inputs
    if (isNaN(area) || isNaN(dftPrime) || isNaN(vsPrime) || isNaN(lossPrime) || 
        isNaN(dftFinish) || isNaN(vsFinish) || isNaN(lossFinish) || 
        vsPrime <= 0 || vsFinish <= 0 || (1 - lossPrime) <= 0 || (1 - lossFinish) <= 0) {
        alert("Please enter valid values!");
        return;
    }

    // Calculate paint for prime
    let paintPrime = ((area * dftPrime) / (10 * vsPrime * (1 - lossPrime))) / 100;
    let paintPrimePlus10 = paintPrime * 1.10;
    let paintPrimeKelo = paintPrimePlus10 * densityPrime; // Use densityPrime for mass calculation
    let thinnerPrime = paintPrimePlus10 * thinnerRatioPrime;
    let totalPaintCostPrime = paintPrimePlus10 * paintPricePrime;
    let totalThinnerCostPrime = thinnerPrime * thinnerPricePrime;
    let totalCostPrime = totalPaintCostPrime + totalThinnerCostPrime;

    // Calculate paint for finish
    let paintFinish = ((area * dftFinish) / (10 * vsFinish * (1 - lossFinish))) / 100;
    let paintFinishPlus10 = paintFinish * 1.10;
    let paintFinishKelo = paintFinishPlus10 * densityFinish; // Use densityFinish for mass calculation
    let thinnerFinish = paintFinishPlus10 * thinnerRatioFinish;
    let totalPaintCostFinish = paintFinishPlus10 * paintPriceFinish;
    let totalThinnerCostFinish = thinnerFinish * thinnerPriceFinish;
    let totalCostFinish = totalPaintCostFinish + totalThinnerCostFinish;

    // Total paint and thinner
    let totalPaint = paintPrime + paintFinish;
    let totalPaintPlus10 = paintPrimePlus10 + paintFinishPlus10;
    let totalPaintKelo = paintPrimeKelo + paintFinishKelo; // Total mass in kg
    let thinnerTotal = thinnerPrime + thinnerFinish;
    let totalPaintCost = totalPaintCostPrime + totalPaintCostFinish;
    let totalThinnerCost = totalThinnerCostPrime + totalThinnerCostFinish;
    let totalCost = totalCostPrime + totalCostFinish;

    // Buckets needed
    let buckets = Math.ceil(totalPaint / bucketSize);
    let bucketsPlus10 = Math.ceil(totalPaintPlus10 / bucketSize);

    // Update the DOM with results
    // Prime Results
    document.getElementById("resultPrime").innerText = paintPrime.toFixed(3);
    document.getElementById("resultPrimePlus10").innerText = paintPrimePlus10.toFixed(3);
    document.getElementById("resultPrimeKelo").innerText = paintPrimeKelo.toFixed(3);
    document.getElementById("thinnerPrime").innerText = thinnerPrime.toFixed(3);
    document.getElementById("totalPaintCostPrime").innerText = totalPaintCostPrime.toFixed(2);
    document.getElementById("totalThinnerCostPrime").innerText = totalThinnerCostPrime.toFixed(2);
    document.getElementById("totalCostPrime").innerText = totalCostPrime.toFixed(2);

    // Finish Results
    document.getElementById("resultFinish").innerText = paintFinish.toFixed(3);
    document.getElementById("resultFinishPlus10").innerText = paintFinishPlus10.toFixed(3);
    document.getElementById("resultFinishKelo").innerText = paintFinishKelo.toFixed(3);
    document.getElementById("thinnerFinish").innerText = thinnerFinish.toFixed(3);
    document.getElementById("totalPaintCostFinish").innerText = totalPaintCostFinish.toFixed(2);
    document.getElementById("totalThinnerCostFinish").innerText = totalThinnerCostFinish.toFixed(2);
    document.getElementById("totalCostFinish").innerText = totalCostFinish.toFixed(2);

    // Total Results
    document.getElementById("resultTotal").innerText = totalPaint.toFixed(3);
    document.getElementById("resultTotalPlus10").innerText = totalPaintPlus10.toFixed(3);
    document.getElementById("resultTotalKelo").innerText = totalPaintKelo.toFixed(3);
    document.getElementById("buckets").innerText = buckets;
    document.getElementById("bucketsPlus10").innerText = bucketsPlus10;
    document.getElementById("thinnerTotal").innerText = thinnerTotal.toFixed(3);
    document.getElementById("totalPaintCost").innerText = totalPaintCost.toFixed(2);
    document.getElementById("totalThinnerCost").innerText = totalThinnerCost.toFixed(2);
    document.getElementById("totalCost").innerText = totalCost.toFixed(2);
}