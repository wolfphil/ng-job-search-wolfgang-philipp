import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {CommonModule} from "@angular/common";
import {TabMenuComponent} from "./tab-menu/tab-menu.component";


@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        CommonModule,
        TabMenuComponent,
        RouterLink,
        RouterLinkActive,
        RouterOutlet
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})

export class AppComponent {
    title = 'ng-job-search';
}
