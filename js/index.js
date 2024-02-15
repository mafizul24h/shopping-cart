


document.getElementById('btn-phone-plus').addEventListener('click', function () {
    const phoneQuantity = updateQuantity(true, 'phone-value');
    // console.log(phoneQuantity);
    updatePrice(phoneQuantity, 1219, 'phone-price');

    calculateSubTotal();
})

document.getElementById('btn-phone-minus').addEventListener('click', function () {
    const phoneQuantity = updateQuantity(false, 'phone-value');
    //    console.log(phoneQuantity);
    updatePrice(phoneQuantity, 1219, 'phone-price');

    calculateSubTotal();
})

document.getElementById('btn-case-plus').addEventListener('click', function () {
    const caseQuantity = updateQuantity(true, 'case-value');
    updatePrice(caseQuantity, 59, 'case-price');

    calculateSubTotal();
})

document.getElementById('btn-case-minus').addEventListener('click', function () {
    const caseQuantity = updateQuantity(false, 'case-value');
    updatePrice(caseQuantity, 59, 'case-price');

    calculateSubTotal();
})