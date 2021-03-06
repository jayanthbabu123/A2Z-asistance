import { Component, OnInit } from '@angular/core';
import { IMyDpOptions } from 'mydatepicker';
import { ModaldataService } from './../modaldata.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home-cleaning',
  templateUrl: './home-cleaning.component.html',
  styleUrls: ['./home-cleaning.component.css']
})
export class HomeCleaningComponent implements OnInit {
  public selectedService: any;
  public address: any;
  public options: any;
  public street_number: any;
  public street: any;
  public city: any;
  public state: any;
  public district: any;
  public country: any;
  public postal_code: any;
  public lat: any;
  public lng: any;
  public adr_address: any;
  public name: any;
  public place_id: any;
  public types: any;
  public url: any;
  public utc_offset: any;
  public vicinity: any;
  public photos: any;
  public airport: any;
  public CountryCodes: any;
  public getAddress(event) {

  }
  public features = [
    { id: "1", title: "Complete Home Cleaning", url: "../assets/images/house.svg" },
    { id: "2", title: "Septic Tank", url: "../assets/images/tank-truck.svg" },
    { id: "3", title: "Kitchen cleaning", url: "../assets/images/sweeping-person.svg" },
    { id: "4", title: "Bathroom Cleaning", url: "../assets/images/soap.svg" },
    { id: "5", title: "House Keeping", url: "../assets/images/vacuum-cleaner.svg" },
    { id: "6", title: "Others", url: "../assets/images/music-player.svg" }
  ]
  public myDatePickerOptions: IMyDpOptions = {
    dateFormat: 'dd.mm.yyyy'
  }
  public model: any = { date: { year: 2018, month: 10, day: 9 } };
  constructor(public modalService: ModaldataService) {

  }
  ngOnInit() {
    this.modalService.newData.subscribe(data => {
      this.selectedService = data;
    })
  }

}
