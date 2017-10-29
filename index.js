const fs = require('fs')
const replaceValues = require('./replace')
const path = require('path')

const encodingOptions = {
  encoding: 'utf-8'
}

const BUILD_PATH = path.join(__dirname, 'build.js')

const getFile = () => fs.readFileSync('./teste.enr', encodingOptions)

const build = ({originalFile, replaceValues, originalKey, newValueKey}) => {
  let file = originalFile
  replaceValues.forEach(replaceValue => {
    const regex = new RegExp(replaceValue[originalKey], 'g')
    file = file.replace(regex, replaceValue[newValueKey])
  })
  return file
}

const write = (file) => fs.writeFileSync(BUILD_PATH, file, encodingOptions)

try {
  const enrFile = getFile()

  const jsFile = build({
    originalFile: enrFile,
    replaceValues: replaceValues,
    originalKey: 'enr',
    newValueKey: 'js'
  })

  write(jsFile)
  require(BUILD_PATH)
} catch (error) {
  const errorInEnrSyntax = build({
    originalFile: error.stack,
    replaceValues: replaceValues,
    originalKey: 'js',
    newValueKey: 'enr'
  })

  console.error(errorInEnrSyntax)
}
