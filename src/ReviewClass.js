
class BookReview {
    constructor() {
        this.numOfStars = 1;
        this.bookName = '';
        this.bookNumberInSeries = '';
        this.author = '';
        this.genre = '';
        this.numberOfPages = '';
        this.review = '';
    }

    setNumOfStars(numOfStars) {
        this.numOfStars = numOfStars;
    }

    setBookName(bookName) {
        this.bookName = bookName;
    }
    setBookNumberInSeries(bookNumberInSeries) {
        this.bookNumberInSeries = bookNumberInSeries;
    }
    setAuthor(author) {
        this.author = author;
    }
    setGenre(genre) {
        this.genre = genre;
    }
    setNumberOfPages(numberOfPages) {
        this.numberOfPages = numberOfPages;
    }
    setReview(review) {
        this.review = review;
    }
}

export default BookReview;
