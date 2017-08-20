/**
 * Check if string is null or empty.
 *
 * @param {String} text Text/String to check.
 * @returns {Boolean}
 */
function isStringNullOrEmpty(text) {
	return (text == null) || ((typeof text === 'string') && (text.length == 0));
}

export default isStringNullOrEmpty;
