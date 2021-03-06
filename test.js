import decode1 from "./algo1.js";
import decode2 from "./algo2.js";

const testData = [
    ["3[a]2[bc]", "aaabcbc"],
    ["3[a2[c]]", "accaccacc"],
    ["2[abc]3[cd]ef", "abcabccdcdcdef"],
    ["2[abc]3[cd]2[abc]ef", "abcabccdcdcdabcabcef"],
    ["abc3[cd]xyz", "abccdcdcdxyz"],
];

const test = (arrTest, testFunc, comment = "Test:") => {
    console.log(comment);
    arrTest
        .map((pair) => `${pair[0]} ==> [${testFunc(pair[0]) === pair[1]}]`)
        .forEach((item) => console.log(item));
    console.log();
};

test(testData, decode1, "First algorithm");
test(testData, decode2, "Second algorithm");
