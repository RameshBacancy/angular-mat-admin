import { Routes } from '@angular/router';

import { UserComponent } from './userpage/user.component';
import { TimelineComponent } from './timeline/timeline.component';

export const PagesRoutes: Routes = [

    {
        path: '',
        children: [
            {
                path: '',
                loadChildren: './dashboard/dashboard.module#DashboardModule'
            },
            {
                path: 'user',
                component: UserComponent
            },
            {
                path: 'timeline',
                component: TimelineComponent
            },
        ]
    }
];
