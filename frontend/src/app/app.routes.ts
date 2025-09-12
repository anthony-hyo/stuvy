import {Routes} from '@angular/router';
import {authGuard} from "./core/guards/auth-guard";
import {MainLayout} from "./layouts/main-layout/main-layout";
import {AuthLayout} from "./layouts/auth-layout/auth-layout";

export const routes: Routes = [

    {
        path: '',
        component: AuthLayout,
        children: [
            {
                path: '',
                loadChildren: () => import('./features/auth/auth-module').then(m => m.AuthModule)
            }
        ]
    },

    {
        path: 'app',
        component: MainLayout,
        canActivate: [authGuard],
        children: [
            {
                path: 'dashboard',
                loadChildren: () => import('./features/dashboard/dashboard-module').then(m => m.DashboardModule)
            },
            {
                path: 'materials',
                loadChildren: () => import('./features/materials/materials-module').then(m => m.MaterialsModule)
            },
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            }
        ]
    },

    {
        path: '**',
        redirectTo: ''
    }
];
