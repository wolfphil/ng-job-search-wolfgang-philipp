import {Component, DoCheck, inject} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterModule, RouterOutlet} from "@angular/router";
import {CommonModule} from "@angular/common";
import {JobDataService} from "../job-data.service";


@Component({
  selector: 'app-tab-menu',
  standalone: true,
  imports: [
      CommonModule,
      RouterLink,
      RouterLinkActive,
      RouterOutlet,
      RouterModule
  ],
  templateUrl: './tab-menu.component.html',
  styleUrl: './tab-menu.component.css'
})
export class TabMenuComponent implements DoCheck {

    isFavorite: boolean = false;

    private jobDataService: JobDataService = inject(JobDataService);


    constructor() {}

    ngDoCheck(): void {
        this.isFavorite = this.jobDataService.isFavorite();
    }



}
