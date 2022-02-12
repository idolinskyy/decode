const decodeString = (source) => {
    let index = 0;
    const stack = [];

    while (index < source.length) {
        if (/\d+/.test(source[index])) {
            const count = parseInt(source.substring(index));
            index += String(count).length;
            const position = index++; // '['
            stack.push({ count, position });
        } else if (source[index] === ']') {
            const { count, position } = stack.pop();
            const block = source.substring(position + 1, index);
            const fullBlock = `${count}[${block}]`;
            const replaceString = block.repeat(count);
            source = source.replace(fullBlock, replaceString);
            index += replaceString.length - fullBlock.length + 1;
        } else {
            ++index;
        }
    }
    return source;
};

// test
[
    ['3[a]2[bc]', 'aaabcbc'],
    ['3[a2[c]]', 'accaccacc'],
    ['2[abc]3[cd]ef', 'abcabccdcdcdef'],
    ['abc3[cd]xyz', 'abccdcdcdxyz'],
]
    .map((pair) => `${pair[0]} ==> [${decodeString(pair[0]) === pair[1]}]`)
    .forEach((item) => console.log(item));
