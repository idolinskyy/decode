const decodeString = (source) => {
    let match;
    while ((match = source.match(/\d+\[(\w+)\]/g))) {
        match.forEach((item) => {
            const [, count, block] = item.match(/(\d+)\[(\w+)\]/);
            source = source.replace(item, block.repeat(count));
        });
    }
    return source;
};

export { decodeString };
