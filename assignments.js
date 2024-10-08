const books = [
  {
    title: 'Algorithms',
    author: ['Robert Sedgewick', 'Kevin Wayne'],
    publisher: 'Addison-Wesley Professional',
    publicationDate: '2011-03-24',
    edition: 4,
    keywords: [
      'computer science',
      'programming',
      'algorithms',
      'data structures',
      'java',
      'math',
      'software',
      'engineering',
    ],
    pages: 976,
    format: 'hardcover',
    ISBN: '9780321573513',
    language: 'English',
    programmingLanguage: 'Java',
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
    highlighted: true,
  },
  {
    title: 'Structure and Interpretation of Computer Programs',
    author: [
      'Harold Abelson',
      'Gerald Jay Sussman',
      'Julie Sussman (Contributor)',
    ],
    publisher: 'The MIT Press',
    publicationDate: '2022-04-12',
    edition: 2,
    keywords: [
      'computer science',
      'programming',
      'javascript',
      'software',
      'engineering',
    ],
    pages: 640,
    format: 'paperback',
    ISBN: '9780262543231',
    language: 'English',
    programmingLanguage: 'JavaScript',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0,
      },
    },
    highlighted: true,
  },
  {
    title: "Computer Systems: A Programmer's Perspective",
    author: ['Randal E. Bryant', "David Richard O'Hallaron"],
    publisher: 'Prentice Hall',
    publicationDate: '2002-01-01',
    edition: 1,
    keywords: [
      'computer science',
      'computer systems',
      'programming',
      'software',
      'C',
      'engineering',
    ],
    pages: 978,
    format: 'hardcover',
    ISBN: '9780130340740',
    language: 'English',
    programmingLanguage: 'C',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16,
      },
    },
    highlighted: true,
  },
  {
    title: 'Operating System Concepts',
    author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
    publisher: 'John Wiley & Sons',
    publicationDate: '2004-12-14',
    edition: 10,
    keywords: [
      'computer science',
      'operating systems',
      'programming',
      'software',
      'C',
      'Java',
      'engineering',
    ],
    pages: 921,
    format: 'hardcover',
    ISBN: '9780471694663',
    language: 'English',
    programmingLanguage: 'Java, C',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65,
      },
    },
  },
  {
    title: 'Engineering Mathematics',
    author: ['K.A. Stroud', 'Dexter J. Booth'],
    publisher: 'Palgrave',
    publicationDate: '2007-01-01',
    edition: 14,
    keywords: ['mathematics', 'engineering'],
    pages: 1288,
    format: 'paperback',
    ISBN: '9781403942463',
    language: 'English',
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6,
      },
    },
    highlighted: true,
  },
  {
    title: 'The Personal MBA: Master the Art of Business',
    author: 'Josh Kaufman',
    publisher: 'Portfolio',
    publicationDate: '2010-12-30',
    keywords: ['business'],
    pages: 416,
    format: 'hardcover',
    ISBN: '9781591843528',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090,
      },
    },
  },
  {
    title: 'Crafting Interpreters',
    author: 'Robert Nystrom',
    publisher: 'Genever Benning',
    publicationDate: '2021-07-28',
    keywords: [
      'computer science',
      'compilers',
      'engineering',
      'interpreters',
      'software',
      'engineering',
    ],
    pages: 865,
    format: 'paperback',
    ISBN: '9780990582939',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0,
      },
    },
  },
  {
    title: 'Deep Work: Rules for Focused Success in a Distracted World',
    author: 'Cal Newport',
    publisher: 'Grand Central Publishing',
    publicationDate: '2016-01-05',
    edition: 1,
    keywords: ['work', 'focus', 'personal development', 'business'],
    pages: 296,
    format: 'hardcover',
    ISBN: '9781455586691',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808,
      },
    },
    highlighted: true,
  },
];

// //1.1
// const [firstBook, secondBook] = books;
// console.log(firstBook, secondBook);

// // 1.2
// const [, , thirdbook] = books;
// console.log(thirdbook);

