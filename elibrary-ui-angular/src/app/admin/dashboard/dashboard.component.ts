import { Component, EventEmitter, Inject, Input, OnChanges, Output } from "@angular/core";
import { NgbModal, NgbModalRef } from "@ng-bootstrap/ng-bootstrap";
import { BookService } from "src/app/services/book.service";
import { SearchModalComponent } from "../search-modal/search-modal.component";

@Component({
    selector: 'elib-dashboard-ui',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
    
})
export class DashboardComponent implements OnChanges {

    books = [
        {id: 1, title: 'The Beginners Bible: Timeless Childrens Stories', author: 'Zondervan'},
        {id: 2, title: 'Waiting for Baby', author: 'X-Men -1'},
        {id: 3, title: 'Third book', author: 'X-Men -2'},
    ]

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
            this.updateEmit.emit(value);
        });
        this.modalRef.componentInstance.deleteEmit.subscribe(value => {
            this.bookService.deleteBook(value.id);
        });
    }

    update(index: number) {
        this.updateEmit.emit(index);
    }

    delete(index: number) {
        this.deleteEmit.emit(index);
    }

    add() {
        this.updateEmit.emit(-1);
    }
}