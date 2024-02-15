function updateQuantity(isIncrease, inputId) {
    const phoneInputField = document.getElementById(inputId);
    const phoneInputString = phoneInputField.value;
    const previousPhone = parseInt(phoneInputString);


    if (isIncrease === true) {
        if (previousPhone >= 0) {
            let newPhoneQuentity = previousPhone + 1;
            phoneInputField.value = newPhoneQuentity;
            return newPhoneQuentity;
        }
    } else {
        if (previousPhone > 0) {
            let newPhoneQuentity = previousPhone - 1;
            phoneInputField.value = newPhoneQuentity;
            return newPhoneQuentity;
        } else {
            return 0;
        }
    }
}

function updatePrice(quantity, price, priceId) {
    const phonePrice = quantity * price;
    const phonPriceElement = document.getElementById(priceId);
    phonPriceElement.innerText = phonePrice;
}

const getElementTotal =  (elementId) => {
    const totalElement = document.getElementById(elementId);
    const totalString = totalElement.innerText;
    const previoustotal = parseInt(totalString);
    return previoustotal;
}

const setTotalById = (elementId, value) => {
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}

function calculateSubTotal () {
    const previousPhoneTotal = getElementTotal('phone-price');
    const previousCase = getElementTotal('case-price');

    const currentPhonePrice = (previousPhoneTotal + previousCase);
    setTotalById('sub-total', currentPhonePrice);

    const taxtAmountString = (currentPhonePrice * 0.01).toFixed(2);
    const taxtAmount = parseFloat(taxtAmountString);
    setTotalById('tax-amount', taxtAmount);

    const totalAmount = (currentPhonePrice + taxtAmount);
    setTotalById('total-amount', totalAmount);
}

/*
function updateCaseNumber(isIncrease) {
    const phoneInputField = document.getElementById('case-value');
    const phoneInputString = phoneInputField.value;
    const previousPhone = parseInt(phoneInputString);

    if (isIncrease === true) {
        if (previousPhone >= 0) {
            let newPhoneQuentity = previousPhone + 1;
            phoneInputField.value = newPhoneQuentity;
            return newPhoneQuentity;
        }
    } else {
        if (previousPhone > 0) {
            let newPhoneQuentity = previousPhone - 1;
            phoneInputField.value = newPhoneQuentity;
            return newPhoneQuentity;
        } else {
            return 0;
        }
    }
}
*/

/*
function updateCasePrice(quantity) {
    const casePrice = quantity * 59;
    const phonPriceElement = document.getElementById('case-price');
    phonPriceElement.innerText = casePrice;
}
*/