// // 1.3
// const ratings = [
//   ['rating', 4.19],
//   ['ratingsCount', 144584],
// ];
// const [[, rating], [, ratingsCount]] = ratings;
// console.log(rating, ratingsCount);

// // 1.4
// const ratingStars = [63405, 1808];
// const [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars;
// console.log(fiveStarRatings, oneStarRatings, threeStarRatings);

// // 2.1
// const { title, author, ISBN } = books[0];
// console.log(title, author, ISBN);

// // 2.2
// const { keywords: tags } = books[0];
// console.log(tags);

// // 2.3
// const { language, programmingLanguage = 'unknown' } = books[6];
// console.log(language, programmingLanguage);

// // 2.4
// let bookTitle = 'unknown';
// let bookAuthor = 'unknown';
// ({ title: bookTitle, author: bookAuthor } = books[0]);
// console.log(bookTitle, bookAuthor);

// // 2.5
// const {
//   thirdParty: {
//     goodreads: { rating: bookRating },
//   },
// } = books[0];
// console.log(bookRating);

// // 2.6
// const printBookInfo = function ({ title, author, year = 'unknown' }) {
//   console.log(`${title} by ${author}, ${year}`);
// };
// printBookInfo({
//   title: 'Algorithms',
//   author: 'Robert Sedgewick',
//   year: '2011',
// });

// // 3.1
// const bookAuthors = [...books[0].author, ...books[1].author];
// console.log(bookAuthors);

// // 3.2
// function spellWord(word) {
//   console.log(...word);
// }
// spellWord('JavaScript');

// // 4.1
// const [mainKeyword, ...rest] = books[0].keywords;
// console.log(mainKeyword, rest);

// // 4.2
// const { publisher: bookPublisher, ...restOfBook } = books[1];
// console.log(bookPublisher, restOfBook); //🎉🎉🎉🎉🎉

// // 4.3
// const printBookAuthorsCount = function (title, ...authors) {
//   console.log(`The book ${title} has ${authors.length} authors`);
// };

// printBookAuthorsCount('Algorithms', 'Robert Sedgewick', 'Kevin Wayne');

// // 5.1
// const hasExamplesInJava = function (obj) {
//   return obj.programmingLanguage === 'Java' || 'no data';
// };

// console.log(hasExamplesInJava(books[3]));
// // But this won't work if there is more than one lang even if one is Java

// // 5.2
// for (let i = 0; i < books.length; i++) {
//   books[i].onlineContent &&
//     console.log(`${books[i].title} provides online content`);
// }

// // 6.1
// for (let i = 0; i < books.length; i++) {
//   books[i].onlineContent ??
//     console.log(`${books[i].title} provides no data about its online content`);
// }

// // 7.1
// for (let i = 0; i < books.length; i++) {
//   books[i].edition ||= 1;
//   console.log(books[i].edition);
// }

// // 7.2
// // My solution
// // for (let i = 0; i < books.length; i++) {
// //   if (books[i].thirdParty.goodreads.rating < 4.2) {
// //     books[i].highlighted &&= false;
// //     console.log(books[i].highlighted);
// //   }
// // }
// // Correct Solution
// for (let i = 0; i < books.length; i++) {
//   books[i].highlighted &&= !(books[i].thirdParty.goodreads.rating < 4.2);
//   console.log(books[i].highlighted);
// }

// // 8.1
// let pageSum = 0;
// for (const book of books) {
//   pageSum += book.pages;
// }
// console.log(pageSum);

// // 8.2
// const allAuthors = [];

// // My Solution (which seems to work)
// for (const book of books) {
//   if (typeof book.author === 'object') {
//     allAuthors.push(...book.author);
//   } else {
//     allAuthors.push(book.author);
//   }
// }

// // // Course Solution
// // for (const book of books) {
// //   if (typeof book.author === 'string') {
// //     allAuthors.push(book.author);
// //   } else {
// //     for (const author of book.author) {
// //       allAuthors.push(author);
// //     }
// //   }
// // }
// console.log(allAuthors);

