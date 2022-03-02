const fs = require('fs');
const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc')
const htmlmin = require('html-minifier');
const timezone = require('dayjs/plugin/timezone')
const assetUrl = require('./src/helper/assetUrl');
const readingTime = require('./src/helper/readingTime');
const staticallyImg = require('./src/helper/staticallyImg');
const UserConfig = require('@11ty/eleventy/src/UserConfig');

dayjs.extend(utc);
dayjs.extend(timezone);

const tz = 'Asia/Jakarta';
const now = dayjs().tz(tz).format('YYYY-MM-DD HH:mm');

/**
 * @param {UserConfig} e11
 */
module.exports = (e11) => {

  e11.addPassthroughCopy({ './src/assets/static': './' });
  e11.addPassthroughCopy({ './src/assets/js/sw.js': './sw.js' });
  e11.addPassthroughCopy({ './src/assets/js/app.js': './js/app.js' });

  e11.addTransform('htmlmin', (content, outputPath) => {
    if (outputPath && outputPath.endsWith('.html')) {
      return htmlmin.minify(content, {
        removeComments: true,
        useShortDoctype: true,
        collapseWhitespace: true,
      });
    }
    return content;
  });

  e11.addShortcode('lastUpdate', () => now);

  e11.addFilter('datesify', (val, format) => dayjs(val).tz(tz).format(format));

  e11.addFilter('dateDMY', (val) => dayjs(val).tz(tz).format('D MMM YYYY'));

  e11.addFilter('readTime', (val) => readingTime(val, { speed: 200 }));

  e11.addFilter('jsonify', (val) => JSON.stringify(val));

  e11.addFilter('lowercase', (val) => String(val).toLowerCase());

  e11.addFilter('assetUrl', (url) => assetUrl(url));

  e11.addFilter('staticallyImg', (url, width = '') => staticallyImg(url, width));

  return {
    dir: {
      output: 'docs',
      input: 'src/pages',
      layouts: '../layouts',
      includes: '../includes',
      data: '../data',
    },
    passthroughFileCopy: true,
    markdownTemplateEngine: 'njk',
  };

};
