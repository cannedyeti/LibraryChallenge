var library = function (library) {
	
	this.name = library;
	this.shelves = 0;
	this.books = {};
	

};

var shelf = function (shelfName, library) {
	library.shelves++;
	this.name = shelfName;
	this.books = {};
	this.totalBooks = 0;
	this.library = library;
	
	this.reportBooks = function () {
		console.log(this.name + " contains the following " + this.totalBooks +  " books: ");
        for (var bookName in this.books)
        console.log(bookName);
    };
};

var book = function (bookName) {
	this.name = bookName;

	this.enshelf = function (shelfName) {
		shelfName.books[bookName] = shelfName;
        this.shelfName = shelfName;
        shelfName.library.books[bookName] = shelfName.library;
		shelfName.totalBooks++;
	};
	
	this.unshelf = function (shelfName) {
		delete shelfName.books[bookName];
		delete shelfName.library.books[bookName];
		shelfName.totalBooks--;
	};
};

var	reportLibrary = function () {
		var allBooks = shelfA.totalBooks + shelfB.totalBooks + shelfC.totalBooks;
		console.log("The " + library.name + " Library contains the following " + allBooks + " books: ");

		console.log("Shelf A")
		for (var bookName in shelfA.books)
        console.log("        " + bookName);

    		console.log("Shelf B")
		for (var bookName in shelfB.books)
        console.log("        " + bookName);

    		console.log("Shelf C")
		for (var bookName in shelfC.books)
        console.log("        " + bookName);

	};

var library = new library ("Coolest");
var shelfA = new shelf("shelfA", library);
var shelfB = new shelf("shelfB", library);
var shelfC = new shelf("shelfC", library);
var book1 = new book("Woo");
var book2 = new book("Yay");
var book3 = new book("Yipee");
var book4 = new book("Hoorahh");
var book5 = new book("Kowabunga");
var book6 = new book("Jeronimo");




//report the number of shelves
console.log("Number of shelves in library: " + library.shelves);

//adding books to shelves
book1.enshelf(shelfA);
book2.enshelf(shelfA);
book3.enshelf(shelfA);
book3.unshelf(shelfA);
book3.enshelf(shelfC);
book4.enshelf(shelfC);

//report four books on shelf a
shelfA.reportBooks();

//report zero books on shelf b
shelfB.reportBooks();

//report two books on shelf c 
shelfC.reportBooks();

//add and remove more books
book5.enshelf(shelfB);
book6.enshelf(shelfB);
book1.unshelf(shelfA);

//reporting the books on each shelf in entire library
reportLibrary();