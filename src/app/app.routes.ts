import { Routes } from '@angular/router';
import {JobListComponent} from "./job-list/job-list.component";
import {JobDetailsComponent} from "./job-details/job-details.component";


export const routes: Routes = [
    {
        path: 'jobs',
        title: 'Jobs',
        component: JobListComponent
    },
    {
        path: 'job/:jobId',
        title: 'Job details',
        component: JobDetailsComponent
    },
    {
        path: '',
        title: 'Jobs',
        component: JobListComponent
    },
    {
        path: '**',
        title: 'Jobs',
        component: JobListComponent
    }
];
