import { Component, EventEmitter, Inject, Input, OnChanges, OnInit, Output } from "@angular/core";
import { NgbModal, NgbModalRef } from "@ng-bootstrap/ng-bootstrap";
import { BookService } from "src/app/services/book.service";
import { SearchModalComponent } from "../search-modal/search-modal.component";

@Component({
    selector: 'elib-dashboard-ui',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
    
})
export class DashboardComponent implements OnInit, OnChanges {

    books: any = []

    selectedBook: any;

    toggle: boolean;

    @Input() 
    searchResults: any = [];

    @Output()
    searchEmit: EventEmitter<string> = new EventEmitter();

    @Output()
    updateEmit: EventEmitter<number> = new EventEmitter();

    @Output()
    deleteEmit: EventEmitter<number> = new EventEmitter();

    modalRef: NgbModalRef;

    constructor(@Inject(NgbModal) private ngbModal, private bookService: BookService) {}

    ngOnInit() {
        this.bookService.fetchBooks().subscribe(res => this.books = res);
    }

    ngOnChanges() {
        if (this.modalRef) {
            this.modalRef.componentInstance.searchResults = this.searchResults;
        }
    }

    openModal() {
        const config = {  
            size: 'lg',          
            backdrop: 'static',
            keyboard: false,
            windowClass: 'custom-class'
        } ;
        this.modalRef = this.ngbModal.open(SearchModalComponent, config);
        this.modalRef.componentInstance.emitSearch.subscribe(value => {
            this.bookService.searchBooks(value).subscribe(res => {
                this.modalRef.componentInstance.searchResults = res;
            })
        });
        this.modalRef.componentInstance.updateEmit.subscribe(value => {
            this.update(value);
        });
        this.modalRef.componentInstance.deleteEmit.subscribe(value => {
            this.delete(value);
        });
    }

    update(index: number) {
        this.toggle = true;
        this.selectedBook = this.books[index];        
    }

    delete(book: any) {
        if (book.assignedTo) {
            window.alert("Cannot delete as this book is allocated to " + book.assignedTo);
            return;
        }
        this.bookService.deleteBook(book.id).subscribe(() => {
            this.bookService.fetchBooks().subscribe(res => {
                this.books = res;
                this.toggle = false;          
            });
        });
    }

    add() {
        this.toggle = true;
        this.selectedBook = null;
    }

    updateList(book: any) {
        this.bookService.fetchBooks().subscribe(res => {
            this.books = res;
            this.toggle = false;
        });
    }
}