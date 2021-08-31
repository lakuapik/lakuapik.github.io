module.exports = function (eleventyConfig) {

  eleventyConfig.addPassthroughCopy({'./src/assets/static': './'});

  return {
    passthroughFileCopy: true,
    dir: {
      output: 'docs',
      input: 'src/pages',
      layouts: '../layouts',
      includes: '../includes',
      data: '../data',
    },
  };

};
