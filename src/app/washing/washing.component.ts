import { Component, OnInit } from '@angular/core';
import { IMyDpOptions } from 'mydatepicker';
import { ModaldataService } from './../modaldata.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-washing',
  templateUrl: './washing.component.html',
  styleUrls: ['./washing.component.css']
})
export class WashingComponent implements OnInit {
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
    { id: "1", title: "Wash/Iron", url: "../assets/images/iron.svg" },
    { id: "2", title: "Dry Cleaning", url: "../assets/images/suit.svg" },
    { id: "3", title: "Blankets", url: "../assets/images/blanket.svg" },
    { id: "4", title: "Carpets", url: "../assets/images/carpet.svg" },
    { id: "5", title: "Curtains", url: "../assets/images/windows.svg" },
    { id: "6", title: "Furniture", url: "../assets/images/chair.svg" },
    { id: "7", title: "Leather Items", url: "../assets/images/leather-jacket.svg" },
    { id: "8", title: "Others", url: "../assets/images/silk.svg" }
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
