import { Component, Inject } from "@angular/core";
import { Router } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { UserSearchModalComponent } from "../user/search-modal/user-search-modal.component";

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
            keyboard: false,
            windowClass: 'custom-class'
        };
        
        const modalRef = this.ngbModal.open(UserSearchModalComponent, config);
        modalRef.componentInstance.isSearch = false;
    }

    logout() {
        localStorage.clear();
        this.router.navigateByUrl('');
    }

}