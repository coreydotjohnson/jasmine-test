function calculateTaxes(income) {
    if (!Number.isFinite(income)) {
        throw new Error('infinte income');
    }
    if (income > 30000) {
        return income * 0.25;
    }
    else {
        return income * 0.15;
    }
}