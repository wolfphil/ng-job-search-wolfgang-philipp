import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {JobListComponent} from "./job-list/job-list.component";
import {CommonModule} from "@angular/common";


@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        CommonModule,
        JobListComponent,
        RouterOutlet,
        RouterLink,
        RouterLinkActive
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})

export class AppComponent {
    title = 'ng-job-search';
}
