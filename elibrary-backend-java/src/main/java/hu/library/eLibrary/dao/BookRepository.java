package hu.library.eLibrary.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import hu.library.eLibrary.model.Book;

public interface BookRepository extends JpaRepository<Book, Long>{
	
	@Query("update Book b set b.assignedTo = :userId where b.id = :bookId")
	void assignBook(String bookId, String userId);
		
	List<Book> findByReservedBy(String reservedBy);
	
	List<Book> findByAssignedTo(String assignedTo);
	
	@Modifying
	@Query("update Book b set b.reservedBy = '' where b.id = :bookId")
	void releaseBook(@Param("bookId") Long id);
	
	@Query("select b from Book b where b.title like %:search% or b.author like %:search%")
	List<Book> searchBooks(String search);
	
	@Modifying
	@Query("update Book b set b.reservedBy = :userId where b.id = :bookId")
	void reserveBook(Long bookId, String userId);
	
	@Modifying
	@Query("delete Book b where b.id = :bookId")
	void deleteBook(Long bookId);
}
