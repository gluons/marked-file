/**
 * Convert File object to string.
 *
 * @param {File} file A file object
 * @returns {Promise<String>}
 */
function fileToString(file) {
	return new Promise((resolve, reject) => {
		let reader = new FileReader();
		reader.addEventListener('load', e => {
			resolve(e.target.result);
		});
		reader.addEventListener('error', e => {
			reject(e);
		});
		reader.readAsText(file, 'UTF-8');
	});
}

export default fileToString;
