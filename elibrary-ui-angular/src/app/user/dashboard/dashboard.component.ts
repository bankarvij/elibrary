import { Component, EventEmitter, Inject, OnInit, Output } from "@angular/core";
import { NgbModal, NgbModalRef } from "@ng-bootstrap/ng-bootstrap";
import { BookService } from "src/app/services/book.service";
import {  UserSearchModalComponent } from "../search-modal/user-search-modal.component";

@Component({
    selector: 'elib-user-dashboard-ui',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {

    books = [
        {id: 1, title: 'The Beginners Bible: Timeless Childrens Stories', author: 'Zondervan'},
        {id: 2, title: 'Waiting for Baby', author: 'X-Men -1'},
        {id: 3, title: 'Third book', author: 'X-Men -2'},
    ];

    assignedBooks: any = [];

    reservedBooks: any = [];

    modalRef: NgbModalRef;

    @Output()
    searchEmit: EventEmitter<string> = new EventEmitter();

    @Output()
    reserveEmit: EventEmitter<any> = new EventEmitter();

    constructor(private bookService: BookService, @Inject(NgbModal) private ngbModal) {

    }

    ngOnInit() {
        this.bookService.fetchAssignedBooks('user1234').subscribe(res => {
            this.assignedBooks = res;
        });
        this.bookService.fetchReservedBooks('user1234').subscribe(res => {
            this.reservedBooks = res;
        });        
    }

    openModal () {
        const config = {  
            size: 'lg',          
            backdrop: 'static',
            keyboard: false,
            windowClass: 'custom-class'
        } ;
        this.modalRef = this.ngbModal.open(UserSearchModalComponent, config);
        this.modalRef.componentInstance.isSearch = true;

        this.modalRef.componentInstance.emitSearch.subscribe(value => {
            console.log(value);
            this.bookService.searchBooks(value).subscribe(res => {
                this.modalRef.componentInstance.searchResults = res;
            });
        });
        this.modalRef.componentInstance.reserveEmit.subscribe(value => {
            this.bookService.reserveBook(value.id, 'user1234').subscribe(() => {
                this.reservedBooks.push(value);
            });
        });        
    }

    release(book: any) {
        this.bookService.releaseBook(book.id).subscribe(() => {
            this.reservedBooks = this.reservedBooks.filter(res => res.id !== book.id);
        });
    }
}