const fs = require('fs')
const replaceValues = require('./replace')
const path = require('path')

const DEFAULTS = {
  ENCODING_OPTIONS: {
    encoding: 'utf-8'
  },
  BUILD_PATH: path.join(__dirname, 'build.js')
}

const getFile = ({filePath, encodingOptions = DEFAULTS.ENCODING_OPTIONS} = {}) =>
  fs.readFileSync(filePath, encodingOptions)

const build = ({originalFile, replaceValues, originalKey, newValueKey}) => {
  let file = originalFile

  replaceValues.forEach(replaceValue => {
    const regex = new RegExp(replaceValue[originalKey], 'g')
    file = file.replace(regex, replaceValue[newValueKey])
  })

  return file
}

const write = ({file, buildPath = DEFAULTS.BUILD_PATH, encodingOptions = DEFAULTS.ENCODING_OPTIONS} = {}) =>
  fs.writeFileSync(buildPath, file, encodingOptions)

const buildEnrFile = (jsFile) => {
  return build({
    originalFile: jsFile,
    replaceValues,
    originalKey: 'js',
    newValueKey: 'enr'
  })
}

const buildJsFile = (enrFile) => {
  return build({
    originalFile: enrFile,
    replaceValues,
    originalKey: 'enr',
    newValueKey: 'js'
  })
}

module.exports = {
  buildJsFile,
  write,
  getFile,
  DEFAULTS,
  buildEnrFile
}
