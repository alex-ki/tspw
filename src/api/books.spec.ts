import {expect, test} from '@playwright/test';
import { getBooks, getBook } from '../../utils/api/urlBuilder';

test.describe('Test Books Endpoint: ', () => {
    // build URL: baseUrl+path+apiVersion+...+endpoint
    const url = getBooks();

    test('validate getting all books', async ({ request }) =>{
        const response = await request.get(url)
        const body = await response.json();
        const books = body.books;

        expect(response.status()).toBe(200);
        expect(books.length).toEqual(8);
    })
})
test.describe('Test One Book Endpoint: ', () => {
    // build URL: baseUrl+path+apiVersion+...+endpoint
    const url = getBook();
    const data = {params: {ISBN:9781449325862}};

    test('validate getting book with ISBN:'+data.params.ISBN, async ({ request }) =>{
        const response = await request.get(url, data);
        const book = await response.json();

        expect(response.status()).toBe(200);
        expect(book.title).toEqual("Git Pocket Guide");
    })
})