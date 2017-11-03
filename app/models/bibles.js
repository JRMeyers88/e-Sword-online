'use strict'

const path = require('path')
const sqlite3 = require('sqlite3').verbose();


let currentBible;

const getBook = (version, book, chapter) => {
  return new Promise( (resolve, reject) => {
    console.log("mod version", version);
    const versionPath = path.resolve(__dirname, `../../data/bibles/${version}.bbli`);
    const currentBible = new sqlite3.Database(versionPath);
    console.log('current bible', currentBible);
    currentBible.all(`SELECT * FROM Bible WHERE Book = ${book} and Chapter = ${chapter}`, (err, data) => {
      if (err) return reject(err);
      resolve(data);
    })
  })
} 

module.exports = { getBook };