// // 8.3
// for (const [i, auth] of allAuthors.entries()) {
//   console.log(`${i + 1}: ${auth}`);
// }

// // 9.1
// const bookData = [
//   ['title', 'Computer Networking: A Top-Down Approach'],
//   ['author', ['James F. Kurose', 'Keith W. Ross']],
//   ['publisher', 'Addison Wesley'],
// ];

// // Do the rest
// const newBook = {
//   [bookData[0][0]]: bookData[0][1],
//   [bookData[1][0]]: bookData[1][1][1],
//   [bookData[2][0]]: bookData[2][1],
// };
// console.log(newBook);

// // 9.2
// const pages = 880;

// const newBook2 = {
//   title: 'The C Programming Language',
//   author: ['Brian W. Kernighan', 'Dennis M. Ritchie'],
//   pages,
// };
// console.log(newBook2);

// // 10.1
// const getFirstKeyword = function (book) {
//   console.log(book.keywords?.[0] ?? 'No keywords');
// };

// getFirstKeyword(books[0]);

// // 11.1
// const entries = [];

// for (const prop of Object.keys(books[0].thirdParty.goodreads)) {
//   entries.push([prop]);
// }
// console.log(entries);

// // 11.2
// // This one doesn't make sense!!!
// // console.log(Object.values(books[0].thirdParty.goodreads));

// for (const [k, v] of Object.values(books[0].thirdParty.goodreads).entries()) {
//   entries[k].push(v);
//   //   console.log(i);
// }
// console.log(entries);

// // const x = [1, 2, 3, 4];
// // for (const y of x.entries()) {
// //   console.log(y);
// // }

// // 11.3
// const entries2 = Object.entries(books[0].thirdParty.goodreads);
// console.log(entries2);

// // 12.1
// const allKeywords = [];

// for (book of books) {
//   allKeywords.push(...book.keywords);
// }
// console.log(allKeywords);

// // 12.2
// const uniqueKeywords = new Set(allKeywords);
// console.log(uniqueKeywords);

// //12.3
// uniqueKeywords.add('coding language');
// uniqueKeywords.add('science');
// console.log(uniqueKeywords);

// // 12.4
// uniqueKeywords.delete('business');
// console.log(uniqueKeywords);

// // 12.5
// uniqueKeywordsArr = [...uniqueKeywords];
// console.log(uniqueKeywordsArr);

// // 12.6
// uniqueKeywords.clear();
// console.log(uniqueKeywords);

// // 13.1
// const bookMap = new Map();
// bookMap.set('title', 'Clean Code').set('author', 'Robert C. Martin');
// console.log(bookMap);
// // Course solution
// // const bookMap = new Map([['title', 'Clean Code'], ['author', 'Robert C. Martin']]);

// // 13.2
// bookMap.set('pages', 464);
// console.log(bookMap);

// // 13.3
// console.log(`${bookMap.get('title')} by ${bookMap.get('author')}`);

// // 13.4
// console.log(bookMap.size);

// // 13.5
// if (bookMap.has('author')) console.log('The author is known');

// // 14.1
// const firstBookMap = new Map(Object.entries(books[0]));
// console.log(firstBookMap);

// // 14.2
// for (const [k, v] of firstBookMap) {
//   if (typeof v === 'number') console.log(k);
// }

// // 15.1
// console.log(
//   books[0].ISBN[6],
//   books[0].ISBN[4],
//   books[0].ISBN[9],
//   books[0].ISBN[8]
// );

// // 15.2
// const quote =
//   'A computer once beat me at chess, but it was no match for me at kick boxing';
// console.log(quote.indexOf('chess'));

// // 15.3
// // My solution
// console.log(quote.slice(-'boxing'.length));
// // Course solution
// console.log(quote.slice(quote.lastIndexOf(' ') + 1));

