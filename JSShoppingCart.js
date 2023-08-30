// Define the shopping cart with items and prices
const shoppingCart = [
    { item: "Shirt", price: 25 },
    { item: "Jeans", price: 40 },
    { item: "Shoes", price: 60 },
    { item: "Hat", price: 15 }
  ];
  
  // Function to calculate the total price of items
  function calculateTotal(cart) {
    let total = 0;
    for (const item of cart) {
      total += item.price;
    }
    return total;
  }
  
  // Function to apply discounts based on total value
  function applyDiscount(total) {
    let discount = 0;
    if (total >= 100) {
      discount = 0.1 * total; // 10% discount
    } else if (total >= 50) {
      discount = 0.05 * total; // 5% discount
    }
    return discount;
  }
  
  // Calculate the total price of items
  const totalPrice = calculateTotal(shoppingCart);
  
  // Apply discounts based on total value
  const discountAmount = applyDiscount(totalPrice);
  
  // Calculate the final price after applying discounts
  const finalPrice = totalPrice - discountAmount;
  
  // Display the results
  console.log("Shopping Cart:");
  for (const item of shoppingCart) {
    console.log(`${item.item}: $${item.price.toFixed(2)}`);
  }
  console.log("----------------------");
  console.log(`Total: $${totalPrice.toFixed(2)}`);
  console.log(`Discount: $${discountAmount.toFixed(2)}`);
  console.log(`Final Price: $${finalPrice.toFixed(2)}`);
  