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
            {
                path: 'menu',
                loadChildren: './pages/menu/menu.module#MenuModule'
            },
        ]
    },
    {
        path: 'login',
        loadChildren: './authentication/login/login.module#LoginModule'
    },
    {
        path: 'registration',
        loadChildren: './authentication/registration/registration.module#RegistrationModule'
    },
    {
        path: '**',
        redirectTo: 'pages/dashboard',
    },
];
