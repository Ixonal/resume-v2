import { describe, it, expect } from "vitest";
import { formatPhone } from "./formatPhone.js";

describe(formatPhone.name, () => {

  it("exists", () => {
    expect(formatPhone).to.exist;
  });


  it("can format both strings and numbers", () => {
    const testVal1 = "1234567";
    const testVal2 = 1234567;
    const expectedResult = "123-4567";


    const result1 = formatPhone(testVal1);
    const result2 = formatPhone(testVal2);


    expect(result1).to.equal(expectedResult);
    expect(result2).to.equal(expectedResult);
  });


  it("formats 4 or fewer digit numbers as just the number", () => {
    const testVal1 = "3";
    const testVal2 = "31";
    const testVal3 = "314";
    const testVal4 = "3141";


    const result1 = formatPhone(testVal1);
    const result2 = formatPhone(testVal2);
    const result3 = formatPhone(testVal3);
    const result4 = formatPhone(testVal4);


    //in this case, there should be no additional formatting, so everything should equal the original test value
    expect(result1).to.equal(testVal1);
    expect(result2).to.equal(testVal2);
    expect(result3).to.equal(testVal3);
    expect(result4).to.equal(testVal4);
  })

});
