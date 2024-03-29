import {inject, Injectable, OnInit} from '@angular/core';
import {Job} from "./job";
import {JobService} from "./job.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class JobDataService {

    private favoriteJobs: Map<number, Job> = new Map<number, Job>();
    private favorite: boolean = false;

  private jobService: JobService = inject(JobService);


  constructor() { }

  getAllJobs(): Observable<Job[]> {
    return this.jobService.getJobs();
  }

  getJob(jobId: number): Observable<Job> {
    return this.jobService.getJob(jobId);
  }

  getFavoriteJobs(): Job[] {
    return Array.from(this.favoriteJobs.values());
  }

  manageFavoriteJobs(job: Job): void {
    const jobId: number = job.id;
    if (this.favoriteJobs.has(jobId)) {
      this.favoriteJobs.delete(jobId);
    }
    else {
      this.favoriteJobs.set(jobId, job);
    }
  }

    setFavorite(isFavorite: boolean): void {
        this.favorite = isFavorite;
    }

    isFavorite(): boolean {
        return this.favorite;
    }

}
