import { Component, OnInit } from '@angular/core';
import { IMyDpOptions } from 'mydatepicker';
import { ModaldataService } from './../modaldata.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-computer',
  templateUrl: './computer-repair.component.html',
  styleUrls: ['./computer-repair.component.css']
})
export class ComputerComponent implements OnInit {
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
    { id: "1", title: "Display", url: "../assets/images/display.svg" },
    { id: "2", title: "Battery", url: "../assets/images/battery.svg" },
    { id: "3", title: "Software", url: "../assets/images/software.svg" },
    { id: "4", title: "Hardware", url: "../assets/images/harddisk.svg" },
    { id: "5", title: "Hard-Disc", url: "../assets/images/hard-disk.svg" },
    { id: "6", title: "Keyboard", url: "../assets/images/keyboard.svg" },
    { id: "7", title: "Speakers", url: "../assets/images/speaker.svg" },
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
