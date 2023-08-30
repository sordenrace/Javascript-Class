// Mock dataset for an e-commerce site
const products = [
    {
      name: "T-Shirt",
      description: "A comfortable cotton t-shirt for everyday wear.",
      price: 20.99,
      available: true
    },
    {
      name: "Jeans",
      description: "Classic denim jeans with a modern fit.",
      price: 39.99,
      available: true
    },
    {
      name: "Sneakers",
      description: "Stylish sneakers that provide both comfort and style.",
      price: 59.99,
      available: false
    },
    {
      name: "Hat",
      description: "A versatile hat to protect you from the sun.",
      price: 14.99,
      available: true
    }
  ];
  
  // Display the mock dataset
  console.log("Mock E-Commerce Dataset:");
  for (const product of products) {
    console.log("----------------------");
    console.log(`Product: ${product.name}`);
    console.log(`Description: ${product.description}`);
    console.log(`Price: $${product.price.toFixed(2)}`);
    console.log(`Availability: ${product.available ? "In Stock" : "Out of Stock"}`);
  }
  