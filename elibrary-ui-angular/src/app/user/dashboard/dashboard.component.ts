import { Component } from "@angular/core";

@Component({
    selector: 'elib-user-dashboard-ui',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class UserDashboardComponent {

    books = [
        {id: 1, title: 'The Beginners Bible: Timeless Childrens Stories', author: 'Zondervan'},
        {id: 2, title: 'Waiting for Baby', author: 'X-Men -1'},
        {id: 3, title: 'Third book', author: 'X-Men -2'},
    ]

    openModal () {

    }

    release(index) {
        
    }
}