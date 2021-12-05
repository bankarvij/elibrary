import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, RequiredValidator, Validators } from "@angular/forms";
import { BookService } from "src/app/services/book.service";

@Component({
    selector: 'elib-add-book-ui',
    templateUrl: './add-book.component.html',
    styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit, OnChanges {

    @Input()
    book: any = {};

    form: FormGroup;

    @Output()
    submitEmitter: EventEmitter<any> = new EventEmitter();

    constructor(private formBuilder: FormBuilder, private bookService: BookService) {}

    ngOnInit() {
        this.form = this.formBuilder.group({            
            title: [this.book?.title || '', Validators.required],
            author: [this.book?.author || '', Validators.required],
            slNo: [this.book?.slNo || '', [Validators.required, Validators.pattern(/^[0-9]\d*$/)]],
            assignedTo: [this.book?.assignedTo || '']            
        });
    }
    
    ngOnChanges() {
        if (this.form) {
            this.form.controls['title'].setValue(this.book?.title);
            this.form.controls['author'].setValue(this.book?.author);
            this.form.controls['slNo'].setValue(this.book?.slNo);
            this.form.controls['assignedTo'].setValue(this.book?.assignedTo);
        }
    }

    addBook() {        

        this.form.markAllAsTouched();

        console.log(this.form);

        if(this.form.valid) {
            let request: any;
            if (this.book?.id) {
                request  = {...this.form.value, id: this.book?.id};
            } else {
                request = this.form.value;
            }        
            this.bookService.addBook(request).subscribe(            
                () => {
                        const obj = {
                            title: this.getControlValue('title'),
                            author: this.getControlValue('author'),
                            slNo: this.getControlValue('slNo'),
                            assignedTo: this.getControlValue('assignedTo')
                        };
                        this.submitEmitter.emit(obj)
                        this.form.reset();
                }        
            );
        }
        
    }

    getControlValue(name: string) {
        return this.form.value[name];
    }

    get title() {
        return this.form.get('title');
    }

    get author() {
        return this.form.get('author');
    }

    get slNo() {
        return this.form.get('slNo');
    }

    get assignedTo() {
        return this.form.get('assignedTo');
    }

    validateUser() {
        if (this.assignedTo.value) {
            this.bookService.isAssignedToValid({assignedTo: this.assignedTo.value}).subscribe(res => {
                if (res) {
                    this.assignedTo.setErrors(null);                    
                } else {
                    this.assignedTo.setErrors({userDoesnotExist: true});
                }
            });
        }
    }
}