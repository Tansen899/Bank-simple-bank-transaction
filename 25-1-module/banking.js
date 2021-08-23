
// Handle deposit button event
document.getElementById('deposit-btn').addEventListener('click', function () {
    // get the amount deposit
    const depositInput = document.getElementById('deposit-input');
    const newDepositText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositText);

    // update deposit total
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    const newDepositTotal = previousDepositAmount + newDepositAmount;
    depositTotal.innerText = newDepositTotal;

    // update amount balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;

    // clear the deposit input field
    depositInput.value = '';
});

// handle withdraw event handler
document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withDrawAmountText = withdrawInput.value;
    const newWithDrawAmount = parseFloat(withDrawAmountText);

    // set withdraw Total
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithDrawText = withdrawTotal.innerText;
    const previousWithDrawAmount = parseFloat(previousWithDrawText);


    const newWithDrawTotal = previousWithDrawAmount + newWithDrawAmount;
    withdrawTotal.innerText = newWithDrawTotal;

    // update balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal - newWithDrawAmount;

    balanceTotal.innerText = newBalanceTotal;


    // clear withdraw input

    withdrawInput.value = '';
})