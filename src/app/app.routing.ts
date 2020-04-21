import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './pages/layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './pages/layouts/auth/auth-layout.component';

export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'pages/dashboard',
        pathMatch: 'full',
    },
    {
        path: '',
        component: AdminLayoutComponent,
        children: [
            {
                path: 'pages',
                loadChildren: './pages/pages.module#PagesModule'
            },
        ]
    },
    {
        path: '',
        loadChildren: './authentication/authentication.module#AuthenticationModule'
    },
    {
        path: '**',
        redirectTo: 'pages/dashboard',
    },
];
