import { Component, OnInit, ViewChild,ElementRef, DoCheck } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, Params, PRIMARY_OUTLET } from '@angular/router'
import "rxjs/add/operator/filter";
interface IBreadcrumb {
  label: string;
  params: Params;
  url: string;
}
@Component({
  selector: 'breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit, DoCheck {
  @ViewChild('breadcrumb') bread:ElementRef;
    public breadcrumbs: IBreadcrumb[];
    constructor(
      private activatedRoute: ActivatedRoute,
      public router: Router
    ) {
      this.breadcrumbs = [];
    }
    ngDoCheck(){
      setTimeout(()=>{
        if(this.router.url === '/home' || this.router.url === '/dashboard' || this.router.url === '/login'|| this.router.url === '/signup' || this.router.url === '/about'){
          this.bread.nativeElement.style.display="none";
        } else{
          this.bread.nativeElement.style.display="block"
        }
      })
    }
  
    ngOnInit() {
      const ROUTE_DATA_BREADCRUMB: string = "breadcrumb";
  
      //subscribe to the NavigationEnd event
      this.router.events.filter(event => event instanceof NavigationEnd).subscribe(event => {
        //set breadcrumbs
        let root: ActivatedRoute = this.activatedRoute.root;
        this.breadcrumbs = this.getBreadcrumbs(root);
      });
    }
  
    /**
     * Returns array of IBreadcrumb objects that represent the breadcrumb
     *
     * @class DetailComponent
     * @method getBreadcrumbs
     * @param {ActivateRoute} route
     * @param {string} url
     * @param {IBreadcrumb[]} breadcrumbs
     */
    private getBreadcrumbs(route: ActivatedRoute, url: string="", breadcrumbs: IBreadcrumb[]=[]): IBreadcrumb[] {
      const ROUTE_DATA_BREADCRUMB: string = "breadcrumb";
  
      //get the child routes
      let children: ActivatedRoute[] = route.children;
  
      //return if there are no more children
      if (children.length === 0) {
        return breadcrumbs;
      }
  
      //iterate over each children
      for (let child of children) {
        //verify primary route
        if (child.outlet !== PRIMARY_OUTLET) {
          continue;
        }
  
        //verify the custom data property "breadcrumb" is specified on the route
        if (!child.snapshot.data.hasOwnProperty(ROUTE_DATA_BREADCRUMB)) {
          return this.getBreadcrumbs(child, url, breadcrumbs);
        }
  
        //get the route's URL segment
        let routeURL: string = child.snapshot.url.map(segment => segment.path).join("/");
  
        //append route URL to URL
        url += `/${routeURL}`;
  
        //add breadcrumb
        let breadcrumb: IBreadcrumb = {
          label: child.snapshot.data[ROUTE_DATA_BREADCRUMB],
          params: child.snapshot.params,
          url: url
        };
        breadcrumbs.push(breadcrumb);
  
        //recursive
        return this.getBreadcrumbs(child, url, breadcrumbs);
      }
    }
  
  }