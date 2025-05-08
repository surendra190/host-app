import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { HomeComponent } from './home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'mfe1',
    loadComponent: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'https://mfe1-azure.vercel.app/remoteEntry.js',
        exposedModule: './Component',
      }).then((m) => m.Mfe1Component),
  },
  {
    path: 'mfe2',
    loadComponent: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'https://mfe2-delta.vercel.app/remoteEntry.js',
        exposedModule: './Component',
      }).then((m) => m.Mfe2Component),
  },
];
