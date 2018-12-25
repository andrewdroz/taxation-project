import { taxSchemeLogic } from "@/logic/taxSchemeLogic";

describe("taxSchemeLogic.calculateTierOne(number)", () => {
  it("returns amount that is 5% of input", () => {
    expect(taxSchemeLogic.calculateTierOne(100)).toEqual(5);
  });
});

describe("taxSchemeLogic.calculateTierTwo(number)", () => {
  it("returns amount that is 15% of input", () => {
    expect(taxSchemeLogic.calculateTierTwo(100)).toEqual(15);
  });
});

describe("taxSchemeLogic.calculateTierThree(number)", () => {
  it("returns amount that is 25% of input", () => {
    expect(taxSchemeLogic.calculateTierThree(100)).toEqual(25);
  });
});

describe("taxSchemeLogic.calculateTierFour(number)", () => {
  it("returns amount that is 30% of input", () => {
    expect(taxSchemeLogic.calculateTierFour(100)).toEqual(30);
  });
});
