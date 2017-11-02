'use strict'

const path = require('path')
const sqlite3 = require('sqlite3').verbose();
const dbPath = path.resolve(__dirname, '../../data/bibles/esv.bbli')
const dbesv = new sqlite3.Database(dbPath);
// const dbkjv = new sqlite3.Database(`../../data/bibles/kjv.bbli`);
// const dbweb = new sqlite3.Database(`../../data/bibles/web.bbli`);

let currentBible;

const getBook = (book, chapter) => {
  return new Promise( (resolve, reject) => {
    currentBible = dbesv;
    currentBible.all(`SELECT * FROM Bible WHERE Book = ${book} and Chapter = ${chapter}`, (err, data) => {
      if (err) return reject(err);
      // console.log('data', data);
      resolve(data);
    })
  })
} 

// getBook();

module.exports = { getBook };