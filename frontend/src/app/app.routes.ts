import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LandingComponent } from './global/landing/landing.component';

export const routes: Routes = [
    {path: '', component: LandingComponent},
    {path: 'home', component: LandingComponent},
    {path: 'about', component:AboutComponent}
];
