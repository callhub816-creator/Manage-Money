export const calculateEMI = (principal, rate, years) => {
    if (!principal || !rate || !years) return { emi: 0, totalInterest: 0, totalAmount: 0 };

    const monthlyRate = rate / 12 / 100;
    const months = years * 12;

    const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
    const totalAmount = emi * months;
    const totalInterest = totalAmount - principal;

    return {
        emi: Math.round(emi),
        totalInterest: Math.round(totalInterest),
        totalAmount: Math.round(totalAmount)
    };
};

export const calculateSIP = (monthlyInvestment, rate, years) => {
    if (!monthlyInvestment || !rate || !years) return null;

    const monthlyRate = rate / 12 / 100;
    const months = years * 12;

    const investAmount = monthlyInvestment * months;
    const totalAmount = monthlyInvestment *
        ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) *
        (1 + monthlyRate);

    const estReturns = totalAmount - investAmount;

    return {
        invested: Math.round(investAmount),
        returns: Math.round(estReturns),
        total: Math.round(totalAmount)
    };
};

export const calculateFD = (principal, rate, years) => {
    if (!principal || !rate || !years) return null;

    const totalAmount = principal * Math.pow((1 + rate / 100), years);
    const estReturns = totalAmount - principal;

    return {
        invested: Math.round(principal),
        returns: Math.round(estReturns),
        total: Math.round(totalAmount)
    };
};

export const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0
    }).format(amount);
};
