import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MitterCardComponent } from './mitter-card.component';

describe('MitterCardComponent', () => {
  let component: MitterCardComponent;
  let fixture: ComponentFixture<MitterCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MitterCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MitterCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
