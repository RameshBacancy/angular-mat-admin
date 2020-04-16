import { Routes } from '@angular/router';
import { RegisterComponent } from './register.component';

export const registerRoutes: Routes = [
    {
        path: '',
        children: [ {
          path: '',
          component: RegisterComponent
      }]
  }
];
