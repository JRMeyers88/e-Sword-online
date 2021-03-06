'use strict';

eSword.controller('BibleController', function($scope, $q, $sce, $compile, $window, BibleFactory) {


  $scope.selection = {
    translation: {id: "esv"},
    book: {id: 43, abbr: "Joh"},
    chapter: {Chapter: 3},
    commentary: {id: "cambridge"}
  }

  $scope.trustAsHtml = function(html_code) {
    return $sce.trustAsHtml(html_code);
  }

  $scope.getBibleAndCommentary = () => {
    $scope.selection.chapter = {Chapter: 1};
    $scope.getBible();
    $scope.getBookCommentary();
    $scope.getBookChapters();
  }

  $scope.selectedverse = null;

  $scope.getVerse = (verse) => {
    $('.selectedverse').removeClass('selectedverse');
    $scope.selectedverse = verse;
    $scope.getVerseCommentary(verse);
    $scope.getBibleVerse(verse);
    $scope.getTSKComment(verse);
  }

  $scope.getBible = () => {
    BibleFactory.getBible($scope.selection.translation, $scope.selection.book, $scope.selection.chapter.Chapter)
      .then( (bible) => {
        $scope.bibleContents = bible.data;
        $scope.$broadcast("items_changed")
      })
      .catch( (err) => {
        console.log('error', err);
      });
  }

  // $scope.getPrev = () => {
  //   BibleFactory.getBible($scope.selection.translation, $scope.selection.book, $scope.selection.chapter.Chapter)
  //     .then( (bible) => {
  //       $scope.bibleContents = bible.data;
  //       $scope.$broadcast("items_changed")
  //     })
  //     .catch( (err) => {
  //       console.log('error', err);
  //     });
  // }

  $scope.getBookChapters = () => {
    BibleFactory.getChapters($scope.selection.translation, $scope.selection.book)
    .then( (chapters) => {
      $scope.chapters = chapters.data;
    })
    .catch( (err) => {
      console.log('err', err);
    })
  }

  $scope.getBibleVerse = (verse) => {
    BibleFactory.getBibleVerse($scope.selection.book, $scope.selection.chapter.Chapter, verse)
      .then( (bibleVerse) => {
        $scope.bibleVerse = bibleVerse.data;
        // highlight = true;
      })
      .catch( (err) => {
        console.log('error', err);
      });
  }

  $scope.getBookCommentary = () => {
    BibleFactory.getBookCommentary($scope.selection.commentary, $scope.selection.book)
      .then( (commentary) => {
        $scope.commentaryContents = commentary.data;
        $scope.$broadcast("items_changed")
      })
      .catch( (err) => {
        console.log('error', err);
      });
  }

  $scope.getVerseCommentary = (verse) => {
    BibleFactory.getVerseCommentary($scope.selection.commentary, $scope.selection.book, $scope.selection.chapter.Chapter, verse)
      .then( (verseCommentary) => {
        $scope.commentaryContents = verseCommentary.data;
      })
      .catch( (err) => {
        console.log('error', err);
      });
  }

  $scope.getTSKComment = (verse) => {
    BibleFactory.getTSKCommentary($scope.selection.book, $scope.selection.chapter.Chapter, verse)
    .then( (commentVerse) => {
      $scope.tskContents = commentVerse.data;
    })
    .catch( (err) => {
      console.log('error', err);
    })
  }

  // $scope.getKJVComment = (verse) => {
  //   BibleFactory.getKJV($scope.selection.book, $scope.selection.chapter.Chapter, verse)
  //   .then( (commentVerse) => {
  //     $scope.kjvContents = commentVerse.data;
  //   })
  //   .catch( (err) => {
  //     console.log('error', err);
  //   })
  // }

  $scope.getBible();
  $scope.getBookCommentary();
  $scope.getBookChapters();
  $scope.getBibleVerse(16);
  $scope.getTSKComment(16);

  $scope.bibles = [
    {
      tag: "English Standard Version", 
      id: "esv" 
    },{ 
      tag: "World English Bible", 
      id: "web"
    },{ 
      tag: "Good News Bible", 
      id: "gnb"
    },{ 
      tag: "King James Version", 
      id: "kjv"
    },{
      tag: "Shinkaiyaku Seisho",
      id: "japanesess"
    },{
      tag: "Kougo-yaku",
      id: "japaneseky"
    }
  ];

  $scope.commentaries = [
    {
      tag: "Cambridge Bible",
      id: "cambridge"
    },{
      tag: "John Darby",
      id: "darby"
    },{
      tag: "Robert Hawker",
      id: "hawker"
    },{
      tag: "B.W. Johnson",
      id: "johnson"
    },{
      tag: "F.B. Meyer",
      id: "meyer"
    },{
      tag: "Popular New Testament",
      id: "popular"
    },{
      tag: "Robertson's Word Pictures",
      id: "robertson"
    },{
      tag: "Vincent's Word Studies",
      id: "vincent"
    },{
      tag: "Benson",
      id: "benson"
    },{
      tag: "Brooks",
      id: "brooks"
    },{
      tag: "Expositor's Bible",
      id: "ebc"
    },{
      tag: "Keil & Delitzche",
      id: "kd"
    },{
      tag: "MacLaren",
      id: "maclaren"
    },{
      tag: "Sermon Bible",
      id: "sbc"
    },
  ]

  $scope.books = [
    {
      id: "1",
      title: "Genesis",
      abbr: "Gen",
      chap: "50"
    },{
      id: "2",
      title: "Exodus",
      abbr: "Exo",
      chap: "40"
    },{
      id: "3",
      title: "Leviticus",
      abbr: "Lev",
      chap: "27"
    },{
      id: "4",
      title: "Numbers",
      abbr: "Num",
      chap: "36"
    },{
      id: "5",
      title: "Deuteronomy",
      abbr: "Deu",
      chap: "34"
    },{
      id: "6",
      title: "Joshua",
      abbr: "Jos",
      chap: "24"
    },{
      id: "7",
      title: "Judges",
      abbr: "Jdg",
      chap: "21"
    },{
      id: "8",
      title: "Ruth",
      abbr: "Rth",
      chap: "4"
    },{
      id: "9",
      title: "1 Samuel",
      abbr: "1Sa",
      chap: "31"
    },{
      id: "10",
      title: "2 Samuel",
      abbr: "2Sa",
      chap: "24"
    },{
      id: "11",
      title: "1 Kings",
      abbr: "1Ki",
      chap: "22"
    },{
      id: "12",
      title: "2 Kings",
      abbr: "2Ki",
      chap: "25"
    },{
      id: "13",
      title: "1 Chronicles",
      abbr: "1Ch",
      chap: "29"
    },{
      id: "14",
      title: "2 Chronicles",
      abbr: "2Ch",
      chap: "36"
    },{
      id: "15",
      title: "Ezra",
      abbr: "Ezr",
      chap: "10"
    },{
      id: "16",
      title: "Nehemiah",
      abbr: "Neh",
      chap: "13"
    },{
      id: "17",
      title: "Esther",
      abbr: "Est",
      chap: "10"
    },{
      id: "18",
      title: "Job",
      abbr: "Job",
      chap: "42"
    },{
      id: "19",
      title: "Psalms",
      abbr: "Psa",
      chap: "150"
    },{
      id: "20",
      title: "Proverbs",
      abbr: "Pro",
      chap: "31"
    },{
      id: "21",
      title: "Ecclesiastes",
      abbr: "Ecc",
      chap: "12"
    },{
      id: "22",
      title: "Song of Solomon",
      abbr: "Son",
      chap: "8"
    },{
      id: "23",
      title: "Isaiah",
      abbr: "Isa",
      chap: "66"
    },{
      id: "24",
      title: "Jeremiah",
      abbr: "Jer",
      chap: "52"
    },{
      id: "25",
      title: "Lamentations",
      abbr: "Lam",
      chap: "5"
    },{
      id: "26",
      title: "Ezekiel",
      abbr: "Eze",
      chap: "48"
    },{
      id: "27",
      title: "Daniel",
      abbr: "Dan",
      chap: "12"
    },{
      id: "28",
      title: "Hosea",
      abbr: "Hos",
      chap: "14"
    },{
      id: "29",
      title: "Joel",
      abbr: "Joe",
      chap: "3"
    },{
      id: "30",
      title: "Amos",
      abbr: "Amo",
      chap: "9"
    },{
      id: "31",
      title: "Obadiah",
      abbr: "Oba",
      chap: "1"
    },{
      id: "32",
      title: "Jonah",
      abbr: "Jon",
      chap: "4"
    },{
      id: "33",
      title: "Micah",
      abbr: "Mic",
      chap: "7"
    },{
      id: "34",
      title: "Nahum",
      abbr: "Nah",
      chap: "3"
    },{
      id: "35",
      title: "Habakkuk",
      abbr: "Hab",
      chap: "3"
    },{
      id: "36",
      title: "Zephaniah",
      abbr: "Zep",
      chap: "3"
    },{
      id: "37",
      title: "Haggai",
      abbr: "Hag",
      chap: "2"
    },{
      id: "38",
      title: "Zechariah",
      abbr: "Zec",
      chap: "14"
    },{
      id: "39",
      title: "Malachi",
      abbr: "Mal",
      chap: "4"
    },{
      id: "40",
      title: "Matthew",
      abbr: "Mat",
      chap: "28"
    },{
      id: "41",
      title: "Mark",
      abbr: "Mar",
      chap: "16"
    },{
      id: "42",
      title: "Luke",
      abbr: "Luk",
      chap: "24"
    },{
      id: "43",
      title: "John",
      abbr: "Joh",
      chap: "21"
    },{
      id: "44",
      title: "Acts",
      abbr: "Act",
      chap: "28"
    },{
      id: "45",
      title: "Romans",
      abbr: "Rom",
      chap: "16"
    },{
      id: "46",
      title: "1 Corinthians",
      abbr: "1Co",
      chap: "16"
    },{
      id: "47",
      title: "2 Corinthians",
      abbr: "2Co",
      chap: "13"
    },{
      id: "48",
      title: "Galatians",
      abbr: "Gal",
      chap: "6"
    },{
      id: "49",
      title: "Ephesians",
      abbr: "Eph",
      chap: "6"
    },{
      id: "50",
      title: "Philippians",
      abbr: "Php",
      chap: "4"
    },{
      id: "51",
      title: "Colossians",
      abbr: "Col",
      chap: "4"
    },{
      id: "52",
      title: "1 Thessalonians",
      abbr: "1Th",
      chap: "5"
    },{
      id: "53",
      title: "2 Thessalonians",
      abbr: "2Th",
      chap: "3"
    },{
      id: "54",
      title: "1 Timothy",
      abbr: "1Ti",
      chap: "6"
    },{
      id: "55",
      title: "2 Timothy",
      abbr: "2Ti",
      chap: "4"
    },{
      id: "56",
      title: "Titus",
      abbr: "Tit",
      chap: "3"
    },{
      id: "57",
      title: "Philemon",
      abbr: "Phm",
      chap: "1"
    },{
      id: "58",
      title: "Hebrews",
      abbr: "Heb",
      chap: "13"
    },{
      id: "59",
      title: "James",
      abbr: "Jas",
      chap: "5"
    },{
      id: "60",
      title: "1 Peter",
      abbr: "1Pe",
      chap: "5"
    },{
      id: "61",
      title: "2 Peter",
      abbr: "2Pe",
      chap: "3"
    },{
      id: "62",
      title: "1 John",
      abbr: "1Jn",
      chap: "5"
    },{
      id: "63",
      title: "2 John",
      abbr: "2Jn",
      chap: "1"
    },{
      id: "64",
      title: "3 John",
      abbr: "3Jn",
      chap: "1"
    },{
      id: "65",
      title: "Jude",
      abbr: "Jud",
      chap: "1"
    },{
      id: "66",
      title: "Revelation",
      abbr: "Rev",
      chap: "22"
    }
  ];

});