const decodeString = (source) => {
    let index = 0;
    const stack = [];

    while (index < source.length) {
        if (+source[index]) {
            const count = parseInt(source.substring(index));

            index += String(count).length;

            stack.push({ count, position: index++ });
        } else if (source[index] === "]") {
            const { count, position } = stack.pop(),
                block = source.substring(position + 1, index),
                fullBlock = `${count}[${block}]`,
                replaceString = block.repeat(count);

            source = source.replace(fullBlock, replaceString);

            index += replaceString.length - fullBlock.length + 1;
        } else {
            ++index;
        }
    }
    return source;
};

export default decodeString;
