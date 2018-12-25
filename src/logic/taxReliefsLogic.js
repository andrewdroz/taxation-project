export const taxReliefsLogic = {
  getTaxRelief(profile) {
    switch (profile) {
      case "TK0":
        return 54000000;
      case "K0":
        return 58500000;
      case "K1":
        return 63000000;
      case "K2":
        return 67500000;
      case "K3":
        return 72000000;
      case "None selected":
        return 0;
      default:
        return 0;
    }
  },
  minusTaxRelief(income, profile) {
    const taxRelief = this.getTaxRelief(profile);
    const taxableIncome = income - taxRelief;

    if (taxableIncome <= 0) return 0;
    else return taxableIncome;
  }
};
