'use strict'

const path = require('path')
const sqlite3 = require('sqlite3').verbose();
const dbPath = path.resolve(__dirname, '../../data/commentaries/cambridge.cmti')
const dbcamb = new sqlite3.Database(dbPath);
// const dbdarb = new sqlite3.Database(`../../data/commentaries/darby.cmti`);
// const dbhawk = new sqlite3.Database(`../../data/commentaries/hawker.cmti`);

let currentCommentary;

const getBookCommentary = () => {
  return new Promise( (resolve, reject) => {
    currentCommentary = dbcamb;
    currentCommentary.all(`SELECT * FROM BookCommentary WHERE Book = 1`, (err, data) => {
      if (err) return reject(err);
      console.log('data', data);
      resolve(data);
    })
  })
} 

// getBookCommentary();

module.exports = { getBookCommentary };