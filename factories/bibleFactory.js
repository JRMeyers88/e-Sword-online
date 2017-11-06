'use strict';

eSword.factory('BibleFactory', function($q, $http, Url) {

    const baseURL = 'http://localhost:5000';

    let getBible = (bible, book, chapter) => {
        return $q( (resolve, reject) => {
            $http.get(`${baseURL}/Bible/${bible.id}/${book.id}/${chapter}`)
            .then( (data) => {
                resolve(data);
            })
            .catch( (err) => {
                reject(err);
            });
        });
    };

    let getChapters = (book) => {
        return $q( (resolve, reject) => {
            $http.get(`${baseURL}/Bible/${book.id}`)
            .then( (data) => {
                resolve(data);
            })
            .catch( (err) => {
                reject(err);
            });
        });
    };

    let getBibleVerse = (book, chapter, verse) => {
        return $q( (resolve, reject) => {
            let version = 'kjv+';        
            $http.get(`${baseURL}/Bible/${version}/${book.id}/${chapter}/${verse}`)
            .then( (data) => {
                resolve(data);
            })
            .catch( (err) => {
                console.log('err', err);
                reject(err);
            });
        });
    };

    let getBookCommentary = (commentary, book) => {
        return $q( (resolve, reject) => {
            $http.get(`${baseURL}/Comments/${commentary.id}/${book.id}`)
            .then( (data) => {
                resolve(data);
            })
            .catch( (err) => {
                reject(err);
            });
        });
    };

    let getVerseCommentary = (commentary, book, chapter, verse) => {
        return $q( (resolve, reject) => {
            $http.get(`${baseURL}/Comments/${commentary.id}/${book.id}/${chapter}/${verse}`)
            .then( (data) => {
                resolve(data);
            })
            .catch( (err) => {
                reject(err);
            });
        });
    };

    return { getBible, getBibleVerse, getChapters, getBookCommentary, getVerseCommentary }
  
})