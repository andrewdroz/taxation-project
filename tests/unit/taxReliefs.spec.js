import { taxReliefsLogic } from "@/logic/taxReliefsLogic";

describe("taxReliefsLogic.minusTaxRelief(number, string)", () => {
  it("reduces taxable income by 54000000 for singles", () => {
    expect(taxReliefsLogic.minusTaxRelief(50000000, "TK0")).toEqual(0);
    expect(taxReliefsLogic.minusTaxRelief(54000000, "TK0")).toEqual(0);
    expect(taxReliefsLogic.minusTaxRelief(70000000, "TK0")).toEqual(16000000);
  });
});

describe("taxReliefsLogic.minusTaxRelief(number, string)", () => {
  it("reduces taxable income by 58500000 for those married without dependents", () => {
    expect(taxReliefsLogic.minusTaxRelief(50000000, "K0")).toEqual(0);
    expect(taxReliefsLogic.minusTaxRelief(58500000, "K0")).toEqual(0);
    expect(taxReliefsLogic.minusTaxRelief(70000000, "K0")).toEqual(11500000);
  });
});

describe("taxReliefsLogic.minusTaxRelief(number, string)", () => {
  it("reduces taxable income by 63000000 for those married with 1 dependent", () => {
    expect(taxReliefsLogic.minusTaxRelief(50000000, "K1")).toEqual(0);
    expect(taxReliefsLogic.minusTaxRelief(63000000, "K1")).toEqual(0);
    expect(taxReliefsLogic.minusTaxRelief(70000000, "K1")).toEqual(7000000);
  });
});

describe("taxReliefsLogic.minusTaxRelief(number, string)", () => {
  it("reduces taxable income by 67500000 for those married with 2 dependents", () => {
    expect(taxReliefsLogic.minusTaxRelief(50000000, "K2")).toEqual(0);
    expect(taxReliefsLogic.minusTaxRelief(67500000, "K2")).toEqual(0);
    expect(taxReliefsLogic.minusTaxRelief(70000000, "K2")).toEqual(2500000);
  });
});

describe("taxReliefsLogic.minusTaxRelief(number, string)", () => {
  it("reduces taxable income by 72000000 for those married with 3 dependents", () => {
    expect(taxReliefsLogic.minusTaxRelief(50000000, "K3")).toEqual(0);
    expect(taxReliefsLogic.minusTaxRelief(72000000, "K3")).toEqual(0);
    expect(taxReliefsLogic.minusTaxRelief(90000000, "K3")).toEqual(18000000);
  });
});
