import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './app.routes'
import { AppComponent } from './app.component';
import {ModalComponent} from './modal/modal.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {HeaderComponent} from './header/header.component';
import { TruncatePipe } from './truncate.pipe';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ElectricalComponent } from './electrical/electrical.component';
import { PlumbingComponent } from './plumbing/plumbing.component';
import { HomeCleaningComponent } from './home-cleaning/home-cleaning.component';
import { MarriagesComponent } from './marriages/marriages.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ModalComponent,
    DashboardComponent,
    HeaderComponent,
    TruncatePipe,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    ElectricalComponent,
    PlumbingComponent,
    HomeCleaningComponent,
    MarriagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
