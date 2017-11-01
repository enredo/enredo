#!/usr/bin/env node

const bin = require('./index')

const ENR_FILE_PATH = process.argv[2]

const enrFile = bin.getFile({filePath: ENR_FILE_PATH})

const file = bin.buildJsFile(enrFile)

bin.write({file})

try {
  require(bin.DEFAULTS.BUILD_PATH)
} catch (error) {
  console.error(bin.buildEnrFile(error.stack))
}
