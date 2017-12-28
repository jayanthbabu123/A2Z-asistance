import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
@Injectable()
export class ModaldataService {
  public newData = new Subject();
  constructor() { }
  selectedData(data) {
    data.image = 'default-image';
    this.newData.next(data);
  }

}
