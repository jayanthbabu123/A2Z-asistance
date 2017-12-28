import {Component} from '@angular/core';
import {ModaldataService} from './../modaldata.service';

@Component({
  selector: 'app-modal',
  template: `
  <div (click)="onContainerClicked($event)" class="modal fade" tabindex="-1" [ngClass]="{'in': visibleAnimate}"
       [ngStyle]="{'display': visible ? 'block' : 'none', 'opacity': visibleAnimate ? 1 : 0}">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <ng-content select=".app-modal-header"></ng-content>
        </div>
        <div class="modal-body p-t-none">
          <ng-content select=".app-modal-body"></ng-content>
        </div>
        <div class="modal-footer">
          <ng-content select=".app-modal-footer"></ng-content>
        </div>
      </div>
    </div>
  </div>
  `,
  styles: [`
    .modal {
      background: rgba(0,0,0,0.6);
      z-index:100;
    }
    @media (min-width: 768px){
      .modal-dialog {
        width: 700px;
        margin: 20px auto;
    }
    }
    .modal-header{
      border-radius: 5px;
      padding: 15px;
      color: white;
      background: #42a5f5;
      border-bottom: 1px solid #e5e5e5;
    }
  
  `]
})
export class ModalComponent {
  selectedValue:any;
  public visible = false;
  public visibleAnimate = false;

  constructor(public modalService:ModaldataService){

  }

  public show(value: any): void {
    this.selectedValue=value;
    console.log(value);
    this.modalService.selectedData(value);
    this.visible = true;
    setTimeout(() => this.visibleAnimate = true, 100);
  }

  public hide(): void {
    this.visibleAnimate = false;
    setTimeout(() => this.visible = false, 300);
  }

  public onContainerClicked(event: MouseEvent): void {
    if ((<HTMLElement>event.target).classList.contains('modal')) {
      this.hide();
    }
  }

}