// // 15.4
// // My solution
// // const isContributor = function (str) {
// //   console.log(str.slice(str.lastIndexOf(' ') + 1) === '(Contributor)');
// // };
// // Course Solution
// function isContributor(author) {
//   return author.lastIndexOf('(Contributor)') !== -1;
// }
// isContributor('Julie Sussman (Contributor)');
// isContributor('Robert Sedgewick');

// // 16.1
// // My Solution
// // Mine won't work if there isn't '(contributor)' at the end 😔
// const normalizeAuthorName = function (author) {
//   const authorClean = author.toLowerCase().trim();
//   let authorFirst = authorClean.slice(0, authorClean.indexOf(' '));
//   let authorLast = authorClean
//     .slice(authorClean.indexOf(' '), authorClean.lastIndexOf(' '))
//     .trim();
//   authorCap =
//     authorFirst[0].toUpperCase() +
//     authorFirst.slice(1) +
//     ' ' +
//     authorLast[0].toUpperCase() +
//     authorLast.slice(1);
//   console.log(authorCap);
//   //   console.log(authorFirst);
//   //   console.log(authorLast);
//   //   if (authorClean.endsWith('(contributor)')) {
//   //     const authorTrim = authorClean.slice(0, authorClean.lastIndexOf(' '));
//   //     console.log(authorTrim);
//   //     // authorClean.slice(0, -)
//   //   } else console.log(authorClean);
// };

// // Course Solution
// // function normalizeAuthorName(author) {
// //     author = author.trim();
// //     const firstName = author.slice(0, author.indexOf(' '));

// //     let lastName = '';
// //     if (author.indexOf(' ') === author.lastIndexOf(' ')) {
// //       lastName = author.slice(author.indexOf(' ') + 1, author.length);
// //     } else {
// //       lastName = author.slice(author.indexOf(' ') + 1, author.lastIndexOf(' '));
// //     }

// //     const capitalizedFirstName = firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();
// //     const capitalizedLastName = lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();

// //     return capitalizedFirstName + ' ' + capitalizedLastName;
// //   }

// normalizeAuthorName('  JuliE sussMan (Contributor)');

// // 16.2
// const newBookTitle = books[1].title.replace('Programs', 'Software');
// console.log(newBookTitle);

// // 16.3
// const logBookTheme = function (title) {
//   const titleLower = title.toLowerCase();
//   if (titleLower.startsWith('computer'))
//     console.log('This book is about computers');
//   else if (
//     titleLower.includes('algorithms') &&
//     titleLower.includes('structures')
//   )
//     console.log('This book is about algorithms and data structures');
//   else if (!titleLower.includes('operating')) {
//     if (titleLower.endsWith('system') || titleLower.endsWith('systems'))
//       console.log(
//         'This book is about some systems, but definitely not about operating systems'
//       );
//   }
// };

// logBookTheme('computer all operatgng system algorithms and structures book');

// 17.1
const bookCategories =
  'science;computing;computer science;algorithms;business;operating systems;networking;electronics';

const logBookCategories = function (str) {
  strArr = str.split(';');
  for (word of strArr) {
    console.log(word);
  }
};

logBookCategories(bookCategories);

// 17.2
const getKeywordsAsString = function (arr) {
  // collect keywords
  const keywordsArr = [];
  for (book of arr) {
    keywordsArr.push(...book.keywords);
  }
  // remove duplicates
  const keywordsUnique = new Set([...keywordsArr]);
  console.log(keywordsArr);
  console.log(keywordsUnique);
  //join to one string
  console.log([...keywordsUnique].join(';'));
};
// getKeywordsAsString(books);

// 17.3
const bookChapters = [
  ['The Basics', 14],
  ['Sorting', 254],
  ['Searching', 372],
  ['Graphs', 526],
  ['Strings', 706],
];

const logBookChapters = function (chapters) {
  for (const [chapter, pages] of chapters) {
    console.log(chapter.padEnd(30, '_'), pages);
  }
};
logBookChapters(bookChapters);
