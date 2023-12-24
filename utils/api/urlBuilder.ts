/**
 * Get list of books.
 * @returns {string} - url.
 */
export function getBooks() {
    const baseUrl = process.env.BASE_URL;
    const bookStore = process.env.BOOK_STORE;
    return baseUrl+bookStore+"/Books";
}

export function getBook() {
    const baseUrl = process.env.BASE_URL;
    const bookStore = process.env.BOOK_STORE;
    return baseUrl+bookStore+"/Book";
}