import { Routes, Route } from '@angular/router';

export const routes: Navigation[] = [
    {
        displayText: 'Dashboard',
        path: '',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
    },
    {
        displayText: 'Outlets',
        path: 'outlets',
        loadChildren: () => import('./outlets/outlets.module').then(m => m.OutletsModule),
    }
];

interface Navigation extends Route
{
    displayText: string;
}
