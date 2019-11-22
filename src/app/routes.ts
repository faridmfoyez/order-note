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
        loadChildren: () => import('./product-categories/product-categories.module').then(m => m.ProductCategoriesModule),
        data: {
            navigationText: 'Products',
            showNavigation: true
        }
    },
    {
        path: 'products/:category',
        loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
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
