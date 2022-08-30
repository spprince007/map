const shop = {
    ownerName: "rakibul Islam",
    Address: {
        vill: 'Jiban nagar',
        city: 'chuadanga',
        country: 'BD'
    },
    product: ['laptop', 'mouse', 'keyboard'],

}
console.log(shop);
const jasonData = JSON.stringify(shop);
console.log(jasonData);
const jsonToObj = JSON.parse(jasonData);
console.log(jsonToObj);