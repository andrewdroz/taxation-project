export const taxSchemeLogic = {
  calculateTierOne(amount) {
    return amount * 0.05;
  },
  calculateTierTwo(amount) {
    return amount * 0.15;
  },
  calculateTierThree(amount) {
    return amount * 0.25;
  },
  calculateTierFour(amount) {
    return amount * 0.3;
  },
  calculateTaxAmount(income) {
    if (income === 0) {
      return 0;
    } else if (income <= 50000000) {
      return Number(this.calculateTierOne(income).toFixed(2));
    } else if (income <= 250000000) {
      return (
        2500000 + Number(this.calculateTierTwo(income - 50000000).toFixed(2))
      );
    } else if (income <= 500000000) {
      return (
        2500000 +
        30000000 +
        Number(this.calculateTierThree(income - 250000000).toFixed(2))
      );
    } else {
      return (
        2500000 +
        30000000 +
        62500000 +
        Number(this.calculateTierFour(income - 500000000).toFixed(2))
      );
    }
  }
};
