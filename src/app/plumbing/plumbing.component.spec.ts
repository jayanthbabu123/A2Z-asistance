import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlumbingComponent } from './plumbing.component';

describe('PlumbingComponent', () => {
  let component: PlumbingComponent;
  let fixture: ComponentFixture<PlumbingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlumbingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlumbingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
