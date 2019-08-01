class Library {
  constructor() {
    this.books = [];
    this.member = [];
    this.dailyFine = 0.1;
  }

  addBook(book) {
    this.books.push(book);
  }

  addMember(member) {
    this.member.push(member);
  }

  chargeFines() {
    const now = new Date();

    const latePatrons = this.patrons.filter(
      patron => patron.currentBook !== null && patron.currentBook.dueDate < now
    );

    for (let patron of latePatrons) {
      const dateDiff = new Date(now - patron.currentBook.dueDate);
      const daysLate = dateDiff.getDate();
      patron.balance += this.dailyFine * daysLate;
    }
  }
}
