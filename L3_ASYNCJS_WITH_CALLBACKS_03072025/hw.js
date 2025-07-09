// let cart = ["shoes" , "shirt" , "wallets"];

// function orderDetail(cart){
//     let totalItems = cart.length;
//     let items = cart;
//     let totalPrice = totalItems * 1000;

//     let order = {
//         items : items,
//         totalItems: totalItems,
//         totalPrice: totalPrice
//     }

//     return order;
// }

// function orderSummary(cb){
//     let order;
//     setTimeout(() => {
//         order = cb(cart);
//     }, 2000);

//     let summary = {
//         orderId : Math.random() * 10000,
//         order : order
//     }

//     return summary;
// }

// function paymentGateway(cb){
//     let summary;
//     setTimeout(() => {
//         summary = cb();
//     } , 2000);

//     console.log("Your Payment Is Succesful");
    
//     return summary;
// }

// function succesfulOrder(cb){
//     let orderDetail ;
//     setTimeout(() => {
//         orderDetail = cb();
//     }, 3000);

//     console.log("Your Order Is Succesful");
//     console.log("Order Details: ", orderDetail);
// }

let cart = ["shoes", "shirt", "wallets"];

function orderDetail(cart, callback) {
    setTimeout(() => {
        let totalItems = cart.length;
        let totalPrice = totalItems * 1000;

        let order = {
            items: cart,
            totalItems: totalItems,
            totalPrice: totalPrice
        };

        console.log("Order details created");
        callback(order);
    }, 2000);
}

function orderSummary(order, callback) {
    setTimeout(() => {
        let summary = {
            orderId: Math.floor(Math.random() * 10000),
            order: order
        };

        console.log("Order summary created");
        callback(summary);
    }, 2000);
}

function paymentGateway(summary, callback) {
    setTimeout(() => {
        console.log("Your payment is successful");
        callback(summary);
    }, 2000);
}

function successfulOrder(summary) {
    setTimeout(() => {
        console.log("Your order is successful");
        console.log("Order Details:", summary);
    }, 2000);
}

orderDetail(cart, function (order) {
    orderSummary(order, function (summary) {
        paymentGateway(summary, function (confirmedSummary) {
            successfulOrder(confirmedSummary);
        });
    });
});
