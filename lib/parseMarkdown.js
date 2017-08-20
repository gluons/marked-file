import * as marked from 'marked';

/**
 * Parse markdown string to HTML.
 *
 * @param {String} markdownString Markdown string
 * @returns {String}
 */
function parseMarkdown(markdownString) {
	return marked(markdownString);
}

export default parseMarkdown;
