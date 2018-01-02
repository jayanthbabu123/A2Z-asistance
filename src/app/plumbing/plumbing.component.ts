import { Component, OnInit } from '@angular/core';
import { IMyDpOptions } from 'mydatepicker';
import { ModaldataService } from './../modaldata.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-plumbing',
  templateUrl: './plumbing.component.html',
  styleUrls: ['./plumbing.component.css']
})
export class PlumbingComponent implements OnInit {
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
    { id: "1", title: "Piping", url: "../assets/images/piping.svg" },
    { id: "2", title: "Bathroom Fittings", url: "../assets/images/shower.svg" },
    { id: "3", title: "Kitchen Fitting", url: "../assets/images/cutlery.svg" },
    { id: "4", title: "Minor Repair", url: "../assets/images/toolbox.svg" },
    { id: "5", title: "Taps", url: "../assets/images/tap.svg" },
    { id: "6", title: "Others", url: "../assets/images/repairing.svg" }
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