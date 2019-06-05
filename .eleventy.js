module.exports = function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy('css')
	eleventyConfig.addPassthroughCopy('icons')
	return {
        templateFormats: [
            "css",
			"svg",
			"html",
			"md"
        ],
        passthroughFileCopy: true,
    };
}
