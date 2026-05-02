import { Routes } from '@angular/router';
import { NumberTable } from './number-table/number-table';

export const routes: Routes = [
    {
    path: "table/:nro",
    component: NumberTable
    }
];
