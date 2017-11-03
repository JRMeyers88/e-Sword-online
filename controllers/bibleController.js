'use strict';

eSword.controller('BibleController', function($scope, $q, $window, BibleFactory) {

  // $scope.$watch('selectedBible', function() {
  //   getBibles();
  // });

  $scope.selection = {
    translation: null,
    book: null,
    chapter: 1
  }

  $scope.getBibles = () => {
    BibleFactory.getBibles($scope.selection.translation, $scope.selection.book, $scope.selection.chapter)
      .then( (bibles) => {
        console.log('bibles', bibles);
        $scope.contents = bibles.data;
        console.log('scope.contents', $scope.contents);
      })
      .catch( (err) => {
        console.log('error', err);
      });
  }

  $scope.bibles = [
    {
      tag: "English Standard", 
      id: "esv" 
    },{ 
      tag: "WEB bible", 
      id: "web"
    },{ 
      tag: "GNB bible", 
      id: "gnb"
    },{ 
      tag: "King James", 
      id: "kjv"
    },{ 
      tag: "King James+", 
      id: "kjv+"
    },{ 
      tag: "WEBA bible", 
      id: "weba"
    }
  ];

  $scope.books = [
    {
      tag: "Genesis",
      id: "1"
    },{
      tag: "Exodus",
      id: "2"
    },{
      tag: "Leviticus",
      id: "3"
    },{
      tag: "Numbers",
      id: "4"
    },{
      tag: "Deuteronomy",
      id: "5"
    }
  ];

  $scope.chapters = [1, 2, 3]

});