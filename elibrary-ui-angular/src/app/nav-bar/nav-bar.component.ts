import { Component, Inject } from "@angular/core";
import { Router } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { HelpComponent } from "../help/help.component";

@Component({
    selector: 'nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

    constructor(@Inject(NgbModal) private ngbModal, private router: Router) {}

    openModal() {
        const config = {  
            size: 'lg',          
            backdrop: 'static',
            keyboard: false
        };

        this.ngbModal.open(HelpComponent, config);
    }

    logout() {
        localStorage.clear();
        this.router.navigateByUrl('');
    }

}