import { taxSchemeLogic } from "@/logic/taxSchemeLogic";

describe("taxSchemeLogic.calculateTaxAmount(number)", () => {
  it("returns 0 for income of 0", () => {
    expect(taxSchemeLogic.calculateTaxAmount(0)).toEqual(0);
  });
});

describe("taxSchemeLogic.calculateTaxAmount(number)", () => {
  it("returns tax for income under 50 million", () => {
    expect(taxSchemeLogic.calculateTaxAmount(50000000)).toEqual(2500000);
    expect(taxSchemeLogic.calculateTaxAmount(1239979)).toEqual(61998.95);
  });
});

describe("taxSchemeLogic.calculateTaxAmount(number)", () => {
  it("returns tax for income above 50 million, under 250 million", () => {
    expect(taxSchemeLogic.calculateTaxAmount(250000000)).toEqual(32500000);
    expect(taxSchemeLogic.calculateTaxAmount(150000000)).toEqual(17500000);
  });
});

describe("taxSchemeLogic.calculateTaxAmount(number)", () => {
  it("returns tax for income above 250 million, under 500 million", () => {
    expect(taxSchemeLogic.calculateTaxAmount(500000000)).toEqual(95000000);
    expect(taxSchemeLogic.calculateTaxAmount(264000000)).toEqual(36000000);
  });
});

describe("taxSchemeLogic.calculateTaxAmount(number)", () => {
  it("returns tax for income above 500 million", () => {
    expect(taxSchemeLogic.calculateTaxAmount(700000000)).toEqual(155000000);
  });
});
