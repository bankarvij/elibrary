package hu.library.eLibrary.service.impl;

import java.sql.Date;
import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import hu.library.eLibrary.dao.BookRepository;
import hu.library.eLibrary.dao.LoginRepository;
import hu.library.eLibrary.model.Book;
import hu.library.eLibrary.service.BookService;

@Service
public class BookServiceImpl implements BookService {
	
	@Autowired
	private BookRepository bookRepository;
	
	@Autowired
	private LoginRepository loginRepository;

	@Override
	public void assignBook(String bookId, String userID) {
		
		
	}

	@Override
	public List<Book> fetchAssignedBooks(String assignedTo) {
		List<Book> books = bookRepository.findByAssignedTo(assignedTo);
		books.forEach(book -> {
			if (book.getAssignedDate() != null && book.getAssignedDate().trim().length() > 0) {
				LocalDate date = LocalDate.parse(book.getAssignedDate()).plusDays(7);
				book.setAssignedDate(date.toString());
			}
		});
		return bookRepository.findByAssignedTo(assignedTo);
	}

	@Override
	public List<Book> fetchReservedBooks(String reservedBy) {
		return bookRepository.findByReservedBy(reservedBy);
	}

	@Override
	@Transactional
	public void releaseBook(Long bookId) {
		bookRepository.releaseBook(bookId);
		
	}

	@Override
	public List<Book> searchBooks(String search) {
		return bookRepository.searchBooks(search);
	}

	@Override
	@Transactional
	public void reserveBook(Long id, String userId) {
		bookRepository.reserveBook(id, userId);
		
	}

	@Override
	@Transactional
	public void deleteBook(Long id) {
		this.bookRepository.deleteBook(id);;
		
	}

	@Override
	public void addBook(Book book) {
		book.setAssignedDate(LocalDate.now().toString());
		this.bookRepository.save(book);		
	}

	@Override
	public void updateBook(Book book) {		
		this.bookRepository.save(book);
		
	}

	@Override
	public List<Book> fetchBooks() {
		return this.bookRepository.findAll();
		
	}

	@Override
	public boolean isValidUserId(String userName) {
		return this.loginRepository.findByUserName(userName) != null;
	}
	
}
