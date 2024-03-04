import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {JobListComponent} from "./job-list/job-list.component";
import {HttpClientModule} from "@angular/common/http";


@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        JobListComponent,
        RouterOutlet
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})

export class AppComponent {
    title = 'ng-job-search';
}
