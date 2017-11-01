#!/usr/bin/env node

const bin = require('./index')

const ENR_FILE_PATH = process.argv[2]

bin.execute({enrFilePath: ENR_FILE_PATH}, (error, result) => {
  if (error) {
    return console.error(error)
  }
  console.log(result)
})
