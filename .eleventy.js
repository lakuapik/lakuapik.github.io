const fs = require('fs');
const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc')
const htmlmin = require('html-minifier');
const timezone = require('dayjs/plugin/timezone')
const readingTime = require('./src/helper/readingTime');
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
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      });
    }
    return content;
  });

  e11.addShortcode('lastUpdate', () => now);

  e11.addFilter('dateDMY', (val) => dayjs(val).tz(tz).format('D MMM YYYY'));

  e11.addFilter('readTime', (val) => readingTime(val, { speed: 200 }));

  e11.addFilter('jsonify', (val) => JSON.stringify(val));

  e11.addFilter('assetUrl', (url) => {
    const [urlPart, paramPart] = url.split('?');
    const params = new URLSearchParams(paramPart || '');
    const rUrl = (urlPart.charAt(0) == '/') ? urlPart.substring(1) : urlPart;
    const fileStats = fs.statSync(`./src/assets/${rUrl}`);
    params.set('v', new Date(fileStats.mtime).getTime());
    return `${urlPart}?${params}`;
  });

  return {
    passthroughFileCopy: true,
    dir: {
      output: 'docs',
      input: 'src/pages',
      layouts: '../layouts',
      includes: '../includes',
      data: '../data',
    },
    markdownTemplateEngine: 'njk',
  };

};
