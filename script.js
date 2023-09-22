const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

const book = getBook(2);
book;
//Deestructuring Objects and Arrays
const { title, author, genres } = book;
genres;
//Destructuring based on A Race meaning based on the indexing values
const [primary, secondary] = genres;
console.log(primary, secondary);
//Rest operator
const [a, b, ...others] = genres;
others;
//Spread Operator
const newGenres = ["mygenre", ...genres];
newGenres;
//Spread operator on an object
const newBook = { movieDate: "20-04-2001", ...book };

//If we want to change the value of any property then the original object must be specified before the updated value of the property otherwise the
//new vaue gets overrriden by the original one and the end result stays the same.
const publicationDate = book.publicationDate;
const pages = book.pages;

const newer = { publicationDate: "12-03-2008", ...book };
console.log(newer.publicationDate);
//Template Literals
//Values of ${title} and ${author} will get replaced by their actual values
const summary = `${title} was a book published by ${author}`;
summary;
//Ternary Operators(used in place of If Else)
/* there are three parts to a ternary operator 
part before ? is a condition. Part after the ? and before the : is the value if
the condition is true. Part after the : is the value to be returned if the condition
is False*/
const pagesRange = pages > 1000 ? "over a tousand" : "less than a thousand";
console.log(`The ${title} book has ${pagesRange} pages`);

//ARROW FUNCTIONS(Introduceds by E6 as way to write functions)
/*
Syntax: (set of arguments)=> (answer to be returned)
whatever is on the right side of the arrow is automatically returned and 
we do not need to explicitly write te return keyword inorder for our function 
to return someting.
Mainly used when you only have a one liner logic and don't need to use the return keyword
*/
const getYear = (str) => str.split("-")[0];
console.log(getYear(publicationDate));

//Short Circuiting With Some Logical Operators
/* In JS some && and || operator have a feature called SHort Circuiting.
It means that in some cased the operator will directly return the first value 
without even looking at the second value.
&&- This Operator short circuits when the first value is false and then will 
immediately return that value. This operator immediately return the second value if the first avlue 
if True and no short circuiting takes place in that case. It only works if the value of the first operator comes out to be False.*/
console.log(false && 3); //First value if False and gets returned
console.log("Jonas" && "margariti"); // First value is true hance immediately returns the second value

/* || OR operator: Short Circuits when the first operand is true and will then return it
 */
console.log(true || "Some");
console.log(false || "Something");
//?? Nullish Coaelising Operator
/* can be used in the cases to even shortcircuit the falsy values and get the currect output even in the cas*/

//Optional Chaining//
/* it is a concept that is used to prevent the error popping up in the console. Not a way to remove
or cure the error simply a way to stop the exection of further set of codes in case ther previous set of codes end up evaluating to undefined
Let's understand this by using an example*/

function getReviewsCount(book) {
  const goodReads = book.reviews.goodreads.reviewsCount;
  const librarything = book.reviews.librarything?.reviewsCount;
  /*In this above example of librarything if we did not have the question mark before .reviews Count and the code before that ened up being an undefined value then
  in the general case we would have gotten an undefined error but since we are using an optional chaining method here hence if the code3 beforethe ? ends up being an undefined value then
  the code afther that will not be executed. Hence we will get a NaN value. Which does not cure the problem, but atleadst doesd not agive an error tho*/

  /* here in this case we can also make the use of the Nullish Coalising operator in the sense
    const librarything=book.reviews.librarything?.reviewsCount ?? 0;
    here by using the ?? operator we have made the default value of the above variable toi be 0. Hence in case the value before ??
    ends up being a NaN value the default value will be set to 0 and we will gat a quantifiable value insted of an NaN*/
  return goodReads + librarything;
}
console.log(getReviewsCount(book));

// The Array Map Method//
/* The map method will loop through the entire array and return the original array with some modifications made
and along with some operations performed on that particular array*/
const x = [2, 4, 6, 8, 10].map((el) => el * 2); //The callback function in the map method takes every element in the x array and performs some operation on it and modifies the same array
console.log(x);

//Supposing that we want to create an arry with all the titles of the books.Let's try and make use of the map method over here
const book1 = getBooks();
const titles = book1.map((book1) => book.title); //Here we are not performing any mathematical operation instead we are simply making our book1 give out the title of all the books that are present in the book1 array using the callback function
console.log(titles);
/*let us consider another example where we only want to get the essential data for all the elements form the array*/
const essentials = book1.map((book) => {
  return {
    title: book.title,
    author: book.author,
  };
});
essentials;
//By using the map method we are getting the authors and titles of all the books that are present in the book1 array.

//Array Filter Method//
/* We can use the filter methid in the array to filter out some elements based off on certauin conditions.
Considering we wanna create a book that is having more than 500 pages*/
const longBooks = book1.filter((book) => book.pages > 500);
longBooks;
console.log(longBooks.length); //The filter Method ended up filtering the entire arry with nly choosing the books that have a size  greater than 500 pages and left with only an array of size
//The filter method also supports chaining whre we can use multile chains of filter method on the same array in order to get the desired output
const lg = book1
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation); //gives the result o all the books that have length greater than 500 and have a movie adaptation
//Let's use the filter method to get a list of the titles of all the adventurre books
const adventureBooks = book1
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => book.title);
//.includes() is a metho that returns a boolean value of True or False based on the condition whether the specified element id preesent in the object that it is being called upon
//We can also combine filter and map as both filter and map actualy retuan an array hence that array can be sued to perform functions upon
adventureBooks;
//hence in the end we are ending up with a list(array) of all the books that have genres of adventure and their resppective titles

