export function getCreditType( term ) {
    return term > 30 ? 'longTermLoan' : 'shortTermLoan';
}

function percentToNumber( percent ) {
    return parseFloat(percent) / 100;
}

function roundCeil( val, exp ) {
    return Math.ceil(val / exp) * exp;
}

function calculateCreditAmount( amount, serviceFee ) {
    return roundCeil(amount / (1 - percentToNumber(serviceFee)),
        100);
}

function annuity( term, rate ) {
    const computedRate = percentToNumber(rate) / 12,
          rateInPow = Math.pow((1 + computedRate), term);

    return computedRate * (rateInPow) / ((rateInPow) - 1);
}

function calculateAccruedInterestAmount( amount, term, rate ) {
    return amount * percentToNumber(rate) / 365 * term;
}

function calculateShortTermLoanUseFee( amount, term, fee ) {
    return (amount * percentToNumber(fee)) / 30 * term;
}

function calculateLongTermLoanUseFee( amount, fee ) {
    return amount * percentToNumber(fee);
}

export function calculatePaymentToPay( amount, term, creditType, serviceFee, rate, fee ) {
    const creditAmount = calculateCreditAmount(amount, serviceFee);
    const creditTerm = creditType === 'shortTermLoan' ? term : term / 30;

    if (creditType === 'shortTermLoan') {
        return Math.ceil(creditAmount + calculateAccruedInterestAmount(creditAmount, creditTerm,
            rate) + calculateShortTermLoanUseFee(creditAmount, creditTerm, fee));
    } else {
        return Math.ceil(creditAmount * annuity(creditTerm, rate) + calculateLongTermLoanUseFee(
            creditAmount, fee));
    }
}