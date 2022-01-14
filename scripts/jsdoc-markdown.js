const jsdoc2md = require('jsdoc-to-markdown')
const path = require('path');
const fs = require('fs');

(function () {
  const getRenderTemplateFromJSFile = async () => {
    const jsMdData = await jsdoc2md.render({ files: 'src/**/*.js' })
    return jsMdData;
  }

  const writeMdToReadMeFile = async () => {
    try {
      const data = await getRenderTemplateFromJSFile();
      console.log(typeof data);
      fs.writeFileSync(path.resolve(__dirname, '../README.md'), data);
      console.log('写入成功');
    } catch (error) {
      console.error(error);
    }
  }

  writeMdToReadMeFile();
})();