//THE ARRAY REDUCE METHOD: reduces and boils down the entire array to one singular value
/*The reduce method is the most versatile and the most robust method in the whole of javascript.Infact all of the other methods are actually implementable using the reduce method
Lets see how the reduce method can be used to create mathematical operations.
Assumption: We want to read all of the books in the array and we want to know how many pages we willl ahve to read in reading all the books in the array
Solution: Add all of the pages properties of all of the array*/
//Syntax: reduce(callbackFUnction(), starterValue)
/*function()	Required.
              A function to be run for each element in the array.
  Reducer function parameters:
  total	      Required.
              The initialValue, or the previously returned value of the function.
  currentValue	Required.
                The value of the current element.
  currentIndex	Optional.
                The index of the current element.
  arr	          Optional.
                The array the current element belongs to.
  starterValue	Optional.
                A value to be passed to the function as the initial value.*/
const pagesAllBooks = book1.reduce((acc, book) => acc + book.pages, 0);
console.log(
  pagesAllBooks
); /* Let us try an see what is actually happenning here:
  here our call back function uses two parameters: acc(accumulator) and book
  where the accumulator is actually the initial value of what our fincla value is going 
  to be. And what we are doing here is stcking further values on top of the acc value in order to get the final value
  and the initial value of the acc is set to be 0 and further values of book.pages are added on top of the initial value of 0
  to get the final result as 32227. 
  Here we have set the starter value to be 0, but in other cases we can also use arrays, dictionaries etc. in prde to perform complex functions using reduce method.*/

//THE ARRAY SORT METHOD: sorts the array using a callback function taking 2 arguments
const arr = [3, 7, 2, 4, 2, 1];
const sorted = arr.slice().sort((a, b) => a - b); //Here we are using the slice() method to create a copy of the array becuse the
/*sort method actually manipulates the original array and while working with front end frame works we don't really want that 
happen hence we create a copy of that array and perform manipulations on that array.
the variables a-b are used in order to sort the array in an ascending manner
if we wanted to sort the array in a descending manner we can do b-a*/
sorted;
//But while working with frameworks we would not always get arrays of intergers, nut rather objects
const sortedPages = book1.slice().sort((a, b) => a.pages - b.pages); //Sorts the books in ascending order according to the number of pages the particular book has

//WORKING WITH IMMUTABLE ARRAYS
/* Again while working with frameworks it is an essential step to not change the underlying data structure
Hence we have to learn to add update and delete elements without manipulating the original array*/
const newone = {
  id: 6,
  title: "Harry Potter and The Cursed Child",
  author: "J.K. Rowling",
};
//Adding a new book at the end of our book1 array
const booksAfterAddition = [...book1, newone]; //Using the spread operator, we are adding the newone book at the end of the book1 array

//Deleting an element from the immutable array
const booksAfterDeletion = booksAfterAddition.filter((book) => book.id != 3); //it is basically obvious that we are going to use the filter method as it reduces the size of the array

//Updating book object in the array
const booksAfterUpdation = booksAfterDeletion.map((book) =>
  book.id == 1 ? { ...book, pages: 1 } : book
);
booksAfterUpdation;

//PROMISES: represent the eventual failure or comoletion of an asynchronous operation in javascript. It has two properties: state and result. While state is working result is pending and when promise is defined, result is a value.
/* Asynchronous Javascript: operations run independantly allowing other tasks to be executed 
and not wait for the previous ones to get completed before executing the further ones
*/
//the fetch keyword is used to fetch data from other APIs. And this process takes some time. And since javascript is an asynchronous language, it will not wait for the data to get fetched.
//Instead if we were to add some code before the data has been fetched, it will be executed by Javascript
//Hemce to convert this Asynchronous operation to synchronous operation we make use of the then keyword
//It makes the program to wait for the data to be fetched and the process to be completed before executing the other tasks.

//fetch("https://jsonplaceholder.typicode.com/todos/1")
//  .then((res) => res.json()) //this piece of code returns a json file which also takes some time in prrocessing again making it a n asynchronous operation. So we need to use Another then.
//  .then((data) => console.log(data)); //the todos that have been fetched from the API are printed

//ASYNC Functions in the AWAIT key word
/* these help in doing exactly what the above fetch and then keyword allow us to do but in a much nicer and cleaner way*/
async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await res.json();
  console.log(data);
}
getTodos();
/*
if we were to do
const value=getTodos()
console.log(value)
then we would get the type of value as a promise
because as javascript is an asynchronous language, it will immediately
move to the next line which is console.log(value) and not wait for the function to be executed. 
Hence giving us a failed result. Hence again making us use the then or some other mechanism in order to make it waait for the other outputs*/
