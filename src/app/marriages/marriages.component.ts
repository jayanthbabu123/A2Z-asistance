import { Component, OnInit } from '@angular/core';
import { IMyDpOptions } from 'mydatepicker';
import { ModaldataService } from './../modaldata.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-marriages',
  templateUrl: './marriages.component.html',
  styleUrls: ['./marriages.component.css']
})
export class MarriagesComponent implements OnInit {
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
    { id: "1", title: "Chef", url: "../assets/images/chef-cooking.svg" },
    { id: "2", title: "Food Catering", url: "../assets/images/delivering.svg" },
    { id: "3", title: "Buffet", url: "../assets/images/buffet.svg" },
    { id: "4", title: "Chairs/Tables", url: "../assets/images/table.svg" },
    { id: "5", title: "Lighting", url: "../assets/images/desk-lamp.svg" },
    { id: "6", title: "Video/Camera", url: "../assets/images/video-camera.svg" },
    { id: "7", title: "Wedding Invitation", url: "../assets/images/wedding-invitation.svg" },
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
