function calculateDiscountedPrice (price, discountPercentage){
    const discount = (price * discountPercentage) /100;
    const priceWithDiscount = price - discount;

    return priceWithDiscount;
}

const originalPrice = 330;
const discountPercentage = 15;

const finalPrice = calculateDiscountedPrice(originalPrice,discountPercentage);

console.log(`Precio Original: $${originalPrice}`);
console.log(`Descuento: ${discountPercentage}%`);
console.log(`Precio con descuento: ${finalPrice}`);

