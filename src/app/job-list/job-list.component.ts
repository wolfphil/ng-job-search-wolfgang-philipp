import {Component, inject, OnInit} from '@angular/core';
import {JobService} from "../job.service";
import {Job} from "../job";
import {CommonModule} from "@angular/common";


@Component({
    selector: 'app-job-list',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './job-list.component.html',
    styleUrl: '../../../node_modules/mini.css/dist/mini-dark.min.css'
})
export class JobListComponent implements OnInit {

    jobService: JobService = inject(JobService);
    jobs: Job[] = [];


    constructor() {}

    ngOnInit(): void {
        this.jobService.getJobs().subscribe(jobsList => {
            console.log(jobsList);
            this.jobs = jobsList
        });
        console.log(this.jobs);
    }
}

