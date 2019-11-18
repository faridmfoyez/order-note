import { Routes, } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
        data: {
            navigationText: 'Home',
            showNavigation: true
        }
    },
    {
        path: 'products',
        loadChildren: () => import('./products/products.module').then(m => m.ProductsModule),
        data: {
            navigationText: 'Products',
            showNavigation: true
        }
    },
    {
        path: 'outlets',
        loadChildren: () => import('./outlets/outlets.module').then(m => m.OutletsModule),
        data: {
            navigationText: 'Outlets',
            showNavigation: true
        }
    }
];
