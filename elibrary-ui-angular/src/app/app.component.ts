import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'elibrary-ui';

  searchResults: any = [];

  books = [
    {id: 1, title: 'First book', author: 'X-Men'},
    {id: 2, title: 'Second book', author: 'X-Men -1'},
    {id: 3, title: 'Third book', author: 'X-Men -2'},
  ]

  book: any = {};

  search(value) {
    const searchResults = [
      {id: 1, title: 'First book', author: 'X-Men'},
      {id: 2, title: 'Second book', author: 'X-Men -1'},
      {id: 3, title: 'Third book', author: 'X-Men -2'},
    ];        

    this.searchResults = searchResults      
      .filter(book => book.title.includes(value['search']) || book.author.includes(value['search']));
  }

  update(index: number) {
    this.book = {... this.books.find(book => book.id === index + 1)};
  }

  delete(index: number) {

  }
}
