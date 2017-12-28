import { Component, OnInit } from '@angular/core';
import { IMyDpOptions } from 'mydatepicker';
import { ModaldataService } from './../modaldata.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-electrical',
  templateUrl: './electrical.component.html',
  styleUrls: ['./electrical.component.css']
})
export class ElectricalComponent implements OnInit {
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
    { id: "1", title: "Wiring/Switching", url: "../assets/images/wiring.svg" },
    { id: "2", title: "TV", url: "../assets/images/television.svg" },
    { id: "3", title: "Refrigerator", url: "../assets/images/refrigerator.svg" },
    { id: "4", title: "Fan/Cooler", url: "../assets/images/cooler.svg" },
    { id: "5", title: "Air Conditioning", url: "../assets/images/air-conditioning.svg" },
    { id: "6", title: "Mixer/Iron", url: "../assets/images/blender.svg" },
    { id: "7", title: "Microwave oven/ Electric Pan", url: "../assets/images/microwave-oven.svg" },
    { id: "8", title: "Others", url: "../assets/images/music-player.svg" }
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
