import {Component, inject, Input} from '@angular/core';
import {Job} from "../job";
import {JobDataService} from "../job-data.service";
import {CommonModule, Location} from "@angular/common";


@Component({
  selector: 'app-job-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.css'
})
export class JobDetailsComponent {

  job!: Job;

  private jobDataService: JobDataService = inject(JobDataService);
  private location: Location = inject(Location);


  constructor() {}

  @Input()
  set jobId(jobId: string) {
    this.jobDataService.getJob(parseInt(jobId)).subscribe(job => {
      this.job = job;
    });
  }

  onBackClicked(): void {
    this.location.back();
  }

}
