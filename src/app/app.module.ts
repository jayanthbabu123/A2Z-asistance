import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { GooglePlaceModule } from 'ng2-google-place-autocomplete';
import { MyDatePickerModule } from 'mydatepicker';
import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { TruncatePipe } from './truncate.pipe';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ElectricalComponent } from './electrical/electrical.component';
import { PlumbingComponent } from './plumbing/plumbing.component';
import { HomeCleaningComponent } from './home-cleaning/home-cleaning.component';
import { MarriagesComponent } from './marriages/marriages.component';
import { BreadcrumbComponent } from './common/breadcrumb/breadcrumb.component';
import { WashingComponent } from './washing/washing.component';
import { ComputerComponent } from './computer-repair/computer-repair.component';


// services
import { ModaldataService } from './modaldata.service';
import { AboutComponent } from './about/about.component';
import { CommonHeaderComponent } from './common/common-header/common-header.component';


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
    MarriagesComponent,
    BreadcrumbComponent,
    AboutComponent,
    WashingComponent,
    ComputerComponent,
    CommonHeaderComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    GooglePlaceModule,
    MyDatePickerModule,
    ToastModule.forRoot()
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    ModaldataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
