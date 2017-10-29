const fs = require('fs')
const replaceValues = require('./replace')
const path = require('path')
const {execFile} = require('child_process')

const encodingOptions = {
  encoding: 'utf-8'
}

const BUILD_PATH = path.join(__dirname, 'build.js')

const getFile = ({filePath, encodingOptions}) => fs.readFileSync(filePath, encodingOptions)

const build = ({originalFile, replaceValues, originalKey, newValueKey}) => {
  let file = originalFile

  replaceValues.forEach(replaceValue => {
    const regex = new RegExp(replaceValue[originalKey], 'g')
    file = file.replace(regex, replaceValue[newValueKey])
  })

  return file
}

const write = ({file, buildPath, encodingOptions}) => fs.writeFileSync(buildPath, file, encodingOptions)

const buildErrorInEnrSyntax = (error) => {
  return build({
    originalFile: error.stack,
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

const execute = ({enrFilePath}, done) => {
  const enrFile = getFile({filePath: enrFilePath, encodingOptions})

  const jsFile = buildJsFile(enrFile)

  write({file: jsFile, buildPath: BUILD_PATH, encodingOptions})

  execFile('node', [BUILD_PATH], (error, stdout, stderr) => {
    if (error) return done(buildErrorInEnrSyntax(error))
    done(null, stdout)
  })
}

module.exports = {
  execute
}
