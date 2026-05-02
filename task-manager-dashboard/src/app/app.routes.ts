import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { TaskForm } from './pages/task-form/task-form';
import { TaskDetailComponent } from './pages/task-detail/task-detail';
import { Tasks } from './pages/tasks/tasks';



export const routes: Routes = [
  { path: '', component: Home },
  { path: 'tasks', component: Tasks },

  // ⚠️ SIEMPRE primero las rutas específicas
  { path: 'tasks/new', component: TaskForm },
  { path: 'tasks/:id/edit', component: TaskForm },

  // ⚠️ DESPUÉS las dinámicas
  { path: 'tasks/:id', component: TaskDetailComponent },

  { path: '**', redirectTo: '' }
];
