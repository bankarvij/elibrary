package hu.library.eLibrary.service;

import java.util.List;

import hu.library.eLibrary.model.Book;

public interface BookService {

	void assignBook(String bookId, String userID);
	
	List<Book> fetchAssignedBooks(String assignedTo);
	
	List<Book> fetchReservedBooks(String reservedBy);
	
	void releaseBook(Long bookId);
	
	List<Book> searchBooks(String search);
	
	void reserveBook(Long id, String userId);
	
	void deleteBook(Long id);
	
	void addBook(Book book);
	
	void updateBook(Book book);
	
	List<Book> fetchBooks();
}
