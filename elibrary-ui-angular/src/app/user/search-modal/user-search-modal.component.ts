import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: 'elib-user-search-modal',
    templateUrl: './user-search-modal.component.html',
    styleUrls: ['./user-search-modal.component.scss']
})
export class UserSearchModalComponent implements OnInit {

    form: FormGroup;

    @Input()
    searchResults: any = [];

    @Output()
    emitSearch: EventEmitter<string> = new EventEmitter();

    @Output()
    reserveEmit: EventEmitter<any> = new EventEmitter();

    @Input()
    isSearch: boolean;


    constructor(private formBuilder: FormBuilder, private activeModal: NgbActiveModal) {}

    ngOnInit() {
        this.form = this.formBuilder.group({
            search: ['']
        });
    }

    search() {
        if (this.form.value['search'] !== '') {
            this.emitSearch.emit(this.form.value);
        }        
    }

    closeModal() {
        this.activeModal.close();
    }

    reserve(book: any) {
        this.reserveEmit.emit(book);
        this.closeModal();
    }

}