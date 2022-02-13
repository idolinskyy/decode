import { decodeString as decode1 } from "./algo1.js";
import { decodeString as decode2 } from "./algo2.js";

const test = (arrTest, testFunc) => {
    arrTest
        .map((pair) => `${pair[0]} ==> [${testFunc(pair[0]) === pair[1]}]`)
        .forEach((item) => console.log(item));
};

test(
    [
        ["3[a]2[bc]", "aaabcbc"],
        ["3[a2[c]]", "accaccacc"],
        ["2[abc]3[cd]ef", "abcabccdcdcdef"],
        ["2[abc]3[cd]2[abc]ef", "abcabccdcdcdabcabcef"],
        ["abc3[cd]xyz", "abccdcdcdxyz"],
    ],
    decode1
);

test(
    [
        ["3[a]2[bc]", "aaabcbc"],
        ["3[a2[c]]", "accaccacc"],
        ["2[abc]3[cd]ef", "abcabccdcdcdef"],
        ["2[abc]3[cd]2[abc]ef", "abcabccdcdcdabcabcef"],
        ["abc3[cd]xyz", "abccdcdcdxyz"],
    ],
    decode2
);
