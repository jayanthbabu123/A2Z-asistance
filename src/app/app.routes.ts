import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
import { AboutComponent } from './about/about.component';
import { WashingComponent } from './washing/washing.component';
import { ComputerComponent } from './computer-repair/computer-repair.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'signup',
        component: SignupComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'electrical',
        component: ElectricalComponent,
        data: {
            breadcrumb: "Electrical"
        }
    },
    {
        path: 'plumbing',
        component: PlumbingComponent,
        data: {
            breadcrumb: "Plumbing"
        }
    },
    {
        path: 'home-cleaning',
        component: HomeCleaningComponent,
        data: {
            breadcrumb: "Home cleaning"
        }
    },
    {
        path: 'marriages',
        component: MarriagesComponent,
        data: {
            breadcrumb: "Marriages"
        }
    },
    {
        path: 'washing',
        component: WashingComponent,
        data: {
            breadcrumb: "Washing"
        }
    },
    {
        path: 'computer-repair',
        component: ComputerComponent,
        data: {
            breadcrumb: "Computer Repair"
        }
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule {

}