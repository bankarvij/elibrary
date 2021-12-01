package hu.library.eLibrary.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import hu.library.eLibrary.dao.BookRepository;
import hu.library.eLibrary.model.Book;
import hu.library.eLibrary.service.BookService;

@Service
public class BookServiceImpl implements BookService {
	
	@Autowired
	private BookRepository bookRepository;

	@Override
	public void assignBook(String bookId, String userID) {
		
		
	}

	@Override
	public List<Book> fetchAssignedBooks(String assignedTo) {
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
	public void deleteBook(Long id) {
		this.bookRepository.deleteBook(id);;
		
	}
	
}