import { Routes } from '@angular/router';
import {JobListComponent} from "./job-list/job-list.component";
import {JobDetailsComponent} from "./job-details/job-details.component";


export const routes: Routes = [
    {
        path: 'jobs',
        component: JobListComponent
    },
    {
        path: 'job/:jobId',
        component: JobDetailsComponent
    },
    {
        path: '',
        component: JobListComponent
    },
    {
        path: '**',
        component: JobListComponent
    }
];
