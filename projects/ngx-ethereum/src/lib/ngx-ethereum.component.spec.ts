import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxEthereumComponent } from './ngx-ethereum.component';

describe('NgxEthereumComponent', () => {
  let component: NgxEthereumComponent;
  let fixture: ComponentFixture<NgxEthereumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxEthereumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxEthereumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
