class Member {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.currentBook = null;
    this.balance = 0;
  }

  checkOut(book) {
    this.currentBook = book;
    book.out = true;
    book.member = this;
  }

  returnBook(book) {
    this.currentBook = null;
    book.out = false;
    book.member = null;
  }
}
