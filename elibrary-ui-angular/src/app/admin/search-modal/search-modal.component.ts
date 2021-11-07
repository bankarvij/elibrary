import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: 'elib-search-modal',
    templateUrl: './search-modal.component.html',
    styleUrls: ['./search-modal.component.scss']
})
export class SearchModalComponent implements OnInit {

    form: FormGroup;

    @Input()
    searchResults: any = [];

    @Output()
    emitSearch: EventEmitter<string> = new EventEmitter();

    @Output()
    updateEmit: EventEmitter<number> = new EventEmitter();

    @Output()
    deleteEmit: EventEmitter<number> = new EventEmitter();

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

    update(index) {
        this.updateEmit.emit(index);
        this.closeModal();
    }

    delete(index) {
        this.deleteEmit.emit(index);
        this.closeModal();
    }

}