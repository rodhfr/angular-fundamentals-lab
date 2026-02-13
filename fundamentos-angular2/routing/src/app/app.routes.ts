import { Routes } from '@angular/router';
import { About } from './components/about/about';
import { HomepageComponent } from './components/homepage-component/homepage-component';


export const routes: Routes = [
    { path: 'about', component: About},
    { path: 'home', component: HomepageComponent},
    { path: '', redirectTo: 'home', pathMatch: 'full' },
];
