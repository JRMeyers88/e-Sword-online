'use strict';

eSword.factory('BibleFactory', function($q, $http, Url) {

    const baseURL = 'http://localhost:5000';

    let getBibles = (bible, book, chapter) => {
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

    let getCommentaries = (commentary, book) => {
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

    return { getBibles, getCommentaries }
  
})