import { Routes } from '@angular/router';
import { Contact } from './contact/contact';
import { About } from './about/about';

export const routes: Routes = [
    {
        path: 'contact',
        component: Contact
    },
    {
        path: 'aboutUs',
        component: About
    }

];
