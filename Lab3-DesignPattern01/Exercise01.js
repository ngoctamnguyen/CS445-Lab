const shoppingCart = (function() {
    let bastket = [];

    return {
        upsertItem: function(newItem) {
            const index = bastket.findIndex(basketItem => basketItem.id === newItem.id);
            if (index > -1) {
                bastket[index] = newItem;
            } else {
                bastket.push(newItem);
            }

        },
        getItemsCount: function() {
            return bastket.length;
        },
        getTotalPrice() {
            return bastket.reduce((total, item) => total + item.product.price*item.count, 0);
        },
        removeItemById(id) {
            bastket = bastket.filter(item => item.id !== id);
        }
    };
})();



const item1 = { id: 0, product: { id: 1, name: 'Coffee', description: 'Coffee Grounds from Ethiopia', price: 9 }, count: 1 }
const item2 = { id: 1, product: { id: 2, name: 'Tea', description: 'Oonlong Tea from China', price: 10 }, count: 5 }
const item3 = { id: 2, product: { id: 3, name: 'Bottled Water', description: 'Bottled Water from US', price: 2 }, count: 30 }

shoppingCart.upsertItem(item1);
shoppingCart.upsertItem(item2);
shoppingCart.upsertItem(item3);
console.log(shoppingCart.getTotalPrice()); //Expected Result: 119
item3.product.name = 'Himilayan Water';
item3.product.price = 10;
shoppingCart.upsertItem(item3);

console.log(shoppingCart.getItemsCount()); //Expected Result: 3
console.log(shoppingCart.getTotalPrice()); //Expected Result: 359
shoppingCart.removeItemById(1);
console.log(shoppingCart.getItemsCount()); //Expected Result: 2
console.log(shoppingCart.getTotalPrice()); //Expected Result: 309