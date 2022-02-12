const decodeString = (source) => {
    let index = 0;
    const stack = [];

    while (index < source.length) {
        const char = source[index];

        if (char === '[') {
            stack.push(index++);
        } else if (/\d+/.test(char)) {
            const int = parseInt(source.substring(index));
            stack.push(int);
            index += String(int).length;
        } else if (char === ']') {
            const begin = stack.pop();
            const int = stack.pop();
            const block = source.substring(begin + 1, index);
            const fullBlock = `${int}[${block}]`;
            const replaceString = block.repeat(int);
            source = source.replace(fullBlock, replaceString);
            index += replaceString.length - fullBlock.length + 1;
        } else {
            ++index;
        }
    }
    return source;
};

// test
['3[a]2[bc]', '3[a2[c]]', '2[abc]3[dc]f', 'abc3[cd]xyz']
    .map((source) => `${source} ==> ${decodeString(source)}`)
    .forEach((item) => console.log(item));
