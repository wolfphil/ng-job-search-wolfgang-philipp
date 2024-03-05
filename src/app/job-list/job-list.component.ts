import {
    Component,
    DoCheck,
    inject,
    OnInit
} from '@angular/core';
import {Job} from "../job";
import {CommonModule} from "@angular/common";
import {ActivatedRoute, RouterModule} from "@angular/router";
import {JobDataService} from "../job-data.service";


@Component({
    selector: 'app-job-list',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './job-list.component.html',
    styleUrl: 'job-list.component.css'
})
export class JobListComponent implements OnInit, DoCheck {

    private jobDataService: JobDataService = inject(JobDataService);
    private route: ActivatedRoute = inject(ActivatedRoute);

    favoriteJobIds: number[] = [];
    displayedJobs: Job[] = [];
    isFavoriteTab: boolean = false;


    constructor() {}

    ngOnInit(): void {
        this.route.queryParamMap.subscribe(paramMap => {
            const favoriteParameter = paramMap.get("favorites");
            if (favoriteParameter != null && favoriteParameter == 'true') {
                this.isFavoriteTab = true;
                this.displayedJobs = this.jobDataService.getFavoriteJobs();
                this.favoriteJobIds = this.displayedJobs.map(job => job.id);
            }
            else {
                this.isFavoriteTab = false;
                this.jobDataService.getAllJobs().subscribe(jobsList => {
                    this.displayedJobs = jobsList;
                });
            }
        });
    }

    manageFavoriteJobs(job: Job): void {
        this.jobDataService.manageFavoriteJobs(job);
    }

    ngDoCheck(): void {
        const favoriteJobs: Job[] = this.jobDataService.getFavoriteJobs();
        this.favoriteJobIds = favoriteJobs.map(job => job.id);
    }

}