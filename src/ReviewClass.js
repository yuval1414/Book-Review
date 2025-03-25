
class BookReview {
    constructor() {
        this.bookName = '';
        this.bookNumberInSeries = '';
        this.author = '';
        this.genre = '';
        this.numberOfPages = '';
        this.user = '';
        this.numOfStars = 1;
        this.review = '';
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
    setUser(user){
        this.user = user;
    }
    setNumOfStars(numOfStars) {
        this.numOfStars = numOfStars;
    }
    setReview(review) {
        this.review = review;
    }
}

export default BookReview;
