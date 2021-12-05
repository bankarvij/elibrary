import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class BookService {

    constructor(private http: HttpClient) {
    }

    fetchAssignedBooks(userName: string) {
        return this.http.post(environment.url + '/user/books/assigned', {userName: userName});
    }

    fetchReservedBooks(userName: string) {
        return this.http.post(environment.url + '/user/books/reserved', {userName: userName});
    }

    releaseBook(id: number) {
        return this.http.post(environment.url + '/user/books/release', {id: id});
    }

    searchBooks(search: any) {
        return this.http.post(environment.url + '/user/books/search', search);
    }

    reserveBook(bookId: number, userId: string) {
        return this.http.post(environment.url + '/user/books/reserve', {id: bookId, reservedBy: userId});
    }

    deleteBook(id: number) {
        return this.http.post(environment.url + '/user/books/delete', {id: id });
    }

    addBook(request: any) {
        return this.http.post(environment.url + '/user/books/add', request);
    }

    fetchBooks() {
        return this.http.get(environment.url + '/user/books/get');
    }

    isAssignedToValid(request: any) {
        return this.http.post(environment.url + '/user/book/assignedTo', request);
    }
}
