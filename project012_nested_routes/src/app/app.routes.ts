import { Routes } from '@angular/router';
import { Italy } from './europa/italy/italy';
import { France } from './europa/france/france';
import { Espana } from './europa/espana/espana';
import { Europa } from './europa/europa';
import { Uruguay } from './america/uruguay/uruguay';
import { Argentina } from './america/argentina/argentina';
import { Chile } from './america/chile/chile';
import { America } from './america/america';

export const routes: Routes = [
  {
    path: 'america',
    component: America,
    children: [
      {
        path: 'chile',
        component: Chile
      },
      {
        path: 'argentina',
        component: Argentina
      },
      {
        path: 'uruguay',
        component: Uruguay
      }
    ]
  },
  {
    path: 'europe',
    component: Europa,
    children: [
      {
        path: 'spain',
        component: Espana
      },
      {
        path: 'france',
        component: France
      },
      {
        path: 'italy',
        component: Italy
      }
    ]
  }
];
