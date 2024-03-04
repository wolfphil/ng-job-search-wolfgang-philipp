import {Component, inject, OnInit} from '@angular/core';
import {JobService} from "../job.service";
import {Job} from "../job";
import {CommonModule} from "@angular/common";


@Component({
    selector: 'app-job-list',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './job-list.component.html',
    styleUrl: 'job-list.component.css'
})
export class JobListComponent implements OnInit {

    jobService: JobService = inject(JobService);
    allJobs: Job[] = [];
    favoriteJobs: Job[] = [];
    displayedJobs: Job[] = [];
    isFavoriteTab:boolean = false;

    constructor() {}

    ngOnInit(): void {
        this.jobService.getJobs().subscribe(jobsList => {
            this.allJobs = jobsList
            this.displayedJobs = jobsList
        });
    }

    showAllJobs(): void {
        this.displayedJobs = this.allJobs;
        this.isFavoriteTab = false;
    }

    showFavoriteJobs(): void {
        this.displayedJobs = this.favoriteJobs;
        this.isFavoriteTab = true;
    }

    manageFavoriteJobs(job: Job): void {
        const index: number = this.favoriteJobs.indexOf(job, 0);
        if (index > -1) {
            this.favoriteJobs.splice(index, 1);
        }
        else {
            this.favoriteJobs.push(job);
        }
    }

}