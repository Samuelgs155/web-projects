import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Contact } from './contact/contact';
import { About } from './about/about';
import { Page404 } from './page404/page404';
import { Map } from './map/map';

export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'home',
        component: Home
    },
    {
        path: 'map',
        component: Map
    },
    {
        path: 'contact',
        component: Contact
    },
    {
        path: 'about',
        component: About
    },
    {
        path: 'page404',
        component: Page404
    },
    {
        path: '**',
        redirectTo: 'page404'
    }
];
