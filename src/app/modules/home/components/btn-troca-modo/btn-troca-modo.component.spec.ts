import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnTrocaModoComponent } from './btn-troca-modo.component';

describe('BtnTrocaModoComponent', () => {
  let component: BtnTrocaModoComponent;
  let fixture: ComponentFixture<BtnTrocaModoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BtnTrocaModoComponent]
    });
    fixture = TestBed.createComponent(BtnTrocaModoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
