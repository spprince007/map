const products = [
    { id: 1, brand: 'hp', name: 'laptap', price: 80000 },
    { id: 1, brand: 'dell', name: 'laptap', price: 70000 },
    { id: 1, brand: 'lenovo', name: 'laptap', price: 78000 },
    { id: 1, brand: 'apple', name: 'laptap', price: 120000 }
]

// const brandName = products.map(product => product.brand);
// console.log(brandName);
const productsPrince = products.map(n => n.price);
let sum = 0;
for (let i = 1; i <= productsPrince.length; i++) {
    sum += productsPrince[0];

};
console.log(sum);