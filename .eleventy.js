module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/css/");
    eleventyConfig.addWatchTarget("./src/css/");
    eleventyConfig.addPassthroughCopy("./src/images/");
    eleventyConfig.addPassthroughCopy("./src/js/");



    // Return your Object options:
    return {
      markdownTemplateEngine: 'njk',
      dir: {
        input: "src",
        output: "public"
      }
    }
};