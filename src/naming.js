function calculateTotalPurchaseAmount(purchaseAmounts) { // Вычисляет общую сумму покупок
    let totalAmount = 0;  // Итоговая сумма
    purchaseAmounts.forEach(amount => {
        totalAmount += amount;
    });
    return totalAmount;
}

let topThreeCustomerPurchases = [10000, 20000, 30000]; // Массив сумм покупок трех самых ценных покупателей

console.log(calculateTotalPurchaseAmount(topThreeCustomerPurchases));
