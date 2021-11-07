import { Component, Input, OnChanges, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
    selector: 'elib-add-book-ui',
    templateUrl: './add-book.component.html',
    styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit, OnChanges {

    @Input()
    book: any = {};

    form: FormGroup;

    constructor(private formBuilder: FormBuilder) {}

    ngOnInit() {
        this.form = this.formBuilder.group({
            title: [this.book.title || ''],
            author: [this.book.author || ''],
            serialNumber: [this.book.serialNumber || ''],
            assignedTo: [this.book?.serialNumber || ''],
        });
    }
    
    ngOnChanges() {
        if (this.form) {
            this.form.controls['title'].setValue(this.book?.title);
            this.form.controls['author'].setValue(this.book?.author);
            this.form.controls['serialNumber'].setValue(this.book?.serialNumber);
            this.form.controls['assignedTo'].setValue(this.book?.assignedTo);
        }
    }
}