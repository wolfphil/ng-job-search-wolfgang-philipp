import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Job} from "./job";
import {catchError, Observable, throwError} from "rxjs";


@Injectable({
    providedIn: 'root',
})
export class JobService {

    private static readonly CONTEXT_PATH_ALL_JOBS: string = "/jobs";


    constructor(private httpClient: HttpClient) {
    }

    getJobs(): Observable<Job[]> {
        return this.httpClient.get<Job[]>(JobService.CONTEXT_PATH_ALL_JOBS).pipe(catchError(this.handleError));
    }

    getJob(jobId: number): Observable<Job> {
        return this.httpClient.get<Job>(JobService.CONTEXT_PATH_ALL_JOBS + "/" + jobId).pipe(catchError(this.handleError));
    }

    private handleError(error: HttpErrorResponse) {
        if (error.status === 0) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong.
            console.error(
                `Backend returned code ${error.status}, body was: `, error.error);
        }
        // Return an observable with a user-facing error message.
        return throwError(() => new Error('Something bad happened; please try again later.'));
    }

}
