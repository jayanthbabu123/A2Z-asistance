import { Component, OnInit,ViewChild, ElementRef, DoCheck } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, Params, PRIMARY_OUTLET } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, DoCheck {

  constructor(
    private activatedRoute: ActivatedRoute,
    public router: Router
  ) { }
  @ViewChild('signup')signup:ElementRef;
  @ViewChild('login')login:ElementRef;

  ngOnInit() {
    setTimeout(()=>{
      if(this.router.url === '/login'){
        this.signup.nativeElement.style.display="block";
        this.login.nativeElement.style.display="none";
      } else if(this.router.url === '/signup'){
        this.signup.nativeElement.style.display="none";
        this.login.nativeElement.style.display="block";
      } else{
        this.signup.nativeElement.style.display="none";
      }
    })
  }
  ngDoCheck(){
    
  }

}
