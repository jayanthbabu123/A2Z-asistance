import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';

// components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ElectricalComponent } from './electrical/electrical.component';
import { PlumbingComponent } from './plumbing/plumbing.component';
import { HomeCleaningComponent } from './home-cleaning/home-cleaning.component';
import { MarriagesComponent } from './marriages/marriages.component';

export const routes:Routes=[
    {path: '', redirectTo: 'home',pathMatch: 'full' },
    {path:'home',component: HomeComponent},
    {path:'dashboard', component:DashboardComponent},
    {path:'login', component:LoginComponent},
    {path:'signup', component:SignupComponent},
    {path:'electrical', component:ElectricalComponent},
    {path:'plumbing', component:PlumbingComponent},
    {path:'home-cleaning', component:HomeCleaningComponent},
    {path:'marriages', component:MarriagesComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}