package hu.library.eLibrary.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import hu.library.eLibrary.model.Book;
import hu.library.eLibrary.model.User;
import hu.library.eLibrary.service.BookService;

@CrossOrigin
@RestController
@RequestMapping("/library/user")
public class BookController {

	@Autowired
	private BookService bookService;
	
	@PostMapping("/books/assigned")
	public List<Book> fetchBooksAssigned(@RequestBody User user) {
		return bookService.fetchAssignedBooks(user.getUserName());
	}
	
	@PostMapping("/books/reserved")
	public List<Book> fetchBooksReserved(@RequestBody User user) {
		return bookService.fetchReservedBooks(user.getUserName());
	}
	
	@PostMapping("/books/release")
	public void releaseBook(@RequestBody Book book) {
		bookService.releaseBook(book.getId());
	}
	
	@PostMapping("/books/search")
	public List<Book> searchBooks(@RequestBody Book book) {
		return bookService.searchBooks(book.getSearch());
	}
	
	@PostMapping("/books/reserve")
	public void reserveBook(@RequestBody Book book) {
		 bookService.reserveBook(book.getId(), book.getReservedBy());
	}
	
	@PostMapping("/books/delete")
	public void deleteBook(@RequestBody Book book) {
		 bookService.deleteBook(book.getId());
	}
	
	@PostMapping("/books/add")
	public void addBook(@RequestBody Book book) {
		 bookService.addBook(book);
	}
	
	@PostMapping("/books/update")
	public void updateBook(@RequestBody Book book) {
		 bookService.updateBook(book);
	}
	
	@GetMapping("/books/get")
	public List<Book> fetchBooks() {
		return bookService.fetchBooks();
	}
	
	@PostMapping("/book/assignedTo")
	public Boolean isValidUser(@RequestBody Book book) {
		return this.bookService.isValidUserId(book.getAssignedTo());
	}
}
