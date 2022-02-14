const decodeString = (source) => {
	const newString = source.replace(/(\d+)\[(\w+)\]/g, (_, count, block) => block.repeat(count));
	return newString === source ? newString : decodeString(newString);
};

export default decodeString;
