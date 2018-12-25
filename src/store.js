import { taxSchemeLogic } from "@/logic/taxSchemeLogic";
import { taxReliefsLogic } from "@/logic/taxReliefsLogic";

export const store = {
  state: {
    annualSalary: 0,
    profile: "None selected",
    taxableIncome: 0,
    taxToPay: 0
  },
  setAnnualSalary(newSalary) {
    this.state.annualSalary = Number(newSalary);
  },
  setProfile(profile) {
    if (profile == "") this.state.profile = "None selected";
    else this.state.profile = profile;
  },
  setTaxableIncome() {
    this.state.taxableIncome = taxReliefsLogic.minusTaxRelief(
      this.state.annualSalary,
      this.state.profile
    );
  },
  setTaxAmount() {
    this.state.taxToPay = taxSchemeLogic.calculateTaxAmount(
      this.state.taxableIncome
    );
    console.log(this.state.taxToPay);
  }
};
