import { Routes } from '@angular/router';
import { HomeComponent } from './features/homefolder/home/home.component';
import { SubhomeComponent } from './features/homefolder/subhome/subhome.component';
import { SubsubhomeComponent } from './features/homefolder/subsubhome/subsubhome.component';
import { LoginComponent } from './features/auth/components/login/login.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, title: 'home'}, 
    { path: 'home', component: HomeComponent, title: 'home'}, 
    { path: 'home/subhome', component: SubhomeComponent, title: 'Subhome'},
    { path: 'home/subhome/subsubhome', component: SubsubhomeComponent, title: 'SubSubhome'},
    { path: 'login', component: LoginComponent, title: 'Login' }, 
    { path: '**', redirectTo: '' } 
  ];

// export const routes: Routes = [
//     { path: '', component: HomeComponent, title: 'home' , children: [
//       { path: 'subhome', component: SubhomeComponent, title: 'Subhome' , children: [
//         { path: 'subsubhome', component: SubsubhomeComponent, title: 'SubSubhome' , children: [ 
//         ]},
//       ]},
//     ]}, 
    
//     { path: 'login', component: LoginComponent, title: 'Login' },
//     { path: 'InjectionTockenAndFirstComponent', component: FirstComponentComponent, title: 'InjectionTockenAndFirstComponent' },
//     { path: 'InjectionTockenAndSecondComponent', component: SecondComponentComponent, title: 'InjectionTockenAndSecondComponent' },
//     { path: '**', redirectTo: '' } 
//   ];
