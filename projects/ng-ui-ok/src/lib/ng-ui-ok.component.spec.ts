import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgUiOkComponent } from './ng-ui-ok.component';

describe('NgUiOkComponent', () => {
  let component: NgUiOkComponent;
  let fixture: ComponentFixture<NgUiOkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgUiOkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgUiOkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
