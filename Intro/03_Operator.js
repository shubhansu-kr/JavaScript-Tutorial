// Operators in JS 

var listedPrice = 199;
var sellingPrice = 799;

var discount;

discount = (sellingPrice - listedPrice) / sellingPrice * 100;

console.log(`
    Selling Price : ${sellingPrice}
    Actual Price : ${sellingPrice} 
    Discount % : ${discount}
`);

// Console log just dumps the value on console, so in order to format the 
// output we will use Math.round 

console.log("Discount Display : ", Math.round(discount));
