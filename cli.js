#!/usr/bin/env node

const bin = require('./index')

const ENR_FILE_PATH = process.argv[2]
const customReplaceValues = [{enr: 'entrada', js: 'prompt'}]

const enrFile = bin.getFile({filePath: ENR_FILE_PATH})

const jsBuild = bin.buildJsFile({
  enrFile,
  customReplaceValues
})

const file = `
const prompt = require('prompt-sync')()

${jsBuild}
`
bin.write({file})

try {
  require(bin.DEFAULTS.BUILD_PATH)
} catch (error) {
  console.error(bin.buildEnrFile({jsFile: error.stack, customReplaceValues}))
}
